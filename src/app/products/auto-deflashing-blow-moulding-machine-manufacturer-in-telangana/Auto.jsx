"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { ProductGallery } from "@/components/Productsgrid"; // ya jo bhi aapka filename ho

// Animation variants for smooth scroll reveals
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function Auto() {
  return (
    <main className="min-h-screen pb-10 bg-[#FFF9F5] relative overflow-x-clip">
      {/* Subtle Ambient Background Glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/4 -left-40 w-96 h-96 bg-red-200/25 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-200/25 rounded-full blur-3xl pointer-events-none"
      />

      <Breadcrumb title="Auto Deflashing Blow Moulding Machine" />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 lg:gap-12">
          {/* Left Side: Image Gallery Component */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5 md:sticky md:top-20"
          >
            <ProductGallery images={["/products/a1.png", "/products/p1.png"]} />
          </motion.section>

          {/* Right Side: Custom Content & Tables */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 flex flex-col gap-6"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 leading-tight"
              >
                Auto deflashing Blow Moulding Machine Manufacturer in Telangana
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base"
              >
                <strong className="text-gray-900">
                  1 Litre Triple Head Single Stage With Auto De-Flashing (Model
                  – FEW1000H)
                </strong>{" "}
                This is one of the superior quality FEW1000H Blow Moulding
                Machine in the industry. As a prominent Manufacturer, Exporter
                and Supplier of the{" "}
                <Link
                  href="/contact-us"
                  className="text-red-600 hover:text-red-700 font-semibold no-underline transition-colors"
                >
                  Auto Deflashing Blow Moulding Machine Manufacturer in
                  Telangana
                </Link>
                , we ensure to provide machines with best technical
                specifications. Not just this, Blow Moulding Machines provided
                by us is also available at market competitive prices.
              </motion.p>
            </motion.div>

            {/* Table 1: SPECIFICATION DATA */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm mt-4"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="bg-[#555555] text-white text-center py-3 px-4 font-bold uppercase tracking-wider text-sm"
                    >
                      Specification Data
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Screw Diameter
                    </td>
                    <td className="py-3 px-4 text-gray-800">50 mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Maximum Opening
                    </td>
                    <td className="py-3 px-4 text-gray-800">200 MM</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Minimum Opening
                    </td>
                    <td className="py-3 px-4 text-gray-800">150 mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Ratio
                    </td>
                    <td className="py-3 px-4 text-gray-800">21 L/D</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Blowing Capacity
                    </td>
                    <td className="py-3 px-4 text-gray-800">100ml to 500ml</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Mould Thickness
                    </td>
                    <td className="py-3 px-4 text-gray-800">200 mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Mould Length
                    </td>
                    <td className="py-3 px-4 text-gray-800">340 mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Mould Width
                    </td>
                    <td className="py-3 px-4 text-gray-800">225 mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Dry Cycles/min
                    </td>
                    <td className="py-3 px-4 text-gray-800">15 Nos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Max Container Dia
                    </td>
                    <td className="py-3 px-4 text-gray-800">130 mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Air Requirements
                    </td>
                    <td className="py-3 px-4 text-gray-800">12 CFM</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* Table 2: ELECTRIC DATA */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm mt-4"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="bg-[#555555] text-white text-center py-3 px-4 font-bold uppercase tracking-wider text-sm"
                    >
                      Electric Data
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Extruder Motor
                    </td>
                    <td className="py-3 px-4 text-gray-800">7.4kw/7.5hp</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Hydraulic Motor
                    </td>
                    <td className="py-3 px-4 text-gray-800">3.7kw/5hp</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Oil Tank Capacity
                    </td>
                    <td className="py-3 px-4 text-gray-800">180Ltr.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Heating Zone
                    </td>
                    <td className="py-3 px-4 text-gray-800">5 Nos.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Heating Load
                    </td>
                    <td className="py-3 px-4 text-gray-800">12 to 14 kw</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Blower Load
                    </td>
                    <td className="py-3 px-4 text-gray-800">.25kw/.18hp</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      No. of Blower
                    </td>
                    <td className="py-3 px-4 text-gray-800">2 Nos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Total Power Con. of M/C
                    </td>
                    <td className="py-3 px-4 text-gray-800">23-25 kw</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* Table 3: DIMENSION & WEIGHT OF MACHINE */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm mt-4"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="bg-[#555555] text-white text-center py-3 px-4 font-bold uppercase tracking-wider text-sm"
                    >
                      Dimension & Weight of Machine
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Machine Weight
                    </td>
                    <td className="py-3 px-4 text-gray-800">2000kg (Aprox.)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Machine Dimension LxWxD
                    </td>
                    <td className="py-3 px-4 text-gray-800">83” x 48” x 80”</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Panel Weight
                    </td>
                    <td className="py-3 px-4 text-gray-800">120kg (Aprox.)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border-r border-gray-200">
                      Panel Dimension LxWxD
                    </td>
                    <td className="py-3 px-4 text-gray-800">55” x 28” x 17”</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.section>
        </div>

        {/* --- FULL COMPREHENSIVE DESCRIPTION SECTION FROM SCREENSHOTS --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-20 max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 space-y-10"
        >
          <motion.h2 variants={fadeInUp} className="mb-8 text-center">
            <span className="inline-flex flex-col items-center">
              <span className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
                Product details
              </span>

              <span className="bg-gradient-to-r from-red-700 via-rose-500 to-red-700 bg-clip-text text-3xl font-extrabold tracking-[0.14em] text-transparent drop-shadow-sm sm:text-4xl">
                DESCRIPTION
              </span>

              <span className="mt-4 flex items-center gap-2">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-red-300" />
                <span className="h-2 w-2 rotate-45 rounded-sm bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.45)]" />
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-red-300" />
              </span>
            </span>
          </motion.h2>

          {/* Main Screenshot Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-snug"
            >
              Buy Auto Deflashing Blow Moulding Machine Manufacturer in
              Telangana — Faith Engineering Works
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-gray-700 text-base leading-relaxed"
            >
              Faith Engineering Works is a leading{" "}
              <Link
                href="/contact-us"
                className="text-red-600 hover:text-red-700 font-semibold no-underline transition-colors"
              >
                auto deflashing blow moulding machine manufacturer in Telangana
              </Link>
              , manufacturing machines in-house from our Delhi facility since
              2000. We supply and support businesses across the state, including
              Hyderabad.
            </motion.p>
          </motion.div>

          {/* Section: Why Flash Matters */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-serif font-bold text-gray-900 mb-3"
            >
              Why “Who Removes the Flash” Matters
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-700 text-base leading-relaxed"
            >
              Flash is the extra plastic that escapes at a mould’s seams —
              usually along the base, handles, or edges. On a manual setup, a
              worker has to cut it off by hand after every single piece. On our
              machines, a cutting mechanism trims it automatically as part of
              the moulding cycle, so no one has to stand there doing it. Left
              untrimmed or poorly trimmed, flash causes weak seams, rough edges,
              and — for containers holding liquids or chemicals — a real risk of
              leaks.
            </motion.p>
          </motion.div>

          {/* Section: Process Works */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-serif font-bold text-gray-900 mb-3"
            >
              How Our Auto Deflashing Process Works
            </motion.h3>
            <motion.ol
              variants={fadeInUp}
              className="list-decimal list-inside space-y-2 text-gray-700 text-base"
            >
              <li>
                The container forms inside the mould, and excess plastic pushes
                out along the seam lines.
              </li>
              <li>The mould opens with the flash still attached.</li>
              <li>
                A cutting mechanism trims it automatically, timed exactly to the
                machine’s cycle.
              </li>
              <li>
                The clean container moves on while the next piece starts
                forming.
              </li>
              <li>
                The trimmed plastic is collected, often for reuse as raw
                material.
              </li>
            </motion.ol>
          </motion.div>

          {/* Section: Comparison Table */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-serif font-bold text-gray-900 mb-4"
            >
              Manual Trimming vs. Auto Deflashing: A Direct Comparison
            </motion.h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-900">
                    <th className="py-3 px-4 border-r border-gray-200 font-bold">
                      Feature
                    </th>
                    <th className="py-3 px-4 border-r border-gray-200 font-bold">
                      Manual Trimming
                    </th>
                    <th className="py-3 px-4 font-bold">Auto Deflashing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Who removes the flash
                    </td>
                    <td className="py-3 px-4 text-gray-600 border-r border-gray-200">
                      A worker, by hand, after each cycle
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      The machine, automatically, during the cycle
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Consistency
                    </td>
                    <td className="py-3 px-4 text-gray-600 border-r border-gray-200">
                      Varies by operator and time of day
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Same result every cycle
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Labour needed
                    </td>
                    <td className="py-3 px-4 text-gray-600 border-r border-gray-200">
                      Dedicated workers per shift for trimming
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      No dedicated trimming labour needed
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Speed
                    </td>
                    <td className="py-3 px-4 text-gray-600 border-r border-gray-200">
                      Limited by how fast a person can trim
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Matches the machine’s full production speed
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Waste plastic
                    </td>
                    <td className="py-3 px-4 text-gray-600 border-r border-gray-200">
                      Often discarded, uncollected
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Can be collected and reused
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <motion.p
              variants={fadeInUp}
              className="mt-3 text-xs text-gray-500 italic"
            >
              Over a single shift, this gap compounds. Over a year, it’s usually
              the difference that pays for the machine.
            </motion.p>
          </motion.div>

          {/* Section: Technical Specifications Table */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-serif font-bold text-gray-900 mb-3"
            >
              Technical Specifications Summary
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-700 text-base mb-4"
            >
              As an{" "}
              <Link
                href="/"
                className="text-red-600 hover:text-red-700 font-semibold no-underline transition-colors"
              >
                auto deflashing blow moulding machine manufacturer in Telangana
              </Link>
              , here’s what our machines are built with:
            </motion.p>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200 w-1/3">
                      Key feature
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Auto De-Flashing system built into the cycle
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Capacity range
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      100ml to 10 litres
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Head types
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Single Head, Double Head, Triple Head
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Stage types
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Single Stage, Double Stage, Accumulator Head
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Material processed
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      HDPE, PP, and other common plastics
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Manufacturing location
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Bawana Industrial Area, Delhi (in-house)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-800 border-r border-gray-200">
                      Areas served
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Telangana, including Hyderabad
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section: Industries in Telangana */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-serif font-bold text-gray-900 mb-3"
            >
              Where This Matters Most: Industries in Telangana
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-700 text-base leading-relaxed"
            >
              For <strong>chemical and detergent packaging</strong>, an
              inconsistent seam is a leak risk, not just a cosmetic flaw. For{" "}
              <strong>edible oil and lubricant bottling</strong>, high volumes
              make manual trimming labour costs add up fast. For{" "}
              <strong>Hyderabad’s pharmaceutical sector</strong>, consistency
              isn’t optional — it’s expected. As an{" "}
              <Link
                href="/"
                className="text-red-600 hover:text-red-700 font-semibold no-underline transition-colors"
              >
                auto deflashing blow moulding machine manufacturer in Hyderabad
              </Link>
              , we build machines with exactly these industries in mind.
            </motion.p>
          </motion.div>

          {/* Section: Manufacturing in Delhi */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-serif font-bold text-gray-900 mb-3"
            >
              Manufacturing in Delhi, Genuinely Supporting Clients in Telangana
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-700 text-base leading-relaxed"
            >
              Telangana is far from Delhi — no point pretending otherwise.
              Machines ship through the same freight networks we use for
              exports, installation is scheduled in advance with our team
              travelling to your facility, and troubleshooting starts with a
              call or video before any on-site visit is arranged. Distance
              changes the timeline. It doesn’t change how seriously we take
              fixing a problem.
            </motion.p>
          </motion.div>

          {/* Section: Why Choose Faith Engineering Works */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-serif font-bold text-gray-900 mb-3"
            >
              Why Choose Faith Engineering Works
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-700 text-base mb-4 leading-relaxed"
            >
              Faith Engineering Works is the best{" "}
              <Link
                href="/contact-us"
                className="text-red-600 hover:text-red-700 font-semibold no-underline transition-colors"
              >
                Auto deflashing Blow Moulding Machine Manufacturer in Hyderabad
              </Link>
              , known for building machines that complete the entire cycle on
              their own — not machines that only look automatic on a brochure.
            </motion.p>
            <motion.ul
              variants={fadeInUp}
              className="list-disc list-inside space-y-2 text-gray-700 text-base"
            >
              <li>
                <strong>25+ years of experience</strong> — manufacturing blow
                moulding machines since 2000, with hands-on expertise in
                automatic trimming systems specifically.
              </li>
              <li>
                <strong>In-house manufacturing</strong> — every machine is
                designed, built, and tested at our own facility in Delhi, not
                resold from someone else.
              </li>
              <li>
                <strong>Verified track record</strong> — an active GST TrustSEAL
                profile on IndiaMART for over 15 years, with a 4.6-star rating
                from real client reviews.
              </li>
              <li>
                <strong>Wide specification range</strong> — 100ml to 10 litres,
                across Single Head, Double Head, and Triple Head configurations.
              </li>
            </motion.ul>
          </motion.div>

          {/* Section: Final Conclusion */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-serif font-bold text-gray-900 mb-3"
            >
              Final Conclusion
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-700 text-base leading-relaxed"
            >
              If the comparison table above matches a problem you’re already
              dealing with — trimming that’s slowing down your line or eating
              into labour costs — we’d rather talk through your container size
              and volume than send you a brochure. Faith Engineering Works has
              built{" "}
              <Link
                href="/"
                className="text-red-600 hover:text-red-700 font-semibold no-underline transition-colors"
              >
                Auto deflashing Blow Moulding Machine Manufacturer in Telangana
              </Link>{" "}
              since 2000.
            </motion.p>
          </motion.div>

          {/* Section: Frequently Asked Questions */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="border-t border-gray-200 pt-8 space-y-6"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-serif font-bold text-gray-900"
            >
              Frequently Asked Questions
            </motion.h3>

            <motion.div variants={fadeInUp} className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Q1. Is Faith Engineering Works an auto deflashing blow
                  moulding machine manufacturer in Telangana?
                </h4>
                <p className="text-sm mt-1">
                  Yes. We manufacture machines with automatic trimming systems
                  in-house in Delhi and support businesses across Telangana,
                  including Hyderabad.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Q2. How much does an auto deflashing blow moulding machine
                  cost compared to a manual-trim machine?
                </h4>
                <p className="text-sm mt-1">
                  Auto deflashing machines typically cost more upfront, but
                  saved labour cost and consistent output often make up the
                  difference within a year or two. Share your details for an
                  accurate comparison.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Q3. What is flash, and why does removing it automatically
                  matter more at scale?
                </h4>
                <p className="text-sm mt-1">
                  Flash is the excess plastic left at a mould’s seams. At higher
                  volumes, the labour cost and inconsistency of manual trimming
                  add up fast, which is where automatic trimming pays off.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Q4. Does Faith Engineering Works serve Hyderabad specifically?
                </h4>
                <p className="text-sm mt-1">
                  Yes. As an auto deflashing blow moulding machine manufacturer
                  in Hyderabad, we provide manufacturing, delivery, and
                  after-sales support directly to businesses in the city.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Q5. What happens to the plastic that gets trimmed off?
                </h4>
                <p className="text-sm mt-1">
                  It’s collected during the cycle and can often be reused as raw
                  material, reducing overall material waste.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Q6. How does delivery and support work between Delhi and
                  Telangana?
                </h4>
                <p className="text-sm mt-1">
                  Machines ship through the same freight networks used for our
                  exports. Installation is scheduled in advance, and most issues
                  are diagnosed remotely first.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Q7. Can Faith Engineering Works customise a machine for my
                  specific container design?
                </h4>
                <p className="text-sm mt-1">
                  Yes. Machines and moulds are set up based on your container’s
                  size, shape, and the exact points where flash forms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Q8. How can I check Faith Engineering Works’ track record
                  independently?
                </h4>
                <p className="text-sm mt-1">
                  Our GST TrustSEAL profile on IndiaMART has been active for
                  over 15 years, with a 4.6-star rating from real client
                  reviews.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}

export default Auto;
