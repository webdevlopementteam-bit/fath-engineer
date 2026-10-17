"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlowMouldingMachineManufacturerPage() {
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

  const productRange = [
    {
      title: "100ml to 250ml machines",
      desc: "suited for small cosmetic, pharma, and sample-size containers",
    },
    {
      title: "500ml machines",
      desc: "commonly used for household chemical and personal care bottles",
    },
    {
      title: "1 Litre machines",
      desc: "available in Triple Head Double Stage configuration with Auto De-Flashing, suited for higher-volume bottle production",
    },
    {
      title: "2 Litre and 5 Litre machines",
      desc: "used for larger containers like edible oil and lubricant packaging",
    },
    {
      title: "10 Litre Accumulator Head machines",
      desc: "designed for large industrial containers, jerry cans, and drums where consistent parison control matters most",
    },
  ];

  const keyFeatures = [
    "Wide capacity range — from 100ml to 10 litres",
    "Multiple head configurations — Single Head, Double Head, and Triple Head machines available",
    "Single Stage and Double Stage options — depending on your production speed needs",
    "Accumulator Head machines — for consistent parison control on larger containers",
    "Auto De-Flashing systems — reduces manual finishing work and material waste",
    "V-Strip attachment options — for containers that need a view strip design",
    "High production efficiency with smooth operation and low maintenance",
    "Robust construction built for long working life and industrial daily use",
  ];

  const industries = [
    "Packaging and FMCG (bottles, jars, containers)",
    "Edible oil and lubricant bottle production",
    "Chemical and detergent packaging",
    "Water and beverage container manufacturing",
    "Cosmetic and pharmaceutical bottle production",
  ];

  const selectionCriteria = [
    {
      point: "Container size and shape",
      detail:
        "match the machine’s capacity and configuration (single/double/triple head) to your actual product.",
    },
    {
      point: "Production speed needed",
      detail:
        "single stage machines suit lower volumes; double stage or accumulator head machines suit higher-volume, larger containers.",
    },
    {
      point: "Customisation ability",
      detail:
        "check if the manufacturer can adjust moulds and machine settings to your specific bottle design.",
    },
    {
      point: "After-sales support",
      detail:
        "installation help, spare parts, and repair response time matter more long-term than the price alone.",
    },
    {
      point: "Manufacturing history",
      detail:
        "check how long the company has been manufacturing and whether they build machines in-house.",
    },
  ];

  const faqs = [
    {
      q: "Q1. What is a blow moulding machine used for?",
      a: "A blow moulding machine is used to manufacture hollow plastic products such as bottles, jars, cans, and containers by melting plastic and shaping it inside a mould using air pressure.",
    },
    {
      q: "Q2. What container sizes can Faith Engineering Works’ machines produce?",
      a: "Faith Engineering Works manufactures blow moulding machines with capacities from 100ml to 10 litres, covering small bottles to larger industrial containers.",
    },
    {
      q: "Q3. What is the difference between Single Head, Double Head, and Triple Head machines?",
      a: "A Single Head machine produces one container per cycle. A Double Head machine produces two containers per cycle, and a Triple Head machine produces three, giving higher output for larger production needs.",
    },
    {
      q: "Q4. What is an Auto De-Flashing system?",
      a: "An Auto De-Flashing system automatically removes excess plastic (flash) from a moulded container during production, reducing manual finishing work and material waste.",
    },
    {
      q: "Q5. What is the difference between Single Stage and Double Stage machines?",
      a: "A Single Stage machine completes moulding in one continuous process, while a Double Stage machine separates the process into two steps, which can improve control for certain container designs.",
    },
    {
      q: "Q6. Does Faith Engineering Works provide after-sales support?",
      a: "Yes. Faith Engineering Works provides complete technical support, installation assistance, and dependable after-sales service directly from our Delhi manufacturing facility.",
    },
    {
      q: "Q7. Can Faith Engineering Works customise a machine for a specific container design?",
      a: "Yes. Machines are built according to the customer’s specific container size, shape, and production requirement instead of offering only fixed standard models.",
    },
    {
      q: "Q8. How long has Faith Engineering Works been manufacturing blow moulding machines?",
      a: "Faith Engineering Works has been manufacturing blow moulding machines since 2000, giving the company over 25 years of experience in this field.",
    },
    {
      q: "Q9. What is an Accumulator Head blow moulding machine used for?",
      a: "An Accumulator Head machine collects melted plastic before forming the parison, giving more consistent wall thickness on larger containers, which is why it’s commonly used for 10-litre industrial containers, jerry cans, and drums.",
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
              Blow Moulding Machine Manufacturer
            </h1>
            <p className="text-gray-700">
              <Link
                href="/contact-us"
                className="text-[#d90429] font-bold  transition-colors duration-200"
              >
                Blow Moulding Machine Manufacturer
              </Link>{" "}
              are used for forming hollow plastic containers, such as bottles,
              by inflating heated plastic into a mold. These machines are
              essential in industries like packaging, automotive, and consumer
              goods. They are available in various types, including extrusion,
              injection, and stretch blow molding, each suited to different
              production needs. Key features include high-speed operation,
              precision in product formation, energy efficiency, and minimal
              material waste. Blow molding machines are designed for durability,
              ensuring consistent, large-volume production with excellent
              product quality.
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
            <div className="relative w-full h-[250px] sm:h-[420px] lg:h-[480px]">
              <Image
                src="/other/b1.png"
                alt="Blow Moulding Machine Manufacturer"
                fill
                sizes="100vw"
                priority
                className="object-cover md:object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: Best Blow Moulding Machine Manufacturer */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Best Blow Moulding Machine Manufacturer — Faith Engineering Works
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works is the best{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold  transition-colors duration-200"
            >
              blow moulding machine manufacturer
            </Link>{" "}
            based in Delhi, India, making machines since 2000. We build Single
            Head, Double Head, and Triple Head blow moulding machines in Single
            Stage, Double Stage, and Accumulator Head configurations, with
            capacities ranging from 100ml to 10 litres. Our machines are used to
            produce plastic bottles, containers, cans, and industrial packaging
            across India.
          </p>
          <p className="text-gray-700">
            This page explains what a blow moulding machine does, why Faith
            Engineering Works is a strong choice, and what to check before you
            buy one.
          </p>
        </motion.div>

        {/* SECTION 3: What Is a Blow Moulding Machine? */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            What Is a Blow Moulding Machine?
          </h2>
          <p className="text-gray-700">
            A blow moulding machine manufacturer makes hollow plastic products
            such as bottles, jars, and containers. Here is how it works, in
            simple steps:
          </p>
          <ol className="list-decimal list-outside pl-6 space-y-2 text-gray-700">
            <li>Plastic granules are heated until they melt.</li>
            <li>
              The melted plastic is pushed out as a hollow tube, called a
              parison.
            </li>
            <li>
              The tube is clamped inside a mould shaped like the final product.
            </li>
            <li>
              Air is blown into the tube, pushing the plastic against the mould
              walls.
            </li>
            <li>
              The plastic cools down, the mould opens, and the finished
              container comes out.
            </li>
          </ol>
          <p className="text-gray-700 pt-1">
            This cycle takes only a few seconds, which is why one machine can
            produce hundreds of containers every hour.
          </p>
        </motion.div>

        {/* SECTION 4: Why Choose Faith Engineering Works */}
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
            These are the actual strengths behind our manufacturing, not just
            claims:
          </p>
          <div className="space-y-3 text-gray-700">
            <p>
              <Link
                href="/"
                className="text-[#d90429] font-bold  transition-colors duration-200"
              >
                Faith Engineering Works
              </Link>{" "}
              <strong>25+ Years of Experience</strong> We have been
              manufacturing blow moulding machines since 2000, giving us over
              two decades of hands-on engineering knowledge in this field.
            </p>
            <p>
              <strong>Global Presence</strong> We serve clients across India and
              export to international markets.
            </p>
            <p>
              <strong>Service &amp; Support</strong> We provide complete
              technical support, installation assistance, and dependable
              after-sales service — not just a one-time sale.
            </p>
            <p>
              <strong>Advanced Infrastructure</strong> Our manufacturing
              facility is equipped with modern machinery and updated production
              technology, spread across two operational units in Delhi.
            </p>
            <p>
              <strong>Quality Assurance</strong> Every machine goes through
              quality checks at each stage of manufacturing to ensure durable,
              efficient performance.
            </p>
            <p>
              <strong>Customised Solutions</strong> We build machines according
              to your specific container size, shape, and production requirement
              — not just fixed standard models.
            </p>
          </div>
        </motion.div>

        {/* SECTION 5: Our Manufacturing Facility */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Our Manufacturing Facility
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works operates from two manufacturing units in
            Bawana Industrial Area, Delhi. Unlike companies that trade or resell
            machines built by others, we design, build, and test every machine
            in-house. This gives us direct control over build quality at every
            stage — from the extruder and mould clamping system to the final
            testing before a machine leaves our facility. It also means that
            when you need support after installation, you’re speaking to the
            people who actually manufactured your machine, not a reseller
            passing your query along to someone else.
          </p>
        </motion.div>

        {/* SECTION 6: Our Product Range */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Our Product Range
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works manufactures blow moulding machines across a
            wide capacity range, so businesses of different sizes and production
            needs can find a suitable configuration. Our range includes:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {productRange.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> — {item.desc}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 pt-1">
            Each configuration can be adjusted based on your specific container
            design, so you’re not limited to a fixed standard model.
          </p>
        </motion.div>

        {/* SECTION 7: Key Features of Our Blow Moulding Machines */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Key Features of Our Blow Moulding Machines
          </h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 8: Industries That Use Blow Moulding Machines */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Industries That Use Blow Moulding Machines
          </h2>
          <p className="text-gray-700">
            Blow moulding machine manufacturer like ours are commonly used by
            manufacturers in:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            {industries.map((ind, idx) => (
              <li key={idx}>{ind}</li>
            ))}
          </ul>
        </motion.div>

        {/* SECTION 9: What to Check Before Choosing */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            What to Check Before Choosing a Blow Moulding Machine Manufacturer
          </h2>
          <ol className="list-decimal list-outside pl-6 space-y-2 text-gray-700">
            {selectionCriteria.map((item, idx) => (
              <li key={idx}>
                <strong>{item.point}</strong> — {item.detail}
              </li>
            ))}
          </ol>
          <p className="text-gray-700 pt-2">
            Faith Engineering Works helps you evaluate all of these before you
            invest, so you get a machine suited to your actual production needs.
            Buying a blow moulding machine manufacturer is not a one-time
            transaction — it’s the start of a relationship you’ll depend on for
            spare parts, troubleshooting, and possibly future upgrades as your
            production grows. This is why checking a manufacturer’s real track
            record matters more than comparing price alone.
          </p>
        </motion.div>

        {/* SECTION 10: Get in Touch */}
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
            Looking for a dependable{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold  transition-colors duration-200"
            >
              blow moulding machine manufacturer
            </Link>
            ? Faith Engineering Works has been manufacturing blow moulding
            machines in-house from our Delhi facility since 2000, offering
            machines from 100ml to 10 litres with customisation options and
            direct after-sales support. Contact us today to discuss your
            container size and production requirement.
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
