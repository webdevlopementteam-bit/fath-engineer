import React from "react";
import ExhibitionsSection from "./Gallery";

export const metadata = {
  title: "Gallery | Faith Engineering Works, Delhi",
  description:
    "View Our Gallery photos of Faith Engineering Works' blow moulding machines and Delhi manufacturing facility in action.",
  keywords: ["", ""],

  alternates: {
    canonical: "https://www.blowmouldmachinemanufacturer.com/gallery/",
  },
};

function page() {
  return (
    <>
      <ExhibitionsSection />
    </>
  );
}

export default page;
