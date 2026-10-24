import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF9F5] px-4 py-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-200/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-100/70" />
        <div className="absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-100/50" />
      </div>

      <section className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white bg-white/80 px-6 py-12 text-center shadow-[0_30px_100px_-35px_rgba(130,25,35,0.25)] backdrop-blur-xl sm:px-12 sm:py-16">
        {/* Top accent */}
        <div className="absolute inset-x-12 top-0 h-1 rounded-full bg-gradient-to-r from-transparent via-[#C5071E] to-transparent" />

        {/* Decorative 404 */}
        <div className="relative mx-auto mb-8 flex h-44 w-64 items-center justify-center sm:h-52 sm:w-80">
          <span className="absolute select-none text-[9rem] font-black leading-none tracking-tighter text-red-50 sm:text-[11rem]">
            404
          </span>

          <div className="relative flex h-28 w-28 -rotate-6 items-center justify-center rounded-[2rem] border border-red-100 bg-gradient-to-br from-white to-red-50 shadow-[0_20px_45px_-18px_rgba(197,7,30,0.35)] sm:h-32 sm:w-32">
            <svg
              className="h-14 w-14 text-[#C5071E] sm:h-16 sm:w-16"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M13 23.5 32 13l19 10.5v22L32 56 13 45.5v-22Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="m13.5 24 18.5 11 18.5-11M32 35v20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="m24 18 19 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity=".45"
              />
            </svg>

            <span className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#D90822] text-white shadow-md">
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 6 8 8m0-8-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>

          <span className="absolute right-5 top-7 h-3 w-3 rounded-full bg-orange-300 sm:right-10" />
          <span className="absolute bottom-5 left-5 h-2.5 w-2.5 rounded-full bg-red-300 sm:left-10" />
          <span className="absolute bottom-7 right-8 h-2 w-2 rounded-full bg-[#C5071E]/40" />
        </div>

        <p className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C5071E]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C5071E]" />
          Page not found
        </p>

        <h1 className="mt-5 text-3xl font-black tracking-tight text-neutral-900 sm:text-5xl">
          Looks like this page
          <span className="mt-1 block bg-gradient-to-r from-[#C5071E] to-[#F06B38] bg-clip-text text-transparent">
            wandered off.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">
          The page may have moved, or the link might be out of date. Let’s get
          you back to something good.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D90822] to-[#A80519] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-700/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-700/25"
          >
            Explore products
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 10h12m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-bold text-neutral-700 transition hover:border-red-200 hover:bg-red-50/70 hover:text-[#C5071E]"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m8 4-6 6 6 6M2.5 10H12a5.5 5.5 0 0 1 0 11"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back home
          </Link>
        </div>

        <div className="mx-auto mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-red-100 to-transparent" />

        <p className="mt-5 text-xs font-medium text-neutral-400">
          Error code <span className="font-bold text-neutral-500">404</span>
        </p>
      </section>
    </main>
  );
}
