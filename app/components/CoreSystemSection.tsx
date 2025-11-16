const highlights = [
  {
    label: "Timeframe",
    value: "6\u201312 weeks",
    description: "Designed as an intensive, repeatable learning cycle.",
  },
  {
    label: "Mode",
    value: "Async + live",
    description: "Structured sprints with optional live mentor sessions.",
  },
  {
    label: "Focus",
    value: "Digital Professionals & product teams",
    description: "For people shipping real AI-powered work in 2026.",
  },
];

const loopFlow = [
  {
    text: "Discipline \u2192 Outcomes",
    badge: "Structure",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
  },
  {
    text: "Outcomes \u2192 Growth",
    badge: "Feedback",
    badgeClass: "bg-cerulean/10 text-cerulean",
  },
  {
    text: "Growth \u2192 Mastery",
    badge: "Depth",
    badgeClass: "bg-allports/10 text-allports",
  },
  {
    text: "Mastery \u2192 Acceleration",
    badge: "Leverage",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
  },
  {
    text: "Acceleration \u2192 Intelligence",
    badge: "Synthesis",
    badgeClass: "bg-cerulean/10 text-cerulean",
  },
];

export default function CoreSystemSection() {
  return (
    <section id="system" className="border-b border-white/5 bg-black/80 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              The DOGM.AI Core System
            </h2>
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              The DOGM.AI Loop is the operating rhythm built for Digital
              Professionals: Discipline &rarr; Outcomes &rarr; Growth &rarr;
              Mastery &rarr; Acceleration &rarr; Intelligence. Each state
              compounds the last so structure becomes evidence and evidence
              becomes leverage.
            </p>
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              Under the hood, AI sets the pace &mdash; planning, reviewing, and
              surfacing the next constraint &mdash; while you do the reps. It
              keeps you honest, accelerates critique, and lines up the next
              challenge so practice stays intentional and portfolios stay fresh.
            </p>

            <div className="mt-6 grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-ebony/80 p-3"
                >
                  <div className="text-[11px] font-semibold text-slate-400">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm text-white">{item.value}</div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-ebony to-black/40 p-5 text-xs text-slate-300 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
            <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
              <span>System Graph</span>
              <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">
                Loop View
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-px flex-1 bg-gradient-to-r from-intl-orange via-cerulean to-allports" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  Flow
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-allports via-cerulean to-intl-orange" />
              </div>

              <div className="grid gap-2 text-[11px] sm:grid-cols-2">
                {loopFlow.map((step) => (
                  <div
                    key={step.text}
                    className="flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 text-slate-300"
                  >
                    <span>{step.text}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] ${step.badgeClass}`}
                    >
                      {step.badge}
                    </span>
                  </div>
                ))}
              </div>

              <p className="pt-2 text-[11px] text-slate-400">
                The system cycles Digital Professionals through increasingly
                complex projects while AI tracks friction, surfaces patterns,
                and personalizes the next sprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
