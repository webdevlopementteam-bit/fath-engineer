import Link from "next/link";
import { motion } from "framer-motion";
import { ProductGallery } from "./ProductGallery";
import DescriptionRenderer from "./DescriptionRenderer";

export default function ProductDetailPage({ product }) {
  const { images, data } = product;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Top Section: Left Sticky Image + Right Tables/Content */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
        {/* Left Sticky Column */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full md:sticky md:top-6"
        >
          <ProductGallery images={images} />
        </motion.div>

        {/* Right Scrollable Column */}
        <div className="flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-2xl font-bold text-gray-900 md:text-3xl"
          >
            {product.name}
          </motion.h1>

          {data.sideContent?.map((item, idx) => {
            if (item.type === "p") {
              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-sm leading-relaxed text-gray-700"
                >
                  {item.segments?.map((seg, i) =>
                    seg.type === "link" ? (
                      <Link
                        key={i}
                        href={seg.href || "#"}
                        className="font-medium text-red-600 no-underline hover:no-underline"
                      >
                        {seg.text}
                      </Link>
                    ) : (
                      <span
                        key={i}
                        className={seg.bold ? "font-bold text-gray-900" : ""}
                      >
                        {seg.text}
                      </span>
                    ),
                  )}
                </motion.p>
              );
            }

            if (item.type === "table") {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 22, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  {item.title && (
                    <div className="bg-[#4a4a4a] px-4 py-2 text-center text-xs font-bold tracking-wider text-white uppercase">
                      {item.title}
                    </div>
                  )}

                  <table className="w-full border-collapse text-left text-sm text-gray-700">
                    <tbody>
                      {item.rows?.map((row, rIdx) => (
                        <motion.tr
                          key={rIdx}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.35,
                            delay: rIdx * 0.035,
                            ease: "easeOut",
                          }}
                          className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/70"
                        >
                          <td className="w-1/2 bg-gray-50/40 px-4 py-2.5 font-medium text-gray-800">
                            {row[0]}
                          </td>
                          <td className="w-1/2 px-4 py-2.5 text-gray-600">
                            {row[1]}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* Bottom Description Content */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-16 border-t border-gray-200 pt-10"
      >
        <DescriptionRenderer blocks={data.descriptionData} />
      </motion.div>
    </div>
  );
}
