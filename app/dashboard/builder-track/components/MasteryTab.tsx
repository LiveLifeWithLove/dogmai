import React from "react";

type MasteryPath = { label: string; desc: string };

type MasteryTabProps = {
  masteryPaths: MasteryPath[];
};

const MasteryTab: React.FC<MasteryTabProps> = ({ masteryPaths }) => (
  <section className="grid gap-6 lg:grid-cols-[1.7fr,1.3fr]">
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-1">Mastery Paths</h2>
        <p className="text-[11px] text-slate-400 mb-3">As you complete fundamentals, missions, and domain projects, you climb these four mastery tracks. Same tracks for every cohort, different systems on top.</p>
        <div className="grid gap-3 md:grid-cols-2">
          {masteryPaths.map((m) => (
            <div key={m.label} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-50">{m.label}</span>
                <span className="text-[10px] text-slate-500">0%</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-2">{m.desc}</p>
              <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[4%] bg-gradient-to-r from-indigo-400 to-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-1">Monthly Mastery Milestone</h2>
        <p className="text-[11px] text-slate-400 mb-2">Complete 3 weekly outcomes + 1 fundamentals block + 1 reflection cycle to unlock your next DOGM.AI mastery badge and portfolio credential.</p>
        <ul className="text-[11px] text-slate-300 space-y-1">
          <li>- Ship: Mission-control base app + one feature.</li>
          <li>- Study: At least 4 foundational lessons.</li>
          <li>- Reflect: End-of-cycle Builder Signal log.</li>
        </ul>
      </div>
    </div>

    <aside className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-2">Builder Signal - Today</h2>
        <p className="text-[11px] text-slate-400">Capture what you shipped, what blocked you, and where AI helped. This powers your Growth and Mastery graphs.</p>
        <textarea className="mt-3 w-full rounded-xl border border-slate-800 bg-slate-950 p-2 text-[11px] text-slate-100 placeholder:text-slate-500 focus:outline-none" rows={4} placeholder="Today I shipped..., I got stuck on..., AI helped me by..." />
        <button className="mt-2 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-900">Save Reflection</button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-2">Mastery Snapshot</h2>
        <p className="text-[11px] text-slate-400">Right now you're at the very start of Loop 1. Every day you show up, the bar moves.</p>
        <div className="mt-3 h-2 rounded-full bg-slate-800 overflow-hidden">
          <div className="h-full w-[3%] bg-gradient-to-r from-indigo-500 to-emerald-400" />
        </div>
      </div>
    </aside>
  </section>
);

export default MasteryTab;
