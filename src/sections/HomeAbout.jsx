"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";

// ==================== ANIMATED COUNTER ====================
const AnimatedCounter = ({ end, duration = 2400, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setCount(end);
      return;
    }

    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, end, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// ==================== ANIMATION TIMINGS ====================
const slowSmoothEase = [0.22, 1, 0.36, 1];

const sectionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const textRevealLine = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: slowSmoothEase,
    },
  },
};

const paragraphReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: slowSmoothEase,
    },
  },
};

const columnReveal = {
  hidden: { opacity: 0, y: 32, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: slowSmoothEase,
    },
  },
};

const heroImageVariants = {
  initial: { opacity: 0, scale: 0.96, y: 24 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.1, ease: slowSmoothEase },
  },
  hover: {
    scale: 1.025,
    y: -5,
    transition: { duration: 0.65, ease: slowSmoothEase },
  },
};

const cardContainerVariants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 16px rgba(163, 29, 36, 0.04)",
    borderColor: "rgba(163, 29, 36, 0.12)",
    transition: { duration: 0.45, ease: slowSmoothEase },
  },
  hover: {
    y: -7,
    boxShadow: "0 22px 38px -8px rgba(163, 29, 36, 0.15)",
    borderColor: "rgba(163, 29, 36, 0.35)",
    transition: { duration: 0.45, ease: slowSmoothEase },
  },
};

const imageZoomVariants = {
  rest: {
    scale: 0.96,
    transition: { duration: 0.5, ease: slowSmoothEase },
  },
  hover: {
    scale: 1.08,
    transition: { duration: 0.6, ease: slowSmoothEase },
  },
};

const statCardVariants = {
  rest: {
    y: 0,
    backgroundColor: "#C80828",
    boxShadow: "0 8px 20px -4px rgba(200, 8, 40, 0.28)",
    transition: { duration: 0.45, ease: slowSmoothEase },
  },
  hover: {
    y: -7,
    backgroundColor: "#8A0A16",
    boxShadow: "0 24px 42px -8px rgba(138, 10, 22, 0.42)",
    transition: { duration: 0.45, ease: slowSmoothEase },
  },
};

// ==================== MAIN COMPONENT ====================
const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#FFF9F5] py-14 md:py-20 lg:py-15 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden selection:bg-[#C80828] selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* ==================== 1. ABOUT US SECTION ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-center">
          {/* Top-Left: Showcase Image */}
          <motion.div
            initial={shouldReduceMotion ? false : "initial"}
            whileInView={shouldReduceMotion ? undefined : "animate"}
            whileHover={shouldReduceMotion ? undefined : "hover"}
            viewport={{ once: true, amount: 0.3 }}
            variants={heroImageVariants}
            className="lg:col-span-5 xl:col-span-6 w-full flex items-center justify-center cursor-pointer relative"
          >
            <div className="absolute inset-0 bg-radial-gradient from-red-100/40 via-transparent to-transparent blur-3xl pointer-events-none" />
            <motion.img
              src="/home/about.png"
              alt="About Faith Engineering Works"
              className="w-full max-h-[380px] sm:max-h-[460px] lg:max-h-[420px] xl:max-h-[520px] object-contain select-none block drop-shadow-md relative z-10"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 xl:col-span-6 text-[#222222]"
          >
            <div className="overflow-hidden pb-1 mb-3 lg:mb-4">
              <motion.h2
                variants={textRevealLine}
                className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-serif text-[#111111] leading-tight"
              >
                About Faith Engineering Works
              </motion.h2>
            </div>

            {/* Responsive Accent Rule */}
            <motion.div
              initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1,
                delay: shouldReduceMotion ? 0 : 0.25,
                ease: slowSmoothEase,
              }}
              className="w-48 sm:w-72 lg:w-80 xl:w-[480px] max-w-full h-[3px] bg-[#A31D24] rounded-full mb-6 lg:mb-8 origin-left"
            />

            {/* Paragraphs */}
            <div className="space-y-4 lg:space-y-5 text-[17px] sm:text-[17px] lg:text-[18px] xl:text-[18px] leading-[1.75] text-gray-800">
              <motion.p variants={paragraphReveal}>
                <Link
                  href="/contact-us"
                  className="text-[#C8102E] font-bold hover:text-[#8A0A16] transition-colors duration-300 underline-offset-4"
                >
                  Faith Engineering Works
                </Link>{" "}
                was established in the year <strong>2000</strong>. It is a
                trusted <strong>Blow Moulding Machine Manufacturer</strong> with{" "}
                <span className="font-semibold text-black">
                  25+ years of manufacturing expertise
                </span>{" "}
                in delivering high-quality blow moulding and plastic processing
                solutions. We manufacture an expansive range of{" "}
                <span className="text-gray-900 font-semibold">
                  Plastic Blow Moulding Machines, HDPE Blow Moulding Machines,
                  Automatic Blow Moulding Machines, Auto Deflashing Blow
                  Moulding Machines, Accumulator Blow Moulding Machines, Double
                  Head Blow Moulding Machines, Double Stage Single Head Blow
                  Moulding Machines, 250 ml Blow Moulding Machines, 5 Liter Blow
                  Moulding Machines,
                </span>{" "}
                and custom solutions.
              </motion.p>

              <motion.p variants={paragraphReveal}>
                Our machines are engineered using modern technology, heavy-duty
                components, and precision tooling to conform to high industrial
                standards. They are widely recognized for their throughput
                reliability, smooth mechanical operation, minimal maintenance
                overhead, and extended service lifecycle.
              </motion.p>

              <motion.p variants={paragraphReveal}>
                With dedicated production facilities and advanced quality
                testing, we continue to upgrade our infrastructure to adapt to
                evolving packaging needs. Faith Engineering Works remains a
                trusted partner as an{" "}
                <Link
                  href="/hdpe-blow-moulding-machine"
                  className="text-[#C8102E] font-bold hover:text-[#8A0A16] transition-colors duration-300 underline-offset-4"
                >
                  HDPE Blow Moulding Machine Manufacturer
                </Link>{" "}
                serving industries across India.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* ==================== 2. STATS & MACHINES GRID ==================== */}
        {/* Mobile: 1 col | Tablet / 1024px: 2 cols | Extra Large (1280px+): 4 cols */}
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 md:mt-20 xl:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-6 sm:gap-y-0 items-start w-full"
        >
          {/* ==================== COLUMN 1 ==================== */}
          <motion.div
            variants={columnReveal}
            className="flex flex-col w-full order-1 lg:order-none"
          >
            {/* Top Image 1 */}
            <motion.div
              variants={cardContainerVariants}
              initial="rest"
              whileHover="hover"
              className="relative mb-3 sm:mb-4 p-6 sm:p-8 h-[240px] sm:h-[280px] lg:h-[300px] xl:h-[320px] flex items-center justify-center overflow-hidden bg-[#F9E0DF] cursor-pointer"
            >
              <motion.img
                variants={imageZoomVariants}
                src="/home/p1.png"
                alt="Blow Moulding Machine 1"
                className="relative z-10 w-full h-full object-contain select-none pointer-events-none"
              />
            </motion.div>

            {/* Stat Card 1 (200+) */}
            <motion.div
              variants={statCardVariants}
              initial="rest"
              whileHover="hover"
              className="relative text-white h-[150px] sm:h-[230px] lg:h-[250px] xl:h-[270px] flex flex-col items-center justify-center p-6 text-center bg-[#C80828] cursor-pointer overflow-hidden"
            >
              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.045, color: "#FFE6EA" },
                }}
                transition={{ duration: 0.4, ease: slowSmoothEase }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mb-2 relative z-10"
              >
                <AnimatedCounter end={200} />
              </motion.div>
              <div className="text-[14px] sm:text-xs tracking-wider uppercase font-bold text-white/95 relative z-10 max-w-[250px] leading-tight">
                INDUSTRIAL PROJECTS COMPLETED
              </div>
            </motion.div>
          </motion.div>

          {/* ==================== COLUMN 2 ==================== */}
          <motion.div
            variants={columnReveal}
            className="flex flex-col w-full lg:pt-16 xl:pt-20 order-2 lg:order-none"
          >
            {/* Stat Card 2 (25+) - Placed on Top */}
            <motion.div
              variants={statCardVariants}
              initial="rest"
              whileHover="hover"
              className="order-2 lg:order-1 relative text-white h-[150px] sm:h-[230px] lg:h-[250px] xl:h-[270px] flex flex-col items-center justify-center p-6 text-center bg-[#C80828] cursor-pointer overflow-hidden"
            >
              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.045, color: "#FFE6EA" },
                }}
                transition={{ duration: 0.4, ease: slowSmoothEase }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mb-2 relative z-10"
              >
                <AnimatedCounter end={25} />
              </motion.div>
              <div className="text-[14px] sm:text-xs tracking-wider uppercase font-bold text-white/95 relative z-10 max-w-[200px] leading-tight">
                YEARS OF INDUSTRY EXPERIENCE
              </div>
            </motion.div>

            {/* Bottom Image 2 */}
            <motion.div
              variants={cardContainerVariants}
              initial="rest"
              whileHover="hover"
              className="order-1 lg:order-2 relative mt-3 sm:mt-4 p-6 sm:p-8 h-[280px] sm:h-[280px] lg:h-[300px] xl:h-[320px] flex items-center justify-center overflow-hidden bg-[#F9E0DF] cursor-pointer"
            >
              <motion.img
                variants={imageZoomVariants}
                src="/home/p2.png"
                alt="Blow Moulding Machine 2"
                className="relative z-10 w-full h-full object-contain select-none pointer-events-none"
              />
            </motion.div>
          </motion.div>

          {/* ==================== COLUMN 3 ==================== */}
          <motion.div
            variants={columnReveal}
            className="flex flex-col w-full order-3 lg:order-none"
          >
            {/* Top Image 3 */}
            <motion.div
              variants={cardContainerVariants}
              initial="rest"
              whileHover="hover"
              className="relative mb-3 sm:mb-4 p-6 sm:p-8 h-[280px] sm:h-[280px] lg:h-[300px] xl:h-[320px] flex items-center justify-center overflow-hidden bg-[#F9E0DF] cursor-pointer"
            >
              <motion.img
                variants={imageZoomVariants}
                src="/home/p3.png"
                alt="Blow Moulding Machine 3"
                className="relative z-10 w-full h-full object-contain select-none pointer-events-none"
              />
            </motion.div>

            {/* Stat Card 3 (15+) */}
            <motion.div
              variants={statCardVariants}
              initial="rest"
              whileHover="hover"
              className="relative text-white h-[150px] sm:h-[230px] lg:h-[250px] xl:h-[270px] flex flex-col items-center justify-center p-6 text-center bg-[#6B0014] cursor-pointer overflow-hidden"
            >
              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.045, color: "#FFE6EA" },
                }}
                transition={{ duration: 0.4, ease: slowSmoothEase }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mb-2 relative z-10"
              >
                <AnimatedCounter end={15} />
              </motion.div>
              <div className="text-[14px] sm:text-xs tracking-wider uppercase font-bold text-white/95 relative z-10 max-w-[200px] leading-tight">
                COUNTRIES SERVED
              </div>
            </motion.div>
          </motion.div>

          {/* ==================== COLUMN 4 ==================== */}
          <motion.div
            variants={columnReveal}
            className="flex flex-col w-full lg:pt-24 xl:pt-32 order-4 lg:order-none"
          >
            {/* Stat Card 4 (1,400+) - Placed on Top */}
            <motion.div
              variants={statCardVariants}
              initial="rest"
              whileHover="hover"
              className="order-2 lg:order-1 relative text-white h-[150px] sm:h-[230px] lg:h-[250px] xl:h-[270px] flex flex-col items-center justify-center p-6 text-center bg-[#C80828] cursor-pointer overflow-hidden"
            >
              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.045, color: "#FFE6EA" },
                }}
                transition={{ duration: 0.4, ease: slowSmoothEase }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mb-2 relative z-10"
              >
                <AnimatedCounter end={1400} />
              </motion.div>
              <div className="text-[14px] sm:text-xs tracking-wider uppercase font-bold text-white/95 relative z-10 max-w-[200px] leading-tight">
                MACHINES INSTALLED
              </div>
            </motion.div>

            {/* Bottom Image 4 */}
            <motion.div
              variants={cardContainerVariants}
              initial="rest"
              whileHover="hover"
              className="order-1 lg:order-2 relative mt-3 sm:mt-4 p-6 sm:p-8 h-[280px] sm:h-[280px] lg:h-[300px] xl:h-[320px] flex items-center justify-center overflow-hidden bg-[#F9E0DF] cursor-pointer"
            >
              <motion.img
                variants={imageZoomVariants}
                src="/home/p4.png"
                alt="Blow Moulding Machine 4"
                className="relative z-10 w-full h-full object-contain select-none pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
