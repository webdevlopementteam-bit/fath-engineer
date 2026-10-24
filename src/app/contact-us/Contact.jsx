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
    "w-full rounded-xl border border-stone-200/90 bg-stone-50/70 px-4 py-3.5 text-base text-stone-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] outline-none transition-all duration-200 placeholder:text-stone-400 hover:border-[#AF0020]/40 hover:bg-stone-50 focus:border-[#AF0020] focus:bg-white focus:shadow-[0_0_0_4px_rgba(175,0,32,0.08)] lg:text-lg";

  const labelClass =
    "mb-2 block text-sm font-semibold tracking-wide text-stone-700 sm:text-base";

  const errorText = (field) =>
    errors[field] ? (
      <p
        id={`${field}-error`}
        className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-red-600 sm:text-sm"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
        {errors[field]}
      </p>
    ) : null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFFDFB] via-white to-[#FFF9F5] text-stone-800">
      {/* Subtle ambient background glows */}
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-[#AF0020]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[36rem] h-[28rem] w-[28rem] rounded-full bg-[#AF0020]/[0.03] blur-3xl" />

      <Breadcrumb title="Contact Us" />

      <main className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Header Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={transitionConfig}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#AF0020]/20 bg-gradient-to-r from-[#AF0020]/10 via-[#AF0020]/5 to-transparent px-5 py-2 text-sm font-semibold tracking-wide text-[#AF0020] shadow-sm sm:text-base">
            <span className="h-2 w-2 rounded-full bg-[#AF0020] animate-pulse" />
            We’re Here to Help
          </span>

          <h1 className="mt-5 text-3xl font-bold font-serif tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Get in Touch{" "}
            <span className="bg-gradient-to-r from-[#AF0020] to-[#7A0016] bg-clip-text text-transparent">
              With Us
            </span>
          </h1>

          <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-3 rounded-full bg-[#AF0020]/30" />
            <div className="h-1.5 w-14 rounded-full bg-[#AF0020]" />
            <div className="h-1.5 w-3 rounded-full bg-[#AF0020]/30" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 lg:text-lg">
            Have a question or need assistance? Contact our team and we’ll be
            happy to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: Contact form slides in from left */}
          <motion.section
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transitionConfig}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_20px_60px_-15px_rgba(80,0,16,0.08)] lg:col-span-7"
          >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#AF0020] via-[#D4143A] to-[#7A0016]" />

            <div className="border-b border-stone-100 bg-gradient-to-br from-[#AF0020]/[0.05] via-[#FFF9F5]/60 to-white px-6 py-6 sm:px-9 sm:py-7">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#AF0020] to-[#7A0016] text-white shadow-md shadow-[#AF0020]/25 ring-4 ring-[#AF0020]/10">
                  <MessageSquare size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
                    Send Us a Message
                  </h2>
                  <p className="mt-1 text-sm text-stone-500 sm:text-base">
                    Fill out the form below with your details.
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-1 flex-col justify-between space-y-5 p-6 sm:p-9"
            >
              {submitError && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-200 bg-red-50/90 px-4 py-3.5 text-sm font-semibold text-red-700 shadow-sm"
                >
                  {submitError}
                </div>
              )}

              {/* Name and email side by side on small screens and wider. */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name <span className="text-[#AF0020]">*</span>
                  </label>

                  <div className="group relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400 transition-colors duration-200 group-focus-within:text-[#AF0020]" />
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
                      className={`${inputClass} pl-12`}
                    />
                  </div>

                  {errorText("name")}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-[#AF0020]">*</span>
                  </label>

                  <div className="group relative">
                    <AtSign className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400 transition-colors duration-200 group-focus-within:text-[#AF0020]" />
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
                      className={`${inputClass} pl-12`}
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

                <div className="group flex rounded-xl transition-all duration-200 focus-within:shadow-[0_0_0_4px_rgba(175,0,32,0.08)]">
                  <span className="inline-flex shrink-0 select-none items-center rounded-l-xl border border-r-0 border-stone-200/90 bg-stone-100/90 px-4 font-semibold text-stone-600 transition-colors group-focus-within:border-[#AF0020] group-focus-within:bg-[#AF0020]/5 group-focus-within:text-[#AF0020]">
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
                    className={`${inputClass} rounded-l-none focus:shadow-none`}
                  />
                </div>

                {errorText("mobile")}
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  Subject <span className="text-[#AF0020]">*</span>
                </label>

                <div className="group relative">
                  <MessageSquare className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400 transition-colors duration-200 group-focus-within:text-[#AF0020]" />
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
                    className={`${inputClass} pl-12`}
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

              {/* Compact checkbox and CAPTCHA block */}
              <div className="w-full sm:w-2/3 md:w-1/2">
                <label
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-4 py-2.5 shadow-sm transition-all duration-200 ${
                    errors.isHuman
                      ? "border-red-300 bg-red-50/70"
                      : "border-stone-200/90 bg-stone-50/80 hover:border-[#AF0020]/40 hover:bg-white"
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
                    className="h-4.5 w-4.5 shrink-0 cursor-pointer rounded accent-[#AF0020] focus:ring-2 focus:ring-[#AF0020]/30"
                  />

                  <span className="select-none text-sm font-semibold text-stone-700 sm:text-base">
                    I’m not a robot
                  </span>

                  <img
                    src="/contact/captcha.webp"
                    alt="CAPTCHA verification"
                    className="ml-auto h-9 w-auto max-w-[95px] shrink-0 rounded-md object-contain"
                  />
                </label>

                {errorText("isHuman")}
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#AF0020] to-[#8A0019] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#AF0020]/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#92001B] hover:to-[#700014] hover:shadow-xl hover:shadow-[#AF0020]/30 focus:outline-none focus:ring-4 focus:ring-[#AF0020]/25 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 lg:text-lg"
                >
                  <span>{submitting ? "Sending..." : "Send Message"}</span>
                  {!submitting && (
                    <Send
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  )}
                </button>

                <p className="mt-3 text-center text-xs font-medium text-stone-400 sm:text-sm">
                  Please check your contact details before submitting.
                </p>
              </div>
            </form>
          </motion.section>

          {/* Right: Contact information slides in from right */}
          <motion.section
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transitionConfig}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_20px_60px_-15px_rgba(80,0,16,0.08)] lg:col-span-5"
          >
            {/* Rich hero card header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#AF0020] via-[#92001B] to-[#630011] px-6 py-8 text-white sm:px-8 sm:py-9">
              {/* Decorative geometry */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border-[24px] border-white/10" />
              <div className="pointer-events-none absolute -bottom-16 right-16 h-36 w-36 rounded-full bg-white/10 blur-xl" />
              <div
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative">
                <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                  Contact Information
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight  sm:text-3xl">
                  Let’s Connect
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                  Reach out to our team for enquiries and assistance.
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between divide-y divide-stone-100 px-6 py-2 sm:px-8">
              {/* Phone block */}
              <div className="py-6">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#AF0020]/15 to-[#AF0020]/5 text-[#AF0020] shadow-inner">
                    <Phone size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      Phone Number
                    </h3>
                    <p className="text-xs font-medium text-stone-400">
                      Direct support line
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+919871580960"
                  className="group mt-4 inline-flex w-full items-center justify-between rounded-2xl border border-stone-200/80 bg-[#FFF9F5]/80 px-4 py-3.5 font-semibold text-stone-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#AF0020]/40 hover:bg-[#AF0020]/[0.04] hover:text-[#AF0020] hover:shadow-md sm:w-auto sm:min-w-[220px]"
                >
                  <span>+91 9871580960</span>
                  <span className="ml-3 text-xs font-bold uppercase tracking-wider text-[#AF0020] opacity-70 transition-opacity group-hover:opacity-100">
                    Call →
                  </span>
                </a>
              </div>

              {/* Email block */}
              <div className="py-6">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#AF0020]/15 to-[#AF0020]/5 text-[#AF0020] shadow-inner">
                    <Mail size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      Email Address
                    </h3>
                    <p className="text-xs font-medium text-stone-400">
                      Drop us an enquiry anytime
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <a
                    href="mailto:faithengineering4@gmail.com"
                    className="group flex items-center justify-between break-all rounded-2xl border border-stone-200/80 bg-[#FFF9F5]/80 px-4 py-3.5 font-medium text-stone-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#AF0020]/40 hover:bg-[#AF0020]/[0.04] hover:text-[#AF0020] hover:shadow-md"
                  >
                    <span>faithengineering4@gmail.com</span>
                    <span className="ml-2 shrink-0 text-xs font-bold text-[#AF0020] opacity-0 transition-opacity group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                  <a
                    href="mailto:faithengineering39@yahoo.co.in"
                    className="group flex items-center justify-between break-all rounded-2xl border border-stone-200/80 bg-[#FFF9F5]/80 px-4 py-3.5 font-medium text-stone-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#AF0020]/40 hover:bg-[#AF0020]/[0.04] hover:text-[#AF0020] hover:shadow-md"
                  >
                    <span>faithengineering39@yahoo.co.in</span>
                    <span className="ml-2 shrink-0 text-xs font-bold text-[#AF0020] opacity-0 transition-opacity group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* Address block */}
              <div className="py-6">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#AF0020]/15 to-[#AF0020]/5 text-[#AF0020] shadow-inner">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      Office Address
                    </h3>
                    <p className="text-xs font-medium text-stone-400">
                      Our manufacturing & office units
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                  <div className="rounded-2xl border border-stone-200/70 bg-stone-50/70 p-4 transition-colors hover:border-[#AF0020]/25 hover:bg-[#FFF9F5]/60">
                    <span className="inline-block rounded-md bg-[#AF0020]/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[#AF0020]">
                      Unit I
                    </span>
                    <p className="mt-1.5 text-stone-700">
                      G-129, Sec.1, DSIIDC, Bawana Industrial Area, New
                      Delhi-110039
                    </p>
                  </div>

                  <div className="rounded-2xl border border-stone-200/70 bg-stone-50/70 p-4 transition-colors hover:border-[#AF0020]/25 hover:bg-[#FFF9F5]/60">
                    <span className="inline-block rounded-md bg-[#AF0020]/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[#AF0020]">
                      Unit II
                    </span>
                    <p className="mt-1.5 text-stone-700">
                      Plot No-728, Khasra No-154, near Beakon Public School,
                      Pooth Khurd, Delhi-110039
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Map Section */}
      <section className="relative w-full overflow-hidden border-t border-stone-200/80 bg-gradient-to-b from-[#FFF9F5] to-stone-100/60 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={transitionConfig}
          className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#AF0020]">
                Interactive Map
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                Find Our Location
              </h2>
              <div className="mt-3 h-1.5 w-14 rounded-full bg-[#AF0020]" />
            </div>
            <p className="text-sm leading-relaxed text-stone-600 sm:text-base lg:text-lg">
              Explore our location on the map below.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={transitionConfig}
          className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-3xl border border-stone-200/90 bg-white p-2 shadow-[0_20px_50px_rgba(80,0,16,0.10)] sm:p-3">
            <div className="h-[280px] overflow-hidden rounded-2xl sm:h-[360px] lg:h-[440px]">
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