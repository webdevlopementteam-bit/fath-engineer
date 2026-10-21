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

    if (!isZoomed && hasMultiple) {
      const touchEndX = event.changedTouches[0].clientX;
      const diff = touchStartXRef.current - touchEndX;
      const minSwipeDistance = 50;

      if (diff > minSwipeDistance) {
        onNext();
      } else if (diff < -minSwipeDistance) {
        onPrev();
      }
    }
  };

  if (!src) return null;

  return (
    <div className="relative h-[380px] w-full select-none overflow-hidden rounded-xl border border-gray-200 bg-white p-6 sm:h-[460px]">
      <div
        onMouseEnter={() => setIsZoomed(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsZoomed(false)}
        onClick={onOpenModal}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative h-full w-full cursor-zoom-in"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: isZoomed ? 2.1 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isZoomed ? 0.12 : 0.25 }}
            style={{ transformOrigin: zoomOrigin }}
            className="pointer-events-none relative h-full w-full"
          >
            <Image
              src={src}
              alt={`Product preview ${index + 1}`}
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
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow-md transition hover:bg-white md:flex cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow-md transition hover:bg-white md:flex cursor-pointer"
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
        className="absolute right-4 top-4 z-10 rounded-md border border-gray-200 bg-white/80 p-2 text-gray-600 shadow-sm transition hover:bg-white hover:text-black cursor-pointer"
      >
        <Maximize2 size={16} />
      </button>
    </div>
  );
}

export function ProductGallery({ images = [] }) {
  const safeImages =
    Array.isArray(images) && images.length > 0
      ? images
      : ["/images/placeholder.webp"];
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

  const activeIndex = selectedImage < safeImages.length ? selectedImage : 0;

  const nextImage = () => {
    setSelectedImage((current) => (current + 1) % safeImages.length);
  };

  const previousImage = () => {
    setSelectedImage(
      (current) => (current - 1 + safeImages.length) % safeImages.length,
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3.5">
        <ZoomableImage
          src={safeImages[activeIndex]}
          index={activeIndex}
          onNext={nextImage}
          onPrev={previousImage}
          hasMultiple={safeImages.length > 1}
          onOpenModal={() => setIsModalOpen(true)}
        />

        {safeImages.length > 1 && (
          <div className="flex flex-wrap gap-2.5">
            {safeImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                aria-label={`Show image ${index + 1}`}
                className={`relative h-20 w-20 overflow-hidden rounded-md border bg-white p-1 transition cursor-pointer ${
                  activeIndex === index
                    ? "border-red-600 ring-2 ring-red-500/20"
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

      {/* Fullscreen Modal View */}
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
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-xl bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-3 top-3 z-20 rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                <X size={20} />
              </button>
              <div className="relative h-[70vh] w-[70vw] min-w-[320px]">
                <Image
                  src={safeImages[activeIndex]}
                  alt="Full view"
                  fill
                  sizes="100vw"
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
