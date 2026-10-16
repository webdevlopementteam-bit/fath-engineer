import React from "react";
import About from "./About";

export const metadata = {
  title: "About Us | Faith Engineering Works, Delhi Since 2000",
  description:
    "Know about us Faith Engineering Works — a Delhi-based blow moulding machine manufacturer since 2000, built on 25+ years of in-house engineering experience.",
  keywords: ["", ""],

  alternates: {
    canonical: "https://www.blowmouldmachinemanufacturer.com/about-us/",
  },
};

function page() {
  return (
    <>
      <About />
    </>
  );
}

export default page;
