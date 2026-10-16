"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// Reusable animation config for individual columns/elements as they enter the screen
const scrollAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 }, // Triggers as soon as 15% of the element is visible
  transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
};

export default function Footer() {
  return (
    <footer className="bg-[#5c0617] text-white pt-10 pb-10 border-t border-[#7a1226] overflow-hidden">
      {/* Expanded container width according to max-w-8xl */}
      <div className="max-w-[96rem] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Footer Grid - Custom column width proportions for balanced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.4fr] gap-x-12 gap-y-12 pb-10 border-b border-[#7a1226]/80">
          {/* Column 1: About Us */}
          <motion.div {...scrollAnimation} className="space-y-6">
            <h3 className="text-xl font-serif tracking-wider uppercase text-amber-100 border-l-4 border-amber-500 pl-3 inline-block">
              ABOUT US
            </h3>
            <p className="text-gray-100 text-base leading-relaxed">
              Faith Engineering Works is a trusted manufacturer of
              high-performance Blow Moulding Machines, delivering advanced,
              durable, and efficient industrial machinery solutions since 2000.
              We are committed to quality, innovation, and customer
              satisfaction.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3.5 pt-3">
              <a
                href="https://www.facebook.com/faithengineeringworks?rdid=vgYo5nUO3YGwRb3U&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D4AuESQj3%2F#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#7a1226] hover:bg-red-600 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white text-base" />
              </a>
              <a
                href="https://www.instagram.com/faithengieeringworks?igsh=YnBnNnltYTltZWJ5%20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#7a1226] hover:bg-red-600 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-base" />
              </a>
              <a
                href="https://www.youtube.com/@faithengineeringworksnewdelhi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#7a1226] hover:bg-red-600 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white text-base" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links (Compact width) */}
          <motion.div
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-serif tracking-wider uppercase text-amber-100 border-l-4 border-amber-500 pl-3 inline-block">
              QUICK LINKS
            </h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link
                  href="/"
                  className="hover:text-red-400 transition-colors duration-200 flex items-center group font-medium"
                >
                  <span className="inline-flex items-center justify-center w-6 text-center mr-2 text-sm text-[#FEF3C6] group-hover:scale-125 transition-transform">
                    ⊙
                  </span>
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-400 transition-colors duration-200 flex items-center group font-medium"
                >
                  <span className="inline-flex items-center justify-center w-6 text-center mr-2 text-sm text-[#FEF3C6] group-hover:scale-125 transition-transform">
                    ⊙
                  </span>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-red-400 transition-colors duration-200 flex items-center group font-medium"
                >
                  <span className="inline-flex items-center justify-center w-6 text-center mr-2 text-sm text-[#FEF3C6] group-hover:scale-125 transition-transform">
                    ⊙
                  </span>
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-red-400 transition-colors duration-200 flex items-center group font-medium"
                >
                  <span className="inline-flex items-center justify-center w-6 text-center mr-2 text-sm text-[#FEF3C6] group-hover:scale-125 transition-transform">
                    ⊙
                  </span>
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  href="/global-export"
                  className="hover:text-red-400 transition-colors duration-200 flex items-center group font-medium"
                >
                  <span className="inline-flex items-center justify-center w-6 text-center mr-2 text-sm text-[#FEF3C6] group-hover:scale-125 transition-transform">
                    ⊙
                  </span>
                  GLOBAL EXPORT
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-red-400 transition-colors duration-200 flex items-center group font-medium"
                >
                  <span className="inline-flex items-center justify-center w-6 text-center mr-2 text-sm text-[#FEF3C6] group-hover:scale-125 transition-transform">
                    ⊙
                  </span>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Products */}
          <motion.div
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-serif tracking-wider uppercase text-amber-100 border-l-4 border-amber-500 pl-3 inline-block">
              PRODUCTS
            </h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link
                  href="/products/plastic-blow-moulding-machine"
                  className="hover:text-red-400 transition-colors duration-200 flex items-start group font-medium"
                >
                  <span className="inline-flex items-center justify-center w-6 text-center mr-2 text-sm text-[#FEF3C6] shrink-0 group-hover:scale-125 transition-transform">
                    ⊙
                  </span>
                  <span>Plastic Blow Moulding Machine</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/blow-moulding-machines"
                  className="hover:text-red-400 transition-colors duration-200 flex items-start group font-medium"
                >
                  <span className="inline-flex items-center justify-center w-6 text-center mr-2 text-sm text-[#FEF3C6] shrink-0 group-hover:scale-125 transition-transform">
                    ⊙
                  </span>
                  <span>Blow Moulding Machines</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/hdpe-blow-moulding-machine"
                  className="hover:text-red-400 transition-colors duration-200 flex items-start group font-medium"
                >
                  <span className="inline-flex items-center justify-center w-6 text-center mr-2 text-sm text-[#FEF3C6] shrink-0 group-hover:scale-125 transition-transform">
                    ⊙
                  </span>
                  <span>HDPE Blow Moulding Machine</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.3 }}
            className="space-y-6 text-base"
          >
            <h3 className="text-xl font-serif tracking-wider uppercase text-amber-100 border-l-4 border-amber-500 pl-3 inline-block">
              CONTACT US
            </h3>

            {/* Phone */}
            <div className="flex items-center space-x-3.5">
              <div className="bg-[#7a1226] w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0 shadow-md">
                <FaPhoneAlt className="text-sm text-[#FEF3C6]" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-xs text-[#FFF9F5]">
                  PHONE
                </p>
                <a
                  href="tel:+919871580960"
                  className="hover:text-red-400 transition-colors font-medium text-base"
                >
                  +91 9871580960
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3.5">
              <div className="bg-[#7a1226] w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0 shadow-md">
                <FaEnvelope className="text-sm text-[#FEF3C6]" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-xs text-[#FFF9F5]">
                  EMAIL
                </p>
                <a
                  href="mailto:faithengineering4@gmail.com"
                  className="hover:text-red-400 transition-colors block font-medium text-sm sm:text-base"
                >
                  faithengineering4@gmail.com
                </a>
                <a
                  href="mailto:faithengineering39@yahoo.co.in"
                  className="hover:text-red-400 transition-colors block font-medium text-sm sm:text-base"
                >
                  faithengineering39@yahoo.co.in
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-3.5">
              <div className="bg-[#7a1226] w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0 shadow-md">
                <FaMapMarkerAlt className="text-sm text-[#FEF3C6]" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-xs text-[#FFF9F5]">
                  FAITH ENGINEERING WORKS
                </p>
                <p className="text-gray-100 mt-1 leading-relaxed text-sm">
                  <strong className="font-semibold text-white">Unit: I</strong>
                  <br />
                  G-129, Sec.1, DSIIDC, Bawana Industrial Area, New Delhi-110039
                </p>
                <p className="text-gray-100 mt-2 leading-relaxed text-sm">
                  <strong className="font-semibold text-white">Unit: II</strong>
                  <br />
                  Plot No-728, Khasra No-154 Near Beakon Public School, Pooth
                  Khurd, Delhi-110039
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright & Attribution Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="pt-4 text-center text-sm text-gray-200"
        >
          <p className="flex flex-wrap items-center justify-center gap-x-3">
            <span>Copyright © 2026 FAITH ENGINEERING WORKS</span>
            <span>All Right Reserved</span>
            <span className="text-gray-400">|</span>
            <span>
              Powered by{" "}
              <a
                href="https://www.cybertricksmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FEF3C6] hover:text-[#ff3b5c] font-bold"
              >
                CYBERTRICKS Media Pvt Ltd
              </a>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
