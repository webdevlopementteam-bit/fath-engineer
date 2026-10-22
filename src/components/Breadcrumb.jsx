"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Har route ke liye alag background color aur styling config
const routeBackgrounds = {
  "/": {
    bg: "bg-[#FFF0F3]",
    textColor: "text-[#800018]",
  },
  "/about-us": {
    bg: "bg-[#FEEDF0]",
    textColor: "text-[#7C2D12]",
  },
  "/products": {
    bg: "bg-[#FFE0E3]", // Warm cream
    textColor: "text-[#4A2E1B]",
  },
  "/gallery": {
    bg: "bg-[#F5F3FF]",
    textColor: "text-gray-100",
  },
  "/global-export": {
    bg: "bg-[#FAE0E0]", // Navy blue dark tone
    textColor: "text-white",
  },
  "/contact": {
    bg: "bg-[#FFF8F6]", // Soft peach tint
    textColor: "text-[#7C2D12]",
  },
  "/blog": {
    bg: "bg-[#F5F3FF]", // Soft purple tint
    textColor: "text-[#4C1D95]",
  },
  // Default fallback agar koi aur route ho
  default: {
    bg: "bg-[#FFF0F3]",
    textColor: "text-[#800018]",
  },
};

export default function Breadcrumb({ title, subtitle }) {
  const pathname = usePathname();
  const pathSegments = pathname ? pathname.split("/").filter(Boolean) : [];

  // Current pathname ke hisaab se config pick karein
  const currentConfig = routeBackgrounds[pathname] || routeBackgrounds.default;
  const isDarkBg =
    currentConfig.bg.includes("900") ||
    currentConfig.bg.includes("111827") ||
    currentConfig.bg.includes("0F172A");

  return (
    <section
      className={`relative isolate flex min-h-[220px] w-full items-center justify-center overflow-hidden border-b border-[#B8021F]/15 px-4 py-14 transition-colors duration-500 sm:min-h-[260px] sm:px-6 lg:min-h-[320px] lg:px-8 ${currentConfig.bg}`}
    >
      {/* Top subtle crimson highlight line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#B8021F]/25 to-transparent"
      />

      {/* Ambient glowing orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#B8021F]/[0.07] blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-24 -z-10 h-72 w-72 rounded-full bg-[#B8021F]/[0.06] blur-3xl sm:h-96 sm:w-96"
      />

      {/* Soft radial spotlight & vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 75% at 50% 0%, rgba(184,2,31,.09), transparent 70%), radial-gradient(ellipse 40% 55% at 100% 100%, rgba(184,2,31,.05), transparent 70%)",
        }}
      />

      {/* Architectural decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B8021F]/[0.06] sm:h-[580px] sm:w-[580px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#B8021F]/[0.08] sm:h-[400px] sm:w-[400px]"
      />

      {/* Decorative subtle dot-matrix pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(184,2,31,.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Main Content with Framer Motion Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-3xl font-serif text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
            isDarkBg
              ? "text-white drop-shadow-md"
              : "bg-gradient-to-br from-[#600012] via-[#800018] to-[#B8021F] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(128,0,24,0.06)]"
          }`}
        >
          {title}
        </motion.h1>

        {/* Ornamental Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          aria-hidden="true"
          className="my-4 flex items-center gap-3"
        >
          <span
            className={`h-[1.5px] w-12 rounded-full bg-gradient-to-r from-transparent sm:w-20 ${
              isDarkBg ? "to-white/60" : "to-[#B8021F]/50"
            }`}
          />
          <span
            className={`h-1.5 w-1.5 rotate-45 rounded-[1px] ${
              isDarkBg ? "bg-white/60" : "bg-[#B8021F]/40"
            }`}
          />
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full border ${
              isDarkBg
                ? "border-white/25 bg-white/10 text-white"
                : "border-[#B8021F]/20 bg-white/80 text-[#B8021F] shadow-sm"
            }`}
          >
            <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0 9.8 6.2 16 8l-6.2 1.8L8 16 6.2 9.8 0 8l6.2-1.8L8 0Z" />
            </svg>
          </span>
          <span
            className={`h-1.5 w-1.5 rotate-45 rounded-[1px] ${
              isDarkBg ? "bg-white/60" : "bg-[#B8021F]/40"
            }`}
          />
          <span
            className={`h-[1.5px] w-12 rounded-full bg-gradient-to-l from-transparent sm:w-20 ${
              isDarkBg ? "to-white/60" : "to-[#B8021F]/50"
            }`}
          />
        </motion.div>

        {/* Subtitle if available */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`mb-6 max-w-xl text-sm font-normal leading-relaxed sm:text-base lg:text-lg ${
              isDarkBg ? "text-stone-200" : "text-stone-600"
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb Navigation Pill */}
        <motion.nav
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          aria-label="Breadcrumb"
          className="mt-1 max-w-full"
        >
          <ol className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5 rounded-full border border-[#B8021F]/15 bg-white/90 p-1.5 pl-3.5 pr-2 text-xs shadow-[0_10px_35px_-5px_rgba(128,0,24,0.12)] ring-4 ring-white/50 backdrop-blur-md sm:gap-x-2 sm:pl-4 sm:pr-2.5 sm:text-sm">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-medium text-stone-600 transition-all duration-200 hover:bg-[#B8021F]/[0.06] hover:text-[#B8021F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8021F]/40"
              >
                <svg
                  className="h-3.5 w-3.5 text-[#B8021F] transition-transform duration-200 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <span>Home</span>
              </Link>
            </li>

            {pathSegments.length > 0 ? (
              pathSegments.map((segment, index) => {
                const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                const isLast = index === pathSegments.length - 1;
                const formattedText = decodeURIComponent(segment).replace(
                  /-/g,
                  " ",
                );

                return (
                  <li
                    key={href}
                    className="inline-flex min-w-0 items-center gap-1.5 sm:gap-2"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-[#B8021F]/35"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        d="m9 5 7 7-7 7"
                      />
                    </svg>

                    {isLast ? (
                      <span
                        aria-current="page"
                        className="max-w-[min(58vw,20rem)] truncate rounded-full bg-gradient-to-r from-[#B8021F]/12 to-[#B8021F]/[0.06] px-3.5 py-1 font-semibold capitalize text-[#800018] shadow-[inset_0_1px_1px_rgba(184,2,31,0.12)]"
                      >
                        {title || formattedText}
                      </span>
                    ) : (
                      <Link
                        href={href}
                        className="rounded-full px-2.5 py-1 font-medium capitalize text-stone-600 transition-all duration-200 hover:bg-[#B8021F]/[0.06] hover:text-[#B8021F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8021F]/40"
                      >
                        {formattedText}
                      </Link>
                    )}
                  </li>
                );
              })
            ) : (
              <li className="inline-flex items-center gap-1.5 sm:gap-2">
                <svg
                  className="h-3.5 w-3.5 text-[#B8021F]/35"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <span
                  aria-current="page"
                  className="rounded-full bg-gradient-to-r from-[#B8021F]/12 to-[#B8021F]/[0.06] px-3.5 py-1 font-semibold capitalize text-[#800018]"
                >
                  {title}
                </span>
              </li>
            )}
          </ol>
        </motion.nav>
      </motion.div>
    </section>
  );
}
