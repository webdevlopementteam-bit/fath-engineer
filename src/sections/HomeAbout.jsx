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
    boxShadow: "0 12px 32px -8px rgba(163, 29, 36, 0.08)",
    borderColor: "rgba(163, 29, 36, 0.18)",
    transition: { duration: 0.45, ease: slowSmoothEase },
  },
  hover: {
    y: -8,
    boxShadow: "0 28px 50px -12px rgba(163, 29, 36, 0.22)",
    borderColor: "rgba(163, 29, 36, 0.42)",
    transition: { duration: 0.45, ease: slowSmoothEase },
  },
};

const imageZoomVariants = {
  rest: {
    scale: 0.95,
    transition: { duration: 0.5, ease: slowSmoothEase },
  },
  hover: {
    scale: 1.09,
    transition: { duration: 0.6, ease: slowSmoothEase },
  },
};

const statCardVariants = {
  rest: {
    y: 0,
    backgroundColor: "#C80828",
    boxShadow: "0 16px 36px -8px rgba(200, 8, 40, 0.32)",
    transition: { duration: 0.45, ease: slowSmoothEase },
  },
  hover: {
    y: -8,
    backgroundColor: "#8A0A16",
    boxShadow: "0 30px 52px -10px rgba(138, 10, 22, 0.48)",
    transition: { duration: 0.45, ease: slowSmoothEase },
  },
};

// ==================== MAIN COMPONENT ====================
const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F5] via-[#FFFDFB] to-[#FFF5EE] px-4 py-16 selection:bg-[#C80828] selection:text-white sm:px-6 md:py-22 lg:px-8 lg:py-24 xl:px-12 xl:py-20">
      {/* Background ambient lighting glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#C80828]/[0.05] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-16 h-[32rem] w-[32rem] rounded-full bg-[#C80828]/[0.06] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ==================== 1. ABOUT US SECTION ==================== */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Top-Left: Showcase Image inside an enhanced taller industrial pedestal */}
          <motion.div
            initial={shouldReduceMotion ? false : "initial"}
            whileInView={shouldReduceMotion ? undefined : "animate"}
            whileHover={shouldReduceMotion ? undefined : "hover"}
            viewport={{ once: true, amount: 0.3 }}
            variants={heroImageVariants}
            className="group relative flex w-full cursor-pointer items-center justify-center lg:col-span-5 xl:col-span-6"
          >
            {/* Outer glowing border halo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#C80828]/20 via-[#A31D24]/10 to-transparent opacity-75 blur-md transition-opacity duration-500 group-hover:opacity-100"
            />

            <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-[#A31D24]/20 bg-gradient-to-br from-white via-[#FFF9F5] to-[#F9E0DF]/60 p-6 shadow-[0_24px_60px_-15px_rgba(163,29,36,0.14)] sm:p-10 lg:min-h-[580px] xl:min-h-[640px]">
              {/* Dot-matrix texture overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.09]"
                style={{
                  backgroundImage:
                    "radial-gradient(#A31D24 1.2px, transparent 1.2px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Glowing corner radial gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C80828]/15 blur-3xl"
              />

              {/* Floating Est. 2000 Badge */}
              <div className="absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-[#A31D24]/25 bg-white/95 px-4.5 py-2 text-xs font-extrabold uppercase tracking-widest text-[#A31D24] shadow-md backdrop-blur-md sm:left-8 sm:top-8">
                <span className="h-2 w-2 rounded-full bg-[#C80828] animate-pulse" />
                Est. 2000
              </div>

              <motion.img
                src="/home/about.png"
                alt="About Faith Engineering Works"
                className="relative z-10 block max-h-[420px] w-full select-none object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] sm:max-h-[500px] lg:max-h-[500px] xl:max-h-[560px]"
              />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="text-[#222222] lg:col-span-7 xl:col-span-6">
            <div className="mb-3 overflow-hidden pb-1 lg:mb-4">
              <h2 className="font-serif text-3xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[38px] xl:text-[44px]">
                About Faith Engineering Works
              </h2>
            </div>

            {/* Responsive multi-stop accent rule */}
            <motion.div
              initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1,
                delay: shouldReduceMotion ? 0 : 0.25,
                ease: slowSmoothEase,
              }}
              className="mb-6 flex origin-left items-center gap-2 lg:mb-8"
            >
              <div className="h-1.5 w-40 rounded-full bg-gradient-to-r from-[#C80828] to-[#A31D24] sm:w-60 lg:w-72 xl:w-96 shadow-sm" />
              <div className="h-1.5 w-5 rounded-full bg-[#A31D24]/50" />
              <div className="h-1.5 w-2.5 rounded-full bg-[#A31D24]/25" />
            </motion.div>

            {/* Paragraphs */}
            <div className="space-y-4 text-[17px] leading-[1.85] text-stone-700 sm:text-[17.5px] lg:space-y-5 lg:text-[18px]">
              <motion.p
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={paragraphReveal}
                className="rounded-2xl border-l-4 border-[#C80828] bg-white/90 p-5 shadow-[0_6px_24px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:p-6"
              >
                <Link
                  href="/contact-us"
                  className="font-bold text-[#C8102E]  decoration-[#C8102E]/40  transition-colors duration-300 hover:text-[#8A0A16] hover:decoration-[#8A0A16]"
                >
                  Faith Engineering Works
                </Link>{" "}
                was established in the year{" "}
                <strong className="text-stone-900 font-bold">2000</strong>. It
                is a trusted{" "}
                <strong className="text-stone-900 font-bold">
                  Blow Moulding Machine Manufacturer
                </strong>{" "}
                with{" "}
                <span className="font-semibold text-stone-950">
                  25+ years of manufacturing expertise
                </span>{" "}
                in delivering high-quality blow moulding and plastic processing
                solutions. We manufacture an expansive range of{" "}
                <span className="font-semibold text-stone-900">
                  Plastic Blow Moulding Machines, HDPE Blow Moulding Machines,
                  Automatic Blow Moulding Machines, Auto Deflashing Blow
                  Moulding Machines, Accumulator Blow Moulding Machines, Double
                  Head Blow Moulding Machines, Double Stage Single Head Blow
                  Moulding Machines, 250 ml Blow Moulding Machines, 5 Liter Blow
                  Moulding Machines,
                </span>{" "}
                and custom solutions.
              </motion.p>

              <motion.p
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={paragraphReveal}
              >
                Our machines are engineered using modern technology, heavy-duty
                components, and precision tooling to conform to high industrial
                standards. They are widely recognized for their throughput
                reliability, smooth mechanical operation, minimal maintenance
                overhead, and extended service lifecycle.
              </motion.p>

              <motion.p
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={paragraphReveal}
              >
                With dedicated production facilities and advanced quality
                testing, we continue to upgrade our infrastructure to adapt to
                evolving packaging needs. Faith Engineering Works remains a
                trusted partner as an{" "}
                <Link
                  href="/hdpe-blow-moulding-machine"
                  className="font-bold text-[#C8102E]  decoration-[#C8102E]/40  transition-colors duration-300 hover:text-[#8A0A16] hover:decoration-[#8A0A16]"
                >
                  HDPE Blow Moulding Machine Manufacturer
                </Link>{" "}
                serving industries across India.
              </motion.p>
            </div>
          </div>
        </div>

        {/* ==================== 2. STATS & MACHINES GRID ==================== */}
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-2 md:mt-22 lg:grid-cols-4 lg:gap-6 xl:mt-28 xl:gap-8"
        >
          {/* ==================== COLUMN 1 ==================== */}
          <motion.div
            variants={columnReveal}
            className="order-1 flex w-full flex-col gap-5 lg:order-none"
          >
            {/* Top Image 1 */}
            <motion.div
              variants={cardContainerVariants}
              initial="rest"
              whileHover="hover"
              className="group relative flex h-[260px] cursor-pointer items-center justify-center overflow-hidden rounded-[2rem] border border-[#A31D24]/20 bg-gradient-to-b from-[#FDECEC]/90 via-[#F9E0DF]/60 to-[#F5D2D1]/40 p-6 sm:h-[300px] sm:p-8 lg:h-[320px] xl:h-[340px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/60 blur-2xl transition-transform duration-500 group-hover:scale-125"
              />
              <motion.img
                variants={imageZoomVariants}
                src="/home/p1.png"
                alt="Blow Moulding Machine 1"
                className="pointer-events-none relative z-10 h-full w-full select-none object-contain drop-shadow-[0_14px_24px_rgba(128,0,24,0.14)]"
              />
            </motion.div>

            {/* Stat Card 1 (200+) */}
            <motion.div
              variants={statCardVariants}
              initial="rest"
              whileHover="hover"
              className="relative flex h-[170px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/20 bg-[#C80828] p-6 text-center text-white sm:h-[240px] lg:h-[260px] xl:h-[280px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border-[18px] border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-14 -left-14 h-32 w-32 rounded-full bg-white/[0.06]"
              />

              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.06, color: "#FFE6EA" },
                }}
                transition={{ duration: 0.4, ease: slowSmoothEase }}
                className="relative z-10 mb-2.5 text-4xl font-black tracking-tight sm:text-5xl lg:text-[48px]"
              >
                <AnimatedCounter end={200} />
              </motion.div>
              <div className="mb-2.5 h-1 w-10 rounded-full bg-white/40" />
              <div className="relative z-10 max-w-[240px] text-[13px] font-bold uppercase leading-snug tracking-wider text-white/95 sm:text-xs">
                INDUSTRIAL PROJECTS COMPLETED
              </div>
            </motion.div>
          </motion.div>

          {/* ==================== COLUMN 2 ==================== */}
          <motion.div
            variants={columnReveal}
            className="order-2 flex w-full flex-col gap-5 lg:order-none lg:pt-14 xl:pt-20"
          >
            {/* Stat Card 2 (25+) - Placed on Top */}
            <motion.div
              variants={statCardVariants}
              initial="rest"
              whileHover="hover"
              className="order-2 relative flex h-[170px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/20 bg-[#C80828] p-6 text-center text-white sm:h-[240px] lg:order-1 lg:h-[260px] xl:h-[280px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border-[18px] border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-14 -left-14 h-32 w-32 rounded-full bg-white/[0.06]"
              />

              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.06, color: "#FFE6EA" },
                }}
                transition={{ duration: 0.4, ease: slowSmoothEase }}
                className="relative z-10 mb-2.5 text-4xl font-black tracking-tight sm:text-5xl lg:text-[48px]"
              >
                <AnimatedCounter end={25} />
              </motion.div>
              <div className="mb-2.5 h-1 w-10 rounded-full bg-white/40" />
              <div className="relative z-10 max-w-[200px] text-[13px] font-bold uppercase leading-snug tracking-wider text-white/95 sm:text-xs">
                YEARS OF INDUSTRY EXPERIENCE
              </div>
            </motion.div>

            {/* Bottom Image 2 */}
            <motion.div
              variants={cardContainerVariants}
              initial="rest"
              whileHover="hover"
              className="group order-1 relative flex h-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-[2rem] border border-[#A31D24]/20 bg-gradient-to-b from-[#FDECEC]/90 via-[#F9E0DF]/60 to-[#F5D2D1]/40 p-6 sm:h-[300px] sm:p-8 lg:order-2 lg:h-[320px] xl:h-[340px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/60 blur-2xl transition-transform duration-500 group-hover:scale-125"
              />
              <motion.img
                variants={imageZoomVariants}
                src="/home/p2.png"
                alt="Blow Moulding Machine 2"
                className="pointer-events-none relative z-10 h-full w-full select-none object-contain drop-shadow-[0_14px_24px_rgba(128,0,24,0.14)]"
              />
            </motion.div>
          </motion.div>

          {/* ==================== COLUMN 3 ==================== */}
          <motion.div
            variants={columnReveal}
            className="order-3 flex w-full flex-col gap-5 lg:order-none"
          >
            {/* Top Image 3 */}
            <motion.div
              variants={cardContainerVariants}
              initial="rest"
              whileHover="hover"
              className="group relative flex h-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-[2rem] border border-[#A31D24]/20 bg-gradient-to-b from-[#FDECEC]/90 via-[#F9E0DF]/60 to-[#F5D2D1]/40 p-6 sm:h-[300px] sm:p-8 lg:h-[320px] xl:h-[340px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/60 blur-2xl transition-transform duration-500 group-hover:scale-125"
              />
              <motion.img
                variants={imageZoomVariants}
                src="/home/p3.png"
                alt="Blow Moulding Machine 3"
                className="pointer-events-none relative z-10 h-full w-full select-none object-contain drop-shadow-[0_14px_24px_rgba(128,0,24,0.14)]"
              />
            </motion.div>

            {/* Stat Card 3 (15+) */}
            <motion.div
              variants={statCardVariants}
              initial="rest"
              whileHover="hover"
              className="relative flex h-[170px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/20 bg-[#6B0014] p-6 text-center text-white sm:h-[240px] lg:h-[260px] xl:h-[280px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border-[18px] border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-14 -left-14 h-32 w-32 rounded-full bg-white/[0.06]"
              />

              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.06, color: "#FFE6EA" },
                }}
                transition={{ duration: 0.4, ease: slowSmoothEase }}
                className="relative z-10 mb-2.5 text-4xl font-black tracking-tight sm:text-5xl lg:text-[48px]"
              >
                <AnimatedCounter end={15} />
              </motion.div>
              <div className="mb-2.5 h-1 w-10 rounded-full bg-white/40" />
              <div className="relative z-10 max-w-[200px] text-[13px] font-bold uppercase leading-snug tracking-wider text-white/95 sm:text-xs">
                COUNTRIES SERVED
              </div>
            </motion.div>
          </motion.div>

          {/* ==================== COLUMN 4 ==================== */}
          <motion.div
            variants={columnReveal}
            className="order-4 flex w-full flex-col gap-5 lg:order-none lg:pt-22 xl:pt-28"
          >
            {/* Stat Card 4 (1,400+) - Placed on Top */}
            <motion.div
              variants={statCardVariants}
              initial="rest"
              whileHover="hover"
              className="order-2 relative flex h-[170px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/20 bg-[#C80828] p-6 text-center text-white sm:h-[240px] lg:order-1 lg:h-[260px] xl:h-[280px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border-[18px] border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-14 -left-14 h-32 w-32 rounded-full bg-white/[0.06]"
              />

              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.06, color: "#FFE6EA" },
                }}
                transition={{ duration: 0.4, ease: slowSmoothEase }}
                className="relative z-10 mb-2.5 text-4xl font-black tracking-tight sm:text-5xl lg:text-[48px]"
              >
                <AnimatedCounter end={1400} />
              </motion.div>
              <div className="mb-2.5 h-1 w-10 rounded-full bg-white/40" />
              <div className="relative z-10 max-w-[200px] text-[13px] font-bold uppercase leading-snug tracking-wider text-white/95 sm:text-xs">
                MACHINES INSTALLED
              </div>
            </motion.div>

            {/* Bottom Image 4 */}
            <motion.div
              variants={cardContainerVariants}
              initial="rest"
              whileHover="hover"
              className="group order-1 relative flex h-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-[2rem] border border-[#A31D24]/20 bg-gradient-to-b from-[#FDECEC]/90 via-[#F9E0DF]/60 to-[#F5D2D1]/40 p-6 sm:h-[300px] sm:p-8 lg:order-2 lg:h-[320px] xl:h-[340px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/60 blur-2xl transition-transform duration-500 group-hover:scale-125"
              />
              <motion.img
                variants={imageZoomVariants}
                src="/home/p4.png"
                alt="Blow Moulding Machine 4"
                className="pointer-events-none relative z-10 h-full w-full select-none object-contain drop-shadow-[0_14px_24px_rgba(128,0,24,0.14)]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
