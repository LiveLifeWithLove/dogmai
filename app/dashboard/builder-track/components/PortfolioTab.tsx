import React from "react";

const PortfolioTab: React.FC = () => (
  <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">PROOF-HEAVY PORTFOLIO</div>
        <div className="mt-1 text-sm font-semibold text-slate-50">Your artifacts across fundamentals, domains, and missions</div>
      </div>
      <button className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-900">Open Public Portfolio</button>
    </div>

    <div className="grid gap-3 md:grid-cols-3 text-[11px] text-slate-300">
      <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Mission-Control</div>
        <div className="mt-1 text-xs font-semibold text-slate-50">LGU Incident Dashboard - v0</div>
        <p className="mt-1 text-slate-400">First mission-control feature seeded from Week 1 outcome.</p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Fundamentals</div>
        <div className="mt-1 text-xs font-semibold text-slate-50">Git + HTML/CSS/JS Mini Projects</div>
        <p className="mt-1 text-slate-400">Small, focused proofs showing competency in basics.</p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Mastery</div>
        <div className="mt-1 text-xs font-semibold text-slate-50">Builder Playbook - Draft</div>
        <p className="mt-1 text-slate-400">Your personal system for shipping AI-native features weekly.</p>
      </div>
    </div>
  </section>
);

export default PortfolioTab;
