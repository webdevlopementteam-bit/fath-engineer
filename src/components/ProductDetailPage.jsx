import Link from "next/link";
import { ProductGallery } from "./ProductGallery";
import DescriptionRenderer from "./DescriptionRenderer"; // <-- Import add kiya

export default function ProductDetailPage({ product }) {
  const { images, data } = product;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Top Section: Left Sticky Image + Right Tables/Content */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
        {/* Left Sticky Column */}
        <div className="w-full md:sticky md:top-6">
          <ProductGallery images={images} />
        </div>

        {/* Right Scrollable Column */}
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {product.name}
          </h1>

          {data.sideContent?.map((item, idx) => {
            if (item.type === "p") {
              return (
                <p key={idx} className="text-sm leading-relaxed text-gray-700">
                  {item.segments?.map((seg, i) =>
                    seg.type === "link" ? (
                      <Link
                        key={i}
                        href={seg.href}
                        className="text-red-600 no-underline hover:no-underline font-medium"
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
                </p>
              );
            }

            if (item.type === "table") {
              return (
                <div
                  key={idx}
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
                        <tr
                          key={rIdx}
                          className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/70"
                        >
                          <td className="w-1/2 px-4 py-2.5 font-medium text-gray-800 bg-gray-50/40">
                            {row[0]}
                          </td>
                          <td className="w-1/2 px-4 py-2.5 text-gray-600">
                            {row[1]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* Bottom Description Content */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <DescriptionRenderer blocks={data.descriptionData} />
      </div>
    </div>
  );
}
