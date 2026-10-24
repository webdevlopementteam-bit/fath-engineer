"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = ({
  phoneNumber = "919871580960", // Replace with your phone number (with country code, no +)
  message = "Hello! I would like to know more about your products and services.",
}) => {
  // Format the WhatsApp URL safely
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group relative flex items-center justify-center md:justify-start gap-3 
                   bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2fe672] 
                   text-white p-3.5 md:py-3 md:px-5 rounded-full 
                   shadow-[0_8px_30px_rgb(37,211,102,0.4)] 
                   hover:shadow-[0_12px_35px_rgb(37,211,102,0.65)] 
                   hover:-translate-y-1 active:translate-y-0 
                   transition-all duration-300 ease-out border border-white/20"
      >
        {/* Subtle Animated Pulse Ring in Background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 duration-1000 -z-10"></span>

        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <FaWhatsapp className="w-7 h-7 md:w-7 md:h-7 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
        </div>

        {/* Desktop Text (Hidden on Mobile, Shown on md/Laptop & up) */}
        <div className="hidden md:flex flex-col text-left pr-1">
          <span className="text-sm font-bold tracking-wide text-white leading-tight whitespace-nowrap">
            Contact Us
          </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
