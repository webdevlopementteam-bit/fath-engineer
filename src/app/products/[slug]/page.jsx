// src/app/products/[slug]/page.jsx

import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data.js";
import { ProductGallery } from "@/components/ProductGallery";
import DescriptionRenderer from "@/components/DescriptionRenderer";
import { CheckCircle2, ShieldCheck, Wrench, PhoneCall } from "lucide-react";

const SITE_URL = "https://www.blowmouldmachinemanufacturer.com";

const getCleanSlug = (slug = "") => {
  try {
    return decodeURIComponent(String(slug))
      .trim()
      .replace(/^\/+|\/+$/g, "");
  } catch {
    return String(slug)
      .trim()
      .replace(/^\/+|\/+$/g, "");
  }
};

const getProductBySlug = (slug) => {
  const targetSlug = getCleanSlug(slug);
  return products.find((product) => getCleanSlug(product.slug) === targetSlug);
};

export async function generateStaticParams() {
  if (!Array.isArray(products)) return [];

  return products
    .filter((product) => product?.slug)
    .map((product) => ({
      slug: getCleanSlug(product.slug),
    }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams?.slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = product.seo || {};

  const title =
    typeof seo.title === "string" && seo.title.trim()
      ? seo.title.trim()
      : product.name || "Product";

  const description =
    typeof seo.description === "string" && seo.description.trim()
      ? seo.description.trim()
      : `Explore ${product.name || "this product"} from Faith Engineering Works. Contact us for product details and pricing.`;

  const keywords = Array.isArray(seo.keywords)
    ? seo.keywords.filter(
        (keyword) => typeof keyword === "string" && keyword.trim(),
      )
    : [];

  const canonical = new URL(
    `/products/${getCleanSlug(product.slug)}`,
    SITE_URL,
  ).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
  };
}

async function ProductContent({ paramsPromise }) {
  const resolvedParams = await paramsPromise;
  const product = getProductBySlug(resolvedParams?.slug);

  if (!product) notFound();

  const productImages =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : ["/images/placeholder.webp"];

  const sideContent = Array.isArray(product.data?.sideContent)
    ? product.data.sideContent
    : [];

  const descriptionData = Array.isArray(product.data?.descriptionData)
    ? product.data.descriptionData
    : [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Product Image and Specifications Section */}
      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Left: Gallery with Card Shadow */}
        <div className="w-full lg:sticky lg:top-28">
          <div className="rounded-3xl border border-gray-100 bg-gradient-to-b from-gray-50/70 to-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-4">
            <ProductGallery images={productImages} />
          </div>

          {/* Quick Industrial Trust Badges */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center justify-center rounded-xl border border-red-100/70 bg-[#FFF9F9] p-2.5">
              <ShieldCheck className="h-5 w-5 text-[#B00020]" />
              <span className="mt-1 text-[11px] font-bold text-gray-800">
                Since 2000
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-red-100/70 bg-[#FFF9F9] p-2.5">
              <Wrench className="h-5 w-5 text-[#B00020]" />
              <span className="mt-1 text-[11px] font-bold text-gray-800">
                In-House Build
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-red-100/70 bg-[#FFF9F9] p-2.5">
              <CheckCircle2 className="h-5 w-5 text-[#B00020]" />
              <span className="mt-1 text-[11px] font-bold text-gray-800">
                Tested Quality
              </span>
            </div>
          </div>
        </div>

        {/* Right: Title & Specifications */}
        <div className="flex min-w-0 flex-col gap-6">
          <div className="space-y-3">
            {/* Red Gradient High-Impact Title */}
            <h1 className="bg-gradient-to-r from-[#850019] via-[#B00020] to-[#D20B19] bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-3xl lg:text-4xl lg:leading-tight">
              {product.name || "Product Details"}
            </h1>
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-[#850019] to-[#D20B19]" />
          </div>

          {sideContent.length > 0 ? (
            <div className="space-y-6">
              {sideContent.map((item, idx) => {
                if (item?.type === "p") {
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5"
                    >
                      <p className="text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-7">
                        {Array.isArray(item.segments) &&
                        item.segments.length > 0
                          ? item.segments.map((seg, i) =>
                              seg?.type === "link" ? (
                                <Link
                                  key={i}
                                  href={seg.href || "#"}
                                  className="font-bold text-[#A4001D] underline decoration-[#A4001D]/40 decoration-2 underline-offset-2 transition-colors hover:text-[#7A0015]"
                                >
                                  {seg.text || ""}
                                </Link>
                              ) : (
                                <span
                                  key={i}
                                  className={
                                    seg?.bold
                                      ? "font-extrabold text-gray-900"
                                      : ""
                                  }
                                >
                                  {seg?.text || ""}
                                </span>
                              ),
                            )
                          : item.text || item.content || null}
                      </p>
                    </div>
                  );
                }

                if (
                  item?.type === "table" &&
                  Array.isArray(item.rows) &&
                  item.rows.length > 0
                ) {
                  return (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                    >
                      {item.title?.trim() && (
                        <div className="border-b border-red-900/10 bg-gradient-to-r from-[#850019] via-[#9B001C] to-[#B00020] px-4 py-3 text-center text-xs font-black uppercase tracking-widest text-white sm:text-sm">
                          {item.title}
                        </div>
                      )}

                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[320px] text-left text-xs sm:text-sm">
                          <tbody className="divide-y divide-gray-100">
                            {item.rows.map((row, rowIdx) => (
                              <tr
                                key={rowIdx}
                                className="transition-colors hover:bg-red-50/40 odd:bg-gray-50/40 even:bg-white"
                              >
                                <td className="w-[45%] px-3.5 py-3 font-semibold text-gray-900 sm:px-4 sm:py-3.5">
                                  {row?.[0] ?? "—"}
                                </td>
                                <td className="w-[55%] px-3.5 py-3 font-medium text-gray-700 sm:px-4 sm:py-3.5">
                                  {row?.[1] ?? "—"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ) : (
            <p className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
              Product specifications are not available.
            </p>
          )}

          {/* Quick Contact CTA */}
          <div className="rounded-2xl border border-red-100 bg-gradient-to-r from-[#FFF5F5] to-white p-4 sm:p-5">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 sm:text-base">
                  Need custom capacity or mould design?
                </h4>
                <p className="text-xs text-gray-600">
                  Talk directly with our engineering team for technical quotes.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#850019] to-[#D20B19] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:shadow-md active:scale-95 sm:text-sm"
              >
                <PhoneCall size={16} />
                Get Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content / FAQ / Tables */}
      {descriptionData.length > 0 && (
        <section className="mt-14 border-t border-gray-200/80 pt-10 sm:mt-18 sm:pt-12 lg:mt-20">
          <DescriptionRenderer blocks={descriptionData} />
        </section>
      )}
    </div>
  );
}

export default function ProductPage({ params }) {
  return (
    <main className="min-h-screen bg-white">
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl animate-pulse px-4 py-10 text-gray-400 sm:px-6 lg:px-8">
            Loading product details...
          </div>
        }
      >
        <ProductContent paramsPromise={params} />
      </Suspense>
    </main>
  );
}
