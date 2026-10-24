"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlowMouldingMachineManufacturerInJharkhand() {
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

  const checkPoints = [
    {
      title:
        "Do they actually manufacture the machine, or resell one built by someone else?",
      desc: "In-house manufacturers can explain build details, adjust specifications, and troubleshoot problems directly.",
    },
    {
      title:
        "How is installation and after-sales support handled if the factory isn't local?",
      desc: "A manufacturer with a genuine support process — not just a sales promise — matters more than a nearby address.",
    },
    {
      title: "Can they show a real manufacturing history?",
      desc: 'Years in business and an actual factory location matter more than generic claims like "leading" or "best."',
    },
  ];

  const supportPoints = [
    {
      title: "Machines are dispatched through established logistics networks",
      desc: "the same freight systems used for deliveries across India and for international export.",
    },
    {
      title: "Installation is scheduled in advance",
      desc: "— our team travels to your facility in Jharkhand for setup and commissioning, so there's no confusion about timelines.",
    },
    {
      title: "Ongoing troubleshooting uses remote guidance first",
      desc: "— many issues are resolved over a call or video with our engineering team, with an on-site visit arranged when needed.",
    },
    {
      title: "Spare parts are dispatched directly from our facility",
      desc: ", since we know exactly what your machine needs, having built it ourselves.",
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
      desc: "— direct access to the team that actually built your machine",
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
      title: "Experience supporting clients beyond Delhi",
      desc: ", including pan-India and international shipments",
    },
  ];

  const faqs = [
    {
      q: "Q1. Is Faith Engineering Works a genuine blow moulding machine manufacturer in Jharkhand?",
      a: "Faith Engineering Works manufactures machines in-house in Delhi and supplies and supports businesses across Jharkhand, including Ranchi, Jamshedpur, and Dhanbad, through established logistics and installation processes.",
    },
    {
      q: "Q2. How is machine support handled since the factory is in Delhi, not Jharkhand?",
      a: "Support is provided through a mix of remote diagnosis, scheduled on-site visits for installation and repairs, and direct spare parts dispatch, so distance do not limit the support clients in Jharkhand receive.",
    },
    {
      q: "Q3. What capacity range of blow moulding machines does Faith Engineering Works offer?",
      a: "Faith Engineering Works manufactures machines with capacities from 100ml to 10 litres, covering small bottles to large industrial containers.",
    },
    {
      q: "Q4. Can Faith Engineering Works customise a machine for a specific container design?",
      a: "Yes. Machines and moulds are configured according to your specific container size, shape, and production requirement, regardless of your location in Jharkhand.",
    },
    {
      q: "Q5. How is a machine delivered from Delhi to Jharkhand?",
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
    {
      q: "Q8. What industries in Jharkhand use these blow moulding machines?",
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
              Blow Moulding Machine Manufacturer in Jharkhand
            </h1>
            <p className="text-gray-700">
              Faith Engineering Works is a trusted{" "}
              <Link
                href="/contact-us"
                className="text-[#d90429] font-bold no-underline transition-colors duration-200"
              >
                blow moulding machine manufacturer in Jharkhand
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
                alt="Blow Moulding Machine Manufacturer in Jharkhand"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: Top Blow Moulding Machine Manufacturer in Jharkhand — Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Top Blow Moulding Machine Manufacturer in Jharkhand — Faith
            Engineering Works
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works is a{" "}
            <Link
              href="/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              blow moulding machine manufacturer in Jharkhand
            </Link>
            , supplying and supporting businesses across the state — including
            Ranchi, Jamshedpur, Dhanbad, and Bokaro — from our in-house
            manufacturing facility in Delhi. If you’re setting up or expanding
            plastic container production in Jharkhand, this page explains what
            our machines offer, how support works across the distance, and what
            to check before choosing a manufacturer.
          </p>
        </motion.div>

        {/* SECTION 3: Choosing a Blow Moulding Machine Manufacturer in Jharkhand — What to Actually Check */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Choosing a Blow Moulding Machine Manufacturer in Jharkhand — What to
            Actually Check
          </h2>
          <p className="text-gray-700">
            Many sellers list themselves as a{" "}
            <span className="font-bold text-gray-900">
              blow moulding machine manufacturer in Jharkhand
            </span>{" "}
            without actually manufacturing anything in-house — some are traders
            sourcing machines from elsewhere and reselling under their own name.
            Before choosing one, it’s worth asking:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {checkPoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 4: How Support Works When the Manufacturer Isn’t Based in Jharkhand */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            How Support Works When the Manufacturer Isn’t Based in Jharkhand
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works manufactures in Delhi, and here’s honestly
            how we support clients in Jharkhand:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {supportPoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong>
                {item.desc}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            Distance affects logistics planning, not machine quality or
            long-term support. What matters is whether a manufacturer has real
            systems in place for supporting clients outside their home state.
          </p>
        </motion.div>

        {/* SECTION 5: About Faith Engineering Works */}
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
            from our facility in Bawana Industrial Area, Delhi — over 25 years
            of manufacturing experience. We don’t outsource or resell machines
            built elsewhere; every machine is designed, built, and tested by our
            own team. We also supply internationally through global export,
            which means shipping to any Indian state, including Jharkhand, is a
            routine part of how we work.
          </p>
        </motion.div>

        {/* SECTION 6: What We Manufacture */}
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
            Whether you need machines for small cosmetic and pharma bottles, or
            larger industrial containers like jerry cans and drums,
            configurations are built around your specific product rather than
            sold as fixed standard models.
          </p>
        </motion.div>

        {/* SECTION 7: Serving Businesses Across Jharkhand */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Serving Businesses Across Jharkhand
          </h2>
          <p className="text-gray-700">
            As a{" "}
            <span className="font-bold text-gray-900">
              blow moulding machine manufacturer in Jharkhand
            </span>
            , Faith Engineering Works supports businesses in packaging, edible
            oil and lubricant bottling, chemical and detergent packaging, and
            water container manufacturing — whether your unit is in Ranchi,
            Jamshedpur, or elsewhere in the state.
          </p>
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

        {/* SECTION 9: Final Thought */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Final Thought
          </h2>
          <p className="text-gray-700">
            Looking for a genuine{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              blow moulding machine manufacturer in Jharkhand
            </Link>
            ? Faith Engineering Works manufactures machines in-house from Delhi
            and has the logistics and support systems in place to serve clients
            across Jharkhand effectively. Contact us to discuss your container
            size and production requirements.
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
