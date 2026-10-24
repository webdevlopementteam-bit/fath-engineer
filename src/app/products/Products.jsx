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
      currentProducts.forEach((product) => {
        allVisible[cleanSlug(product.slug)] = true;
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
              setVisibleCards((previous) => ({
                ...previous,
                [slug]: true,
              }));
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
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFF9F5] pb-28">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-red-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

      <Breadcrumb title="Products" />

      <section
        ref={sectionRef}
        className="relative z-10 mx-auto mt-14 max-w-8xl scroll-mt-10 px-4 sm:px-8 lg:px-14"
      >
        {/* Catalog summary */}
        <div className="mb-6 flex flex-col gap-3 rounded-3xl border border-red-100 bg-white/90 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C5071E]">
              Product catalog
            </p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-900">
              {products.length} products
            </h2>
          </div>

          <p className="text-sm font-medium text-neutral-600">
            Showing{" "}
            <span className="font-bold text-neutral-900">
              {products.length === 0 ? 0 : startIndex + 1}–
              {Math.min(startIndex + itemsPerPage, products.length)}
            </span>{" "}
            of {products.length}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentProducts.map((product, index) => {
            const slug = cleanSlug(product.slug);
            const isVisible = visibleCards[slug] !== false;
            const staggerDelay = (index % 4) * 80;

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
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                style={{ transitionDelay: `${staggerDelay}ms` }}
                className={`group relative flex flex-col rounded-3xl border border-red-100/90 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#C5071E]/50 hover:shadow-[0_25px_50px_-12px_rgba(197,7,30,0.22)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <div className="absolute inset-x-8 top-0 z-20 h-[3px] scale-x-0 rounded-full bg-gradient-to-r from-transparent via-[#C5071E] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <Link
                  href={`/products/${slug}`}
                  className="relative block aspect-square w-full overflow-hidden rounded-2xl border border-red-50/80 bg-gradient-to-b from-[#FFFDFB] via-white to-red-50/40 p-6 transition-colors duration-500 group-hover:border-red-100"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(197,7,30,0.09)_0%,transparent_65%)] opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />

                  <div className="relative h-full w-full">
                    <Image
                      src={imgSrc}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_18px_25px_rgba(197,7,30,0.16)]"
                      priority={index < 4}
                    />
                  </div>
                </Link>

                <Link
                  href={`/products/${slug}`}
                  className="mt-2 flex min-h-[82px] flex-1 items-center justify-center rounded-2xl border border-neutral-200/60 bg-gradient-to-b from-neutral-50 to-neutral-100/80 px-5 py-4 text-center shadow-2xs transition-all duration-300 group-hover:border-transparent group-hover:from-[#D90822] group-hover:to-[#A80519] group-hover:shadow-[0_8px_20px_-4px_rgba(197,7,30,0.4)]"
                >
                  <span
                    className="line-clamp-2 text-[15px] font-bold leading-snug tracking-tight text-neutral-800 transition-colors duration-300 group-hover:text-white xl:text-[16px]"
                    title={product.name}
                  >
                    {product.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-red-100 bg-white/90 p-2 shadow-[0_10px_30px_-5px_rgba(197,7,30,0.1)] backdrop-blur-md">
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex cursor-pointer items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-neutral-700 transition-all duration-200 hover:bg-red-50 hover:text-[#C5071E] disabled:pointer-events-none disabled:opacity-35"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                Prev
              </button>

              <div className="mx-1 h-5 w-px bg-red-100" />

              <div className="flex items-center gap-1.5">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`h-10 w-10 cursor-pointer rounded-xl text-sm font-extrabold transition-all duration-300 ${
                      currentPage === page
                        ? "scale-105 bg-gradient-to-b from-[#D90822] to-[#A80519] text-white shadow-md shadow-red-600/30"
                        : "bg-transparent text-neutral-600 hover:bg-red-50 hover:text-[#C5071E]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <div className="mx-1 h-5 w-px bg-red-100" />

              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex cursor-pointer items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-neutral-700 transition-all duration-200 hover:bg-red-50 hover:text-[#C5071E] disabled:pointer-events-none disabled:opacity-35"
              >
                Next
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  aria-hidden="true"
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
