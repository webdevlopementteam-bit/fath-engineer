"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlowMouldingMachineManufacturerInUttarPradesh() {
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

  const whyMattersPoints = [
    {
      title: "Faster machine delivery",
      desc: "— shorter transport distance means less time between order and installation.",
    },
    {
      title: "Quicker installation support",
      desc: "— our team can reach your facility in Noida, Meerut, or nearby UP locations without the delays that come with long-distance servicing.",
    },
    {
      title: "Faster response for repairs and spare parts",
      desc: "— when a machine needs attention, distance directly affects how quickly it gets resolved. A manufacturer based hours away by road responds faster than one located across the country.",
    },
  ];

  const manufacturePoints = [
    {
      title: "Single Head, Double Head, and Triple Head",
      desc: "machine configurations",
    },
    {
      title: "Single Stage, Double Stage, and Accumulator Head",
      desc: "options",
    },
    {
      title: "Capacity range of 100ml to 10 litres",
      desc: "",
    },
    {
      title: "Auto De-Flashing systems",
      desc: "for a clean, consistent finish",
    },
    {
      title: "Machines suited for HDPE, PP",
      desc: ", and other commonly processed plastics",
    },
  ];

  const whyChoosePoints = [
    {
      title: "25+ years of manufacturing experience",
      desc: "building machines in-house since 2000",
    },
    {
      title: "Direct factory support",
      desc: "— no middlemen between you and the people who built your machine",
    },
    {
      title: "Customised configurations",
      desc: "based on your container size and production volume",
    },
    {
      title: "Quality checks at every manufacturing stage",
      desc: ", so machines perform reliably from day one",
    },
  ];

  const faqs = [
    {
      q: "Q1. Is Faith Engineering Works a blow moulding machine manufacturer in Noida and Meerut?",
      a: "Faith Engineering Works is based in Delhi and works closely as a blow moulding machine manufacturer in Noida and a blow moulding machine manufacturer in Meerut, supplying and supporting machines directly for businesses in both cities and across Uttar Pradesh.",
    },
    {
      q: "Q2. Why does it help to choose a Delhi-based manufacturer if my business is in UP?",
      a: "Delhi’s proximity to western UP cities like Noida, Ghaziabad, and Meerut means faster machine delivery, quicker installation support, and shorter response times for repairs and spare parts compared to manufacturers located far away.",
    },
    {
      q: "Q3. What capacity range of blow moulding machines does Faith Engineering Works offer?",
      a: "Faith Engineering Works manufactures machines with capacities from 100ml to 10 litres, covering small bottles to large industrial containers.",
    },
    {
      q: "Q4. Can Faith Engineering Works customise a machine for my specific container design?",
      a: "Yes. Machines and moulds are configured according to your specific container size, shape, and production requirement, rather than offered only as fixed standard models.",
    },
    {
      q: "Q5. As a blow moulding machine manufacturer in Noida or Meerut, what support does Faith Engineering Works provide after installation?",
      a: "As a blow moulding machine manufacturer in Noida and Meerut, Faith Engineering Works provides direct installation support, operator guidance, and spare parts availability, backed by our Delhi facility being close by.",
    },
    {
      q: "Q6. What materials can Faith Engineering Works' machines process?",
      a: "Our machines are built to process HDPE, PP, and other commonly used plastics for manufacturing bottles, jerry cans, and industrial containers.",
    },
    {
      q: "Q7. How long has Faith Engineering Works been manufacturing blow moulding machines?",
      a: "Faith Engineering Works has been manufacturing blow moulding machines in-house since 2000, giving the company over 25 years of experience.",
    },
    {
      q: "Q8. What industries in Uttar Pradesh use Faith Engineering Works' machines?",
      a: "Common industries include packaging and FMCG, edible oil and lubricant bottling, chemical and detergent packaging, and water and beverage container manufacturing.",
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
              Blow Moulding Machine Manufacturer in Uttar Pradesh
            </h1>
            <p className="text-gray-700">
              Faith Engineering Works is a trusted{" "}
              <Link
                href="/blow-moulding-machine-manufacturer/"
                className="text-[#d90429] font-bold no-underline transition-colors duration-200"
              >
                blow moulding machine manufacturer in Uttar Pradesh
              </Link>
              , manufacturing machines in-house from Delhi since 2000 and
              supplying businesses across Noida, Meerut, and the wider state.
              Our machines form hollow plastic containers — bottles, jerry cans,
              and drums — by shaping heated plastic inside a mould using air
              pressure. Available in Single Head, Double Head, and Triple Head
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
                alt="Blow Moulding Machine Manufacturer in Uttar Pradesh"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: Best Blow Moulding Machine Manufacturer in Uttar Pradesh — Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Best Blow Moulding Machine Manufacturer in Uttar Pradesh — Faith
            Engineering Works
          </h2>
          <p className="text-gray-700">
            If you’re looking for a reliable{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              blow moulding machine manufacturer in Uttar Pradesh
            </Link>{" "}
            — whether your business is in Noida, Meerut, Ghaziabad, or elsewhere
            in the state — Faith Engineering Works supplies and supports blow
            moulding machines from our manufacturing facility in Bawana
            Industrial Area, Delhi. Being based just across the border from
            western UP gives our clients in the region a real, practical
            advantage: faster delivery, quicker installation support, and
            shorter response times when something needs attention.
          </p>
        </motion.div>

        {/* SECTION 3: Why a Delhi-Based Manufacturer Matters for UP Buyers */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Why a Delhi-Based Manufacturer Matters for UP Buyers
          </h2>
          <p className="text-gray-700">
            Uttar Pradesh, especially cities like Noida and Ghaziabad, sits
            right next to Delhi — practically an extension of the same
            industrial belt. Meerut is not far behind either. This proximity
            isn’t just a location detail; it directly affects how a manufacturer
            supports you:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {whyMattersPoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            This is one of the most overlooked factors when businesses in UP
            choose a{" "}
            <span className="font-bold text-gray-900">
              blow moulding machine manufacturer in Uttar Pradesh
            </span>{" "}
            — the machine itself matters, but so does how quickly help arrives
            when you need it.
          </p>
        </motion.div>

        {/* SECTION 4: What We Manufacture */}
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
          <p className="text-gray-700">
            Faith Engineering Works has been manufacturing blow moulding
            machines in-house since 2000, from our own facility in Delhi. Our
            range includes:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {manufacturePoints.map((point, idx) => (
              <li key={idx}>
                <strong>{point.title}</strong> {point.desc}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            Whether you’re producing small bottles for cosmetics and pharma or
            large industrial containers like jerry cans and drums, our machines
            are configured to your specific product — not sold as
            one-size-fits-all models.
          </p>
        </motion.div>

        {/* SECTION 5: Serving Businesses Across Uttar Pradesh */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Serving Businesses Across Uttar Pradesh
          </h2>
          <p className="text-gray-700">
            As a trusted blow moulding machine manufacturer in Uttar Pradesh and
            neighbouring Delhi-NCR, Faith Engineering Works supplies and
            supports machines for businesses across the state. As a{" "}
            <Link
              href="/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              blow moulding machine manufacturer in Noida
            </Link>
            , we help packaging and FMCG businesses set up production quickly,
            thanks to our short distance from the city. As a blow moulding
            machine manufacturer in Meerut , we offer the same direct
            installation and after-sales support, along with other industrial
            areas throughout UP. Common industries we serve include packaging,
            edible oil and lubricant bottling, chemical and detergent packaging,
            and water container manufacturing.
          </p>
        </motion.div>

        {/* SECTION 6: Why Choose Faith Engineering Works */}
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

        {/* SECTION 7: Get in Touch */}
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
            Setting up a blow moulding machine manufacturing line in Uttar
            Pradesh — including Noida, Meerut, or anywhere nearby? As a trusted
            blow moulding machine manufacturer in Uttar Pradesh,{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              Faith Engineering Works
            </Link>
            , based in Delhi, offers direct manufacturing, installation, and
            after-sales support with a location advantage that matters. Contact
            us today to discuss your container size and production requirements.
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
