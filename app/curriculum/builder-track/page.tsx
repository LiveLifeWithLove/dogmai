import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SampleProjectsSection, { type SampleProject } from "./SampleProjectsSection";

export const metadata: Metadata = {
  title: "Mission-Control Builder Track | DOGM.AI",
  description: "Curriculum overview for the Mission-Control Builder Track—AI-native engineering for national-scale deployment in the Philippines.",
};

const heroStats = [
  { label: "Next Cohort", value: "March", detail: "50 seats" },
  { label: "Duration", value: "12 weeks", detail: "Mission-control sprint" },
  { label: "Proof cadence", value: "Weekly", detail: "Deployable artifacts" },
];

const whoList = [
  "Full-Stack Developers",
  "Technical Operators",
  "Systems Integrators",
  "Government Digital Teams",
  "Public-Sector Innovation Units",
  "Engineering Leads",
];

const outcomeWeeks = [
  {
    title: "Week 3 — LGU Rapid Response Dashboard",
    detail: "Real-time incidents, geo-mapping, operator tagging, AI situation briefs.",
  },
  {
    title: "Week 4 — Citizen Analytics Pipeline",
    detail: "Complaint ingestion → AI classification → routing → agency reporting.",
  },
  {
    title: "Week 5 — Logistics Automation System",
    detail: "Resource allocation, forecasting, and optimized supply-chain workflows.",
  },
  {
    title: "Week 6 — Multi-Agency Coordination Panel",
    detail: "Decision rooms, SOP-guided flows, AI-generated updates, audit trails.",
  },
  {
    title: "Week 7 — Public Safety Intelligence Tools",
    detail: "Incident signals, CCTV assistive AI, event timelines, threat reduction.",
  },
  {
    title: "Week 8 — Government Workflow Automation",
    detail: "Permits, evaluations, documentation pipelines, automated verification.",
  },
  {
    title: "Week 9 — Field Operator Mobile Tools",
    detail: "Offline-first reporting, AI → structured form conversion, on-site syncing.",
  },
  {
    title: "Week 10 — Unified Mission-Control Integration",
    detail: "API gateway, operator role matrix, telemetry deepening, staging deployment.",
  },
];

const masteryScenarios = [
  "Emergency Response",
  "Multi-Agency Logistics",
  "Citizen Escalation Loop",
  "Public Safety Intelligence",
  "Custom Mission Scenario",
];

const proofItems = [
  { label: "80%+", detail: "Ship their capstone" },
  { label: "10–20h", detail: "Weekly AI-supported work" },
  { label: "6–10", detail: "Portfolio artifacts" },
  { label: "100%", detail: "Mission-ready skill uplift" },
];

const aiAdvantages = [
  {
    title: "Remove Drag",
    detail: "Instant debugging, refactors, clarifications, system planning.",
  },
  {
    title: "Collapse Feedback Loops",
    detail: "Get critique at every iteration — improve 5x faster.",
  },
  {
    title: "Increase Leverage",
    detail: "AI covers boilerplate so you stay focused on judgment calls.",
  },
];

const createProjectImage = (label: string, colorA: string, colorB: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'><defs><linearGradient id='grad-${label}' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${colorA}' stop-opacity='0.9'/><stop offset='100%' stop-color='${colorB}' stop-opacity='0.9'/></linearGradient></defs><rect width='640' height='360' rx='28' fill='url(#grad-${label})'/><g fill='rgba(255,255,255,0.35)' transform='translate(40,60)'><rect width='480' height='12' rx='6'/><rect y='32' width='360' height='12' rx='6'/><rect y='64' width='520' height='140' rx='18'/><rect y='220' width='140' height='60' rx='12'/><rect x='160' y='220' width='140' height='60' rx='12'/><rect x='320' y='220' width='140' height='60' rx='12'/></g><text x='40' y='330' fill='rgba(255,255,255,0.7)' font-family='Arial' font-size='24' letter-spacing='2'>${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const sampleProjects: SampleProject[] = [
  {
    title: "LGU Mission Console",
    description:
      "Responsive command interface showing alerts, geo-tagged incidents, and AI-generated situation briefs for municipal operators.",
    images: [
      createProjectImage("LGU Console", "#fa5404", "#f97316"),
      createProjectImage("Operator Timeline", "#f97316", "#facc15"),
    ],
    highlights: ["Multi-source incident ingestion", "AI summaries for operators", "Role-based view states"],
    impact: ["Reduces incident coordination time by 60%", "Gives command centers real-time situational clarity"],
  },
  {
    title: "Citizen Signal Intelligence",
    description:
      "Pipeline that turns SMS/email complaints into prioritized tickets, enriched with AI classification and routing automations.",
    images: [
      createProjectImage("Signal Intelligence", "#0ea5e9", "#22d3ee"),
      createProjectImage("Ticket Routing", "#22d3ee", "#2dd4bf"),
    ],
    highlights: ["Natural language intake", "Automated routing logic", "Analytics-ready reporting"],
    impact: ["Keeps agencies ahead of citizen escalations", "Transforms raw complaints into action-ready cues"],
  },
  {
    title: "Field Ops Mobility Kit",
    description:
      "Offline-ready mobile workspace with photo uploads, AI transcription, and push sync to the national mission-control stack.",
    images: [
      createProjectImage("Field Mobility", "#6366f1", "#a855f7"),
      createProjectImage("Sync Hub", "#a855f7", "#ec4899"),
    ],
    highlights: ["Offline-first capture", "Gov-approved data handling", "AI-assisted documentation"],
    impact: ["Eliminates reporting lag for field teams", "Feeds the national system with structured updates"],
  },
];

export default function BuilderTrackPage() {
  return (
    <div className="min-h-screen bg-ebony text-slate-100">
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-intl-orange/20 blur-3xl" />
          <div className="absolute top-32 right-0 h-96 w-96 rounded-full bg-cerulean/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
        </div>
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-10">
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-slate-950/80 to-black/85 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.65)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-intl-orange/20 blur-3xl" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange/80">Mission-Control Builder Track</p>
              <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl">AI-Native Engineering for National-Scale Deployment</h1>
              <p className="mt-4 text-sm text-slate-300">Next Cohort: March · 20 Seats</p>
              <p className="mt-6 text-base text-slate-200">
                Build mission-critical systems with AI copilots, weekly shipped outcomes, and a deployment-first curriculum designed for Philippine public-sector operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ebony shadow-[0_0_40px_rgba(250,84,4,0.65)] transition hover:-translate-y-1 hover:bg-orange-500"
                >
                  Apply Now &rarr;
                </a>
                <a
                  href="#overview-video"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-intl-orange hover:text-intl-orange"
                >
                  Watch Overview &rarr;
                </a>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-400">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/75 to-black/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
              <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-cerulean/20 blur-3xl" />
            </div>
            <div className="relative z-10">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">Build the Systems a Nation Runs On</p>
                  <p className="text-sm text-slate-300">
                    Dogm.ai is equipping agencies across the Philippines with mission-control AI for public safety, logistics, and governance.
                  </p>
                  <p className="text-sm text-slate-300">
                    This Builder Track prepares you to ship full-stack prototypes, embed AI copilots, and deliver operational dashboards that handle public-sector constraints.
                    Every week ends with proof-of-work that real agencies can review.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">You will learn to:</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    {[
                      "Ship full-stack mission-control prototypes",
                      "Integrate AI copilots into real workflows",
                      "Build operational dashboards, alerts, and automations",
                      "Design systems resilient to public-sector constraints",
                      "Deliver proof-of-work every single week",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-intl-orange" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-intl-orange">You don’t just learn to build — you build what the country needs.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-black/75 to-slate-950/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange/80">Who the Track Is For</p>
                <p className="text-sm text-slate-300">Designed for Digital Professionals building real systems:</p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {whoList.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-xs text-intl-orange">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  You’ll graduate as an AI-native Mission-Control Engineer ready for deployment.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">The DOGM.AI Chain for Builders</p>
                <p className="mt-2 text-2xl font-semibold text-white">Daily Sprints → Weekly Outcomes → Growth Loops → Mastery → Acceleration → Intelligence</p>
                <p className="mt-4 text-sm text-slate-300">
                  Every layer compounds into mission-ready execution. The rituals build discipline; the artifacts build trust.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950/80 via-black/75 to-[#05060b] p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean">The Curriculum</p>
            <h2 className="mt-3 text-3xl font-bold text-white">12 Weeks · Mission-Control Focused · Outcome-Driven</h2>
            <p className="mt-2 text-sm text-slate-300">Every sprint produces agency-usable, verifiable artifacts.</p>
            <div className="mt-8 grid gap-6">
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Weeks 1–2 — Foundation Sprint</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Mission-Control Architecture + AI Readiness</h3>
                <p className="mt-2 text-sm text-slate-300">Build the backbone for fast, reliable, public-sector development.</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">You will build:</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {[
                    "Mission-control base app (Next.js + Tailwind)",
                    "Operator / Analyst / Admin auth",
                    "API integration stubs for mission-control services",
                    "Real-time logging + telemetry",
                    "Readiness scorecard + friction map",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cerulean" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate-300">This is your operating base for the remaining 10 weeks.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Weeks 3–10 — Outcome Cycles</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Weekly mission-aligned, deployable proof-of-work.</h3>
                <p className="mt-2 text-sm text-slate-300">Each week ends with a working feature, operational workflow, or AI-powered tool.</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {outcomeWeeks.map((week) => (
                    <div key={week.title} className="rounded-2xl border border-white/10 bg-black/50 p-4 text-sm text-slate-200">
                      <p className="font-semibold text-white">{week.title}</p>
                      <p className="mt-1 text-slate-400">{week.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Weeks 11–12 — Mastery & Deployment</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Capstone: End-to-End Mission Scenario</h3>
                <p className="mt-2 text-sm text-slate-300">Build and defend a complete operational flow:</p>
                <ul className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
                  {masteryScenarios.map((scenario) => (
                    <li key={scenario} className="rounded-full border border-white/15 px-3 py-1">
                      {scenario}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate-200">You will deliver:</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                  {[
                    "A fully deployable mission-control system",
                    "Technical + operational documentation",
                    "Architecture defense & rationale",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-intl-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-intl-orange">🏅 Certification: DOGM.AI Mission-Control AI Builder</p>
              </div>
            </div>
          </section>

          <SampleProjectsSection projects={sampleProjects} />

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white">What Graduates Leave With</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "6–10 Deployment-Ready Artifacts",
                  detail: "Dashboards, automations, data pipelines, and an end-to-end capstone.",
                },
                {
                  title: "AI-Native Engineering Playbooks",
                  detail: "Reusable blueprints for fast, modern system delivery.",
                },
                {
                  title: "Mission-Control Portfolio",
                  detail: "Proof recruiters, agencies, & partners trust.",
                },
                {
                  title: "Deployment Confidence",
                  detail: "You can ship systems that real teams can use in the field.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-black/40 p-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950/80 via-black/80 to-slate-950/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">The AI Co-Pilot Advantage</p>
                <p className="text-sm text-slate-300">AI isn’t a shortcut — it’s the multiplier.</p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {aiAdvantages.map((item) => (
                    <li key={item.title} className="rounded-3xl border border-white/10 bg-black/40 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-intl-orange">{item.title}</p>
                      <p className="mt-2 text-slate-200">{item.detail}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">You become the kind of builder who ships at modern speed.</p>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange/80">
                  A System Built for National Deployment
                </p>
                <p className="text-sm text-slate-200">This track aligns with the needs of the Philippine public sector:</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {[
                    "Multi-agency workflows",
                    "LGU operational realities",
                    "High-friction government processes",
                    "Low-bandwidth environments",
                    "Public safety + logistics constraints",
                    "Human-in-the-loop decision structures",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cerulean" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">Every artifact is designed to be used, not just showcased.</p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white">Outcomes That Stand Up to Scrutiny</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {proofItems.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center">
                  <p className="text-3xl font-semibold text-intl-orange">{item.label}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950/80 via-black/70 to-[#05060b] p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange">Apply to the Builder Track</p>
                <h2 className="mt-2 text-3xl font-bold text-white">Become the mission-control builder your agency — or the country — can’t replace.</h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {[
                    "✓ 12-week high-intensity cohort",
                    "✓ Daily AI-guided sprints",
                    "✓ Weekly mentor review cycles",
                    "✓ 6–10 deployable projects",
                    "✓ Mission-control certification",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  <a
                    href="/apply"
                    className="inline-flex items-center justify-center rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ebony shadow-[0_0_40px_rgba(250,84,4,0.65)] transition hover:-translate-y-1 hover:bg-orange-500"
                  >
                    Start Application →
                  </a>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-intl-orange hover:text-intl-orange"
                  >
                    Schedule an Intro Call →
                  </a>
                </div>
                <a
                  href="mailto:hello@dogm.ai"
                  className="block rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center text-sm font-semibold text-slate-200 transition hover:border-intl-orange hover:text-intl-orange"
                >
                  hello@dogm.ai →
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
