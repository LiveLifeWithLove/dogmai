import React from "react";
import { DomainInfo } from "../domain-tracks";

type OverviewStat = { label: string; value: string; hint: string };
type WeeklyOutcome = {
  week: number;
  title: string;
  type: string;
  status: string;
  impact: string;
};

type OverviewTabProps = {
  stats: OverviewStat[];
  loopStages: string[];
  weeklyOutcomes: WeeklyOutcome[];
  activeDomain: DomainInfo;
};

const OverviewTab: React.FC<OverviewTabProps> = ({ stats, loopStages, weeklyOutcomes, activeDomain }) => (
  <>
    <section className="grid gap-6 lg:grid-cols-[1.8fr,1.2fr]">
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-6">
        <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute left-10 bottom-0 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative space-y-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-1 text-[10px] font-medium text-sky-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Day 1 - Mission-Control Builder Track
          </span>
          <h1 className="text-xl font-semibold leading-snug text-slate-50 sm:text-2xl">
            Your Mission-Control Learning Loop Starts Today
          </h1>
          <p className="text-xs text-slate-300 sm:text-sm max-w-xl">
            Install your builder operating system: complete the AI Readiness diagnostic, scaffold your mission-control base app, and ship your first visible proof. No tutorials -
            only work that real agencies could review.
          </p>

          <div className="mt-3 grid gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-[11px] text-slate-300 sm:grid-cols-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">01 - ARRIVE</div>
              <p>Set your focus & domain scenario.</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">02 - DIAGNOSTIC</div>
              <p>Run the AI Readiness assessment.</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">03 - BUILD</div>
              <p>Scaffold your mission-control base app.</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">04 - REFLECT</div>
              <p>Log friction & wins to feed Mastery.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
              <div className="text-[11px] text-slate-400">{s.label}</div>
              <div className="mt-1 text-sm font-semibold text-slate-50">{s.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">{s.hint}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">CURRENT DOMAIN</div>
              <div className="text-sm font-semibold text-slate-50">{activeDomain.label} - Builder Track</div>
              <p className="mt-1 text-[11px] text-slate-400">{activeDomain.tagline}</p>
            </div>
            <button className="rounded-full border border-slate-700 px-3 py-1 text-[10px] text-slate-300 hover:border-slate-500">Switch Domain</button>
          </div>
        </div>
      </div>
    </section>

    <section className="grid gap-4 lg:grid-cols-[1.2fr,1.4fr]">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">THE DOGM.AI LOOP</div>
            <div className="mt-1 text-sm font-semibold text-slate-50">Discipline -&gt; Outcomes -&gt; Growth -&gt; Mastery -&gt; Acceleration -&gt; Intelligence</div>
          </div>
          <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-300">Loop 1 - Day 1</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
          {loopStages.map((stage, idx) => (
            <div key={stage} className="flex items-center gap-1">
              <span
                className={`rounded-full border px-2 py-1 ${
                  idx === 0 ? "border-sky-400 bg-sky-500/15 text-sky-100" : "border-slate-700 bg-slate-900 text-slate-300"
                }`}
              >
                {stage}
              </span>
              {idx < loopStages.length - 1 && <span className="text-slate-600">-</span>}
            </div>
          ))}
        </div>

        <p className="mt-3 text-[11px] text-slate-400">
          Today you're installing <span className="text-slate-100">Discipline</span>: show up for one sprint, ship one artifact, and log one reflection. The rest of the loop builds on this.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">WEEKLY OUTCOMES</div>
            <div className="mt-1 text-sm font-semibold text-slate-50">This month's mission-control proofs</div>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-200">Ship something every week</span>
        </div>

        <div className="mt-3 space-y-2.5">
          {weeklyOutcomes.map((item) => (
            <div key={item.week} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-3">
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-[11px] font-semibold text-slate-300">W{item.week}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-semibold text-slate-50">{item.title}</div>
                    <div className="text-[11px] text-slate-400">{item.type}</div>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      item.status === "In Progress"
                        ? "bg-sky-500/10 text-sky-200 border border-sky-500/40"
                        : item.status === "Locked"
                        ? "bg-slate-900 text-slate-500 border border-slate-700"
                        : "bg-emerald-400/10 text-emerald-200 border border-emerald-500/40"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default OverviewTab;
