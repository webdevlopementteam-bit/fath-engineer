"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HDPEBlowMoldingMachineUttarakhand() {
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
    {
      label: "Areas served",
      value: "Uttarakhand, including Haridwar, Rudrapur, and Dehradun",
    },
  ];

  const hdpePoints = [
    { title: "Resists chemicals, oils, and detergents", desc: "" },
    { title: "Handles rough use without cracking easily", desc: "" },
    { title: "Stays strong even in outdoor storage", desc: "" },
    { title: "Is safe for food and liquid packaging", desc: "" },
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
      desc: "— settings are tuned to how HDPE melts and cools, keeping wall thickness even and consistent",
    },
    {
      title: "Auto De-Flashing",
      desc: "— removes extra plastic automatically during the cycle, no manual trimming needed",
    },
    {
      title: "Multiple size options",
      desc: "— from small 100ml bottles to large 10-litre industrial containers",
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
      title: "Faster support",
      desc: "— Uttarakhand is a short road journey from our Delhi facility, so installation and repairs don’t take weeks to arrange",
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
      title: "Pharmaceutical packaging",
      desc: "— a major need in Haridwar’s SIDCUL industrial area, where HDPE and PP containers are common",
    },
    {
      title: "Chemical and detergent packaging",
      desc: "— where chemical resistance matters most",
    },
    {
      title: "Edible oil and lubricant bottling",
      desc: "— containers that need to stay leak-proof",
    },
    {
      title: "Water and beverage containers",
      desc: "— for outdoor storage and daily use",
    },
    {
      title: "Cosmetic packaging",
      desc: "— where consistent quality is important",
    },
  ];

  const whyChoosePoints = [
    {
      title: "25+ years of experience",
      desc: "— manufacturing blow moulding machines since 2000, with hands-on expertise in HDPE processing specifically.",
    },
    {
      title: "In-house manufacturing",
      desc: "— every machine is designed, built, and tested at our own facility in Bawana Industrial Area, Delhi. We don’t resell equipment made by someone else.",
    },
    {
      title: "Wide specification range",
      desc: "— capacities from 100ml to 10 litres, with Single Head, Double Head, and Triple Head configurations, in Single Stage, Double Stage, or Accumulator Head setups.",
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
      title: "Quick reach to Uttarakhand",
      desc: "— a same-day or next-day road journey from Delhi means faster installation and repair response than a manufacturer based much further away.",
    },
  ];

  const faqs = [
    {
      q: "Q1. Is Faith Engineering Works an HDPE blow moulding machine manufacturer in Uttarakhand?",
      a: "Yes. We manufacture HDPE-calibrated machines in-house in Delhi and support businesses across Uttarakhand, including Haridwar, Rudrapur, and Dehradun.",
    },
    {
      q: "Q2. What is HDPE, and why is it used for blow moulded containers?",
      a: "HDPE stands for High-Density Polyethylene. It’s used because it resists chemicals, survives rough handling, and stays strong even in outdoor storage.",
    },
    {
      q: "Q3. What is an HDPE blow moulding machine manufacturer?",
      a: "It’s a company that designs, builds, and tests machines specifically calibrated for HDPE, rather than reselling a generic plastic machine that hasn’t been tuned for HDPE’s specific melting and cooling behaviour.",
    },
    {
      q: "Q4. Does Faith Engineering Works serve Haridwar specifically?",
      a: "Yes. As an HDPE blow moulding machine manufacturer in Haridwar, we provide manufacturing, delivery, and after-sales support directly to businesses in the SIDCUL industrial area and beyond.",
    },
    {
      q: "Q5. What sizes of containers can Faith Engineering Works’ machines produce?",
      a: "Our machines make containers from 100ml to 10 litres, covering small bottles to large industrial containers.",
    },
    {
      q: "Q6. Why does distance from Delhi matter for buyers in Uttarakhand?",
      a: "Delhi is a same-day or next-day road journey from Haridwar and other Uttarakhand industrial areas, which means faster installation scheduling, quicker repair response, and shorter delivery time for spare parts.",
    },
    {
      q: "Q7. Can Faith Engineering Works customise a machine for my specific container?",
      a: "Yes. Machines and moulds are set up based on your container’s size, shape, and material.",
    },
    {
      q: "Q8. How can I check Faith Engineering Works’ track record myself?",
      a: "Our GST TrustSEAL profile on IndiaMART has been active for over 15 years, with a 4.6-star rating from real client reviews.",
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
              Faith Engineering Works is the best{" "}
              <Link
                href="/"
                className="text-[#d90429] font-bold no-underline transition-colors duration-200"
              >
                HDPE Blow Moulding Machine Manufacturer in Uttarakhand
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

        {/* SECTION 2: Buy Automatic HDPE Blow Moulding Machine Manufacturer in Uttarakhand — Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Buy Automatic HDPE Blow Moulding Machine Manufacturer in Uttarakhand
            — Faith Engineering Works
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works is an{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Uttarakhand
            </Link>
            , building machines in-house in Delhi since 2000. We supply and
            support businesses across the state, including Haridwar, Rudrapur,
            and Dehradun, with machines specifically set up for HDPE — not just
            “plastic” in general.
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
            HDPE stands for High-Density Polyethylene. It’s a strong,
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

        {/* SECTION 4: What Is an HDPE Blow Moulding Machine Manufacturer? */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            What Is an HDPE Blow Moulding Machine Manufacturer?
          </h2>
          <p className="text-gray-700">
            An{" "}
            <Link
              href="/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Haridwar
            </Link>{" "}
            is a company that designs, builds, and tests machines specifically
            for making HDPE containers — not a company that simply sells a
            generic plastic machine and calls it suitable for HDPE. The
            difference matters because HDPE melts and cools differently from
            other plastics, so the machine’s settings need to be tuned for it
            specifically. A genuine manufacturer can explain exactly how their
            machine handles HDPE, adjust it for your container design, and
            support it after you buy it — rather than reselling equipment they
            didn’t design and can’t fully explain.
          </p>
        </motion.div>

        {/* SECTION 5: How an HDPE Blow Moulding Machine Works */}
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
          <p className="text-gray-700">The process is simple to follow:</p>
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

        {/* SECTION 6: Technical Specifications & Key Features and Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              Technical Specifications
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

        {/* SECTION 7: Types of Machines We Manufacture */}
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

        {/* SECTION 8: Where These Machines Are Used */}
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
            HDPE blow moulding machines are used across many industries in
            Uttarakhand:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {applicationUses.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 9: Why Choose Faith Engineering Works */}
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
          <p className="text-gray-700">
            <Link
              href="/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              Faith Engineering Works
            </Link>{" "}
            is a trusted{" "}
            <strong>HDPE Blow Moulding Machine Manufacturer</strong>, known for
            building machines that are genuinely calibrated for HDPE rather than
            adjusted from a generic plastic setup.
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {whyChoosePoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 10: Get in Touch */}
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
              HDPE blow moulding machine manufacturer in Uttarakhand
            </Link>{" "}
            or specifically an{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Haridwar
            </Link>
            ? Faith Engineering Works has built HDPE-calibrated machines
            in-house from Delhi since 2000, close enough to support you quickly.
            Share your container size and production needs, and we’ll recommend
            a machine that actually fits.
          </p>
        </motion.div>

        {/* SECTION 11: Frequently Asked Questions */}
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
