import AnimatedSection from "./AnimatedSection";

export default function ApplySection() {
  return (
    <AnimatedSection id="apply" className="bg-ebony py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">
          You Don&apos;t Need AI Experience. You Need Discipline.
        </p>
        <h2 className="mt-2 font-heading text-2xl font-extrabold text-white sm:text-3xl">
          Become the Digital Professional Who Can Learn, Build &amp; Adapt on Demand.
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          If you&apos;re ready to work, we&apos;re ready to train you. Short
          application. Clear expectations. We admit learners who value
          discipline over shortcuts.
        </p>
        <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-intl-orange px-8 py-3 text-sm font-semibold text-ebony shadow-[0_0_40px_rgba(250,84,4,0.6)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500">
          Start Application
          <span className="text-lg">&rarr;</span>
        </button>
      </div>
    </AnimatedSection>
  );
}
