"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HDPEBlowMoldingMachineTelangana() {
  const specs = [
    { label: "Blowing Capacity", value: "50 ml" },
    { label: "Screw Diameter", value: "25 mm" },
    { label: "Maximum Plasticizing Capacity", value: "15 Kg/Hr" },
    { label: "Production Capacity", value: "150 BPH" },
    { label: "Country of Origin", value: "Made in India" },
  ];

  const quickFacts = [
    { label: "Manufacturer", value: "Faith Engineering Works" },
    {
      label: "Manufacturing location",
      value: "Bawana Industrial Area, Delhi (in-house, since 2000)",
    },
    {
      label: "Material specialisation",
      value: "HDPE-calibrated (also PP and other plastics)",
    },
    { label: "Capacity range", value: "100ml to 10 litres" },
    { label: "Configurations", value: "Single Head, Double Head, Triple Head" },
    {
      label: "Stage options",
      value: "Single Stage, Double Stage, Accumulator Head",
    },
    { label: "Areas served", value: "Telangana, including Hyderabad" },
    {
      label: "Track record",
      value: "15+ years verified on IndiaMART, 4.6-star rating",
    },
    {
      label: "Support model",
      value: "Remote diagnosis + scheduled visits (Delhi to Telangana)",
    },
  ];

  const whyChoosePoints = [
    {
      title: "25+ years in this business",
      desc: "— manufacturing blow moulding machines since 2000, not a company that started last year and calls itself experienced.",
    },
    {
      title: "We build in-house",
      desc: "— so we can explain and adjust settings like parison control directly — a reseller usually can’t go beyond the spec sheet.",
    },
    {
      title: "We’ll tell you when something’s a bad fit",
      desc: ". If a container design doesn’t suit HDPE, we’ll say so before you spend money finding out yourself.",
    },
    {
      title: "Support doesn’t end at installation",
      desc: ". Spare parts, troubleshooting, and repairs come from the same team that built your machine, years after the sale.",
    },
  ];

  const faqs = [
    {
      q: "Q1. Is Faith Engineering Works an HDPE blow moulding machine manufacturer in Telangana?",
      a: "Yes. We manufacture HDPE-calibrated machines in-house in Delhi and supply and support businesses across Telangana, including Hyderabad.",
    },
    {
      q: "Q2. What does “HDPE-calibrated” actually mean, in practical terms?",
      a: "It means parison control and cooling settings are tuned to how HDPE specifically melts and sets, which keeps wall thickness consistent — a machine set up generically for “plastic” often can’t hold that same consistency with HDPE.",
    },
    {
      q: "Q3. Does Faith Engineering Works serve Hyderabad specifically?",
      a: "Yes. As an HDPE blow moulding machine manufacturer in Hyderabad, we provide manufacturing, delivery, and after-sales support directly to businesses in the city.",
    },
    {
      q: "Q4. How does delivery and support actually work between Delhi and Telangana?",
      a: "Machines ship through the same freight networks used for our exports. Installation is scheduled in advance, troubleshooting starts remotely over a call or video, and a visit is arranged only if it’s genuinely needed.",
    },
    {
      q: "Q5. What capacity range does Faith Engineering Works offer?",
      a: "100ml to 10 litres, covering small bottles up to large industrial containers.",
    },
    {
      q: "Q6. Can a machine be customised for a specific container design?",
      a: "Yes. Machines and moulds are configured around your specific container size, shape, and material rather than sold as one fixed model.",
    },
    {
      q: "Q7. How can I verify Faith Engineering Works’ track record independently?",
      a: "Our GST TrustSEAL profile on IndiaMART has been active for over 15 years, with a 4.6-star rating from client reviews.",
    },
    {
      q: "Q8. What materials besides HDPE can these machines process?",
      a: "PP and other commonly used plastics, alongside HDPE.",
    },
    {
      q: "Q9. Why does it matter whether a manufacturer builds machines in-house?",
      a: "An in-house manufacturer can explain and adjust settings like parison control directly, since they designed the machine. A reseller usually can’t go beyond the spec sheet.",
    },
    {
      q: "Q10. How long has Faith Engineering Works been manufacturing HDPE machines?",
      a: "Since 2000 — over 25 years of in-house manufacturing experience.",
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
                HDPE Blow Moulding Machine Manufacturer in Telangana
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

        {/* SECTION 2: Top HDPE Blow Moulding Machine Manufacturer in Telangana — Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Top HDPE Blow Moulding Machine Manufacturer in Telangana — Faith
            Engineering Works
          </h2>
          <p className="text-gray-700">
            Most complaints about a “bad” blow moulding machine aren’t really
            about the machine breaking. They’re quieter than that — a bottle
            that looked fine off the line, then started showing a thin patch
            near the base a few weeks in, or a seam that held in testing but
            gave way once it was actually holding chemical. Nine times out of
            ten, the real issue traces back to one thing: the machine was never
            properly set up for HDPE specifically. Faith Engineering Works is an{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold no-underline transition-colors duration-200"
            >
              HDPE blow moulding machine manufacturer in Telangana
            </Link>
            , and getting that calibration right from the start is most of what
            we do differently.
          </p>
        </motion.div>

        {/* SECTION 3: Quick Facts Table */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Quick Facts
          </h2>
          <div className="overflow-hidden border border-gray-200 rounded-md shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <tbody>
                {quickFacts.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index !== quickFacts.length - 1
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

        {/* SECTION 4: Why HDPE Needs Its Own Settings, Not Generic “Plastic” Settings */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Why HDPE Needs Its Own Settings, Not Generic “Plastic” Settings
          </h2>
          <p className="text-gray-700">
            HDPE melts and cools differently from other plastics. A machine
            calibrated loosely for “plastic” in general — rather than HDPE
            specifically — tends to lose consistency exactly where it matters
            most, and the problem rarely shows up on day one.
          </p>
          <p className="text-gray-700">
            Think about what HDPE containers usually end up holding: chemicals
            and lubricants, where an inconsistent seam eventually means a leak.
            Detergent bottles, which get thrown around a warehouse and need to
            survive it. Water storage containers, which sit outdoors in the sun
            for years and can’t afford a weak point that only fails after the
            warranty’s expired. None of these forgive a machine that’s only
            approximately right for the material.
          </p>
        </motion.div>

        {/* SECTION 5: What We’ve Actually Built Around This */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            What We’ve Actually Built Around This
          </h2>
          <p className="text-gray-700">
            Parison control tuned specifically to how HDPE behaves, not a
            generic setting nudged slightly to accommodate it. Single Head,
            Double Head, and Triple Head configurations, so the machine matches
            your actual volume rather than over- or under-building for it. An
            Accumulator Head option for larger containers — 5 litres and up —
            where a single uneven shot of plastic becomes an obvious weak point.
            Auto De-Flashing built into the cycle, so a clean finish doesn’t
            depend on someone standing there with a blade. All of it configured
            for 100ml to 10 litres.
          </p>
        </motion.div>

        {/* SECTION 6: A Track Record You Don’t Have to Take Our Word For */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            A Track Record You Don’t Have to Take Our Word For
          </h2>
          <p className="text-gray-700">
            We’ve built these machines from our Delhi facility since 2000. If a
            company history page isn’t enough to go on, our GST TrustSEAL
            profile on IndiaMART has been active for over 15 years, with a
            4.6-star rating built from actual client reviews — something you can
            check yourself rather than trust because we said so.
          </p>
          <p className="text-gray-700">
            We also build every machine in-house. It’s worth asking any
            manufacturer you’re comparing us to whether they do the same. A
            reseller can usually quote you a price; they generally can’t explain
            why the parison control is set the way it is, because they didn’t
            design it. That distinction tends to matter most exactly when
            something needs troubleshooting later.
          </p>
        </motion.div>

        {/* SECTION 7: Manufacturing in Delhi, Actually Supporting Clients in Telangana */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Manufacturing in Delhi, Actually Supporting Clients in Telangana
          </h2>
          <p className="text-gray-700">
            Telangana is genuinely far from Delhi, and there’s no honest way to
            pretend otherwise — so here’s how support actually works rather than
            a vague promise that it will. Machines move through the same freight
            networks we use for export shipments. Installation gets scheduled in
            advance, with our team travelling to your facility rather than
            expecting you to figure it out from a manual. When something goes
            wrong, we start with a call or video to diagnose it remotely, and
            only send someone on-site if that’s genuinely what’s needed. Spare
            parts ship directly from the facility that built your machine,
            because we know exactly what it needs without guessing.
          </p>
          <p className="text-gray-700">
            Distance changes how logistics take. It doesn’t change how seriously
            we take getting it right.
          </p>
        </motion.div>

        {/* SECTION 8: Why Businesses Choose Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Why Businesses Choose Faith Engineering Works
          </h2>
          <p className="text-gray-700">
            None of this matters if you can’t act on it, so here’s the practical
            version. You’re not just buying a machine — you’re picking who
            you’ll be calling in year three when a part wears out or your
            product line changes. We’d rather be the honest answer to that
            question than the cheapest one on day one.
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {whyChoosePoints.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            That’s a harder sales pitch than most competitors give, but it’s the
            one that holds up after the sale, not just during it.
          </p>
        </motion.div>

        {/* SECTION 9: Hyderabad and the Rest of Telangana */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Hyderabad and the Rest of Telangana
          </h2>
          <p className="text-gray-700">
            As an{" "}
            <span className="font-bold text-gray-900">
              hdpe blow moulding machine manufacturer in Hyderabad
            </span>{" "}
            and across the wider state, the businesses we end up working with
            are fairly consistent: packaging, chemical and lubricant bottling,
            edible oil, and water container manufacturers — products where
            HDPE’s chemical resistance is doing real work, not just sitting on a
            spec sheet.
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
              HDPE blow moulding machine manufacturer in Telangana
            </Link>
            , ask about parison control before you ask about price — it tells
            you more about whether the machine was actually built for HDPE.
            Faith Engineering Works has been doing this from Delhi since 2000.
            Tell us your container size and volume, and we’ll tell you honestly
            whether our machine fits.
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
