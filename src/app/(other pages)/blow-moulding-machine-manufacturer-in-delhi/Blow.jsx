"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlowMouldingMachineManufacturerInDelhi() {
  const specs = [
    { label: "Blowing Capacity", value: "1 Ltr" },
    { label: "Screw Diameter", value: "55 mm" },
    { label: "Maximum Plasticizing Capacity", value: "30 Kg/Hr" },
    { label: "Production Capacity", value: "10 Ton" },
    { label: "Dry Cycle / Min", value: "20" },
    { label: "Blowing Pressure (Mpa)", value: "0.8" },
    { label: "Heating Zones", value: "5" },
    { label: "Mould Opening Stroke", value: "200 mm" },
    { label: "Max Container Dia", value: "125 mm" },
    { label: "Country of Origin", value: "Made in India" },
  ];

  const mattersPoints = [
    {
      title: "You can visit before you buy",
      desc: "seeing a machine running in person tells you more about build quality than any brochure or call.",
    },
    {
      title: "Faster installation and support",
      desc: "being local means our team can reach your facility quickly for setup, troubleshooting, or servicing.",
    },
    {
      title: "Direct communication with the people who built your machine",
      desc: "no call centre, no reseller passing along your query.",
    },
    {
      title: "Easier spare parts access",
      desc: "parts don’t need to travel across the country to reach you.",
    },
  ];

  const manufacturingPoints = [
    "Single Head, Double Head, and Triple Head machine configurations",
    "Single Stage, Double Stage, and Accumulator Head options",
    "Capacity range of 100ml to 10 litres",
    "Auto De-Flashing systems for a clean, consistent finish without manual trimming",
    "Machines suited for HDPE, PP, and other commonly processed plastics",
  ];

  const whyChoosePoints = [
    {
      title: "25+ years of manufacturing experience",
      desc: "based in Delhi since 2000",
    },
    {
      title: "In-house manufacturing",
      desc: "direct control over quality at every stage, from extrusion to final testing",
    },
    {
      title: "Factory visits welcome",
      desc: "see your machine’s build quality for yourself before you commit",
    },
    {
      title: "Customised configurations",
      desc: "based on your container size and production volume",
    },
    {
      title: "Direct service and support",
      desc: "installation guidance and after-sales help from the same team that built your machine",
    },
  ];

  const faqs = [
    {
      q: "Q1. Is Faith Engineering Works a genuine blow moulding machine manufacturer in Delhi, or a trader/reseller?",
      a: "Faith Engineering Works manufactures machines in-house at our own facility in Bawana Industrial Area, Delhi, since 2000. We do not outsource production or resell machines built by other companies.",
    },
    {
      q: "Q2. Can I visit the factory before buying a machine?",
      a: "Yes. Since our machines are built in-house in Delhi, buyers are welcome to visit the facility to see production quality and machines in operation before making a decision.",
    },
    {
      q: "Q3. What capacity range of blow moulding machines does Faith Engineering Works manufacture?",
      a: "Faith Engineering Works manufactures machines with capacities from 100ml to 10 litres, covering small bottles to large industrial containers.",
    },
    {
      q: "Q4. What machine configurations are available?",
      a: "We manufacture Single Head, Double Head, and Triple Head machines, in Single Stage, Double Stage, and Accumulator Head configurations, with Auto De-Flashing systems.",
    },
    {
      q: "Q5. Why does it matter whether a Delhi manufacturer builds machines in-house?",
      a: "In-house manufacturers give direct access to the people who actually built your machine, faster local installation and repair support, and easier access to spare parts, compared to traders who source machines from elsewhere.",
    },
    {
      q: "Q6. Can Faith Engineering Works customise a machine for a specific container design?",
      a: "Yes. Machines and moulds are configured according to your specific container size, shape, and production requirement, rather than offered only as fixed standard models.",
    },
    {
      q: "Q7. How long has Faith Engineering Works been manufacturing blow moulding machines in Delhi?",
      a: "Faith Engineering Works has been manufacturing blow moulding machines in-house from Bawana Industrial Area, Delhi, since 2000, giving the company over 25 years of experience.",
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
              Blow Moulding Machine Manufacturer in Delhi
            </h1>
            <p className="text-gray-700">
              Faith Engineering Works is a trusted{" "}
              <Link
                href="/"
                className="text-[#d90429] font-bold hover:underline transition-colors duration-200"
              >
                blow moulding machine manufacturer in delhi
              </Link>
              , manufacturing machines in-house from Delhi since 2000 and
              supplying businesses across the wider state. Our machines form
              hollow plastic containers — bottles, jerry cans, and drums — by
              shaping heated plastic inside a mould using air pressure.
              Available in Single Head, Double Head, and Triple Head
              configurations with Auto De-Flashing, our machines are built for
              consistent, large-volume production across packaging, chemical,
              and edible oil industries, from 100ml to 10 litres.
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
                src="/other/b1.png"
                alt="Blow Moulding Machine Manufacturer in Delhi"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: Best Blow Moulding Machine Manufacturer in Delhi */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Best Blow Moulding Machine Manufacturer in Delhi — Faith Engineering
            Works
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works is a{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold hover:underline transition-colors duration-200"
            >
              blow moulding machine manufacturer in Delhi
            </Link>
            , operating from our own facility in Bawana Industrial Area since
            2000. Unlike manufacturers who only list a Delhi address for SEO
            purposes, our machines are actually designed, built, and tested
            right here — which means buyers can visit the factory, see the
            machines in production, and speak directly with the team building
            them.
          </p>
        </motion.div>

        {/* SECTION 3: Why a Blow Moulding Machine Manufacturer in Delhi Actually Matters */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Why a Blow Moulding Machine Manufacturer in Delhi Actually Matters
          </h2>
          <p className="text-gray-700">
            Delhi has one of India’s largest concentrations of blow moulding
            machine manufacturers, which makes it easy for buyers to compare.
            Here’s what a genuine{" "}
            <strong>blow moulding machine manufacturer in Delhi</strong> offers
            that’s worth checking for:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {mattersPoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> — {item.desc}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            Not every business claiming to be a “Delhi manufacturer” actually
            builds machines in-house — some are traders using a Delhi address
            for local SEO while sourcing machines from elsewhere. It’s worth
            asking directly whether you can visit the manufacturing facility; a
            straightforward yes is a strong sign.
          </p>
        </motion.div>

        {/* SECTION 4: About Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            About Faith Engineering Works
          </h2>
          <p className="text-gray-700">
            As a trusted{" "}
            <strong>blow moulding machine manufacturer in Delhi</strong>, we
            have been manufacturing blow moulding machines in-house from Bawana
            Industrial Area since 2000 — over 25 years of hands-on engineering
            experience. We don’t outsource production or resell machines built
            by other companies; every machine is designed, built, and tested by
            our own team before it reaches a client.
          </p>
        </motion.div>

        {/* SECTION 5: What We Manufacture */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            What We Manufacture
          </h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {manufacturingPoints.map((point, idx) => (
              <li key={idx}>
                <strong>
                  {point.split(" ")[0]} {point.split(" ")[1]}
                </strong>{" "}
                {point.split(" ").slice(2).join(" ")}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            Whether you need a machine for small cosmetic or pharma bottles, or
            large industrial containers like jerry cans and drums,
            configurations are built around your specific product rather than
            sold as one fixed model.
          </p>
        </motion.div>

        {/* SECTION 6: Why Choose Faith Engineering Works as Your Blow Moulding Machine Manufacturer in Delhi */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Why Choose Faith Engineering Works as Your Blow Moulding Machine
            Manufacturer in Delhi
          </h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {whyChoosePoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> — {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 7: Get in Touch */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-700">
            Looking for a genuine{" "}
            <strong>blow moulding machine manufacturer in Delhi</strong> — one
            you can actually visit and see in operation?{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold hover:underline transition-colors duration-200"
            >
              Faith Engineering
            </Link>{" "}
            Works has been manufacturing machines in-house from Bawana
            Industrial Area since 2000. Contact us to discuss your container
            size and production requirements, or to arrange a facility visit.
          </p>
        </motion.div>

        {/* SECTION 8: Frequently Asked Questions */}
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
