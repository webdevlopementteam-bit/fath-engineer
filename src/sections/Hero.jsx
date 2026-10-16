import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] sm:h-[60vh] md:h-[70vh] lg:h-[70vh] xl:h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Desktop Video */}
      <video
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video/HDPE-BLOW.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video - Full screen height */}
      <video
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video/mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
