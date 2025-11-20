import React from "react";

type FundamentalGroup = { category: string; items: string[] };

type LearnTabProps = {
  dailyStudy: string[];
  fundamentals: FundamentalGroup[];
};

const LearnTab: React.FC<LearnTabProps> = ({ dailyStudy, fundamentals }) => (
  <section className="grid gap-6 lg:grid-cols-[1.8fr,1.2fr]">
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold">Daily Required Study</h2>
          <span className="text-[10px] bg-slate-800 px-2 py-1 rounded-full">Auto-assigned - Foundations</span>
        </div>
        <div className="space-y-2">
          {dailyStudy.map((item) => (
            <label key={item} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-slate-300 cursor-pointer hover:border-slate-600">
              <input type="checkbox" className="h-3 w-3" />
              <span>{item}</span>
            </label>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-slate-400">
          These reps keep every Builder-from beginner to advanced-aligned on the same full-stack foundations under the domain-specific work.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-3">Fundamentals Skill Tree</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {fundamentals.map((group) => (
            <div key={group.category} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-2">{group.category}</h3>
              <ul className="space-y-1 text-[11px] text-slate-300">
                {group.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    <aside className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-2">AI Tutor</h2>
        <p className="text-[11px] text-slate-400">Ask anything - Git, HTML, CSS, JavaScript, React, or how to turn fundamentals into mission-control or e-commerce systems.</p>
        <div className="mt-3 flex gap-2">
          <input className="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-[11px] px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Ask your tutor..." />
          <button className="bg-slate-100 text-slate-900 text-[11px] font-semibold px-3 py-2 rounded-lg">Ask</button>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Explain Git in 2 minutes", "HTML vs JSX", "API vs REST", "Help me debug a React error"].map((chip) => (
            <button key={chip} className="rounded-full bg-slate-950 px-2 py-1 text-[10px] text-slate-300 hover:bg-slate-800">
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-2">Learning Journey Snapshot</h2>
        <p className="text-[11px] text-slate-400">Every study block, mission, and project feeds the same trajectory: from fundamentals to domain-specific mastery.</p>
        <div className="mt-3 h-2 rounded-full bg-slate-800 overflow-hidden">
          <div className="h-full w-[4%] bg-gradient-to-r from-indigo-500 to-emerald-400" />
        </div>
      </div>
    </aside>
  </section>
);

export default LearnTab;
