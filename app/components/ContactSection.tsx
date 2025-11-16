'use client';

import { FormEvent, useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const contactChannels = [
    {
      label: "Email",
      value: "hello@dogm.ai",
      href: "mailto:hello@dogm.ai",
      accent: "text-intl-orange",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/company/dogm-ai",
      href: "https://linkedin.com/company/dogm-ai",
      accent: "text-cerulean",
    },
    {
      label: "Response Time",
      value: "< 24 hours on weekdays",
      accent: "text-allports",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <AnimatedSection
      id="contact"
      className="border-t border-white/10 bg-gradient-to-b from-ebony via-black/80 to-ebony/90 py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/85 p-8 shadow-[0_22px_55px_rgba(0,0,0,0.7)]">
            <div className="pointer-events-none absolute inset-px rounded-[2.25rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
            <div className="relative space-y-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-intl-orange">
                  Talk To The Team
                </p>
                <h2 className="mt-2 font-heading text-3xl font-extrabold text-white">
                  Custom questions? Partnership ideas? We&apos;re ready.
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  Tell us what you&apos;re building, the teams you&apos;re training, or
                  the outcome you need. We&apos;ll reply with a clear next step—demo,
                  curriculum deep dive, or a private cohort plan.
                </p>
              </div>
              <div className="space-y-4">
                {contactChannels.map((channel) => (
                  <div
                    key={channel.label}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/40 px-4 py-3"
                  >
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        {channel.label}
                      </p>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          className={`text-sm font-semibold text-white transition hover:text-intl-orange ${channel.accent ?? ""}`}
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <p className={`text-sm font-semibold text-white ${channel.accent ?? ""}`}>
                          {channel.value}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-slate-500">↗</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white transition hover:border-intl-orange hover:text-intl-orange"
                >
                  Schedule a 15-min intro
                </a>
                <a
                  href="mailto:hello@dogm.ai"
                  className="inline-flex items-center justify-center rounded-full bg-intl-orange px-5 py-2 text-xs font-semibold text-ebony shadow-[0_0_30px_rgba(250,84,4,0.45)] transition hover:-translate-y-0.5 hover:bg-orange-500"
                >
                  Write us directly
                </a>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-950/80 to-black/90 p-8 shadow-[0_22px_55px_rgba(0,0,0,0.7)]">
            <div className="pointer-events-none absolute inset-px rounded-[2.25rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
            <form
              id="contactForm"
              className="relative grid gap-5 text-left"
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
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-slate-100 transition focus:border-intl-orange focus:outline-none"
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
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-slate-100 transition focus:border-intl-orange focus:outline-none"
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
                  rows={5}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-slate-100 transition focus:border-intl-orange focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold text-ebony shadow-[0_0_30px_rgba(250,84,4,0.45)] transition hover:-translate-y-0.5 hover:bg-orange-500"
              >
                Send Message
              </button>
              {submitted && (
                <div className="rounded-2xl border border-cerulean/30 bg-cerulean/10 px-4 py-3 text-center text-sm font-semibold text-cerulean">
                  🎉 Message received. Expect a reply within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
