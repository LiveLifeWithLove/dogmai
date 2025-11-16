const stats = [
  { value: "80%+", label: "Ship capstone projects", color: "text-intl-orange" },
  { value: "10-20h", label: "Weekly AI work", color: "text-cerulean" },
  { value: "3-5", label: "Portfolio artifacts", color: "text-allports" },
];

const leaveWithItems = [
  {
    color: "bg-intl-orange",
    title: "A concrete portfolio:",
    description:
      "apps, case studies, dashboards, or workflows that prove the reps happened and strengthen Digital Professional.",
  },
  {
    color: "bg-cerulean",
    title: "AI-native workflows:",
    description:
      "playbooks, automations, and rituals that plug directly into day one at work.",
  },
  {
    color: "bg-allports",
    title: "A compelling narrative:",
    description:
      "a narrative rooted in proof of work, not theoretical credentials, so Digital Professionals stand out in search and interviews.",
  },
  {
    color: "bg-intl-orange",
    title: "A repeatable system:",
    description:
      "the DOGM.AI Loop &mdash; your repeatable system for the next skills you choose to learn.",
  },
];

const outcomeTracks = [
  {
    number: "1",
    title: "Career & role shifts",
    description:
      "Shift into product, design, development, data, or Digital Professional leadership with artifacts that show exactly how you work.",
    color: "bg-intl-orange/15 text-intl-orange",
  },
  {
    number: "2",
    title: "Stronger in-role performance",
    description:
      "Become the AI-native Digital Professional on your team &mdash; faster, clearer, more reliable.",
    color: "bg-cerulean/15 text-cerulean",
  },
  {
    number: "3",
    title: "Founder & side-project leverage",
    description:
      "Validate ideas, prototype quickly, and launch efficiently with AI as your multiplier.",
    color: "bg-allports/15 text-allports",
  },
];

export default function OutcomesSection() {
  return (
    <section
      id="outcomes"
      className="border-b border-white/5 bg-black/90 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Outcomes &amp; Transformations
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              DOGM.AI is built on evidence, not theory. Digital Professionals
              leave with shipped work, upgraded workflows, and a story they can
              defend in search results, sales calls, and interviews.
            </p>
          </div>
          <div className="w-full max-w-sm md:text-right">
            <div className="grid grid-cols-3 gap-3 text-center text-[11px] text-slate-300">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800 bg-ebony/80 px-3 py-3"
                >
                  <div
                    className={`font-heading text-lg font-extrabold ${stat.color}`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                After 6&ndash;12 weeks, you leave with:
              </p>
              <ul className="mt-3 space-y-3 text-xs text-slate-300">
                {leaveWithItems.map((item) => (
                  <li className="flex items-start gap-3" key={item.title}>
                    <span className="mt-[2px] flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                      />
                    </span>
                    <span>
                      <span className="font-medium text-white">
                        {item.title}
                      </span>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-ebony/80 p-4 text-xs text-slate-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              <p className="font-semibold text-white">
                &ldquo;Before DOGM.AI I poked at AI tools. After the bootcamp I
                had a workflow, a bar to measure against, and a live project
                clients could trust.&rdquo;
              </p>
              <p className="mt-3 text-[11px] text-slate-400">
                &mdash; Web Dev Cohort Learner
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-ebony to-black/40 p-5 text-xs text-slate-300 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
            <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
              <span>Outcome Tracks</span>
              <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">
                Where this takes you
              </span>
            </div>

            <div className="space-y-4">
              {outcomeTracks.map((track) => (
                <div
                  key={track.title}
                  className="flex items-start gap-3 rounded-2xl border border-slate-800/50 bg-black/50 px-3 py-3"
                >
                  <div
                    className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full text-[12px] font-bold ${track.color}`}
                  >
                    {track.number}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-white">
                      {track.title}
                    </div>
                    <p
                      className="mt-1 text-[11px] text-slate-400"
                      dangerouslySetInnerHTML={{ __html: track.description }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-slate-800/80 pt-3 text-[11px] text-slate-400">
              <span className="font-semibold uppercase tracking-[0.16em]">
                TL;DR
              </span>
              <p className="mt-2">
                DOGM.AI isn&apos;t about &ldquo;learning AI tools.&rdquo; It&apos;s
                about becoming the Digital Professional who can learn, build,
                and adapt on demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
