"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { products } from "@/lib/data.js";

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCards, setVisibleCards] = useState({});
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const cleanSlug = (slug = "") => slug.replace(/^\/|\/$/g, "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const allVisible = {};
      currentProducts.forEach((p) => {
        allVisible[cleanSlug(p.slug)] = true;
      });
      setVisibleCards(allVisible);
    }, 150);

    cardRefs.current = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slug = entry.target.getAttribute("data-slug");
            if (slug) {
              setVisibleCards((prev) => ({ ...prev, [slug]: true }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "50px",
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentPage, currentProducts.length]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen pb-28 bg-[#FFF9F5] relative overflow-hidden">
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <Breadcrumb title="Products" />

      <section
        ref={sectionRef}
        className="relative z-10 max-w-8xl mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 mt-14 scroll-mt-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 xl:gap-8">
          {currentProducts.map((product, index) => {
            const slug = cleanSlug(product.slug);
            const isVisible = visibleCards[slug] !== false;
            const staggerDelay = (index % 4) * 80;

            // Sirf array ki pehli image (index 0) pick karne ka clean logic
            const imgSrc =
              (Array.isArray(product.images) && product.images.length > 0
                ? product.images[0]
                : null) ||
              product.image ||
              product.path ||
              "/images/placeholder.webp";

            return (
              <div
                key={slug || index}
                data-slug={slug}
                ref={(el) => (cardRefs.current[index] = el)}
                style={{ transitionDelay: `${staggerDelay}ms` }}
                className={`group relative bg-white rounded-3xl p-2 border border-red-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(197,7,30,0.22)] hover:border-[#C5071E]/50 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {/* Top Highlight Line */}
                <div className="absolute top-0 inset-x-8 h-[3px] bg-gradient-to-r from-transparent via-[#C5071E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full z-20" />

                {/* Single Image Box */}
                <Link
                  href={`/products/${slug}`}
                  className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFFDFB] via-white to-red-50/40 border border-red-50/80 group-hover:border-red-100 block p-6 transition-colors duration-500"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(197,7,30,0.09)_0%,transparent_65%)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

                  <div className="relative w-full h-full">
                    <Image
                      src={imgSrc}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain  drop-shadow-[0_10px_15px_rgba(0,0,0,0.08)] group-hover:drop-shadow-[0_18px_25px_rgba(197,7,30,0.16)] transition-all duration-500 ease-out group-hover:scale-105"
                      priority={index < 4}
                    />
                  </div>
                </Link>

                {/* Product Title Footer */}
                <Link
                  href={`/products/${slug}`}
                  className="mt-2 flex-1 flex items-center justify-center text-center px-5 py-4 min-h-[82px] rounded-2xl bg-gradient-to-b from-neutral-50 to-neutral-100/80 group-hover:from-[#D90822] group-hover:to-[#A80519] border border-neutral-200/60 group-hover:border-transparent shadow-2xs group-hover:shadow-[0_8px_20px_-4px_rgba(197,7,30,0.4)] transition-all duration-300"
                >
                  <span
                    className="text-[15px] xl:text-[16px] font-bold text-neutral-800 group-hover:text-white tracking-tight transition-colors duration-300 line-clamp-2 leading-snug"
                    title={product.name}
                  >
                    {product.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-white/90 backdrop-blur-md border border-red-100 shadow-[0_10px_30px_-5px_rgba(197,7,30,0.1)]">
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-neutral-700 hover:bg-red-50 hover:text-[#C5071E] disabled:opacity-35 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                Prev
              </button>

              <div className="h-5 w-[1px] bg-red-100 mx-1" />

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-xl text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                        currentPage === page
                          ? "bg-gradient-to-b from-[#D90822] to-[#A80519] text-white shadow-md shadow-red-600/30 scale-105"
                          : "bg-transparent text-neutral-600 hover:bg-red-50 hover:text-[#C5071E]"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <div className="h-5 w-[1px] bg-red-100 mx-1" />

              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-neutral-700 hover:bg-red-50 hover:text-[#C5071E] disabled:opacity-35 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
              >
                Next
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;
