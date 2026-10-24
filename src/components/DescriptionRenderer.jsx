"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Smooth scroll reveal configuration
const scrollAnimation = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function DescriptionRenderer({ blocks = [] }) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null;

  return (
    <div className="space-y-7 text-[16px] leading-7 text-gray-700 sm:space-y-8 sm:text-[17px] sm:leading-8">
      {/* Beautiful Top Description Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-gray-150 pb-5"
      >
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#B00020]">
          Technical Overview
        </span>
        <h2 className="mt-1 bg-gradient-to-r from-[#850019] via-[#B00020] to-[#D20B19] bg-clip-text text-2xl font-black font-serif tracking-tight text-transparent sm:text-3xl lg:text-4xl">
          Product Description & Details
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-2.5 h-1 rounded-full bg-gradient-to-r from-[#850019] to-[#D20B19]"
        />
      </motion.div>

      {blocks.map((block, idx) => {
        if (!block) return null;

        if (block.type === "h2" && block.content) {
          return (
            <motion.h2
              key={idx}
              {...scrollAnimation}
              className="pt-4 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
            >
              {block.content}
            </motion.h2>
          );
        }

        if (block.type === "h3" && block.content) {
          return (
            <motion.h3
              key={idx}
              {...scrollAnimation}
              className="pt-2 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl"
            >
              {block.content}
            </motion.h3>
          );
        }

        if (block.type === "p") {
          return (
            <motion.p
              key={idx}
              {...scrollAnimation}
              className="text-[16px] leading-7 text-gray-700 sm:text-[17px] sm:leading-8"
            >
              {Array.isArray(block.segments) && block.segments.length > 0
                ? block.segments.map((seg, i) =>
                    seg?.type === "link" ? (
                      <Link
                        key={i}
                        href={seg.href || "#"}
                        className="font-semibold text-red-700 no-underline transition-colors hover:text-red-800 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                      >
                        {seg.text || ""}
                      </Link>
                    ) : (
                      <span
                        key={i}
                        className={
                          seg?.bold ? "font-semibold text-gray-900" : ""
                        }
                      >
                        {seg?.text || ""}
                      </span>
                    ),
                  )
                : block.content || block.text || null}
            </motion.p>
          );
        }

        if (
          block.type === "list" &&
          Array.isArray(block.items) &&
          block.items.length > 0
        ) {
          const ListTag = block.ordered ? motion.ol : motion.ul;

          return (
            <ListTag
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className={`space-y-3 pl-6 text-[16px] leading-7 text-gray-700 sm:space-y-3.5 sm:text-[17px] sm:leading-8 ${
                block.ordered ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: "easeOut" },
                    },
                  }}
                  className="ps-1 marker:font-semibold marker:text-red-600"
                  dangerouslySetInnerHTML={{ __html: item || "" }}
                />
              ))}
            </ListTag>
          );
        }

        if (
          block.type === "table" &&
          Array.isArray(block.rows) &&
          block.rows.length > 0
        ) {
          return (
            <motion.div
              key={idx}
              {...scrollAnimation}
              className="my-5 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <table className="w-full min-w-[520px] text-left text-sm text-gray-700 sm:text-base">
                {Array.isArray(block.headers) && block.headers.length > 0 && (
                  <thead className="bg-gray-100 text-xs font-bold uppercase tracking-wide text-gray-700 sm:text-sm">
                    <tr>
                      {block.headers.map((header, i) => (
                        <th key={i} className="px-4 py-3.5 sm:px-5">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}

                <tbody className="divide-y divide-gray-100">
                  {block.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="transition-colors hover:bg-red-50/40"
                    >
                      {Array.isArray(row) &&
                        row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="px-4 py-3.5 leading-relaxed sm:px-5 sm:py-4"
                          >
                            {cell ?? "—"}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          );
        }

        if (
          block.type === "faq" &&
          Array.isArray(block.items) &&
          block.items.length > 0
        ) {
          return (
            <div key={idx} className="space-y-3 pt-2 sm:space-y-4">
              {block.items.map((faq, fIdx) => (
                <motion.div
                  key={fIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: fIdx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4 sm:p-5"
                >
                  <h4 className="text-base font-semibold leading-snug text-gray-900 sm:text-lg">
                    {faq?.question || "Question"}
                  </h4>

                  <p className="mt-2 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-7">
                    {faq?.answer || "Answer not available."}
                  </p>
                </motion.div>
              ))}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
