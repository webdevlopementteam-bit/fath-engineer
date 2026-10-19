"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
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

export default function BlogPage() {
  const transitionConfig = {
    duration: 0.85,
    ease: [0.25, 0.1, 0.25, 1],
  };

  return (
    <>
      <Breadcrumb title={"Blog"} />
      <main className="min-h-screen bg-[#faf9f7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <section
            aria-label="Latest blog posts"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            {blogData.map((blog, index) => {
              // Even index slides from left, odd index slides from right
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={blog.slug}
                  initial={{ opacity: 0, x: isLeft ? -55 : 55 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={transitionConfig}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_-18px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#AF0020]/20 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.3)]"
                >
                  <div className="px-6 pt-6 pb-5 sm:px-7 sm:pt-7">
                    <span className="mb-4 inline-flex w-fit items-center rounded-full border border-[#AF0020]/15 bg-[#AF0020]/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#AF0020]">
                      Blog
                    </span>

                    <h2 className="text-[19px] font-semibold font-serif leading-[1.35] tracking-[-0.025em] text-slate-900 transition-colors duration-200 group-hover:text-[#AF0020] sm:text-lg">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AF0020] focus-visible:ring-offset-4"
                      >
                        {blog.heading}
                      </Link>
                    </h2>
                  </div>

                  <Link
                    href={`/blog/${blog.slug}`}
                    aria-label={`Read ${blog.heading}`}
                    className="relative mx-5 block aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 sm:mx-6"
                  >
                    <Image
                      src={blog.img}
                      alt={blog.heading}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent opacity-70" />
                  </Link>

                  <div className="flex flex-1 flex-col px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7">
                    <p className="text-[15px] leading-7 text-slate-600 sm:text-base">
                      {blog.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5 mt-6">
                      <time className="text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
                        {blog.date}
                      </time>

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#AF0020]/[0.06] px-4 py-2.5 text-sm font-semibold text-[#AF0020] transition-all duration-200 hover:bg-[#AF0020] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AF0020] focus-visible:ring-offset-2"
                      >
                        Read More
                        <FaArrowRight
                          aria-hidden="true"
                          className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Link>
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
