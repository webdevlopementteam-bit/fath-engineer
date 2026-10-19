import { ProductDetail } from "@/components/Productsgrid";
import CoreValues from "@/sections/CoreValue";
import CustomersAndTestimonials from "@/sections/Customers";
import HeroSection from "@/sections/Hero";
import AboutSection from "@/sections/HomeAbout";
import ProductsSection from "@/sections/HomeProducts";

import React from "react";

function page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CoreValues />
      <CustomersAndTestimonials />
    </>
  );
}

export default page;
