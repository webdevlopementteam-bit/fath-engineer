"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ZoomableImage({
  src,
  index,
  onNext,
  onPrev,
  hasMultiple,
  onOpenModal,
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("center center");
  const touchStartXRef = useRef(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setZoomOrigin(`${x}% ${y}%`);
  };

  const toggleZoom = () => setIsZoomed((zoomed) => !zoomed);

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const now = Date.now();
    if (now - (event.currentTarget.lastTap || 0) < 300) {
      toggleZoom();
    }
    event.currentTarget.lastTap = now;

    // Swipe logic for mobile image change
    if (!isZoomed && hasMultiple) {
      const touchEndX = event.changedTouches[0].clientX;
      const diff = touchStartXRef.current - touchEndX;
      const minSwipeDistance = 50;

      if (diff > minSwipeDistance) {
        onNext(); // Swipe Left -> Next Image
      } else if (diff < -minSwipeDistance) {
        onPrev(); // Swipe Right -> Previous Image
      }
    }
  };

  return (
    <div className="relative h-[340px] w-full select-none overflow-hidden rounded-md border border-gray-200 bg-white p-6 sm:h-[420px]">
      <div
        onMouseEnter={() => setIsZoomed(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsZoomed(false)}
        onDoubleClick={toggleZoom}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative h-full w-full cursor-zoom-in"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: isZoomed ? 2.2 : 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: isZoomed ? 0.12 : 0.3 }}
            style={{ transformOrigin: zoomOrigin }}
            className="pointer-events-none relative h-full w-full"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow md:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow md:flex"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal();
        }}
        aria-label="View full image"
        className="absolute right-4 top-4 z-10 rounded-md border border-gray-100 bg-white/80 p-1.5 text-gray-500 shadow-sm transition hover:bg-white hover:text-gray-800"
      >
        <Maximize2 size={16} />
      </button>
    </div>
  );
}

export function ProductGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  if (!images.length) return null;

  const nextImage = () => {
    setSelectedImage((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    setSelectedImage(
      (current) => (current - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3.5">
        <ZoomableImage
          src={images[selectedImage]}
          index={selectedImage}
          onNext={nextImage}
          onPrev={previousImage}
          hasMultiple={images.length > 1}
          onOpenModal={() => setIsModalOpen(true)}
        />

        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-3">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={selectedImage === index}
                className={`relative aspect-square overflow-hidden rounded-md border bg-white p-1 transition ${
                  selectedImage === index
                    ? "border-red-700"
                    : "border-gray-200 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal / Fullscreen View */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-3 top-3 z-20 rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200"
              >
                <X size={20} />
              </button>
              <div className="relative h-[70vh] w-[70vw] min-w-[350px]">
                <Image
                  src={images[selectedImage]}
                  alt="Full view"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
