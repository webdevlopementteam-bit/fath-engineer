"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HDPEBlowMoldingMachineUttarPradesh() {
  const specs = [
    { label: "Blowing Capacity", value: "50 ml" },
    { label: "Screw Diameter", value: "25 mm" },
    { label: "Maximum Plasticizing Capacity", value: "15 Kg/Hr" },
    { label: "Production Capacity", value: "150 BPH" },
    { label: "Country of Origin", value: "Made in India" },
  ];

  const atAGlanceData = [
    {
      label: "Manufacturing location",
      value: "Bawana Industrial Area, Delhi (in-house, since 2000)",
    },
    {
      label: "Material specialisation",
      value: "HDPE-calibrated machines (also PP and other plastics)",
    },
    { label: "Capacity range", value: "100ml to 10 litres" },
    { label: "Configurations", value: "Single Head, Double Head, Triple Head" },
    {
      label: "Stage options",
      value: "Single Stage, Double Stage, Accumulator Head",
    },
    { label: "Key feature", value: "Auto De-Flashing system" },
    {
      label: "Areas served in UP",
      value: "Noida, Meerut, and across the state",
    },
    { label: "Travel time from Delhi", value: "Same-day to next-day by road" },
  ];

  const builtAroundHdpePoints = [
    {
      title: "Parison control tuned to how HDPE actually melts and cools",
      desc: ", so wall thickness stays consistent instead of drifting over a long production run",
    },
    {
      title: "Single Head, Double Head, and Triple Head configurations",
      desc: ", so the machine scales with how much you’re actually producing",
    },
    {
      title: "Accumulator Head option",
      desc: "for larger HDPE containers — 5 litres and above, jerry cans, drums — where even one uneven shot of plastic shows up as a weak point",
    },
    {
      title: "Auto De-Flashing",
      desc: ", so containers come out clean without adding a manual trimming step to every cycle",
    },
    {
      title: "100ml to 10 litres",
      desc: ", covering everything from small bottles to full industrial containers",
    },
  ];

  const faqs = [
    {
      q: "Q1. Is Faith Engineering Works an HDPE blow moulding machine manufacturer in Uttar Pradesh?",
      a: "Yes. Faith Engineering Works manufactures HDPE-calibrated blow moulding machines in-house in Delhi and supplies and supports businesses across Uttar Pradesh, including Noida and Meerut.",
    },
    {
      q: "Q2. Uttar Pradesh has a large edible oil and FMCG packaging industry — are these machines suited for that?",
      a: "Yes. Our machines process HDPE, commonly used for edible oil, lubricant, and FMCG packaging containers, with parison control tuned for consistent wall thickness in these applications.",
    },
    {
      q: "Q3. What actually changes when a machine is calibrated for HDPE specifically?",
      a: "Parison control and cooling settings are tuned to how HDPE behaves as it melts and sets, which keeps wall thickness more consistent than a machine set up generically for “plastic” without HDPE-specific tuning.",
    },
    {
      q: "Q4. Does Faith Engineering Works serve businesses specifically in Noida and Meerut?",
      a: "Yes. As an HDPE blow moulding machine manufacturer in Noida and as an HDPE blow moulding machine manufacturer in Meerut, we provide direct manufacturing, delivery, and after-sales support to businesses in both cities.",
    },
    {
      q: "Q5. What capacity range of HDPE blow moulding machines does Faith Engineering Works offer?",
      a: "Machines range from 100ml to 10 litres, covering small bottles through to large industrial containers like jerry cans and drums.",
    },
    {
      q: "Q6. Why does it matter that Faith Engineering Works is based near UP rather than further away?",
      a: "Being a short road journey from Noida and Meerut means faster installation, quicker on-site repairs when something needs attention, and shorter delivery times for spare parts.",
    },
    {
      q: "Q7. Can a machine be customised for a specific container design?",
      a: "Yes. Machines and moulds are configured around your specific container size, shape, and production requirement, rather than sold as one fixed model.",
    },
    {
      q: "Q8. What does after-sales support actually look like?",
      a: "Since machines are built in-house, our own team handles installation, operator guidance, and spare parts directly — there’s no reseller in between slowing things down.",
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
                HDPE Blow Moulding Machine Manufacturer in Uttar Pradesh
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

        {/* SECTION 2: Best HDPE Blow Moulding Machine Manufacturer in Uttar Pradesh — Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Best HDPE Blow Moulding Machine Manufacturer in Uttar Pradesh —
            Faith Engineering Works
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works is the best{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Uttar Pradesh
            </Link>
            , manufacturing HDPE-calibrated machines in-house from Delhi since
            2000 and supporting businesses across the state, including Noida and
            Meerut.
          </p>
          <p className="text-gray-700">
            Ask any experienced production manager in Noida or Meerut what
            actually goes wrong with a cheap blow moulding machine, and the
            answer is rarely the machine breaking down outright. It’s usually
            something quieter — bottles that seemed fine at first, then started
            showing thin spots near the base, or seams that held up in testing
            but failed after a few weeks of real production. More often than
            not, the root cause traces back to one thing: the machine was never
            properly set up for HDPE in the first place.
          </p>
          <p className="text-gray-700">
            Faith Engineering Works has built its machines in-house in Delhi
            since 2000 with exactly this problem in mind — getting HDPE’s
            parison control right from the start, not fixing it after the fact.
          </p>
        </motion.div>

        {/* SECTION 3: At a Glance Table */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            At a Glance
          </h2>
          <div className="overflow-hidden border border-gray-200 rounded-md shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-3 px-4 font-semibold text-gray-800 w-1/3"></th>
                  <th className="py-3 px-4 font-semibold text-gray-800 w-2/3">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {atAGlanceData.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index !== atAGlanceData.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }
                  >
                    <td className="py-3 px-4 font-semibold text-gray-800 w-1/3">
                      {item.label}
                    </td>
                    <td className="py-3 px-4 text-gray-700 w-2/3">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* SECTION 4: Why HDPE Deserves Its Own Set of Machine Settings */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Why HDPE Deserves Its Own Set of Machine Settings
          </h2>
          <p className="text-gray-700">
            HDPE isn’t difficult to work with, but it does behave differently
            from other plastics as it melts and cools — and a machine that’s
            only loosely calibrated for “plastic” in general tends to show its
            limitations exactly where it matters most:
          </p>
          <p className="text-gray-700">
            If you’re making <strong>chemical or lubricant bottles</strong>, an
            uneven seam is the kind of flaw that doesn’t show up until the
            product’s been sitting on a shelf or in transit.{" "}
            <strong>Detergent containers</strong> need to survive rough handling
            without cracking at the base.{" "}
            <strong>Water storage containers</strong> sit outdoors for years,
            and inconsistent wall thickness is often the first thing to fail
            under UV exposure and repeated impact.
          </p>
          <p className="text-gray-700">
            None of these problems are dramatic on day one. They show up
            gradually, which is exactly why they’re easy to underestimate when
            comparing machines on a spec sheet.
          </p>
        </motion.div>

        {/* SECTION 5: What We’ve Actually Built Around HDPE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            What We’ve Actually Built Around HDPE
          </h2>
          <p className="text-gray-700">
            Rather than treating HDPE as one option among many, our machines are
            configured with it specifically in mind:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {builtAroundHdpePoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong>
                {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 6: For Businesses in Noida, Meerut, and the Rest of UP */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            For Businesses in Noida, Meerut, and the Rest of UP
          </h2>
          <p className="text-gray-700">
            We work as an{" "}
            <Link
              href="/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Noida
            </Link>{" "}
            and as an{" "}
            <Link
              href="/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Meerut
            </Link>{" "}
            for exactly the industries where HDPE’s chemical resistance actually
            earns its keep — lubricant and edible oil bottling, detergent
            packaging, and chemical containers where a leak isn’t just
            inconvenient, it’s a real liability.
          </p>
        </motion.div>

        {/* SECTION 7: Why Businesses Choose to Work With Us */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Why Businesses Choose to Work With Us
          </h2>
          <p className="text-gray-700">
            <Link
              href="/"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              Faith Engineering Works
            </Link>{" "}
            has more than Twenty-five years in one trade teaches you where
            things usually go wrong, and that’s shaped how we build machines
            more than any brochure line could. We don’t outsource manufacturing
            or resell someone else’s equipment under our name — every machine
            that leaves our Bawana facility was designed, built, and tested by
            the same team that will be picking up the phone if something needs
            attention later. Buyers are welcome to walk through the factory
            before deciding anything, which tends to answer more questions than
            a sales call ever could. And because every client’s container is a
            little different, machines are configured around what you’re
            actually producing, not sold off a fixed price list.
          </p>
        </motion.div>

        {/* SECTION 8: Industries We Work With */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Industries We Work With
          </h2>
          <p className="text-gray-700">
            HDPE machines like ours tend to end up in a fairly consistent set of
            industries — packaging and FMCG, edible oil and lubricant bottling,
            chemical and detergent packaging, and water and beverage container
            production. What connects most of them is a product that has to hold
            up over time: sitting in storage, surviving transport, or resisting
            whatever it’s been filled with. That’s usually where HDPE’s chemical
            resistance and durability end up mattering more than buyers expect
            going in.
          </p>
        </motion.div>

        {/* SECTION 9: The Part Buyers Often Forget to Factor In: Where the Machine Comes From */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            The Part Buyers Often Forget to Factor In: Where the Machine Comes
            From
          </h2>
          <p className="text-gray-700">
            It’s easy to focus entirely on the machine and forget that
            installation, servicing, and spare parts are a years-long
            relationship, not a one-time transaction. Being a short drive from
            Noida and Meerut means our team can usually be on-site the same day
            or the next, rather than coordinating a visit from across the
            country. When a part needs replacing, it travels a few hours, not a
            few days. None of this shows up in a spec comparison, but it’s often
            what determines whether a small issue gets fixed in an afternoon or
            turns into a week of lost production.
          </p>
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
            If you’re evaluating an{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Uttar Pradesh
            </Link>
            , we’d rather talk through your actual container size, material, and
            production volume than hand you a generic brochure. Faith
            Engineering Works has been building HDPE-calibrated machines
            in-house from Delhi since 2000, and we’re close enough to Noida and
            Meerut to back that up with real support, not just a promise. Get in
            touch to talk through what you need.
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
