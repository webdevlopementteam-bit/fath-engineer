"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function ExportMapSection() {
  return (
    <>
      <Breadcrumb title="Global Export" />
      <section className="relative w-full overflow-hidden bg-[#FFFBF8] py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Map Image with Framer Motion (No Container Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[16/9] w-full overflow-hidden"
          >
            <Image
              src="/global-export/map.png"
              alt="Global Export Network Map"
              fill
              priority
              className="object-contain object-center"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
