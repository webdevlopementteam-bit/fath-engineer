import React from "react";
import Products from "./Products";

export const metadata = {
  title: "Our Products | Blow Moulding Machine Range | Faith Engineering Works",
  description:
    "Browse Faith Engineering Works' full range of Our Products blow moulding machines — Single, Double & Triple Head models from 100ml to 10 litres capacity",
  keywords: ["", ""],

  alternates: {
    canonical: "https://www.blowmouldmachinemanufacturer.com/products/",
  },
};

function page() {
  return (
    <>
      <Products />
    </>
  );
}

export default page;
