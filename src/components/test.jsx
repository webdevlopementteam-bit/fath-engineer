import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { ProductGallery } from "@/components/Productsgrid"; // ya jo bhi aapka filename ho

function Auto() {
  return (
    <main className="min-h-screen pb-28 bg-[#FFF9F5] relative overflow-x-clip">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <Breadcrumb title="Auto Deflashing Blow Moulding Machine" />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 lg:gap-12">
          {/* Left Side: Image Gallery Component */}
          <section className="md:col-span-5 md:sticky md:top-20">
            <ProductGallery
              images={[
                "/products/s1.png",
                "/products/s5.png",
                "/products/s4.png",
              ]}
            />
          </section>

          {/* Right Side: Aapka Custom Content */}
          <section className="md:col-span-7 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Auto Deflashing Blow Moulding Machine
            </h1>
            <p className="text-gray-600">
              Yahan aap apna product description, specifications, pricing ya
              "Add to Cart" button add kar sakte hain.
            </p>
            {/* Aur bhi components ya elements yahan add karein */}
          </section>
        </div>
      </div>
    </main>
  );
}

export default Auto;
