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
  FaArrowRight,
} from "react-icons/fa";

// Reusable animation config for individual columns/elements
const scrollAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#4a0410] via-[#5c0617] to-[#38020b] text-white pt-16 pb-10 border-t border-[#7a1226]/50 overflow-hidden">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Expanded container width */}
      <div className="relative max-w-[96rem] mx-auto px-6 sm:px-10 lg:px-16 z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.4fr] gap-x-12 gap-y-12 pb-12 border-b border-[#7a1226]/60">
          
          {/* Column 1: About Us */}
          <motion.div {...scrollAnimation} className="space-y-6">
            <h3 className="text-xl font-serif tracking-wider uppercase text-amber-100 border-l-4 border-amber-500 pl-3 inline-block shadow-sm">
              About Us
            </h3>
            <p className="text-gray-200 text-base leading-relaxed font-light">
              <strong className="font-semibold text-white">Faith Engineering Works</strong> is a trusted manufacturer of high-performance Blow Moulding Machines, delivering advanced, durable, and efficient industrial machinery solutions since 2000. We are committed to quality, innovation, and customer satisfaction.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3.5 pt-2">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/faithengineeringworks?rdid=vgYo5nUO3YGwRb3U&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D4AuESQj3%2F#", label: "Facebook" },
                { icon: FaInstagram, href: "https://www.instagram.com/faithengieeringworks?igsh=YnBnNnltYTltZWJ5%20", label: "Instagram" },
                { icon: FaYoutube, href: "https://www.youtube.com/@faithengineeringworksnewdelhi", label: "YouTube" },
              ].map(({ icon: Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-amber-500 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 hover:text-black group"
                  aria-label={label}
                >
                  <Icon className="text-amber-100 group-hover:text-black text-base transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-serif tracking-wider uppercase text-amber-100 border-l-4 border-amber-500 pl-3 inline-block shadow-sm">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-base">
              {[
                { name: "HOME", href: "/" },
                { name: "ABOUT US", href: "/about" },
                { name: "PRODUCTS", href: "/products" },
                { name: "GALLERY", href: "/gallery" },
                { name: "GLOBAL EXPORT", href: "/global-export" },
                { name: "CONTACT US", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-amber-300 transition-all duration-200 flex items-center group font-medium text-sm tracking-wide"
                  >
                    <span className="inline-flex items-center justify-center w-5 mr-2 text-amber-400 group-hover:translate-x-1.5 transition-transform duration-200">
                      <FaArrowRight className="text-xs" />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Products */}
          <motion.div
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-serif tracking-wider uppercase text-amber-100 border-l-4 border-amber-500 pl-3 inline-block shadow-sm">
              Products
            </h3>
            <ul className="space-y-3.5 text-base">
              {[
                { name: "Plastic Blow Moulding Machine", href: "/products/plastic-blow-moulding-machine" },
                { name: "Blow Moulding Machines", href: "/products/blow-moulding-machines" },
                { name: "HDPE Blow Moulding Machine", href: "/products/hdpe-blow-moulding-machine" },
              ].map((product, idx) => (
                <li key={idx}>
                  <Link
                    href={product.href}
                    className="text-gray-200 hover:text-amber-300 transition-all duration-200 flex items-start group font-medium text-sm tracking-wide leading-snug"
                  >
                    <span className="inline-flex items-center justify-center w-5 mr-2 text-amber-400 shrink-0 group-hover:translate-x-1.5 transition-transform duration-200 mt-0.5">
                      <FaArrowRight className="text-xs" />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.3 }}
            className="space-y-6 text-base"
          >
            <h3 className="text-xl font-serif tracking-wider uppercase text-amber-100 border-l-4 border-amber-500 pl-3 inline-block shadow-sm">
              Contact Us
            </h3>

            {/* Phone */}
            <div className="flex items-start space-x-3.5 group">
              <div className="bg-white/10 border border-white/10 w-9 h-9 rounded-xl flex items-center justify-center text-amber-300 shrink-0 shadow-md group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                <FaPhoneAlt className="text-xs" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-[11px] text-amber-200/80">
                  Phone
                </p>
                <a
                  href="tel:+919871580960"
                  className="hover:text-amber-300 transition-colors font-medium text-base tracking-wide"
                >
                  +91 9871580960
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3.5 group">
              <div className="bg-white/10 border border-white/10 w-9 h-9 rounded-xl flex items-center justify-center text-amber-300 shrink-0 shadow-md group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                <FaEnvelope className="text-xs" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-[11px] text-amber-200/80">
                  Email
                </p>
                <a
                  href="mailto:faithengineering4@gmail.com"
                  className="hover:text-amber-300 transition-colors block font-medium text-sm sm:text-base break-all"
                >
                  faithengineering4@gmail.com
                </a>
                <a
                  href="mailto:faithengineering39@yahoo.co.in"
                  className="hover:text-amber-300 transition-colors block font-medium text-sm sm:text-base break-all"
                >
                  faithengineering39@yahoo.co.in
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3.5 group">
              <div className="bg-white/10 border border-white/10 w-9 h-9 rounded-xl flex items-center justify-center text-amber-300 shrink-0 shadow-md group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                <FaMapMarkerAlt className="text-xs" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-[11px] text-amber-200/80">
                  Faith Engineering Works
                </p>
                <p className="text-gray-200 mt-1 leading-relaxed text-sm font-light">
                  <strong className="font-semibold text-white">Unit: I</strong>
                  <br />
                  G-129, Sec.1, DSIIDC, Bawana Industrial Area, New Delhi-110039
                </p>
                <p className="text-gray-200 mt-2 leading-relaxed text-sm font-light">
                  <strong className="font-semibold text-white">Unit: II</strong>
                  <br />
                  Plot No-728, Khasra No-154 Near Beakon Public School, Pooth Khurd, Delhi-110039
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
          className="pt-6 text-center text-sm text-gray-300 font-light"
        >
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Copyright © 2026 FAITH ENGINEERING WORKS.</span>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span>All Rights Reserved</span>
            <span className="text-amber-400">|</span>
            <span>
              Powered by{" "}
              <a
                href="https://www.cybertricksmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-amber-400 font-semibold underline underline-offset-4 decoration-amber-500/50 transition-colors"
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