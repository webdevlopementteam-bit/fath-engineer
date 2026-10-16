"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const leftValues = [
  {
    title: "Years of Experience",
    description:
      "25+ years of expertise in manufacturing high-performance blow moulding machines with trusted quality and innovation.",
    icon: "/icons/Years of Experience.svg",
  },
  {
    title: "Global Presence",
    description:
      "Serving clients across India and international markets with reliable and efficient machinery solutions.",
    icon: "/icons/Global Presence.png",
  },
  {
    title: "Service & Support",
    description:
      "Providing complete technical support, installation assistance, and dependable after-sales service.",
    icon: "/icons/Service-Support.svg",
  },
];

const rightValues = [
  {
    title: "Advanced Infrastructure",
    description:
      "Modern manufacturing facility equipped with advanced machinery and latest production technology.",
    icon: "/icons/Advanced Infrastructure.svg",
  },
  {
    title: "Quality Assurance",
    description:
      "Strict quality checks at every stage to ensure durable, efficient, and high-performing machines.",
    icon: "/icons/Quality Assurance.svg",
  },
  {
    title: "Customized Solutions",
    description:
      "Offering customized blow moulding machinery solutions as per industrial production requirements.",
    icon: "/icons/Customized Solutions.svg",
  },
];

// Staggered sequence animation variants
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const leftCardVariants = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ValueCard = ({ item, motionVariant }) => (
  <motion.div
    variants={motionVariant}
    className="w-full bg-[#8A000C]/50 hover:bg-[#8A000C] transition-colors duration-300 py-4 px-5 rounded-[4px] flex items-start gap-4 text-white cursor-pointer shadow-md"
  >
    {/* Icon Circle */}
    <div className="w-10 h-10 rounded-full bg-[#F8DEDE] flex items-center justify-center shrink-0 mt-0.5">
      <Image
        src={item.icon}
        alt={item.title}
        width={20}
        height={20}
        className="w-5 h-5 object-contain"
      />
    </div>

    {/* Text Content */}
    <div>
      <h3 className="font-serif text-base md:text-[18px] font-normal tracking-wide mb-1 text-white">
        {item.title}
      </h3>
      <p className="text-[15px] md:text-[15px] leading-[1.5] text-white/95 font-normal">
        {item.description}
      </p>
    </div>
  </motion.div>
);

export default function CoreValues() {
  return (
    <section
      className="relative w-full py-12 md:py-16 px-4 sm:px-6 lg:px-12 bg-fixed bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(165deg, rgba(212, 20, 66, 0.78) 0%, rgba(158, 19, 68, 0.45) 48%, rgba(20, 15, 20, 0.25) 350%),
          url('/home/bg.jpg')
        `,
      }}
    >
      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1380px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-[25px] font-serif tracking-wider text-white uppercase">
            CORE VALUES
          </h2>
          <div className="w-36 h-[1px] bg-white/85 mx-auto mt-2" />
        </div>

        {/* 3-Column Grid (Mobile order: Left Cards -> Mobile Image -> Right Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column (Cards slide in one-by-one from Left) */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 flex flex-col gap-4 order-1"
          >
            {leftValues.map((item, index) => (
              <ValueCard
                key={index}
                item={item}
                motionVariant={leftCardVariants}
              />
            ))}
          </motion.div>

          {/* Center Column - Mobile Image (Slides up from Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-2 flex justify-center order-2 my-4 lg:my-0"
          >
            <div className="relative w-[170px] sm:w-[185px] md:w-[205px] drop-shadow-2xl">
              <Image
                src="/home/core-values.png"
                alt="Core Values Mobile Preview"
                width={240}
                height={480}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column (Cards slide in one-by-one from Right) */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 flex flex-col gap-4 order-3"
          >
            {rightValues.map((item, index) => (
              <ValueCard
                key={index}
                item={item}
                motionVariant={rightCardVariants}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
