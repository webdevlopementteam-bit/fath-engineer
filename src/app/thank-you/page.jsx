"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ArrowLeft, MessageSquare, Clock3 } from "lucide-react";

export default function ThankYouPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const submitted = sessionStorage.getItem("contactFormSubmitted");

    if (submitted !== "true") {
      router.replace("/");
      return;
    }

    // Remove the one-time flag so refreshing this page redirects.
    sessionStorage.removeItem("contactFormSubmitted");
    setAllowed(true);
  }, [router]);

  if (!allowed) return null;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF9F5] px-4 py-12">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#AF0020]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />

      <section className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_24px_80px_rgba(80,0,16,0.12)]">
        <div className="h-2 w-full bg-gradient-to-r from-[#AF0020] via-[#d63a50] to-amber-400" />

        <div className="px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 ring-8 ring-green-50/60">
            <span className="flex h-14 w-14 animate-[pop_450ms_ease-out] items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/20">
              <Check size={30} strokeWidth={3} />
            </span>
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#AF0020]">
            Message received
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Thank you for reaching out!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-stone-600">
            Your message has been sent successfully. Our team at Faith
            Engineering will get back to you as soon as possible.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#AF0020]/10 bg-[#FFF9F5] p-4 text-left sm:p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#AF0020]/10 text-[#AF0020]">
              <Clock3 size={21} />
            </span>
            <div>
              <h2 className="font-semibold text-stone-800">
                What happens next?
              </h2>
              <p className="mt-1 text-sm leading-6 text-stone-600">
                We’ll review your enquiry and contact you using the details you
                provided.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#AF0020] px-6 py-4 font-semibold text-white shadow-lg shadow-[#AF0020]/20 transition hover:-translate-y-0.5 hover:bg-[#92001B] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#AF0020]/20 sm:w-auto"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-stone-400">
            <MessageSquare size={15} />
            <span>Faith Engineering • We’re here to help</span>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pop {
          0% {
            opacity: 0;
            transform: scale(0.65);
          }
          70% {
            opacity: 1;
            transform: scale(1.12);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}
