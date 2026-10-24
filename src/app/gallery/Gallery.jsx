"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Breadcrumb from "@/components/Breadcrumb";

const exhibitions = [
  {
    year: 2026,
    event: "Plast India Exhibition",
    location: "Pragati Maidan, New Delhi",
    folder: "delhi",
    images: ["d1.png", "d2.png", "d3.png", "d4.png", "d5.png"],
  },
  {
    year: 2026,
    event: "Plast Show Exhibition",
    location: "Surat, Gujarat",
    folder: "gujarat",
    images: ["g1.png", "g2.png", "g3.png", "g4.png"],
  },
  {
    year: 2026,
    event: "Isge",
    location: "Jalandhar, Punjab",
    folder: "punjab",
    images: ["p1.png", "p2.png", "p3.png", "p4.png", "p5.png"],
  },
  {
    year: 2025,
    event: "Raj Plast",
    location: "Jaipur, Rajasthan",
    folder: "rajasthan",
    images: ["r1.png", "r2.png", "r3.png", "r4.png"],
  },
];

export default function ExhibitionsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const swiperRefs = useRef({});
  const [selectedImage, setSelectedImage] = useState(null);

  const setSwiperRef = (index, swiperInstance) => {
    swiperRefs.current[index] = swiperInstance;
  };

  const handlePrev = (index) => {
    swiperRefs.current[index]?.slidePrev();
  };

  const handleNext = (index) => {
    swiperRefs.current[index]?.slideNext();
  };

  // Close modal on Escape key press & lock body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  // Prevent server-client mismatch during SSR prerender
  if (!isMounted) {
    return (
      <>
        <Breadcrumb title="Gallery" />
        <div className="min-h-[60vh] bg-[#FFF9F5] flex items-center justify-center"></div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb title="Gallery" />
      <section className="py-12 md:py-20 px-2 sm:px-4 md:px-8 lg:px-16 bg-[#FFF9F5] w-full overflow-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[1700px] mx-auto text-center md:text-left mb-14 md:mb-20 border-b border-neutral-200/80 pb-8 md:pb-12 px-2 relative"
        >
          {/* Eyebrow / Tagline with Accent Line */}
          <div className="inline-flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="hidden md:inline-block w-10 h-[3px] bg-[#800020] rounded-full"></span>
            <p className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-[0.18em] text-neutral-800 uppercase">
              Showcasing Blow Moulding Excellence
            </p>
          </div>

          {/* Main Heading with Gradient & Emphasized Keywords */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl  font-serif font-bold text-neutral-900 tracking-tight leading-[1.15]">
            Our Participation in{" "}
            <span className="bg-gradient-to-r from-[#800020] via-[#a31538] to-[#5a0016] bg-clip-text text-transparent">
              National & International
            </span>{" "}
            <br className="hidden md:block" />
            Industrial Exhibitions
          </h2>

          {/* Decorative Bottom Accent */}
          <div className="mt-6 flex justify-center md:justify-start">
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#800020] to-transparent rounded-full" />
          </div>
        </motion.div>

        <div className="space-y-12 md:space-y-24 w-full max-w-[1700px] mx-auto">
          {exhibitions.map((item, index) => {
            const slidesPerViewCount = index === 0 || index === 2 ? 2 : 3;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col lg:flex-row items-center gap-6 md:gap-10 bg-white p-4 sm:p-6 md:p-12 rounded-2xl md:rounded-3xl border border-neutral-200/80 shadow-xl shadow-neutral-100/50 transition-all duration-500 hover:border-[#800020]/30 hover:shadow-2xl hover:shadow-neutral-200/80 w-full"
              >
                {/* Left Column: Year, Event Name & Location */}
                <div className="w-full lg:w-[25%] flex flex-col justify-center pb-2 lg:pb-0 lg:pr-6 z-10 px-2 sm:px-0">
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl md:text-8xl font-black text-[#800020] tracking-tighter">
                      {item.year}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#800020] inline-block"></span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mt-2 md:mt-4 leading-snug">
                    {item.event}
                  </h4>
                  <p className="text-neutral-600 font-medium text-base md:text-lg mt-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#800020] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {item.location}
                  </p>
                </div>

                {/* Right Column: Swiper Carousel */}
                <div className="w-full lg:w-[75%] relative px-0 lg:px-4">
                  <Swiper
                    onSwiper={(swiper) => setSwiperRef(index, swiper)}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                      640: {
                        slidesPerView: Math.min(2, slidesPerViewCount),
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: slidesPerViewCount,
                        spaceBetween: 20,
                      },
                    }}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    className="pb-2 md:pb-4"
                  >
                    {item.images.map((img, imgIdx) => {
                      const imgSrc = `/gallery/${item.folder}/${img}`;
                      return (
                        <SwiperSlide key={imgIdx} className="h-full">
                          <div
                            onClick={() =>
                              setSelectedImage({
                                src: imgSrc,
                                event: item.event,
                                location: item.location,
                                year: item.year,
                                index: imgIdx + 1,
                                total: item.images.length,
                              })
                            }
                            className="relative h-[210px] sm:h-[250px] md:h-[320px] w-full overflow-hidden rounded-xl md:rounded-2xl bg-neutral-100 shadow-md border border-neutral-200/60 group/image flex items-center justify-center cursor-pointer"
                          >
                            <Image
                              src={imgSrc}
                              alt={`${item.event} Image ${imgIdx + 1}`}
                              fill
                              sizes="(max-width: 768px) 98vw, (max-width: 1600px) 50vw, 35vw"
                              className="object-cover p-1.5 md:p-2 transform transition-transform duration-700 group-hover/image:scale-105"
                              priority={imgIdx < 2}
                            />
                            {/* Hover Overlay with Zoom Icon */}
                            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="bg-white/95 text-[#800020] p-3 rounded-full shadow-lg transform scale-75 group-hover/image:scale-100 transition-transform duration-300">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.2"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15zM10.5 7.5v6m3-3h-6"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>

                  {/* External Navigation Controls */}
                  <button
                    aria-label="Previous slide"
                    onClick={() => handlePrev(index)}
                    className="hidden lg:flex absolute -left-7 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white text-[#800020] items-center justify-center font-black text-2xl shadow-xl shadow-neutral-400/40 border border-neutral-100 transition-all duration-300 hover:bg-[#800020] hover:text-white hover:scale-110 cursor-pointer"
                  >
                    &#8592;
                  </button>
                  <button
                    aria-label="Next slide"
                    onClick={() => handleNext(index)}
                    className="hidden lg:flex absolute -right-7 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white text-[#800020] items-center justify-center font-black text-2xl shadow-xl shadow-neutral-400/40 border border-neutral-100 transition-all duration-300 hover:bg-[#800020] hover:text-white hover:scale-110 cursor-pointer"
                  >
                    &#8594;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Beautiful Image Modal Card (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-[#800020] text-neutral-800 hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Image Display */}
              <div className="relative w-full h-[55vh] sm:h-[65vh] bg-neutral-100 flex items-center justify-center p-4">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.event}
                  fill
                  sizes="95vw"
                  className="object-contain p-2 sm:p-6"
                  priority
                />
              </div>

              {/* Modal Card Footer Details */}
              <div className="p-5 sm:p-7 bg-white border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#800020]/10 text-[#800020]">
                      {selectedImage.year}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">
                      Photo {selectedImage.index} of {selectedImage.total}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-1.5">
                    {selectedImage.event}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-neutral-600 font-medium text-sm sm:text-base bg-neutral-50 px-4 py-2.5 rounded-xl border border-neutral-200/60 self-start sm:self-center">
                  <svg
                    className="w-5 h-5 text-[#800020] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{selectedImage.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
