import React from "react";
import { DomainKey, DomainTrack } from "../domain-tracks";

type DomainTabProps = {
  domainTracks: Record<DomainKey, DomainTrack>;
  domain: DomainKey;
  setDomain: React.Dispatch<React.SetStateAction<DomainKey>>;
  activeDomain: DomainTrack;
};

const DomainTab: React.FC<DomainTabProps> = ({ domainTracks, domain, setDomain, activeDomain }) => (
  <section className="grid gap-6 lg:grid-cols-[1.4fr,1.6fr]">
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
      <h2 className="text-sm font-semibold mb-1">Domain Focus</h2>
      <p className="text-[11px] text-slate-400 mb-2">All Builders share the same full-stack spine. The domain decides what kind of systems you ship: mission-control, e-commerce, fintech, and more.</p>
      {(Object.keys(domainTracks) as DomainKey[]).map((key) => (
        <button
          key={key}
          onClick={() => setDomain(key)}
          className={`w-full text-left px-4 py-3 rounded-xl border text-xs mb-1 ${
            key === domain ? "border-emerald-400 bg-emerald-400/10 text-emerald-200" : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500"
          }`}
        >
          {domainTracks[key].label}
        </button>
      ))}
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-4">
      <div>
        <h2 className="text-sm font-semibold mb-1">{activeDomain.label} Track</h2>
        <p className="text-[11px] text-slate-300">{activeDomain.tagline}</p>
      </div>

      <div>
        <h3 className="text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-2">Sample Projects You'll Ship</h3>
        <div className="flex flex-wrap gap-2">
          {activeDomain.projects.map((p) => (
            <span key={p} className="px-2 py-1 text-[10px] bg-slate-950 rounded-full text-slate-200 border border-slate-700">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-[11px] text-slate-300">
        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-1">HOW IT CONNECTS</div>
        <p>Fundamentals (Git, HTML/CSS/JS, APIs) stay the same. Domain missions plug on top: a mission-control dashboard, an e-commerce checkout, or a fintech ledger all reuse the same builder spine.</p>
      </div>
    </div>
  </section>
);

export default DomainTab;
