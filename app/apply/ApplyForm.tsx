'use client';

import { FormEvent, useState } from "react";

const experienceLevels = ["0-2 years", "3-5 years", "6-10 years", "10+ years"];
const focusTracks = ["Product Systems", "Automation Engineering", "Revenue Enablement", "AI Program Leadership"];
const startWindows = ["ASAP (within 2 weeks)", "Next 30 days", "Next quarter", "Just exploring timelines"];

const buildMessageBody = (formData: FormData) => {
  const preferredTrack = formData.get("trackInterest")?.toString().trim() || "Not selected";
  const lines = [
    `Focus area: ${formData.get("focus") ?? "Not provided"}`,
    `Preferred bootcamp track: ${preferredTrack}`,
    `Experience level: ${formData.get("experience") ?? "Not provided"}`,
    `Phone / WhatsApp: ${formData.get("phone") ?? "Not provided"}`,
    `Birthday: ${formData.get("birthday") ?? "Not provided"}`,
    `Current company or team size: ${formData.get("company") ?? "Not provided"}`,
    `Current role: ${formData.get("role") ?? "Not provided"}`,
    `Tool stack today: ${formData.get("stack") ?? "Not provided"}`,
    `Portfolio or LinkedIn: ${formData.get("portfolio") ?? "Not provided"}`,
    `Availability: ${formData.get("availability") ?? "Not provided"}`,
    `Target start window: ${formData.get("startWindow") ?? "Not provided"}`,
    "",
    (formData.get("notes")?.toString().trim() || "No additional context provided."),
  ];

  return lines.join("\n");
};

export default function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setSubmitted(false);
    setErrorMessage(null);

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      message: buildMessageBody(formData),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.error ?? "Unable to submit your application right now.");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit your application right now.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="apply-form" className="relative grid gap-5 text-left" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="+63 917 123 4567"
            required
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="birthday" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Birthday
          </label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            required
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
          Company / Team context
        </label>
        <input
          id="company"
          name="company"
          placeholder="Current company or team size"
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="focus" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Focus Area
          </label>
          <select
            id="focus"
            name="focus"
            required
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select a track
            </option>
            {focusTracks.map((track) => (
              <option key={track} value={track}>
                {track}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="experience" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Experience
          </label>
          <select
            id="experience"
            name="experience"
            required
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select years of experience
            </option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="role" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Current Role
          </label>
          <input
            id="role"
            name="role"
            placeholder="e.g. Product Ops Lead @ Acme"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="portfolio" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            LinkedIn / Portfolio
          </label>
          <input
            id="portfolio"
            name="portfolio"
            type="url"
            placeholder="https://"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="stack" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Tool stack today
          </label>
          <input
            id="stack"
            name="stack"
            placeholder="Figma, Notion, Zapier, Python, etc."
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="availability" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
          Availability
        </label>
        <input
          id="availability"
          name="availability"
          placeholder="When can you start? Any schedule constraints?"
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="startWindow" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
          When do you want to start?
        </label>
        <select
          id="startWindow"
          name="startWindow"
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select a window
          </option>
          {startWindows.map((window) => (
            <option key={window} value={window}>
              {window}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
          Why DOGM.AI?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          placeholder="Tell us about the outcomes you want to ship, the team you support, or your biggest constraint."
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 transition focus:border-intl-orange focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ebony shadow-[0_0_35px_rgba(250,84,4,0.55)] transition hover:-translate-y-0.5 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit application"}
      </button>

      {submitted && (
        <div className="rounded-2xl border border-cerulean/30 bg-cerulean/10 px-4 py-3 text-center text-sm font-semibold text-cerulean">
          Application sent. We&apos;ll reply within 1 business day.
        </div>
      )}
      {errorMessage && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm font-semibold text-red-200">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
