'use client';

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-gradient-to-b from-ebony via-black/80 to-ebony/90 py-16"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-2 font-heading text-2xl font-extrabold text-white sm:text-3xl">
          Contact Us
        </h2>
        <p className="mb-8 text-sm text-slate-300">
          Questions, partnership ideas, or want to work with DOGM.AI? Reach out
          below.
        </p>
        <form
          id="contactForm"
          className="mx-auto grid max-w-xl gap-5 text-left"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-xs font-medium text-slate-400"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-slate-700 bg-ebony/80 px-4 py-2 text-slate-100 transition focus:border-intl-orange focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-xs font-medium text-slate-400"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-ebony/80 px-4 py-2 text-slate-100 transition focus:border-intl-orange focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-xs font-medium text-slate-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-slate-700 bg-ebony/80 px-4 py-2 text-slate-100 transition focus:border-intl-orange focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold text-ebony shadow-[0_0_30px_rgba(250,84,4,0.45)] transition hover:-translate-y-0.5 hover:bg-orange-500"
          >
            Send Message
          </button>
          {submitted && (
            <p className="mt-3 text-center text-sm font-semibold text-cerulean">
              Thank you! We&apos;ll be in touch soon.
            </p>
          )}
        </form>
        <div className="mt-8 flex justify-center gap-6 text-slate-400">
          <a
            href="mailto:hello@dogm.ai"
            className="transition hover:text-intl-orange"
          >
            hello@dogm.ai
          </a>
          <a
            href="https://linkedin.com/company/dogm-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-intl-orange"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
