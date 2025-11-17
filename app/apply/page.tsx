import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplyForm from "./ApplyForm";
import ReadinessGuide from "./ReadinessGuide";
import { bootcampPrograms } from "@/lib/bootcamp-programs";

const readinessSignals = [
  "You already ship digital products or automated workflows each week.",
  "You have the discipline to run daily copilot reps and weekly reviews.",
  "You want a credential that proves execution, not seat time.",
  "You can devote 10-12 focused hours for 6-12 weeks.",
];

const steps = [
  {
    label: "Step 01",
    title: "Profile & intent submission",
    description:
      "Share your craft focus, the systems you support, and the constraints you are solving. We look for clarity, not perfect resumes.",
  },
  {
    label: "Step 02",
    title: "AI readiness sprint",
    description:
      "Complete a 48-hour async prompt-based challenge with copilot access. Show us how you scope, build, and document outcomes.",
  },
  {
    label: "Step 03",
    title: "Live review + cohort placement",
    description:
      "Meet with a mentor to review signals, dial-in your track, and lock dates. Top candidates receive prep resources instantly.",
  },
];

export const metadata: Metadata = {
  title: "Apply - DOGM.AI",
  description: "Submit your profile, complete the readiness sprint, and join the next DOGM.AI cohort.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-ebony text-slate-100">
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-36 left-1/3 h-80 w-80 rounded-full bg-intl-orange/10 blur-3xl" />
          <div className="absolute top-20 right-8 h-96 w-96 rounded-full bg-cerulean/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />

          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-16">
            <section className="relative grid gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-slate-950/80 to-black/85 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.65)] lg:grid-cols-[1.2fr_0.8fr]">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="absolute -right-8 top-0 h-48 w-48 rounded-full bg-intl-orange/25 blur-3xl" />
              </div>
              <div className="relative space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange/80">Now accepting candidates</p>
                <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
                  Apply to the DOGM.AI mastery bootcamps.
                </h1>
                <p className="text-base text-slate-200 sm:text-lg">
                  Tell us where you build leverage today and the outcomes you must ship next quarter. Every accepted candidate
                  gets a plan that blends mentors, AI copilots, and brutal accountability.
                </p>
                <p className="text-sm text-slate-300">
                  Brand-new to AI workflows? No problem. We start with plain-language walkthroughs and a warm-up week so you never feel behind.
                </p>
                <p className="text-sm font-semibold text-cerulean">
                  Note: This application is currently open to professionals based in the Philippines only.
                </p>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">What we look for</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    {readinessSignals.map((signal) => (
                      <li key={signal} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-intl-orange" />
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#apply-form"
                    className="inline-flex items-center justify-center rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ebony shadow-[0_0_35px_rgba(250,84,4,0.55)] transition hover:-translate-y-1 hover:bg-orange-500"
                  >
                    Start your application
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-intl-orange hover:text-intl-orange"
                  >
                    Talk to the team
                  </a>
                </div>
              </div>

              <div className="relative space-y-6 rounded-[28px] border border-white/10 bg-gradient-to-b from-slate-950/80 to-black/90 p-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cerulean">Signals we review</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">How you plan, ship, and learn.</h2>
                  <p className="mt-2 text-sm text-slate-300">
                    We prioritize operators who can articulate constraints, collaborate with AI tools, and close loops with stakeholders.
                  </p>
                </div>
                <div className="grid gap-4">
                  {["Craft discipline", "Systems thinking", "Communication"].map((signal) => (
                    <div key={signal} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{signal}</p>
                      <p className="text-sm text-slate-200">
                        Provide artifacts, docs, or links that show how you create leverage in this area.
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-slate-300">
                  Need a private cohort or enterprise intake?{" "}
                  <a href="mailto:hello@dogm.ai" className="font-semibold text-intl-orange hover:text-orange-400">
                    Email hello@dogm.ai
                  </a>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-slate-950/75 to-black/80 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.6)]">
              <div className="mb-8 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean">How it works</p>
                <h2 className="font-heading text-3xl font-bold text-white">Three steps to enter the next cohort.</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {steps.map((step) => (
                  <div key={step.title} className="rounded-3xl border border-white/10 bg-gradient-to-b from-black/60 to-black/30 p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-intl-orange">{step.label}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-black/75 to-slate-950/70 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.65)]">
              <div className="mb-8 space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange/80">Pick your starter lane</p>
                <h2 className="font-heading text-3xl font-bold text-white">Four beginner-friendly tracks powered by our bootcamps.</h2>
                <p className="text-sm text-slate-300">
                  Not sure where you fit yet? Tap the track that feels closest. You can mention “still deciding” inside the form and we’ll guide you during the readiness sprint.
                </p>
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                {bootcampPrograms.map((program, index) => (
                  <label
                    key={program.id}
                    className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/55 p-6 transition hover:border-intl-orange/60"
                  >
                    <input
                      type="radio"
                      name="trackInterest"
                      value={program.id}
                      defaultChecked={index === 0}
                      form="apply-form"
                      className="peer absolute right-6 top-6 h-5 w-5 cursor-pointer appearance-none rounded-full border border-white/30 bg-transparent transition checked:border-none checked:bg-intl-orange"
                    />
                    <div className="flex flex-col space-y-2 pr-10">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-400">
                        <span>{program.id}</span>
                        <span>{program.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{program.title}</h3>
                      <p className="text-sm text-slate-300" dangerouslySetInnerHTML={{ __html: program.description }} />
                    </div>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {program.tags.slice(0, 2).map((tag) => (
                        <li key={tag} className="flex items-center gap-2">
                          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-intl-orange" />
                          {tag}
                        </li>
                      ))}
                      <li className="text-slate-400">Capstone: {program.capstone}</li>
                    </ul>
                    <p className="text-xs text-slate-400">
                      {program.curriculum[0]?.title ?? "Weekly coaching"} · We keep instructions plain-language so newcomers can ramp fast.
                    </p>
                  </label>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-slate-400">
                Your selection above is attached to the application form automatically.
              </p>
            </section>

            <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.65)]">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean">Application form</p>
                  <h2 className="font-heading text-3xl font-bold text-white">Tell us where you create leverage.</h2>
                  <p className="text-sm text-slate-300">
                    Submit the context below. We review every application manually, so give us links to artifacts, dashboards,
                    or code you are proud of. We reply with the readiness sprint + interview scheduling link.
                  </p>
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-slate-300">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Response time</p>
                    <p className="mt-2 text-lg font-semibold text-white">&lt; 24 hours on weekdays</p>
                    <p className="mt-2 text-xs text-slate-500">
                      Need priority review for a team? Mention it in the notes or email hello@dogm.ai.
                    </p>
                  </div>
                  <ReadinessGuide />
                </div>
                <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950/85 to-black/90 p-8">
                  <div className="pointer-events-none absolute inset-px rounded-[30px] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
                  <ApplyForm />
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

