import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <Breadcrumb title="about" />

      <section className="w-full overflow-hidden bg-[#FFF9F5] py-12 text-gray-800 sm:py-16 lg:py-20">
        <div className="w-full">
          <div className="mx-auto mb-8 max-w-7xl px-5 sm:mb-10 sm:px-8">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8021F]/10 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8021F] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8021F]" />
              About Faith Engineering Works
            </span>
            <h1 className="font-serif text-3xl uppercase leading-tight tracking-wide text-gray-900 sm:text-4xl lg:text-[2.65rem]">
              A Name Trusted in Blow Moulding Technology
            </h1>
            <div className="mt-3 flex items-center gap-4">
              <h2 className="text-3xl font-bold tracking-[0.12em] text-[#B8021F] sm:text-4xl lg:text-5xl">
                SINCE 2000
              </h2>
              <span className="h-px flex-1 bg-gradient-to-r from-[#B8021F]/35 to-transparent" />
            </div>
          </div>

          {/* Wrapper: Stacked image then content on mobile, absolute overlay on desktop */}
          <div className="relative isolate mt-8 w-full lg:min-h-[720px]">
            {/* Background Image: Normal height block on mobile, absolute fill on lg screens */}
            <div className="relative h-[340px] w-full overflow-hidden shadow-[0_24px_70px_rgba(56,23,25,.20)] sm:h-[440px] lg:absolute lg:inset-0 lg:h-full">
              <Image
                src="/about/about.png"
                alt="Faith Engineering Works Factory"
                fill
                className="object-cover  object-top transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
              {/* Overlay enabled ONLY on desktop/laptop */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />
            </div>

            {/* Content Card: Below image on mobile, absolute overlay on desktop */}
            <div className="relative z-10 mx-4 mt-6 rounded-2xl border border-[#FFF9F5]/30 bg-gradient-to-br from-[#B8021F]/95 via-[#A5011B]/95 to-[#800018]/95 p-4.5 sm:mx-6 sm:mt-8 sm:p-7 text-[#FFF9F5] shadow-[0_20px_50px_rgba(100,0,15,.45)] backdrop-blur-sm md:mx-auto md:max-w-2xl lg:absolute lg:right-6 lg:top-6 lg:m-0 lg:w-[min(700px,50%)] lg:max-w-none lg:rounded-3xl lg:p-9 lg:backdrop-blur-none xl:right-10 xl:top-10 xl:w-[min(760px,48%)] xl:p-11">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#FFF9F5]/10" />
              <div className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full border border-[#FFF9F5]/10" />

              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#FFF9F5]/25 bg-[#FFF9F5]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFF9F5] shadow-sm sm:mb-5 sm:px-3.5 sm:py-1.5 sm:text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFF9F5]" />
                  About Our Legacy
                </div>

                <div>
                  <p className="text-base font-light leading-7 text-[#FFF9F5]/90 lg:text-lg lg:leading-8">
                    <strong className="font-semibold text-[#FFF9F5]">
                      Faith Engineering Works
                    </strong>{" "}
                    has established itself as a trusted name in the field of
                    Blow Moulding Machines, delivering advanced, durable, and
                    high-performance machinery solutions across India. With
                    years of industry expertise and a strong commitment to
                    quality, we specialize in manufacturing a wide range of
                    Automatic Blow Moulding Machines designed to meet modern
                    production demands.
                  </p>

                  <p className="mt-3 text-base font-light leading-7 text-[#FFF9F5]/90 sm:mt-4 lg:text-lg lg:leading-8">
                    Driven by innovation and precision engineering, our company
                    offers reliable solutions for manufacturing plastic bottles,
                    containers, and industrial products with maximum efficiency
                    and accuracy. Our machines are widely appreciated for their
                    robust construction, smooth operation, energy efficiency,
                    and long service life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden bg-gradient-to-br from-[#FFF9F5] via-[#FCE8EC] to-[#FFDDE5] px-5 py-14 sm:mt-20 sm:px-8 sm:py-20 lg:mt-24">
          <div className="pointer-events-none absolute -left-24 -top-28 h-96 w-96 rounded-full bg-white/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-[#B8021F]/[0.06] blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8021F]/70">
                What guides us
              </span>
              <h2 className="mt-2 font-serif text-3xl text-[#800018] sm:text-4xl">
                Our Mission &amp; Vision
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#B8021F]/35" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-7 shadow-[0_16px_50px_rgba(74,0,18,.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(74,0,18,.14)] sm:p-8 md:p-10">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#B8021F]/[0.04] transition-transform duration-500 group-hover:scale-125" />
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B8021F]/[0.08] text-2xl transition-colors duration-300 group-hover:bg-[#B8021F] group-hover:text-white">
                    🎯
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-bold text-[#B8021F]">
                    Mission
                  </h3>
                  <p className="text-base font-light italic leading-7 text-gray-700 lg:text-lg lg:leading-8">
                    &ldquo;To deliver high-performance and reliable Blow
                    Moulding Machines that help industries achieve maximum
                    productivity, superior quality, and long-term operational
                    efficiency through innovation, precision engineering, and
                    customer-focused solutions.&rdquo;
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-7 shadow-[0_16px_50px_rgba(74,0,18,.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(74,0,18,.14)] sm:p-8 md:p-10">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#B8021F]/[0.04] transition-transform duration-500 group-hover:scale-125" />
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B8021F]/[0.08] text-2xl transition-colors duration-300 group-hover:bg-[#B8021F] group-hover:text-white">
                    🚀
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-bold text-[#B8021F]">
                    Vision
                  </h3>
                  <p className="text-base font-light italic leading-7 text-gray-700 lg:text-lg lg:leading-8">
                    &ldquo;To become a leading and globally trusted manufacturer
                    of Blow Moulding Machinery by continuously advancing
                    technology, maintaining international quality standards, and
                    building lasting relationships through excellence, trust,
                    and customer satisfaction.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
