"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HDPEBlowMoldingMachine() {
  const specs = [
    { label: "Blowing Capacity", value: "50 ml" },
    { label: "Screw Diameter", value: "25 mm" },
    { label: "Maximum Plasticizing Capacity", value: "15 Kg/Hr" },
    { label: "Production Capacity", value: "150 BPH" },
    { label: "Country of Origin", value: "Made in India" },
  ];

  const specsTableData = [
    { label: "Capacity range", value: "100ml to 10 litres" },
    { label: "Head types", value: "Single Head, Double Head, Triple Head" },
    {
      label: "Stage types",
      value: "Single Stage, Double Stage, Accumulator Head",
    },
    {
      label: "Material processed",
      value: "HDPE, PP, and other common plastics",
    },
    { label: "Key feature", value: "Auto De-Flashing system" },
    {
      label: "Manufacturing location",
      value: "Bawana Industrial Area, Delhi (in-house)",
    },
    { label: "Experience", value: "25+ years, since 2000" },
  ];

  const hdpePoints = [
    {
      title: "Resists chemicals, oils, and detergents",
      desc: "",
    },
    {
      title: "Handles rough use without cracking easily",
      desc: "",
    },
    {
      title: "Stays strong even in outdoor storage",
      desc: "",
    },
    {
      title: "Is safe for food and liquid packaging",
      desc: "",
    },
  ];

  const processSteps = [
    "HDPE plastic granules are melted inside the machine.",
    "The melted plastic is pushed out as a hollow tube, called a parison.",
    "This tube is placed inside a mould shaped like the final container.",
    "Air is blown into the tube, pushing the plastic against the mould walls.",
    "The plastic cools, the mould opens, and the finished container comes out.",
  ];

  const keyFeatures = [
    {
      title: "Built specifically for HDPE",
      desc: "— settings are tuned to how HDPE melts and cools, keeping wall thickness even",
    },
    {
      title: "Auto De-Flashing",
      desc: "— removes extra plastic automatically, no manual trimming needed",
    },
    {
      title: "Multiple size options",
      desc: "— from small 100ml bottles to large 10-litre containers",
    },
    {
      title: "Customisable",
      desc: "— machines and moulds are set up around your exact container design",
    },
    {
      title: "Low maintenance",
      desc: "— built for daily, long-term industrial use",
    },
    {
      title: "Direct support",
      desc: "— since we build the machine ourselves, we can fix issues faster",
    },
  ];

  const machineTypes = [
    {
      title: "Single Head Machines",
      desc: "— good for smaller businesses and lower output needs",
    },
    {
      title: "Double Head Machines",
      desc: "— higher output, useful for growing production",
    },
    {
      title: "Triple Head Machines",
      desc: "— for large-scale, high-volume production",
    },
    {
      title: "Single Stage Machines",
      desc: "— a simple, continuous moulding process",
    },
    {
      title: "Double Stage Machines",
      desc: "— separates the process into two steps for better control",
    },
    {
      title: "Accumulator Head Machines",
      desc: "— best for large containers (5 litres and above), giving more even wall thickness",
    },
  ];

  const applicationUses = [
    {
      title: "Chemical and detergent packaging",
      desc: "— where chemical resistance matters most",
    },
    {
      title: "Edible oil and lubricant bottling",
      desc: "— containers that need to be leak-proof",
    },
    {
      title: "Water and beverage containers",
      desc: "— for outdoor storage and daily use",
    },
    {
      title: "Industrial drums and jerry cans",
      desc: "— for mining, manufacturing, and heavy industry, common across Ranchi, Jamshedpur, and Dhanbad",
    },
    {
      title: "Cosmetic and pharmaceutical packaging",
      desc: "— where consistent quality is important",
    },
  ];

  const whyChoosePoints = [
    {
      title: "25+ years of experience",
      desc: "— manufacturing blow moulding machines since 2000, with deep, hands-on expertise in HDPE processing specifically.",
    },
    {
      title: "In-house manufacturing",
      desc: "— every machine is designed, built, and tested at our own facility in Bawana Industrial Area, Delhi. We don’t resell equipment made by someone else.",
    },
    {
      title: "Wide specification range",
      desc: "— capacities from 100ml to 10 litres, with Single Head, Double Head, and Triple Head configurations, and Single Stage, Double Stage, or Accumulator Head setups.",
    },
    {
      title: "HDPE-specific expertise",
      desc: "— our machines are calibrated for how HDPE actually melts and cools, not set up loosely for “plastic” in general.",
    },
    {
      title: "Verified track record",
      desc: "— an active GST TrustSEAL profile on IndiaMART for over 15 years, with a 4.6-star rating from real client reviews.",
    },
    {
      title: "Direct after-sales support",
      desc: "— installation help, spare parts, and troubleshooting come straight from the team that built your machine.",
    },
  ];

  const faqs = [
    {
      q: "Q1. Is Faith Engineering Works an HDPE blow moulding machine manufacturer in Jharkhand?",
      a: "Yes. We manufacture HDPE-calibrated machines in-house in Delhi and support businesses across Jharkhand, including Ranchi, Jamshedpur, and Dhanbad.",
    },
    {
      q: "Q2. What is HDPE, and why is it used for blow moulded containers?",
      a: "HDPE stands for High-Density Polyethylene. It is used because it resists chemicals, survives rough handling, and stays strong even in outdoor storage.",
    },
    {
      q: "Q3. What sizes of containers can Faith Engineering Works’ machines produce?",
      a: "Our machines make containers from 100ml to 10 litres, covering small bottles to large industrial containers.",
    },
    {
      q: "Q4. What is the difference between Single Head, Double Head, and Triple Head machines?",
      a: "A Single Head machine makes one container per cycle. A Double Head machine makes two, and a Triple Head machine makes three, giving higher output for larger production needs.",
    },
    {
      q: "Q5. What does Auto De-Flashing mean?",
      a: "It means the machine automatically removes extra plastic from the container during the moulding process, so no one needs to trim it by hand.",
    },
    {
      q: "Q6. Can Faith Engineering Works customise a machine for my specific container?",
      a: "Yes. Machines and moulds are set up based on your container’s size, shape, and material.",
    },
    {
      q: "Q7. How long has Faith Engineering Works been manufacturing HDPE machines?",
      a: "Since 2000 — over 25 years of in-house manufacturing experience, verified through a 15+ year IndiaMART track record.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1c1c1c] text-[16px] lg:text-[18px] leading-relaxed font-sans pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 space-y-14 lg:space-y-20">
        {/* SECTION 1: Top Hero & Specification Table */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          <div className="lg:col-span-6 space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-gray-900 tracking-tight leading-tight">
              HDPE Blow Molding Machine
            </h1>
            <p className="text-gray-700">
              Faith Engineering Works is a trusted{" "}
              <Link
                href="/"
                className="text-[#d90429] font-bold no-underline transition-colors duration-200"
              >
                HDPE Blow Moulding Machine Manufacturer in Jharkhand
              </Link>
              , manufacturing HDPE-calibrated blow moulding machines in-house
              from Delhi since 2000. As a reliable HDPE blow moulding machine
              manufacturer, we also build Plastic Blow Moulding Machines and
              general Blow Moulding Machines, configured to meet the diverse
              requirements of the plastic manufacturing industry across Uttar
              Pradesh.
            </p>

            {/* Specifications Table */}
            <div className="overflow-hidden border border-gray-200 rounded-md shadow-sm bg-white mt-6">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {specs.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index !== specs.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <td className="py-3 px-4 font-semibold text-gray-800 w-1/2">
                        {item.label}
                      </td>
                      <td className="py-3 px-4 text-gray-700 w-1/2">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Machine Image */}
          <div className="lg:col-span-6 bg-[#fdeee4]/60 p-4 sm:p-6 rounded-2xl flex items-center justify-center shadow-inner">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px]">
              <Image
                src="/products/hopp.png"
                alt="HDPE Blow Molding Machine"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: Best HDPE Blow Moulding Machine Manufacturer in Jharkhand — Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Best HDPE Blow Moulding Machine Manufacturer in Jharkhand — Faith
            Engineering Works
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works is an{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Jharkhand
            </Link>
            , building machines in-house in Delhi since 2000. We supply and
            support businesses across the state, including Ranchi, Jamshedpur,
            and Dhanbad, with machines specifically set up for HDPE.
          </p>
        </motion.div>

        {/* SECTION 3: What Is HDPE? */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            What Is HDPE?
          </h2>
          <p className="text-gray-700">
            HDPE stands for High-Density Polyethylene. It is a strong,
            chemical-resistant plastic used to make bottles, drums, and
            containers. HDPE is popular because it:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {hdpePoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            This is why HDPE is the top choice for chemical bottles, lubricant
            containers, and industrial drums.
          </p>
        </motion.div>

        {/* SECTION 4: How an HDPE Blow Moulding Machine Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            How an HDPE Blow Moulding Machine Works
          </h2>
          <p className="text-gray-700">The process is simple to understand:</p>
          <ol className="list-decimal list-outside pl-6 space-y-2 text-gray-700">
            {processSteps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
          <p className="text-gray-700 pt-1">
            Each cycle takes only a few seconds, so one machine can make
            hundreds of containers every hour.
          </p>
        </motion.div>

        {/* SECTION 5: Specifications & Key Features and Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              Specifications
            </h2>
            <div className="overflow-hidden border border-gray-200 rounded-md shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {specsTableData.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index !== specsTableData.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <td className="py-3 px-4 font-semibold text-gray-800 w-1/2">
                        {item.label}
                      </td>
                      <td className="py-3 px-4 text-gray-700 w-1/2">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              Key Features and Benefits
            </h2>
            <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
              {keyFeatures.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* SECTION 6: Types of Machines We Manufacture */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Types of Machines We Manufacture
          </h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {machineTypes.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 7: Where These Machines Are Used */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Where These Machines Are Used
          </h2>
          <p className="text-gray-700">
            <Link
              href="/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machines
            </Link>{" "}
            are used across many industries:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {applicationUses.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 8: Why Choose Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Why Choose Faith Engineering Works
          </h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {whyChoosePoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 9: Get in Touch */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-700">
            Looking for a genuine{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Jharkhand
            </Link>
            ? Faith Engineering Works has built HDPE-calibrated machines
            in-house from Delhi since 2000. Share your container size and
            production needs, and we’ll recommend a machine that actually fits.
          </p>
        </motion.div>

        {/* SECTION 10: Frequently Asked Questions */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="space-y-1.5">
                <h3 className="font-bold text-gray-900">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
