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
    bg: "bg-[#FAF7F2]", // Warm cream
    textColor: "text-[#4A2E1B]",
  },
  "/gallery": {
    bg: "bg-[#111827]", // Dark slate/gray
    textColor: "text-white",
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
      className={`relative isolate flex min-h-[200px] w-full items-center justify-center overflow-hidden px-4 py-12 sm:min-h-[230px] sm:px-6 lg:min-h-[300px] lg:px-8 border-b border-[#B8021F]/10 transition-colors duration-500 ${currentConfig.bg}`}
    >
      {/* Soft background glow & texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(184,2,31,.08), transparent 70%), radial-gradient(ellipse 30% 50% at 100% 100%, rgba(184,2,31,.05), transparent 70%)",
        }}
      />

      {/* Decorative subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(184,2,31,.35) .75px, transparent .75px)",
          backgroundSize: "20px 20px",
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
          className={`max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
            isDarkBg ? "text-white drop-shadow-md" : "text-[#800018]"
          }`}
        >
          {title}
        </motion.h1>

        {/* Divider icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          aria-hidden="true"
          className="my-3.5 flex items-center gap-2.5"
        >
          <span
            className={`h-px w-10 bg-gradient-to-r from-transparent sm:w-14 ${
              isDarkBg ? "to-white/60" : "to-[#B8021F]/40"
            }`}
          />
          <svg
            className={`h-3.5 w-3.5 ${
              isDarkBg ? "text-white" : "text-[#B8021F]"
            }`}
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 0 9.8 6.2 16 8l-6.2 1.8L8 16 6.2 9.8 0 8l6.2-1.8L8 0Z" />
          </svg>
          <span
            className={`h-px w-10 bg-gradient-to-l from-transparent sm:w-14 ${
              isDarkBg ? "to-white/60" : "to-[#B8021F]/40"
            }`}
          />
        </motion.div>

        {/* Subtitle if available */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`mb-5 max-w-xl text-sm font-light leading-6 sm:text-base ${
              isDarkBg ? "text-stone-200" : "text-stone-600"
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          aria-label="Breadcrumb"
          className="max-w-full"
        >
          <ol className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1.5 rounded-2xl border border-[#B8021F]/15 bg-white/95 px-4 py-2.5 text-xs shadow-[0_8px_30px_rgba(0,0,0,.12)] backdrop-blur-md sm:gap-x-2.5 sm:px-5 sm:text-sm">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-1.5 rounded-md py-0.5 font-medium text-stone-600 transition-colors hover:text-[#B8021F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8021F]/40"
              >
                <svg
                  className="h-3.5 w-3.5 text-[#B8021F] transition-transform group-hover:-translate-y-0.5"
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
                    className="inline-flex min-w-0 items-center gap-2"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-[#B8021F]/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m9 5 7 7-7 7"
                      />
                    </svg>

                    {isLast ? (
                      <span
                        aria-current="page"
                        className="max-w-[min(60vw,20rem)] truncate font-semibold capitalize text-[#B8021F]"
                      >
                        {title || formattedText}
                      </span>
                    ) : (
                      <Link
                        href={href}
                        className="rounded-sm font-medium capitalize text-stone-600 transition-colors hover:text-[#B8021F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8021F]/40"
                      >
                        {formattedText}
                      </Link>
                    )}
                  </li>
                );
              })
            ) : (
              <li className="inline-flex items-center gap-2">
                <svg
                  className="h-3.5 w-3.5 text-[#B8021F]/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <span
                  aria-current="page"
                  className="font-semibold capitalize text-[#B8021F]"
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
