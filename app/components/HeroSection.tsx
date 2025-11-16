export default function HeroSection() {
  return (
    <section className="border-b border-white/5 bg-gradient-to-b from-ebony via-ebony to-ebony/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-16 md:flex-row md:items-center md:pb-24 md:pt-20">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-intl-orange/30 bg-intl-orange/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-intl-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-intl-orange" />
            DOGM.AI Core System | v2026
          </div>

          <h1
            className="font-heading text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl"
            style={{ whiteSpace: "nowrap" }}
          >
            Accelerate Mastery.{" "}
            <span
              className="bg-gradient-to-r from-intl-orange via-cerulean to-allports bg-clip-text text-transparent"
              style={{ whiteSpace: "nowrap" }}
            >
              Learn with AI.
            </span>
          </h1>

          <p className="max-w-xl text-pretty text-sm text-slate-300 sm:text-base">
            DOGM.AI is the discipline engine for ambitious builders &mdash; a
            repeatable loop that turns structured days into proof of work,
            compounding growth, and AI-guided insight.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#loop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold text-ebony shadow-[0_0_40px_rgba(250,84,4,0.6)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500"
            >
              Explore the DOGM.AI Loop
              <span className="text-lg">&rarr;</span>
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 px-5 py-2.5 text-xs font-medium text-slate-200 backdrop-blur-sm transition-all duration-200 hover:border-slate-500 hover:text-white hover:scale-105"
            >
              Watch 90-second overview
              <span className="text-lg">&#9654;</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cerulean" />
              Daily accountability for builders, designers, and operators
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-allports" />
              AI is your coach, not your shortcut.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
