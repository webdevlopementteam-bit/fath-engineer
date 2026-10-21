// src/app/products/[slug]/page.jsx

import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/pack.js";
import { ProductGallery } from "@/components/ProductGallery";
import DescriptionRenderer from "@/components/DescriptionRenderer";

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
      {/* Product image and key details */}
      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="w-full lg:sticky lg:top-8">
          <ProductGallery images={productImages} />
        </div>

        <div className="flex min-w-0 flex-col gap-6">
          <div className="space-y-3">
            {product.category && (
              <p className="inline-flex rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700 sm:text-sm">
                {product.category}
              </p>
            )}

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-950 sm:text-3xl lg:text-4xl">
              {product.name || "Product Details"}
            </h1>
          </div>

          {sideContent.length > 0 ? (
            <div className="space-y-5">
              {sideContent.map((item, idx) => {
                if (item?.type === "p") {
                  return (
                    <p
                      key={idx}
                      className="text-base leading-7 text-gray-700 sm:text-[17px] sm:leading-8"
                    >
                      {Array.isArray(item.segments) && item.segments.length > 0
                        ? item.segments.map((seg, i) =>
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
                                  seg?.bold ? "font-semibold text-gray-950" : ""
                                }
                              >
                                {seg?.text || ""}
                              </span>
                            ),
                          )
                        : item.text || item.content || null}
                    </p>
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
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                    >
                      {item.title?.trim() && (
                        <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                          {item.title}
                        </div>
                      )}

                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[320px] text-left text-sm text-gray-700 sm:text-base">
                          <tbody className="divide-y divide-gray-100">
                            {item.rows.map((row, rowIdx) => (
                              <tr
                                key={rowIdx}
                                className="transition-colors hover:bg-red-50/40"
                              >
                                <td className="w-1/2 bg-gray-50/70 px-3 py-3 font-semibold text-gray-900 sm:px-4 sm:py-3.5">
                                  {row?.[0] ?? "—"}
                                </td>
                                <td className="w-1/2 px-3 py-3 leading-relaxed sm:px-4 sm:py-3.5">
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
        </div>
      </section>

      {/* Full product description */}
      {descriptionData.length > 0 && (
        <section className="mt-12 border-t border-gray-200 pt-8 sm:mt-16 sm:pt-10 lg:mt-20">
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
