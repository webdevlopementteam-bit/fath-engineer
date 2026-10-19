"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(80, "Name must be 80 characters or less."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),
  mobile: z.string().regex(/^\d{10}$/, "Please enter exactly 10 digits."),
  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(120, "Subject must be 120 characters or less."),
  message: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters.")
    .max(2000, "Message must be 2000 characters or less."),
  isHuman: z.literal(true, {
    errorMap: () => ({ message: "Please confirm that you are not a robot." }),
  }),
});

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
  isHuman: false,
};

export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const transitionConfig = {
    duration: 0.85,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Accept digits only and limit the Indian mobile number to 10 digits.
    const nextValue =
      name === "mobile" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : nextValue,
    }));

    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const nextErrors = {};

      result.error.issues.forEach((issue) => {
        nextErrors[issue.path[0]] = issue.message;
      });

      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "12345", // Replace with your Web3Forms access key.
          subject: `New Contact Form Submission - ${formData.subject}`,
          from_name: "Faith Engineering Website",
          name: formData.name,
          email: formData.email,
          message: `Mobile: +91${formData.mobile}\nSubject: ${formData.subject}\n\n${formData.message}`,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send your message.");
      }

      // Set the one-time session flag before navigating to the thank-you page.
      sessionStorage.setItem("contactFormSubmitted", "true");
      router.push("/thank-you");
    } catch (error) {
      setSubmitError(
        error.message || "Something went wrong. Please try again.",
      );
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-base text-stone-800 outline-none transition placeholder:text-stone-400 hover:border-[#AF0020]/40 focus:border-[#AF0020] focus:bg-white focus:ring-4 focus:ring-[#AF0020]/10 lg:text-lg";

  const labelClass =
    "mb-2 block text-base font-medium text-stone-700 lg:text-lg";

  const errorText = (field) =>
    errors[field] ? (
      <p
        id={`${field}-error`}
        className="mt-1.5 text-sm font-semibold text-red-700"
      >
        {errors[field]}
      </p>
    ) : null;

  return (
    <div className="min-h-screen overflow-hidden bg-white text-stone-800">
      <Breadcrumb title="Contact Us" />

      <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={transitionConfig}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#AF0020]/15 bg-[#AF0020]/5 px-5 py-2 text-base font-medium text-[#AF0020]">
            We’re Here to Help
          </span>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#AF0020] sm:text-4xl">
            Get in Touch With Us
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#AF0020]" />

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-600 lg:text-lg">
            Have a question or need assistance? Contact our team and we’ll be
            happy to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-2 lg:gap-8">
          {/* Left: Contact form slides in from left */}
          <motion.section
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transitionConfig}
            className="h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_12px_45px_rgba(80,0,16,0.07)]"
          >
            <div className="border-b border-stone-100 bg-gradient-to-r from-[#AF0020]/[0.07] via-white to-white px-5 py-6 sm:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#AF0020] text-white">
                  <MessageSquare size={23} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-[#AF0020] sm:text-2xl">
                    Send Us a Message
                  </h2>
                  <p className="mt-1 text-base text-stone-500">
                    Fill out the form below with your details.
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 p-5 sm:p-8"
            >
              {submitError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-semibold text-red-700"
                >
                  {submitError}
                </div>
              )}

              {/* Name and email side by side on small screens and wider. */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name <span className="text-[#AF0020]">*</span>
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#AF0020]/55" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`${inputClass} pl-11`}
                    />
                  </div>

                  {errorText("name")}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-[#AF0020]">*</span>
                  </label>

                  <div className="relative">
                    <AtSign className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#AF0020]/55" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={`${inputClass} pl-11`}
                    />
                  </div>

                  {errorText("email")}
                </div>
              </div>

              {/* India prefix is fixed; input accepts exactly 10 digits. */}
              <div>
                <label htmlFor="mobile" className={labelClass}>
                  Mobile Number <span className="text-[#AF0020]">*</span>
                </label>

                <div className="flex">
                  <span className="inline-flex shrink-0 items-center rounded-l-xl border border-r-0 border-stone-200 bg-stone-100 px-3 text-stone-600">
                    +91
                  </span>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    aria-invalid={Boolean(errors.mobile)}
                    aria-describedby={
                      errors.mobile ? "mobile-error" : undefined
                    }
                    className={`${inputClass} rounded-l-none`}
                  />
                </div>

                {errorText("mobile")}
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  Subject <span className="text-[#AF0020]">*</span>
                </label>

                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#AF0020]/55" />
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    className={`${inputClass} pl-11`}
                  />
                </div>

                {errorText("subject")}
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Comment or Message <span className="text-[#AF0020]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`${inputClass} resize-y`}
                />

                {errorText("message")}
              </div>

              {/* Compact checkbox and CAPTCHA block at half width. */}
              <div className="w-1/2">
                <label
                  className={`flex w-full cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 ${
                    errors.isHuman
                      ? "border-red-300 bg-red-50"
                      : "border-stone-200 bg-stone-50 hover:border-[#AF0020]/30"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="isHuman"
                    checked={formData.isHuman}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.isHuman)}
                    aria-describedby={
                      errors.isHuman ? "isHuman-error" : undefined
                    }
                    className="h-4 w-4 shrink-0 cursor-pointer accent-[#AF0020] focus:ring-2 focus:ring-[#AF0020]/30"
                  />

                  <span className="text-sm font-medium text-stone-700 sm:text-base">
                    I’m not a robot
                  </span>

                  <img
                    src="/contact/captcha.webp"
                    alt="CAPTCHA verification"
                    className="ml-auto h-9 w-auto max-w-[100px] shrink-0 rounded-md object-contain"
                  />
                </label>

                {errorText("isHuman")}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#AF0020] px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#92001B] focus:outline-none focus:ring-4 focus:ring-[#AF0020]/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Message"}
                {!submitting && <Send size={19} />}
              </button>

              <p className="text-center text-sm text-stone-500">
                Please check your contact details before submitting.
              </p>
            </form>
          </motion.section>

          {/* Right: Contact information slides in from right */}
          <motion.section
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transitionConfig}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_12px_45px_rgba(80,0,16,0.07)]"
          >
            <div className="relative overflow-hidden bg-[#AF0020] px-5 py-7 text-white sm:px-8">
              <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full border-[20px] border-white/10" />
              <div className="absolute -bottom-16 right-24 h-32 w-32 rounded-full bg-white/5" />

              <div className="relative">
                <span className="text-base font-medium tracking-wide text-white/75">
                  Contact Information
                </span>
                <h2 className="mt-1 text-2xl font-semibold">Let’s Connect</h2>
                <p className="mt-2 text-base leading-relaxed text-white/80 lg:text-lg">
                  Reach out to our team for enquiries and assistance.
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col divide-y divide-stone-100 px-5 sm:px-8">
              <div className="py-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#AF0020]/[0.07] text-[#AF0020]">
                    <Phone size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-[#AF0020]">
                    Phone Number
                  </h3>
                </div>

                <a
                  href="tel:+919871580960"
                  className="mt-4 inline-flex rounded-xl border border-stone-200 bg-[#FFF9F5] px-4 py-3 text-stone-700 transition hover:border-[#AF0020]/30 hover:bg-[#AF0020]/5 hover:text-[#AF0020]"
                >
                  +91 9871580960
                </a>
              </div>

              <div className="py-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#AF0020]/[0.07] text-[#AF0020]">
                    <Mail size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-[#AF0020]">
                    Email Address
                  </h3>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <a
                    href="mailto:faithengineering4@gmail.com"
                    className="break-all rounded-xl border border-stone-200 bg-[#FFF9F5] px-4 py-3 text-stone-700 transition hover:border-[#AF0020]/30 hover:bg-[#AF0020]/5 hover:text-[#AF0020]"
                  >
                    faithengineering4@gmail.com
                  </a>
                  <a
                    href="mailto:faithengineering39@yahoo.co.in"
                    className="break-all rounded-xl border border-stone-200 bg-[#FFF9F5] px-4 py-3 text-stone-700 transition hover:border-[#AF0020]/30 hover:bg-[#AF0020]/5 hover:text-[#AF0020]"
                  >
                    faithengineering39@yahoo.co.in
                  </a>
                </div>
              </div>

              <div className="py-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#AF0020]/[0.07] text-[#AF0020]">
                    <MapPin size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-[#AF0020]">
                    Office Address
                  </h3>
                </div>

                <div className="mt-3 space-y-3 pl-1 text-base leading-relaxed text-stone-600 lg:text-lg">
                  <p>
                    <strong className="text-[#AF0020]">Unit I:</strong> G-129,
                    Sec.1, DSIIDC, Bawana Industrial Area, New Delhi-110039
                  </p>
                  <p>
                    <strong className="text-[#AF0020]">Unit II:</strong> Plot
                    No-728, Khasra No-154, near Beakon Public School, Pooth
                    Khurd, Delhi-110039
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Map Section */}
      <section className="w-full overflow-hidden border-t border-stone-200 bg-[#FFF9F5]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={transitionConfig}
          className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8"
        >
          <h2 className="text-2xl font-semibold text-[#AF0020]">
            Find Our Location
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-[#AF0020]" />
          <p className="mt-3 text-base leading-relaxed text-stone-600 lg:text-lg">
            Explore our location on the map below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={transitionConfig}
          className="mx-auto mt-6 w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white p-1.5 shadow-[0_12px_40px_rgba(80,0,16,0.10)]">
            <div className="h-[260px] overflow-hidden rounded-xl sm:h-[340px] lg:h-[420px]">
              <iframe
                title="Faith Engineering Bawana Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27969.628669285168!2d77.05465915!3d28.803006449999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da822bdf1dae1%3A0x549a8fcadeefa83c!2sBawana%2C%20Delhi%2C%20110039!5e0!3m2!1sen!2sin!4v1792150848060!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
