import React from "react";
import BlogPage from "./Blog";

export const metadata = {
  title: "Blog | Faith Engineering Works",
  description: "",
  keywords: ["", ""],

  alternates: {
    canonical: "https://www.blowmouldmachinemanufacturer.com/blog/",
  },
};

function page() {
  return (
    <>
      <BlogPage />
    </>
  );
}

export default page;
