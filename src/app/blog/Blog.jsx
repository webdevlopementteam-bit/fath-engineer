"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

const blogData = [
  {
    slug: "/auto-deflashing-blow-moulding-machine-manufacturers-suppliers",
    img: "/blog/b1.png",
    heading:
      "Buy Auto Deflashing Blow Moulding Machine Manufacturer: A Complete Buyer’s Guide (2026)",
    description:
      "Best Auto Deflashing Blow Moulding Machine Manufacturers: A Complete Buyer’s Guide | Faith Engineering Works Flash is the extra plastic that forms around a bottle's neck, handle, or base. Someone has to cut it off. Someone has to clean the...",
    date: "August 7, 2026",
  },
  {
    slug: "/accumulator-blow-moulding-machine-manufacturers-in-delhi-ncr",
    img: "/blog/b2.png",
    heading:
      "Best Accumulator Blow Moulding Machine Manufacturers in Delhi NCR – Complete Buying Guide (2026)",
    description:
      "This blog is written with 25+ years of hands-on manufacturing experience in the blow moulding machine industry by the team at Faith Engineering Works. Faith Engineering Works Established in 2000 and based in New Delhi, Faith Engineering Works has been...",
    date: "July 31, 2026",
  },
  {
    slug: "/automatic-blow-moulding-machine-manufacturer-guide",
    img: "/blog/b3.png",
    heading:
      "Automatic Blow Moulding Machine Manufacturer: The Complete A-to-Z Buying Guide (2026) by Faith Engineering Works",
    description:
      "If you are searching for a reliable Automatic Blow Moulding Machine Manufacturer, you already know one thing — the right machine can make or break your plastic packaging business. A good machine gives you speed, low wastage, and years of...",
    date: "July 27, 2026",
  },
  {
    slug: "/fully-automatic-blow-moulding-machine-price-in-delhi",
    img: "/blog/b4.png",
    heading:
      "Buy Fully Automatic Blow Moulding Machine Price in Delhi: Complete Buyer’s Guide, Comparison & Pricing (2026)",
    description:
      "If you are searching for a fully automatic blow moulding machine price in Delhi, you are probably close to making a big investment decision for your plastic manufacturing business. This machine will run your production line for years, so the...",
    date: "July 22, 2026",
  },
  {
    slug: "/plastic-and-hdpe-blow-moulding-machine-manufacturer-guide",
    img: "/blog/b4.png",
    heading:
      "Buy Plastic & HDPE Blow Moulding Machine Manufacturer in Delhi: Complete Guide by Faith Engineering Works in 2026",
    description:
      "What is a Blow Moulding Machine? If you are in the plastic packaging business, you already know how important the right machine is. A blow moulding machine is used to make hollow plastic products like bottles, cans, jars, and containers....",
    date: "July 21, 2026",
  },
  {
    slug: "/blow-moulding-machine-manufacturer-complete-guide",
    img: "/blog/b4.png",
    heading:
      "Top Blow Moulding Machine Manufacturer: The Complete 2026 Buying Guide in 2026",
    description:
      "Blow Moulding Machine Manufacturer in Delhi | Faith Engineering Works Choosing the right blow moulding machine manufacturer is one of the most important decisions a plastic packaging business will make — and one of the most confusing, given how many...",
    date: "July 10, 2026",
  },
];

// Double slash (//) se bachne ke liye clean URL helper
const getBlogHref = (slug = "") => {
  const clean = slug.replace(/^\/+/, "");
  return `/blog/${clean}`;
};

export default function BlogPage() {
  const transitionConfig = {
    duration: 0.75,
    ease: [0.25, 0.1, 0.25, 1],
  };

  return (
    <>
      <Breadcrumb title={"Blog"} />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF9F9] via-[#faf9f7] to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Subtle decorative background glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[#AF0020]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Attractive Section Header */}
          <div className="mb-12 text-center sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full  border border-[#AF0020]/20 bg-[#AF0020]/[0.06] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#AF0020]">
              Industry Insights & Guides
            </span>

            <h1 className="mt-3.5 bg-gradient-to-r from-slate-950 via-[#850019] to-[#D20B19] bg-clip-text text-3xl font-black font-serif tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              Latest Machinery Articles & Buying Guides
            </h1>

            <div className="mx-auto mt-4 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-3 rounded-full bg-[#AF0020]/30" />
              <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#850019] to-[#D20B19]" />
              <span className="h-1.5 w-3 rounded-full bg-[#AF0020]/30" />
            </div>
          </div>

          {/* Blog Cards Grid */}
          <section
            aria-label="Latest blog posts"
            className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {blogData.map((blog, index) => {
              const isLeft = index % 2 === 0;
              const blogHref = getBlogHref(blog.slug);

              return (
                <motion.article
                  key={blog.slug}
                  initial={{ opacity: 0, x: isLeft ? -45 : 45, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={transitionConfig}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_10px_35px_-18px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-2 hover:border-[#AF0020]/30 hover:shadow-[0_28px_60px_-20px_rgba(133,0,25,0.22)]"
                >
                  {/* Top Red Accent Line on Hover */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#850019] via-[#B00020] to-[#D20B19] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Image Container */}
                  <div className="p-3.5 pb-0 sm:p-4 sm:pb-0">
                    <Link
                      href={blogHref}
                      aria-label={`Read ${blog.heading}`}
                      className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100"
                    >
                      <Image
                        src={blog.img}
                        alt={blog.heading}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                    </Link>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col px-5 pt-5 pb-6 sm:px-6 sm:pt-5 sm:pb-6">
                    {/* Date */}
                    <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <FaRegCalendarAlt className="h-3.5 w-3.5 text-[#AF0020]" />
                      <time>{blog.date}</time>
                    </div>

                    {/* Heading */}
                    <h2 className="line-clamp-2 text-[18px] font-extrabold font-serif leading-[1.4] tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-[#AF0020] sm:text-[19px]">
                      <Link
                        href={blogHref}
                        className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AF0020]"
                      >
                        {blog.heading}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="mt-3 line-clamp-3 text-[14.5px] leading-relaxed text-slate-600 sm:text-[15px]">
                      {blog.description}
                    </p>

                    {/* Footer Action */}
                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-slate-600">
                          Faith Engineering
                        </span>

                        <Link
                          href={blogHref}
                          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#850019] to-[#D20B19] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:brightness-110 active:scale-95 sm:text-[13px]"
                        >
                          Read Article
                          <FaArrowRight
                            aria-hidden="true"
                            className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
