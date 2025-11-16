type MasteryStep = {
  number: string;
  title: string;
  colorClass: string;
  borderClass: string;
  circleBgClass: string;
  description: string;
  tag: string;
};

const steps: MasteryStep[] = [
  {
    number: "1",
    title: "Discipline",
    colorClass: "text-intl-orange",
    borderClass: "border-intl-orange/50",
    circleBgClass: "bg-intl-orange/20",
    description:
      "Build structure, habits, and consistency with daily sprints and guided tasks built for Digital Professionals.",
    tag: "AI guidance systems",
  },
  {
    number: "2",
    title: "Outcomes",
    colorClass: "text-cerulean",
    borderClass: "border-cerulean/50",
    circleBgClass: "bg-cerulean/20",
    description:
      "Ship real projects and deliverables every week so hiring managers can see how you work.",
    tag: "AI project support",
  },
  {
    number: "3",
    title: "Growth",
    colorClass: "text-allports",
    borderClass: "border-allports/50",
    circleBgClass: "bg-allports/20",
    description:
      "Accelerate with continuous feedback, iteration, and mentor/AI guidance tailored to Digital Professional workflows.",
    tag: "AI analytics & mentoring",
  },
  {
    number: "4",
    title: "Mastery",
    colorClass: "text-intl-orange",
    borderClass: "border-intl-orange/50",
    circleBgClass: "bg-intl-orange/20",
    description:
      "Deepen understanding through advanced challenges, simulation, and leadership so you can architect digital work systems.",
    tag: "Simulation & challenge systems",
  },
  {
    number: "5",
    title: "Acceleration",
    colorClass: "text-cerulean",
    borderClass: "border-cerulean/50",
    circleBgClass: "bg-cerulean/20",
    description:
      "Multiply your impact with workflow automation and rapid prototyping that showcase AI-native Digital Professional leverage.",
    tag: "Workflow automation",
  },
  {
    number: "6",
    title: "Intelligence",
    colorClass: "text-allports",
    borderClass: "border-allports/50",
    circleBgClass: "bg-allports/20",
    description:
      "Fuse human creativity with AI to become an adaptive, innovative Digital Professional.",
    tag: "Human + AI co-creation",
  },
];

const horizontalArrow = (
  <svg
    className="hidden md:block"
    width="48"
    height="24"
    viewBox="0 0 48 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="12" x2="40" y2="12" stroke="#fa5404" strokeWidth="3" />
    <polygon points="40,6 48,12 40,18" fill="#fa5404" />
  </svg>
);

const verticalArrow = (
  <svg
    width="24"
    height="48"
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="12" y1="0" x2="12" y2="40" stroke="#fa5404" strokeWidth="3" />
    <polygon points="6,40 12,48 18,40" fill="#fa5404" />
  </svg>
);

function MasteryCard({ step }: { step: MasteryStep }) {
  return (
    <div
      className={`flex w-full max-w-xs flex-col items-center rounded-2xl border-2 bg-black/60 p-6 text-center shadow-lg transition-transform duration-200 hover:scale-105 ${step.borderClass} font-heading`}
    >
      <div
        className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${step.circleBgClass}`}
      >
        <span className={`text-xl font-bold ${step.colorClass}`}>
          {step.number}
        </span>
      </div>
      <h3 className={`mb-1 text-lg font-bold ${step.colorClass}`}>
        {step.title}
      </h3>
      <p className="mb-2 font-sans text-xs text-slate-300">
        {step.description}
      </p>
      <span className="font-sans text-[10px] text-slate-400">{step.tag}</span>
    </div>
  );
}

export default function MasterySummarySection() {
  const rows = [
    steps.slice(0, 2),
    steps.slice(2, 4),
    steps.slice(4, 6),
  ];

  return (
    <section id="summary" className="border-b border-white/5 bg-ebony py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col gap-4 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-left">
              The Path to Mastery
            </h2>
            <p className="mt-3 max-w-xl text-center text-base text-slate-300 md:text-left">
              A straight path from discipline to creative mastery for Digital
              Professionals, powered by AI and real work. Every stage is a
              milestone you can show and optimize for search.
            </p>
          </div>
        </div>

        <div className="relative mt-12 flex flex-col items-center gap-8">
          {rows.map((row, rowIndex) => (
            <div key={row[0].number} className="w-full">
              <div className="flex w-full flex-row items-center justify-center gap-8">
                <MasteryCard step={row[0]} />
                {horizontalArrow}
                <MasteryCard step={row[1]} />
              </div>
              {rowIndex < rows.length - 1 && (
                <div className="hidden -mb-4 -mt-4 w-full items-center justify-center md:flex">
                  {verticalArrow}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
