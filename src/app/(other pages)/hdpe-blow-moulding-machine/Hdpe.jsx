"use client"; // Required if using Next.js 13+ App Router

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HdpeBlowMoldingPage() {
  const topSpecs = [
    { label: "Blowing Capacity", value: "50 ml" },
    { label: "Screw Diameter", value: "25 mm" },
    { label: "Maximum Plasticizing Capacity", value: "15 Kg/Hr" },
    { label: "Production Capacity", value: "150 BPH" },
    { label: "Country of Origin", value: "Made in India" },
  ];

  const productSpecs = [
    { label: "Model Number", value: "FEW-2000H" },
    { label: "Shape", value: "Rectangular" },
    { label: "Colour", value: "Cream-Blue, White-Blue" },
    { label: "Condition", value: "New" },
    { label: "Power", value: "18 Kw" },
    { label: "Usage", value: "Industrial, Plastic" },
    { label: "Certification", value: "ISO 9001:2008 Certified" },
    { label: "Type", value: "Single Pump" },
    { label: "Warranty", value: "1 Year" },
    { label: "Country of Origin", value: "India" },
    { label: "Blow Moulding Type", value: "Semi-Automatic / Fully Automatic" },
    { label: "Plastic Processed", value: "HDPE, LDPE, PPE, etc." },
    { label: "Driven Type", value: "Hydraulic" },
    { label: "Finishing", value: "Chrome Finish" },
    { label: "Business Type", value: "Manufacturer, Supplier" },
    { label: "Brand Name", value: "Faith Engineering Works" },
    { label: "Price", value: "₹10 Lac / Piece" },
  ];

  const comparisonData = [
    {
      factor: "Manufacturing",
      faith: "In-house, own facility in Delhi",
      typical: "Often outsourced or trading-based",
    },
    {
      factor: "HDPE-specific calibration",
      faith: "Machines tuned for HDPE's melting & cooling behaviour",
      typical: "Generic multi-plastic settings, adjusted later",
    },
    {
      factor: "Capacity range",
      faith: "250ml to 10 litres, single/double head/double stage",
      typical: "Fixed standard models, limited flexibility",
    },
    {
      factor: "Customisation",
      faith: "Built around your bottle/container design",
      typical: "Standard models only, minimal customisation",
    },
    {
      factor: "After-sales support",
      faith: "Direct factory support, no middleman",
      typical: "Support often routed through dealers/agents",
    },
    {
      factor: "Experience",
      faith: "25+ years, manufacturing since 2000",
      typical: "Varies widely, not always verifiable",
    },
  ];

  const faqs = [
    {
      q: "Q1. Who is the best HDPE blow moulding machine manufacturer?",
      a: "Faith Engineering Works is one of the best HDPE blow moulding machine manufacturers, offering in-house built machines at their Delhi facility with direct installation support, operator training, and spare parts availability — making them a trusted choice for businesses across container sizes from 250ml to 10 litres.",
    },
    {
      q: "Q2. What is an HDPE blow moulding machine used for?",
      a: "An HDPE blow moulding machine is used to manufacture hollow HDPE products such as bottles, jerry cans, drums, and containers by melting HDPE plastic and shaping it inside a mould using air pressure.",
    },
    {
      q: "Q3. Why is HDPE preferred for blow moulded containers?",
      a: "HDPE is chemical-resistant, durable, and UV-resistant, making it ideal for chemical bottles, lubricant containers, water tanks, and jerry cans that need to withstand handling and outdoor storage.",
    },
    {
      q: "Q4. What sizes of HDPE containers can Faith Engineering Works’ machines produce?",
      a: "Faith Engineering Works manufactures HDPE blow moulding machines that produce containers ranging from 250ml to 10 litres, covering small bottles to larger industrial containers.",
    },
    {
      q: "Q5. What is the difference between a single head and double head HDPE blow moulding machine manufacturer?",
      a: "A single head machine produces one container per cycle, suited for smaller production needs. A double head machine produces two containers per cycle, giving higher output for larger order volumes.",
    },
    {
      q: "Q6. Can the same machine process other plastics besides HDPE?",
      a: "Many HDPE blow moulding machines can also process materials like PP and PVC with adjusted settings, but the machine's calibration should be confirmed for the specific material you plan to use.",
    },
    {
      q: "Q7. Does Faith Engineering Works provide after-sales support for HDPE machines?",
      a: "Yes. Since machines are manufactured in-house at our Delhi facility, our team provides direct support for installation, operator guidance, and spare parts after purchase.",
    },
    {
      q: "Q8. Can the machine be customised for specific HDPE bottle shapes like jerry cans or drums?",
      a: "Yes. Faith Engineering Works builds machines and moulds based on your specific container shape and size, including jerry cans, drums, and industrial containers.",
    },
    {
      q: "Q9. How do I know which HDPE blow moulding machine capacity is right for my business?",
      a: "The right capacity depends on your container size and required production speed. Contact Faith Engineering Works with your product details to get a machine recommendation suited to your output needs.",
    },
    {
      q: "Q10. What is the price of a 2 litre automatic HDPE blow moulding machine?",
      a: "The 2 Litre Automatic HDPE Blow Moulding Machine (Model FEW-2000H) from Faith Engineering Works is priced at ₹10 Lac per piece. Final pricing may vary based on the customisation options you choose, such as single or double station, auto sealing, or extruder configuration.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1c1c1c] text-[16px] lg:text-[18px] leading-relaxed font-sans pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 space-y-14 lg:space-y-20">
        {/* SECTION 1: Top Hero & Main Specs */}
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
              Faith Engineering Works is a leading Manufacturer, Supplier, and
              Dealer of high-quality{" "}
              <Link
                href="/contact-us"
                className="text-[#d90429] font-bold  transition-colors duration-200"
              >
                HDPE Blow Moulding Machine Manufacturer in delhi
              </Link>
              , Plastic Blow Moulding Machines, and Blow Moulding Machines. We
              are committed to delivering reliable, efficient, and advanced
              machinery solutions designed to meet the diverse requirements of
              the plastic manufacturing industry.
            </p>

            {/* Top Specifications Table */}
            <div className="overflow-hidden border border-gray-200 rounded-md shadow-sm bg-white mt-6">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {topSpecs.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index !== topSpecs.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <td className="py-3.5 px-4 font-semibold text-gray-800 w-1/2">
                        {item.label}
                      </td>
                      <td className="py-3.5 px-4 text-gray-700 w-1/2">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Machine Image Preview */}
          <div className="lg:col-span-6 bg-[#fdeee4]/60 p-2 sm:p-6 rounded-2xl flex items-center justify-center shadow-inner">
            <div className="relative w-full h-[250px] sm:h-[420px] lg:h-[460px]">
              <Image
                src="/other/h1.png"
                alt="HDPE Blow Molding Machine"
                fill
                sizes="100vw"
                priority
                className="object-cover md:object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: Top HDPE Blow Moulding Machine Manufacturer in Delhi */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Top HDPE Blow Moulding Machine Manufacturer in Delhi — Faith
            Engineering Works
          </h2>
          <p className="text-gray-700">
            <strong>Faith Engineering Works</strong> is a trusted{" "}
            <Link
              href="/contact-us"
              className="text-[#d90429] font-bold  transition-colors duration-200"
            >
              HDPE Blow Moulding Machine Manufacturer
            </Link>
            , based in India. However, it has been manufacturing machines since
            the year 2000. Our engineers build single-head, double head, and
            double stage{" "}
            <strong>HDPE Blow Moulding Machine Manufacturer in Delhi</strong>,
            with capacities from 250ml to 10 litres, designed specifically to
            process high-density polyethylene (HDPE) for bottles, cans, drums,
            and containers.
          </p>
          <p className="text-gray-700">
            If you manufacture HDPE bottles or containers and are searching for
            a dependable machine manufacturer, this guide explains what an HDPE
            blow moulding machine does, why HDPE needs specific machine
            settings, and how to choose the right manufacturer.
          </p>
        </motion.div>

        {/* SECTION 3: What Is an HDPE Blow Moulding Machine? */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            What Is an HDPE Blow Moulding Machine?
          </h2>
          <p className="text-gray-700">
            An <strong>HDPE Blow Moulding Machine Manufacturer</strong> built to
            melt and shape HDPE (high-density polyethylene) plastic into hollow
            products like bottles, jerry cans, and drums. The process works like
            this:
          </p>
          <ol className="list-decimal list-outside pl-6 space-y-2 text-gray-700">
            <li>
              HDPE granules are heated and melted inside the machine’s extruder.
            </li>
            <li>
              The melted HDPE is pushed out as a hollow tube called a parison.
            </li>
            <li>
              The tube is clamped inside a mould shaped like the final product.
            </li>
            <li>
              Compressed air is blown into the tube, pushing the HDPE against
              the mould walls.
            </li>
            <li>
              The plastic cools, the mould opens, and the finished HDPE
              container comes out.
            </li>
          </ol>
          <p className="text-gray-700 pt-2">
            HDPE behaves differently from other plastics like PET or PP during
            melting and cooling, so the machine needs correct temperature
            control and parison settings specifically tuned for HDPE.
          </p>
        </motion.div>

        {/* SECTION 4: Why HDPE Is Used for Blow-Moulded Containers */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Why HDPE Is Used for Blow-Moulded Containers
          </h2>
          <p className="text-gray-700">
            Many buyers search for “HDPE blow moulding machines” without knowing
            exactly why HDPE is chosen over other plastics. Here is the simple
            reason:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Chemical resistance</strong> – HDPE does not react with
              oils, chemicals, and detergents, making it ideal for lubricant,
              chemical, and cleaning product bottles.
            </li>
            <li>
              <strong>High durability</strong> – HDPE containers resist cracking
              and impact damage, useful for jerry cans and drums that get
              handled roughly.
            </li>
            <li>
              <strong>UV and weather resistance</strong> – HDPE holds up well in
              outdoor storage, which is why it is common for water tanks and
              industrial containers.
            </li>
            <li>
              <strong>Food-grade safety</strong> – Certain HDPE grades are safe
              for food and pharmaceutical packaging.
            </li>
            <li>
              <strong>Cost-effective for large volumes</strong> – HDPE is
              affordable and lightweight, reducing shipping and material costs
              for bulk container production.
            </li>
          </ul>
          <p className="text-gray-700 pt-2">
            This is exactly why industries like chemicals, lubricants, edible
            oil, pharmaceuticals, and water storage rely specifically on HDPE
            blow moulding machines rather than general-purpose plastic machines.
          </p>
        </motion.div>

        {/* SECTION 5: Why Choose Faith Engineering Works */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Why Choose Faith Engineering Works as Your HDPE Blow Moulding
            Machine Manufacturer
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              1. <strong>25+ Years of In-House Manufacturing</strong>{" "}
              <Link
                href="/"
                className="text-[#d90429] font-bold  transition-colors duration-200"
              >
                Faith Engineering Works
              </Link>{" "}
              has manufactured plastic blow moulding machines since 2000 from
              our facility in Bawana Industrial Area, Delhi. This means direct
              quality control and faster support, without relying on third-party
              trading.
            </p>
            <p>
              2.{" "}
              <strong>Machines Built Specifically for HDPE Processing</strong>{" "}
              Our machines are engineered with the correct heating, cooling, and
              parison control settings needed for consistent HDPE output — not a
              generic multi-plastic machine adjusted after the fact.
            </p>
            <p>
              3. <strong>Capacity Range for Every Business Size</strong> We
              manufacture{" "}
              <strong>HDPE Blow Moulding Machine Manufacturer in Delhi</strong>{" "}
              from 250ml up to 10 litres, covering small bottles to larger
              industrial containers like jerry cans and drums.
            </p>
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                4. Multiple Machine Configurations
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1.5">
                <li>
                  <strong>Single Head Machines</strong> – suitable for smaller
                  production volumes and new businesses
                </li>
                <li>
                  <strong>Double Head Machines</strong> – higher output for
                  growing production needs
                </li>
                <li>
                  <strong>Double Stage Machines</strong> – built for continuous,
                  high-volume HDPE manufacturing
                </li>
              </ul>
            </div>
            <p>
              5. <strong>Direct Factory Support</strong> Since machines are made
              in-house, our team provides direct installation guidance, spare
              parts, and troubleshooting support — no communication gaps through
              a middleman.
            </p>
          </div>
        </motion.div>

        {/* SECTION 6: Industries That Rely on HDPE Blow Moulding Machines */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Industries That Rely on HDPE Blow Moulding Machines
          </h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li>Lubricant and engine oil bottle manufacturers</li>
            <li>Chemical and detergent packaging companies</li>
            <li>Edible oil and food-grade container producers</li>
            <li>Water storage tank and jerry can manufacturers</li>
            <li>Pharmaceutical and cosmetic bottle producers</li>
          </ul>
        </motion.div>

        {/* SECTION 7: About HDPE Blow Moulding Machines */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            About HDPE Blow Moulding Machines
          </h2>
          <p className="text-gray-700">
            High-density polyethylene (HDPE) is one of the most widely used
            plastics today, and demand for it keeps growing across industries.
            At Faith Engineering Works, we understand this shift, so we have
            upgraded our production line with dedicated machines built specially
            for blowing and forming HDPE containers. This allows us to produce a
            large number of packages in different sizes, quickly and without
            compromising on quality. Our machines are built to be reliable,
            efficient, and cost-effective for everyday industrial use.
          </p>
          <div className="pt-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-2">
              Built for Durability and Speed
            </h3>
            <p className="text-gray-700">
              Every HDPE blow moulding machine we manufacture uses carefully
              selected components that are strong, long-lasting, and resistant
              to mechanical damage such as dents, cracks, or deformation. Most
              of the moulding process runs automatically, which means less
              manual work, faster bottle forming, and higher output. This helps
              our customers complete large orders in a shorter time, without
              delays.
            </p>
          </div>
        </motion.div>

        {/* SECTION 8: Applications of HDPE Bottles */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Applications of HDPE Bottles
          </h2>
          <p className="text-gray-700">
            HDPE bottles are used across many industries because of their
            strength and safety. Common uses include:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li>Storing liquid food products</li>
            <li>Packaging chemical cleaning agents and detergents</li>
            <li>Transporting fuel and heating oil</li>
            <li>Lubricant, engine oil, and industrial liquid packaging</li>
            <li>Water storage and jerry cans</li>
          </ul>
        </motion.div>

        {/* SECTION 9: Product Specs - FEW-2000H */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            2 Litre Automatic HDPE Blow Moulding Machine – Model FEW-2000H
          </h2>
          <p className="text-gray-700">
            Faith Engineering Works is proud to offer another reliable addition
            to our range of blow moulding machines — the{" "}
            <strong>
              2 Litre Automatic HDPE Blow Moulding Machine (Model No: FEW-2000H)
            </strong>
            . Built using high-quality materials, this machine is easy to
            install, simple to operate, and strong enough to withstand tough
            industrial conditions. As a trusted{" "}
            <strong>
              Blow Moulding Machine Manufacturer, Exporter &amp; Supplier
            </strong>
            , we offer this machine at competitive, industry-leading prices.
          </p>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-2">
            Product Specifications
          </h3>
          <div className="overflow-hidden border border-gray-200 rounded-md shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/70">
                  <th className="py-3.5 px-4 font-bold text-gray-900 w-1/2">
                    Specification
                  </th>
                  <th className="py-3.5 px-4 font-bold text-gray-900 w-1/2">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {productSpecs.map((item, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx !== productSpecs.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {item.label}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* SECTION 10: Key Specifications and Features */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Key Specifications and Features
          </h2>
          <ul className="list-disc list-outside pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Raw Material Compatibility:</strong> Primarily designed
              for HDPE, but many machines can also process other materials like
              LDPE, PP, PVC, and PC depending on the model and configuration.
            </li>
            <li>
              <strong>Output Capacity:</strong> Production speed varies by
              machine type and product size. For example, a standard 5-litre
              single station machine can typically produce around 100–350
              bottles per hour.
            </li>
            <li>
              <strong>Parison Control System:</strong> Equipped with an advanced
              parison control system (often using a MOOG programmer) that
              precisely manages the thickness of the extruded plastic tube —
              essential for achieving uniform wall thickness, even in complex
              bottle shapes.
            </li>
            <li>
              <strong>Multi-layer Co-extrusion (Optional):</strong> Some
              machines support multi-layer co-extrusion, allowing different
              material layers or colours to be extruded together for added
              strength or better appearance.
            </li>
            <li>
              <strong>Control System:</strong> Comes with a PLC (Programmable
              Logic Controller) and an HMI touchscreen interface, making it easy
              to monitor, adjust, and save machine settings.
            </li>
            <li>
              <strong>Robust Build Quality:</strong> Constructed using durable
              materials like mild steel, ensuring the machine can handle
              continuous industrial use for years without breaking down.
            </li>
          </ul>
        </motion.div>

        {/* SECTION 11: What Makes Faith Engineering Works Different & Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            What Makes Faith Engineering Works Different
          </h2>
          <p className="text-gray-700">
            A lot of manufacturers claim to be “the best” without explaining
            why. Here is what actually matters when choosing an{" "}
            <strong>HDPE Blow Moulding Machine Manufacturer in Delhi</strong>:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Consistent wall thickness control</strong> – proper
              parison control avoids weak spots in HDPE containers, especially
              important for chemical and oil bottles that must not leak.
            </li>
            <li>
              <strong>Machine durability for daily industrial use</strong> –
              built for continuous production runs, not just demo output.
            </li>
            <li>
              <strong>Genuine after-sales support</strong> – installation help,
              operator training, and spare parts availability after purchase.
            </li>
            <li>
              <strong>Custom mould and machine configuration</strong> – built
              around your specific bottle size and shape instead of forcing a
              fixed standard model.
            </li>
          </ul>

          <div className="pt-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              Faith Engineering Works vs Typical HDPE Machine Manufacturers
            </h2>
            <p className="text-gray-700">
              Most manufacturers in this industry look similar on the surface.
              Here is a clear comparison to help you evaluate:
            </p>

            <div className="overflow-x-auto border border-gray-200 rounded-md shadow-sm bg-white">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/70">
                    <th className="py-3 px-4 font-bold text-gray-900 w-1/4">
                      Factor
                    </th>
                    <th className="py-3 px-4 font-bold text-gray-900 w-5/12">
                      Faith Engineering Works
                    </th>
                    <th className="py-3 px-4 font-bold text-gray-900 w-1/3">
                      Typical Manufacturers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        idx !== comparisonData.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <td className="py-3 px-4 font-medium text-gray-800">
                        {row.factor}
                      </td>
                      <td className="py-3 px-4 text-gray-700">{row.faith}</td>
                      <td className="py-3 px-4 text-gray-600">{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 pt-2">
              This is why businesses that need consistent HDPE output —
              especially for chemical, oil, and pharmaceutical containers where
              leak-proof quality matters — prefer working directly with an
              in-house manufacturer instead of a trading company.
            </p>
          </div>
        </motion.div>

        {/* SECTION 12: How to Choose & Get in Touch */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            How to Choose the Right HDPE Blow Moulding Machine
          </h2>
          <ol className="list-decimal list-outside pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Check the container size you need</strong> – match machine
              capacity (ml to litres) to your actual product.
            </li>
            <li>
              <strong>Confirm HDPE-specific settings</strong> – ask if the
              machine is calibrated for HDPE’s melting and cooling behaviour,
              not just any plastic.
            </li>
            <li>
              <strong>Decide your output speed</strong> – single head machines
              suit lower volumes; double head or double stage machines suit
              higher-volume production.
            </li>
            <li>
              <strong>Ask about after-sales support</strong> – installation help
              and spare parts availability matter more than the lowest price.
            </li>
            <li>
              <strong>Check customisation options</strong> – your bottle design
              may change later, so choose a manufacturer who can adjust machines
              and moulds accordingly.
            </li>
          </ol>

          <div className="pt-6 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-700">
              Looking for a reliable{" "}
              <Link
                href="/contact-us"
                className="text-[#d90429] font-bold  transition-colors duration-200"
              >
                HDPE Blow Moulding Machine Manufacturer
              </Link>{" "}
              for your production line? Faith Engineering Works builds machines
              specifically calibrated for HDPE processing, backed by 25+ years
              of in-house manufacturing experience and direct factory support.
              Contact us today to discuss your container size and production
              requirements.
            </p>
          </div>
        </motion.div>

        {/* SECTION 13: Frequently Asked Questions */}
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
