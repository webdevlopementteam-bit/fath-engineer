"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Mohit Singh",
    rating: 4.5,
    review:
      "We are extremely satisfied with the machine quality and timely delivery. Their team is supportive and always available for assistance whenever required.",
  },
  {
    id: 2,
    name: "Sandeep Jain",
    rating: 4.5,
    review:
      "Best manufacturer for blow moulding machines. Durable machine build quality, smooth operation, and excellent after-sales service experience.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    rating: 4.5,
    review:
      "Excellent machine quality and smooth performance. The production efficiency is outstanding and the machine requires very low maintenance. Highly recommended for industrial use.",
  },
  {
    id: 4,
    name: "Amit Sharma",
    rating: 4.5,
    review:
      "Faith Engineering Works provided us with a reliable blow moulding machine along with great technical support. Installation and training process was very professional.",
  },
];

// Reusable Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return (
            <svg
              key={star}
              className="w-4 h-4 text-[#FFB800] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        } else {
          return (
            <svg
              key={star}
              className="w-4 h-4 text-[#FFB800]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          );
        }
      })}
    </div>
  );
};

export default function CustomersAndTestimonials() {
  const [isMounted, setIsMounted] = useState(false);
  const customerSwiperRef = useRef(null);
  const reviewSwiperRef = useRef(null);

  // Ensure component only renders Swiper on the client side to avoid Next.js SSR prerender mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Repeat the single image 12 times for smooth infinite loop
  const customerImages = Array(12).fill("/home/customers.png");

  // Offset the second Swiper by 1.5 seconds (1500ms) so both never move together
  useEffect(() => {
    if (!isMounted) return;
    let timer;
    if (reviewSwiperRef.current && reviewSwiperRef.current.autoplay) {
      // Stop review autoplay initially
      reviewSwiperRef.current.autoplay.stop();

      // Start review autoplay after 1.5 seconds (halfway through the 3s delay)
      timer = setTimeout(() => {
        if (reviewSwiperRef.current && reviewSwiperRef.current.autoplay) {
          reviewSwiperRef.current.autoplay.start();
        }
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [isMounted]);

  // Prevent server-side prerender execution mismatch for Swiper
  if (!isMounted) {
    return (
      <section className="bg-[#FFF9F5] py-10 px-4 sm:px-6 lg:px-10 min-h-[600px]" />
    );
  }

  return (
    <section className="bg-[#FFF9F5] py-10 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Wide Container */}
      <div className="max-w-[1440px] w-full mx-auto">
        {/* ================= OUR CUSTOMERS SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] inline-block relative pb-3">
            Our Customers
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-[2px] bg-[#A32A38] origin-center"
            ></motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-44 h-[1px] bg-[#A32A38]/60 origin-center"
            ></motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-16"
        >
          {/* Custom Prev Button - Hidden on Mobile */}
          <motion.button
            whileHover={{ scale: 1.15, x: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => customerSwiperRef.current?.slidePrev()}
            aria-label="Previous Customer"
            className="hidden md:flex items-center justify-center w-9 h-9 text-gray-400 hover:text-gray-800 transition-colors mr-3 flex-shrink-0 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Customers Swiper */}
          <div className="w-full overflow-hidden">
            <Swiper
              onBeforeInit={(swiper) => {
                customerSwiperRef.current = swiper;
              }}
              modules={[Autoplay, Navigation]}
              loop={true}
              speed={700}
              autoplay={{
                delay: 3000, // 3 seconds delay
                disableOnInteraction: false,
              }}
              spaceBetween={16}
              breakpoints={{
                0: {
                  slidesPerView: 2, // Mobile: 2
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 3, // Tablet: 3
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 6, // Desktop: 6
                  spaceBetween: 20,
                },
              }}
            >
              {customerImages.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white border border-gray-200 rounded-lg h-28 md:h-32 flex items-center justify-center p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  >
                    <div className="relative w-20 h-20">
                      <Image
                        src={imgSrc}
                        alt={`Customer Logo ${index + 1}`}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Next Button - Hidden on Mobile */}
          <motion.button
            whileHover={{ scale: 1.15, x: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => customerSwiperRef.current?.slideNext()}
            aria-label="Next Customer"
            className="hidden md:flex items-center justify-center w-9 h-9 text-gray-400 hover:text-gray-800 transition-colors ml-3 flex-shrink-0 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* ================= WHAT OUR CLIENTS SAY SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] inline-block relative pb-3">
            What Our Clients Say
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-[2px] bg-[#A32A38] origin-center"
            ></motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-44 h-[1px] bg-[#A32A38]/60 origin-center"
            ></motion.span>
          </h2>
        </motion.div>

        {/* Reviews Swiper (No Prev/Next buttons, staggered by 1.5s) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full overflow-hidden md:px-12"
        >
          <Swiper
            onSwiper={(swiper) => {
              reviewSwiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            loop={true}
            speed={700}
            autoplay={{
              delay: 3500, // 3 seconds delay
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-2"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`} className="h-auto">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-lg p-7 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] h-full min-h-[250px] flex flex-col justify-start"
                >
                  <h3 className="text-lg font-serif font-medium text-[#1a1a1a] mb-1.5">
                    {item.name}
                  </h3>

                  <StarRating rating={item.rating} />

                  <p className="text-gray-500 text-[17px] leading-relaxed">
                    “{item.review}”
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
