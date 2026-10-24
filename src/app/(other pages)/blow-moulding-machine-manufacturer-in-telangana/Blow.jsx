"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlowMouldingMachineManufacturerInTelangana() {
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

  const supportPoints = [
    {
      title: "Machines are dispatched through established logistics networks",
      desc: "— the same freight and transport systems used to ship machines across India (and internationally) handle delivery to Telangana, including Hyderabad.",
    },
    {
      title: "Installation is planned, not improvised",
      desc: "— our team travels to your facility for installation and commissioning, with the process scheduled in advance so there's no guesswork on either side.",
    },
    {
      title:
        "Ongoing support works through a mix of remote guidance and scheduled visits",
      desc: "— many issues can be diagnosed and resolved over a call or video with our engineering team; for anything that needs hands-on attention, a visit is arranged.",
    },
    {
      title: "Spare parts are shipped directly",
      desc: "— since we manufacture in-house, we know exactly which parts your machine needs and can dispatch them without delay.",
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
      desc: "for a clean, consistent finish without manual trimming",
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
      title: "In-house manufacturing",
      desc: "— direct access to the people who actually built your machine, regardless of your location",
    },
    {
      title: "Customised configurations",
      desc: "based on your container size and production volume",
    },
    {
      title: "Quality checks at every manufacturing stage",
      desc: ", so machines perform reliably from installation onward",
    },
    {
      title: "Experience shipping and supporting machines beyond Delhi",
      desc: ", including pan-India and international clients",
    },
  ];

  const faqs = [
    {
      q: "Q1. Is Faith Engineering Works a blow moulding machine manufacturer in Telangana?",
      a: "Faith Engineering Works manufactures machines in-house in Delhi and supplies and supports businesses across Telangana, including Hyderabad, through established logistics and installation processes.",
    },
    {
      q: "Q2. Does Faith Engineering Works provide support for a blow moulding machine manufacturer in Hyderabad relationship, even though the factory is in Delhi?",
      a: "Yes. Support is provided through a combination of remote diagnosis, scheduled on-site visits for installation and repairs, and direct spare parts dispatch, so distance does not limit the support clients in Hyderabad receive.",
    },
    {
      q: "Q3. What capacity range of blow moulding machines does Faith Engineering Works offer?",
      a: "Faith Engineering Works manufactures machines with capacities from 100ml to 10 litres, covering small bottles to large industrial containers.",
    },
    {
      q: "Q4. Can Faith Engineering Works customise a machine for my specific container design in Telangana?",
      a: "Yes. Machines and moulds are configured according to your specific container size, shape, and production requirement, regardless of your location.",
    },
    {
      q: "Q5. How is a machine delivered from Delhi to Telangana or Hyderabad?",
      a: "Machines are dispatched through established freight and logistics networks used for pan-India and international shipping, with delivery and installation scheduled in advance.",
    },
    {
      q: "Q6. What materials can Faith Engineering Works' machines process?",
      a: "Our machines are built to process HDPE, PP, and other commonly used plastics for manufacturing bottles, jerry cans, and industrial containers.",
    },
    {
      q: "Q7. How long has Faith Engineering Works been manufacturing blow moulding machines?",
      a: "Faith Engineering Works has been manufacturing blow moulding machines in-house since 2000, giving the company over 25 years of experience in this field.",
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
              Blow Moulding Machine Manufacturer in Telangana
            </h1>
            <p className="text-gray-700">
              Faith Engineering Works is the best{" "}
              <Link
                href="/"
                className="text-[#d90429] font-bold no-underline transition-colors duration-200"
              >
                blow moulding machine manufacturer in Telangana
              </Link>{" "}
              and{" "}
              <Link
                href="/"
                className="text-[#d90429] font-bold no-underline transition-colors duration-200"
              >
                blow moulding machine manufacturer in Hyderabad
              </Link>
              , manufacturing machines in-house from Delhi since 2000 and
              supplying businesses across Hyderabad and the wider state. Our
              machines form hollow plastic containers — bottles, jerry cans, and
              drums — by shaping heated plastic inside a mould using air
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
                alt="Blow Moulding Machine Manufacturer in Telangana"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: Best Blow Moulding Machine Manufacturer in Telangana — Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Best Blow Moulding Machine Manufacturer in Telangana — Faith
            Engineering Works
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works is a{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              blow moulding machine manufacturer in Telangana
            </Link>
            , supplying and supporting businesses across the state — including
            Hyderabad — from our in-house manufacturing facility in Delhi. If
            you’re setting up or expanding plastic container production in
            Telangana, this page explains what to expect from a manufacturer
            based outside your state, and why that shouldn’t be a concern if the
            manufacturer has the right systems in place.
          </p>
        </motion.div>

        {/* SECTION 3: “The Manufacturer Is in Delhi — What About Support in Telangana?” */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            “The Manufacturer Is in Delhi — What About Support in Telangana?”
          </h2>
          <p className="text-gray-700">
            This is a fair question, and most manufacturer websites don’t answer
            it honestly. Here’s how it actually works when you buy a machine
            from a manufacturer based outside your state:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {supportPoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            Distance affects logistics, not machine quality or support
            commitment. What actually matters is whether the manufacturer has a
            track record of supporting clients outside their home state — which
            is where manufacturing history and communication matter more than
            physical address.
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
            <Link
              href="/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              Faith Engineering Works
            </Link>{" "}
            has been manufacturing blow moulding machines in-house since 2000,
            from our facility in Bawana Industrial Area, Delhi. We don’t
            outsource or resell machines built elsewhere — every machine is
            designed, built, and tested by our own team. We also supply machines
            internationally through global export, which means shipping to any
            Indian state, including Telangana, is a routine part of how we
            operate.
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
            {manufacturePoints.map((point, idx) => (
              <li key={idx}>
                <strong>{point.title}</strong> {point.desc}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            Whether you’re producing small bottles for cosmetics and pharma, or
            larger industrial containers like jerry cans and drums, machines are
            configured to your specific product rather than sold as fixed
            standard models.
          </p>
        </motion.div>

        {/* SECTION 6: Serving Businesses in Telangana and Hyderabad */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Serving Businesses in Telangana and Hyderabad
          </h2>
          <p className="text-gray-700">
            As a{" "}
            <span className="font-bold text-gray-900">
              blow moulding machine manufacturer in Hyderabad
            </span>{" "}
            and across Telangana, Faith Engineering Works supports businesses in
            packaging, edible oil and lubricant bottling, chemical and detergent
            packaging, and water container manufacturing. Whether your
            production unit is in Hyderabad or elsewhere in Telangana, our team
            works with you from the initial enquiry through installation and
            after-sales support.
          </p>
        </motion.div>

        {/* SECTION 7: Why Choose Faith Engineering Works */}
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

        {/* SECTION 8: Get in Touch */}
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
            Looking for a reliable{" "}
            <Link
              href="/blow-moulding-machine-manufacturer/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              blow moulding machine manufacturer in Telangana
            </Link>{" "}
            ? Faith Engineering Works manufactures machines in-house from Delhi
            and has the logistics and support systems in place to serve clients
            across the state effectively. Contact us to discuss your container
            size and production requirements.
          </p>
        </motion.div>

        {/* SECTION 9: Frequently Asked Questions */}
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
