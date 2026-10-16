"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const blowMouldingMachines = [
  {
    name: "HDPE Blow Moulding Machine",
    path: "/home/p1.png",
    slug: "/hdpe-blow-moulding-machine",
  },
  {
    name: "Plastic Blow Moulding Machine",
    path: "/home/p2.png",
    slug: "/plastic-blow-moulding-machine",
  },
  {
    name: "Automatic Blow Moulding Machine",
    path: "/home/p3.png",
    slug: "/automatic-blow-moulding-machine",
  },
  {
    name: "1 Litre Triple Head Double Stage With De-Flashing (Model – FEW1000H)",
    path: "/home/p4.png",
    slug: "/blow-moulding-machines",
  },
];

// Animation Variants
const headerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  rest: {
    y: 0,
    boxShadow: "0 2px 10px -2px rgba(74, 59, 50, 0.05)",
    borderColor: "#F3E5DC",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 30px -10px rgba(139, 69, 67, 0.14)",
    borderColor: "#D5B8A8",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// Intensified Zoom Variant on Hover
const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.15, // Enhanced zoom animation
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
};

const arrowVariants = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

export default function ProductsSection() {
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef(null);

  const items = [
    ...blowMouldingMachines.slice(-visibleSlides),
    ...blowMouldingMachines,
    ...blowMouldingMachines.slice(0, visibleSlides),
  ];

  useEffect(() => {
    const updateVisibleSlides = () => {
      const nextVisibleSlides =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;

      setVisibleSlides((previous) => {
        if (previous !== nextVisibleSlides) {
          setCurrentIndex(nextVisibleSlides);
          setIsTransitioning(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsTransitioning(true));
          });
        }

        return nextVisibleSlides;
      });
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => index + 1);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const showPrevious = () => {
    if (!isTransitioning) return;
    setCurrentIndex((index) => index - 1);
  };

  const showNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((index) => index + 1);
  };

  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;

    if (currentIndex >= blowMouldingMachines.length + visibleSlides) {
      setIsTransitioning(false);
      setCurrentIndex(visibleSlides);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    } else if (currentIndex < visibleSlides) {
      setIsTransitioning(false);
      setCurrentIndex(blowMouldingMachines.length + visibleSlides - 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) showNext();
      else showPrevious();
    }

    touchStartX.current = null;
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] px-4 py-14 md:px-12">
      {/* Header Section */}
      <div className="relative mx-auto mb-12 flex max-w-7xl flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
          className="text-center"
        >
          <h2 className="mb-3 font-serif text-3xl font-medium tracking-wide text-[#4A3B32] md:text-4xl">
            Our Products
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mx-auto h-[2px] w-24 origin-center bg-[#8B4543]"
          />
        </motion.div>

        {/* Desktop Navigation Arrows */}
        <div className="absolute right-0 top-2 hidden items-center gap-3 md:flex">
          <motion.button
            type="button"
            onClick={showPrevious}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#8B4543",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Previous slide"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#8B4543] text-[#8B4543] shadow-2xs"
          >
            <FaChevronLeft size={14} />
          </motion.button>
          <motion.button
            type="button"
            onClick={showNext}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#8B4543",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Next slide"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#8B4543] text-[#8B4543] shadow-2xs"
          >
            <FaChevronRight size={14} />
          </motion.button>
        </div>
      </div>

      {/* Carousel Viewport */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="mx-auto max-w-7xl overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
          }}
        >
          {items.map((machine, index) => (
            <div
              key={`${machine.slug}-${index}`}
              className="h-auto shrink-0 px-3"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardVariants}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-white p-5"
              >
                {/* Top Subtle Accent Line on Hover */}
                <motion.div
                  variants={{
                    rest: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-[#8B4543] to-[#C87D7A]"
                />

                {/* Image Container with Zoom Masking */}
                <div className="relative mb-6 flex h-64 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#FAFAFA] to-[#F4ECE6]/50 p-6">
                  {/* Subtle Radial Glow on Card Hover */}
                  <motion.div
                    variants={{
                      rest: { opacity: 0, scale: 0.8 },
                      hover: { opacity: 1, scale: 1.15 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="pointer-events-none absolute h-40 w-40 rounded-full bg-[#8B4543]/10 blur-2xl"
                  />

                  <motion.img
                    src={machine.path}
                    alt={machine.name}
                    variants={imageVariants}
                    className="relative z-10 max-h-full max-w-full object-contain drop-shadow-xs"
                  />
                </div>

                {/* Card Body & CTA */}
                <div className="flex flex-col justify-between">
                  <h3 className="mb-6 line-clamp-2 min-h-[3.5rem] font-serif text-lg font-medium leading-snug text-[#33221B] transition-colors duration-300 group-hover:text-[#8B4543]">
                    {machine.name}
                  </h3>

                  <div>
                    <Link
                      href={machine.slug}
                      className="inline-flex items-center gap-2.5 rounded-lg bg-[#A85855] px-5 py-2.5 text-sm font-medium text-white shadow-xs transition-colors duration-300 hover:bg-[#8B4543]"
                    >
                      <span>Read More</span>
                      <motion.span variants={arrowVariants}>
                        <FaArrowRight size={12} />
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
