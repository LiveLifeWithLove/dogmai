const accelerators = [
  {
    label: "Reduce Friction",
    dotClass: "bg-intl-orange",
    title: "No More Getting Stuck",
    description:
      "The AI Co-Pilot clears blockers instantly &mdash; debugging, rewriting, testing, analyzing, or clarifying requirements &mdash; so Digital Professionals stay in creation mode.",
  },
  {
    label: "Shorten Feedback Loops",
    dotClass: "bg-cerulean",
    title: "Improve 5X Faster",
    description:
      "Feedback arrives on demand: structural critiques, strategy notes, and clarity fixes delivered the moment you ask. Shorter loops mean faster mastery for every Digital Professional.",
  },
  {
    label: "Boost Leverage",
    dotClass: "bg-allports",
    title: "Do More With the Same Hours",
    description:
      "Research, drafts, prototypes, and analysis accelerate so you can spend your hours on judgment, iteration, and impact that clients can search and trust.",
  },
];

export default function AccelerationSection() {
  return (
    <section
      id="acceleration"
      className="border-b border-white/5 bg-black/85 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            How the AI Co-Pilot Accelerates Digital Professionals
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Acceleration isn&apos;t about working faster&mdash;it&apos;s about
            removing drag, focusing attention, and shrinking the gap between
            idea and output so Digital Professionals lead every sprint. The AI
            Co-Pilot keeps you learning, building, and iterating at a pace that
            used to take months.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {accelerators.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-800 bg-gradient-to-b from-ebony/80 to-black/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)]"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${item.dotClass}`} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                  {item.label}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p
                className="mt-2 text-xs text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-sm text-slate-300 leading-relaxed">
            AI doesn&apos;t replace the work&mdash;it amplifies your ability to
            do the work that matters as a Digital Professional. Remove friction,
            collapse feedback loops, and let leverage compound.
          </p>
        </div>
      </div>
    </section>
  );
}
