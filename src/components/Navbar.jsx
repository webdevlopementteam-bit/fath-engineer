"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  X,
  Menu,
  ArrowUpRight,
  PackageSearch,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { products } from "@/lib/data.js";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about-us" },
  { name: "PRODUCTS", href: "/products" },
  { name: "GALLERY", href: "/gallery" },
  { name: "GLOBAL EXPORT", href: "/global-export" },
  { name: "CONTACT US", href: "/contact-us" },
  { name: "BLOG", href: "/blog" },
];

function getProductHref(product) {
  const slug =
    product.slug ||
    String(product.name || product.title || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return `/products/${slug}`;
}

function SearchBox({
  mobile = false,
  searchQuery,
  setSearchQuery,
  isSearchFocused,
  setIsSearchFocused,
  filteredProducts,
  desktopSearchRef,
  mobileSearchRef,
  handleLinkClick,
}) {
  const searchRef = mobile ? mobileSearchRef : desktopSearchRef;

  const query = searchQuery.trim();
  const showResults = isSearchFocused && query.length > 0;
  const hasResults = filteredProducts.length > 0;

  const clearSearch = () => {
    setSearchQuery("");
    setIsSearchFocused(true);

    requestAnimationFrame(() => {
      searchRef.current?.querySelector("input")?.focus();
    });
  };

  return (
    <div
      ref={searchRef}
      className={
        mobile
          ? "relative z-30 w-full sm:hidden"
          : "relative z-30 w-full max-w-[245px] shrink-0"
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSearchFocused(true);
        }}
        className={`group relative z-10 flex items-center gap-2 rounded-2xl border p-1.5 transition-all duration-300 ${
          mobile
            ? "h-[48px] border-red-100/80 bg-white shadow-[0_5px_18px_rgba(132,0,25,0.10)] focus-within:border-[#B00020] focus-within:shadow-[0_0_0_4px_rgba(176,0,32,0.09),0_8px_24px_rgba(132,0,25,0.12)]"
            : "h-[42px] border-white/25 bg-white/10 shadow-[0_3px_12px_rgba(0,0,0,0.08)] focus-within:border-white/70 focus-within:bg-white/20 focus-within:shadow-[0_0_0_3px_rgba(255,255,255,0.10)]"
        }`}
      >
        <span
          className={`ml-2 flex shrink-0 items-center justify-center transition-transform duration-300 group-focus-within:scale-110 ${
            mobile ? "text-[#A4001D]" : "text-white"
          }`}
        >
          <Search size={19} strokeWidth={2.3} />
        </span>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearchFocused(true);
          }}
          onFocus={() => setIsSearchFocused(true)}
          placeholder={mobile ? "Search products..." : "Find a product..."}
          aria-label="Search products"
          aria-expanded={showResults}
          aria-autocomplete="list"
          autoComplete="off"
          spellCheck={false}
          className={`h-full min-w-0 flex-1 bg-transparent text-xs font-medium outline-none ${
            mobile
              ? "text-gray-900 placeholder:text-gray-400"
              : "text-white placeholder:text-white/75"
          }`}
        />

        {searchQuery.length > 0 && (
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={clearSearch}
            aria-label="Clear search"
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition ${
              mobile
                ? "text-gray-500 hover:bg-red-50 hover:text-[#A4001D]"
                : "text-white/80 hover:bg-white/15 hover:text-white"
            }`}
          >
            <X size={15} />
          </button>
        )}

        <button
          type="submit"
          aria-label="Search products"
          className={`flex h-8 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 active:scale-90 ${
            mobile
              ? "bg-gradient-to-br from-[#850019] via-[#B00020] to-[#D20B19] text-white shadow-[0_3px_8px_rgba(176,0,32,0.25)] hover:shadow-[0_5px_14px_rgba(176,0,32,0.35)]"
              : "bg-white/15 text-white shadow-sm hover:bg-white/25 hover:shadow-md"
          }`}
        >
          <ArrowRight size={17} />
        </button>
      </form>

      {showResults && (
        <div
          className={`absolute z-[120] flex flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white text-gray-900 shadow-[0_20px_55px_rgba(65,0,15,0.20)] ${
            mobile
              ? "inset-x-0 bottom-full mb-2 max-h-[min(55dvh,440px)]"
              : "right-0 top-[calc(100%+12px)] w-[min(390px,calc(100vw-24px))]"
          }`}
        >
          {/* Results Header */}
          <div className="shrink-0 border-b border-red-50 bg-gradient-to-br from-[#FFF7F7] via-white to-[#FFF0F1] px-3 py-3.5 sm:px-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#850019] to-[#D20B19] text-white shadow-sm">
                  <PackageSearch size={20} />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[13px] font-extrabold text-gray-900">
                      Find Your Product
                    </p>
                    <Sparkles size={13} className="shrink-0 text-[#B00020]" />
                  </div>

                  <p className="mt-1 truncate text-[11px] text-gray-500">
                    {hasResults
                      ? `${filteredProducts.length} matching ${
                          filteredProducts.length === 1 ? "product" : "products"
                        }`
                      : "No matching products"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setIsSearchFocused(false)}
                aria-label="Close search results"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-500 transition hover:bg-red-50 hover:text-[#A4001D]"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Exactly ONE result state is rendered */}
          {hasResults ? (
            <div className="min-h-0 max-h-[min(55dvh,370px)] flex-1 space-y-2 overflow-y-auto overscroll-contain p-2.5 sm:p-3">
              {filteredProducts.map((product, index) => {
                const imageSrc =
                  product.image || product.imageUrl || product.thumbnail;

                return (
                  <Link
                    key={product.slug || product.id || index}
                    href={getProductHref(product)}
                    onClick={handleLinkClick}
                    className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-2.5 transition duration-200 hover:border-red-100 hover:bg-[#FFF8F8] hover:shadow-sm"
                  >
                    <div className="relative flex h-[56px] w-[56px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50 sm:h-[68px] sm:w-[68px]">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={product.name || product.title || "Product"}
                          fill
                          sizes="68px"
                          className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <PackageSearch
                          size={26}
                          className="text-[#A4001D]/50"
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-[12px] font-extrabold leading-5 text-gray-800 group-hover:text-[#A4001D]">
                        {product.name || product.title || "Untitled Product"}
                      </p>

                      {product.category && (
                        <span className="mt-1.5 inline-block max-w-full truncate rounded-md border border-red-50 bg-red-50/80 px-2 py-1 text-[10px] font-semibold text-[#A4001D]">
                          {product.category}
                        </span>
                      )}
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition group-hover:bg-[#A4001D] group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="px-5 py-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#A4001D]/60">
                <PackageSearch size={27} />
              </div>

              <p className="mt-3 text-sm font-bold text-gray-800">
                No products found
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Try another product name or category.
              </p>
            </div>
          )}

          {/* Explore Catalog */}
          <div className="shrink-0 border-t border-gray-100 bg-gray-50/95 p-2.5 sm:p-3">
            <Link
              href="/products"
              onClick={handleLinkClick}
              className="flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-[#850019] to-[#D20B19] px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:shadow-md"
            >
              <span>Explore All Products</span>

              <span className="flex items-center gap-2">
                View Catalog
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const isActiveLink = useCallback(
    (href) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname],
  );

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return [];

    return (products || [])
      .filter((product) => {
        const searchableText = [
          product.name,
          product.title,
          product.slug,
          product.category,
          product.description,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      })
      .slice(0, 6);
  }, [searchQuery]);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
    setIsSearchFocused(false);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const insideDesktop = desktopSearchRef.current?.contains(event.target);

      const insideMobile = mobileSearchRef.current?.contains(event.target);

      if (!insideDesktop && !insideMobile) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchFocused(false);
  }, [pathname]);

  const searchProps = {
    searchQuery,
    setSearchQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredProducts,
    desktopSearchRef,
    mobileSearchRef,
    handleLinkClick,
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full bg-white shadow-[0_4px_20px_rgba(80,0,15,0.08)]">
      <div className="mx-auto w-full max-w-[1900px] px-3 sm:px-1 lg:px-1">
        {/* Main Navbar */}
        <div className="relative flex h-[68px] items-center sm:h-[82px]">
          {/* Desktop Red Navigation Background and Curve */}
          <div
            className="absolute inset-y-[7px] right-0 left-[17%] hidden overflow-hidden rounded-r-[13px] bg-gradient-to-r from-[#850019] via-[#B00020] to-[#D20B19] shadow-[0_4px_10px_rgba(117,0,22,0.14)] sm:block sm:left-[18%]"
            style={{
              clipPath:
                "polygon(7% 0, 100% 0, 100% 100%, 0 100%, 1.2% 78%, 3.5% 43%)",
            }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />
            <div className="pointer-events-none absolute -right-12 -top-16 h-36 w-64 rounded-full bg-red-400/10 blur-3xl" />
          </div>

          {/* Logo */}
          <div className="relative z-20 flex h-full w-auto shrink-0 items-center sm:w-[25%] sm:min-w-[170px] lg:w-[26%]">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
              viewBox="0 0 420 82"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 0 H420 C390 8 370 20 350 36 C326 55 310 72 278 80 Q267 82 252 82 H0 Z"
                fill="#FFFFFF"
              />
            </svg>

            <Link
              href="/"
              aria-label="Go to homepage"
              onClick={handleLinkClick}
              className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105 sm:absolute sm:left-[29%] sm:top-1/2 sm:h-[70px] sm:w-[70px] sm:-translate-y-1/2 lg:left-[30%]"
            >
              <Image
                src="/logo/logo.png"
                alt="Company Logo"
                width={70}
                height={70}
                priority
                className="h-full w-full object-contain"
              />
            </Link>
          </div>

          {/* Desktop / Tablet Links and Search */}
          <div className="relative z-10 ml-auto hidden min-w-0 flex-1 items-center justify-end gap-2 pl-1 pr-2 sm:flex lg:gap-3 lg:pl-2 lg:pr-4">
            <nav className="flex min-w-0 flex-1 items-center justify-evenly gap-0 xl:gap-1 2xl:gap-2">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    aria-current={active ? "page" : undefined}
                    className={`group relative whitespace-nowrap px-[2px] py-3 text-[8px] font-bold tracking-[-0.04em] transition-colors duration-300 min-[850px]:text-[9px] md:px-[3px] lg:px-1 lg:text-[10px] lg:tracking-normal xl:px-1.5 xl:text-[11px] 2xl:text-[13px] ${
                      active
                        ? "text-white"
                        : "text-white/90 hover:text-[#FFD7DB]"
                    }`}
                  >
                    {link.name}

                    <span
                      className={`absolute bottom-[4px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#FFD9DC] transition-all duration-300 ${
                        active
                          ? "w-[calc(100%-4px)]"
                          : "w-0 group-hover:w-[calc(100%-4px)]"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="w-[145px] shrink-0 min-[850px]:w-[165px] lg:w-[185px] xl:w-[220px]">
              <SearchBox {...searchProps} />
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="ml-auto flex shrink-0 items-center sm:hidden">
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
                setIsSearchFocused(false);
              }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 active:scale-95 ${
                isMenuOpen
                  ? "border-[#A4001D] bg-[#A4001D] text-white"
                  : "border-red-100 bg-white text-[#A4001D] shadow-sm hover:bg-red-50"
              }`}
            >
              {isMenuOpen ? <X size={23} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out sm:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mb-3 mt-2 rounded-2xl border border-red-100 bg-white p-3 shadow-[0_8px_25px_rgba(100,0,15,0.10)]">
              {/* Mobile Navigation Links */}
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const active = isActiveLink(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      tabIndex={isMenuOpen ? 0 : -1}
                      aria-current={active ? "page" : undefined}
                      className={`group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-[13px] font-bold tracking-wide transition-colors ${
                        active
                          ? "border-red-100 bg-red-50 text-[#A4001D]"
                          : "text-gray-800 hover:bg-red-50 hover:text-[#A4001D]"
                      }`}
                    >
                      {link.name}

                      <ArrowUpRight
                        size={17}
                        className={`transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                          active ? "text-[#A4001D]" : "text-[#A4001D]/60"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Search */}
              <div className="mt-3 border-t border-red-50 pt-3">
                <SearchBox mobile {...searchProps} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EAB7BB]/60 to-transparent" />
    </header>
  );
}
