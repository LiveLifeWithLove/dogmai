type Tier = {
  label: string;
  labelClass: string;
  title: string;
  body: string;
  bullets: string[];
};

const tiers: Tier[] = [
  {
    label: "Daily Structure",
    labelClass: "text-intl-orange",
    title: "Daily Learning Sprints",
    body:
      "Daily sprints mix focused reps, AI prompts, and shippable micro-deliverables so Digital Professionals build unstoppable momentum.",
    bullets: [
      "&bull; 30&ndash;45 min sprint work",
      "&bull; AI-guided planning & task breakdowns",
      "&bull; Daily micro-deliverables",
      "&bull; Optional mentor check-ins",
      "&bull; Reflection prompts for improvement",
    ],
  },
  {
    label: "Weekly Structure",
    labelClass: "text-cerulean",
    title: "Weekly Outcome Cycles",
    body:
      "Each week culminates in a portfolio artifact critiqued by AI and mentors so every Digital Professional revision has a purpose.",
    bullets: [
      "&bull; Weekly milestone project",
      "&bull; AI-supported research & prototyping",
      "&bull; Mentor feedback + revision cycle",
      "&bull; Upload to your project portfolio",
      "&bull; Progress dashboard & growth indicators",
    ],
  },
  {
    label: "Monthly Structure",
    labelClass: "text-allports",
    title: "Monthly Mastery Milestones",
    body:
      "Monthly checkpoints benchmark your move from explorer &rarr; practitioner &rarr; AI-native digital leader.",
    bullets: [
      "&bull; Full project evaluation",
      "&bull; AI-assisted mastery assessment",
      "&bull; Skill gaps & personalized next steps",
      "&bull; Optional advanced challenges",
      "&bull; Monthly mastery badge & portfolio update",
    ],
  },
];

export default function BootcampStructure() {
  return (
    <section className="border-b border-white/5 bg-black/60 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            How the Bootcamp Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            DOGM.AI bootcamps marry disciplined structure, measurable work, and
            AI-guided iteration so Digital Professionals can ship on demand.
            Here&apos;s how the daily, weekly, and monthly cycles stack to build
            an AI-native Digital Professional.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="rounded-3xl border border-slate-800 bg-gradient-to-b from-black/40 to-black/80 p-8 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            >
              <span
                className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider ${tier.labelClass}`}
              >
                {tier.label}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">{tier.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                {tier.body}
              </p>
              <ul className="mt-5 space-y-2 text-[12px] text-slate-400">
                {tier.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-[12px] text-slate-400"
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-slate-300">
            This layered structure keeps the DOGM.AI chain unbroken for Digital
            Professionals:{" "}
            <span className="font-semibold text-white">
              Discipline &rarr; Outcomes &rarr; Growth &rarr; Mastery &rarr;
              Acceleration &rarr; Intelligence.
            </span>{" "}
            Each cycle compounds skill and produces measurable, portfolio-ready
            proof that recruiters and clients can search, verify, and trust.
          </p>
        </div>
      </div>
    </section>
  );
}
