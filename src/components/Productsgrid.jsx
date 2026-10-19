"use client";
import React, { useState, useRef, useEffect } from "react";
import { Maximize2 } from "lucide-react";

// --- Zoomable Image Viewer Component ---
function ZoomableImage({ src, alt }) {
  const containerRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [lensPos, setLensPos] = useState({ xPercent: 50, yPercent: 50 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));

    setLensPos({ xPercent, yPercent });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsZoomed(false)}
      className="relative overflow-hidden w-full h-[460px] sm:h-[520px] bg-white border border-[#f3d9d9] rounded-sm p-6 flex items-center justify-center cursor-crosshair select-none"
    >
      <img
        src={src}
        alt={alt}
        style={{
          transformOrigin: `${lensPos.xPercent}% ${lensPos.yPercent}%`,
          transform: isZoomed ? "scale(2.2)" : "scale(1)",
          transition: isZoomed
            ? "transform 0.08s ease-out"
            : "transform 0.3s ease-in-out",
        }}
        className="max-h-full max-w-full object-contain pointer-events-none will-change-transform"
      />

      <div className="absolute top-4 right-4 text-gray-400 bg-white/70 p-1 rounded pointer-events-none">
        <Maximize2 size={18} />
      </div>
    </div>
  );
}

// --- Single Product Layout Component ---
export function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setSelectedImage(0);
  }, [product.id]);

  if (!product) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* 
        Parent container mein 'items-start' zaroori hai sticky effect ke liye.
        'overflow-hidden' yahan nahi hona chahiye.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: Sticky jab tak right side pura scroll na ho jaye */}
        <div className="lg:col-span-5 sticky top-6 self-start flex flex-col gap-3">
          <ZoomableImage
            src={product.images[selectedImage]}
            alt={product.title}
          />

          {/* Optional Thumbnails: Only visible if product has more than 1 image */}
          {product.images?.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto py-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 border rounded-sm p-1 bg-white flex items-center justify-center transition-all ${
                    selectedImage === idx
                      ? "border-red-400 ring-1 ring-red-300"
                      : "border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Long scrollable content with dynamic tables */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Product Title */}
          <h1 className="text-2xl sm:text-[28px] font-serif font-bold text-gray-900 tracking-tight leading-snug">
            {product.title}
          </h1>

          {/* Description */}
          <p className="text-[13.5px] sm:text-[14px] text-gray-700 leading-relaxed text-justify">
            {product.description}
          </p>

          {/* Dynamic Tables rendering (1, 2, or 3 tables) */}
          <div className="flex flex-col gap-6 pt-1">
            {product.tables?.map((table, tIdx) => (
              <div
                key={tIdx}
                className="border border-gray-200/90 rounded-sm overflow-hidden bg-white shadow-xs"
              >
                {/* Header banner if title exists */}
                {table.title && (
                  <div className="bg-[#525252] text-white px-4 py-2 text-center font-bold text-xs sm:text-[13px] tracking-wider uppercase select-none">
                    {table.title}
                  </div>
                )}

                {/* Table Rows */}
                <div className="divide-y divide-gray-100 text-[13px] sm:text-[13.5px]">
                  {table.rows?.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className="grid grid-cols-2 px-4 py-2.5 hover:bg-gray-50/70 transition-colors items-center"
                    >
                      <span className="font-semibold text-gray-800">
                        {row.label}
                      </span>
                      <span className="text-gray-600 font-normal">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main App Wrapper ---
export default function App() {
  // Aapka data array (Nested structure flat karke use kiya hai)
  const productList = products.flat();
  const [activeId, setActiveId] = useState(productList[0]?.id);

  const currentProduct = productList.find((p) => p.id === activeId);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Switcher bar to test between prod-1 and prod-2 */}
      <div className="border-b border-gray-200 bg-white py-3 px-6 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Select Product
        </span>
        <div className="flex gap-2">
          {productList.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`px-3 py-1 text-xs rounded border transition-colors ${
                activeId === p.id
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              {p.id}
            </button>
          ))}
        </div>
      </div>

      <main>
        {currentProduct && <ProductDetail product={currentProduct} />}
      </main>
    </div>
  );
}
