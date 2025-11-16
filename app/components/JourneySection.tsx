const tags = ["Project-based", "AI-assisted", "Mentor-guided"];

type JourneyCard = {
  id: string;
  dotClass: string;
  badgeClass: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

const journeyCards: JourneyCard[] = [
  {
    id: "01 · Discipline",
    dotClass: "bg-intl-orange",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    badge: "Structure",
    title: "The Foundation",
    subtitle: "Craft the habit, then trust the habit.",
    description:
      "Structure beats hype. Daily sprints, AI prompts, and reflection rituals build the muscle to deliver even when motivation dips.",
    bullets: [
      "&bull; Daily learning sprints",
      "&bull; Guided task systems & accountability",
      "&bull; AI for planning & performance tracking",
    ],
  },
  {
    id: "02 · Outcomes",
    dotClass: "bg-cerulean",
    badgeClass: "bg-cerulean/10 text-cerulean",
    badge: "Tangibility",
    title: "The Measure",
    subtitle: "Proof beats promises.",
    description:
      "Every loop ends with something you can ship. Outcomes turn effort into proof and make progress simple to show.",
    bullets: [
      "&bull; Project-based modules",
      "&bull; Real, deployable results each week",
      "&bull; Portfolio built by incremental achievement",
    ],
  },
  {
    id: "03 · Growth",
    dotClass: "bg-allports",
    badgeClass: "bg-allports/10 text-allports",
    badge: "Momentum",
    title: "The Momentum",
    subtitle: "Growth is deliberate iteration.",
    description:
      "Feedback turns results into insight. Reflection, critique, and AI reviews tighten the distance between attempt and improvement.",
    bullets: [
      "&bull; Continuous mentor + AI feedback",
      "&bull; Iterative improvement challenges",
      "&bull; Growth dashboards & trajectories",
    ],
  },
  {
    id: "04 · Mastery",
    dotClass: "bg-intl-orange",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    badge: "Transformation",
    title: "The Transformation",
    subtitle: "Mastery is earned by designing the playbook.",
    description:
      "Repetition becomes intuition. Mastery means you design the system, lead the decisions, and invent new patterns.",
    bullets: [
      "&bull; Advanced project integrations",
      "&bull; AI-simulated interviews & technical drills",
      "&bull; Mentorship for portfolio & personal brand",
    ],
  },
  {
    id: "05 · Acceleration",
    dotClass: "bg-cerulean",
    badgeClass: "bg-cerulean/10 text-cerulean",
    badge: "Multiplier",
    title: "The Multiplier",
    subtitle: "Acceleration is mastery put to work.",
    description:
      "With fundamentals locked, AI multiplies your reach. Routine work shrinks so experimentation, leverage, and delivery expand.",
    bullets: [
      "&bull; Rapid prototyping & testing with AI",
      "&bull; Workflow automation & optimization",
      "&bull; Real-world speed-to-deployment drills",
    ],
  },
  {
    id: "06 · Intelligence",
    dotClass: "bg-allports",
    badgeClass: "bg-allports/10 text-allports",
    badge: "Evolution",
    title: "The Evolution",
    subtitle: "Intelligence is disciplined creativity.",
    description:
      "Human judgment plus machine reasoning becomes your edge. You learn to co-create with AI, model complex ideas, and ship intelligent systems on demand.",
    bullets: [
      "&bull; AI co-creation labs",
      "&bull; Cognitive learning analytics & personalization",
      "&bull; Research & innovation challenges",
    ],
  },
];

function JourneyCardView({ card }: { card: JourneyCard }) {
  return (
    <article className="group flex flex-col gap-4 rounded-3xl border border-slate-800 bg-gradient-to-b from-black/40 to-black/80 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${card.dotClass}`} />
          {card.id}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] ${card.badgeClass}`}
        >
          {card.badge}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-white">{card.title}</h3>
      <p className="text-xs text-slate-300">{card.description}</p>
      <ul className="mt-2 space-y-1 text-xs text-slate-400">
        {card.bullets.map((bullet) => (
          <li
            key={bullet}
            dangerouslySetInnerHTML={{ __html: bullet }}
          />
        ))}
      </ul>
      <p className="mt-3 text-[11px] font-medium text-slate-400">
        {card.subtitle}
      </p>
    </article>
  );
}

export default function JourneySection() {
  return (
    <section id="journey" className="border-b border-white/5 bg-ebony/80 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              The DOGM.AI Journey
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Discipline &rarr; Outcomes &rarr; Growth &rarr; Mastery &rarr;
              Acceleration &rarr; Intelligence.
              <br />
              One operating system that turns structured effort into confident,
              AI-native execution.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {journeyCards.slice(0, 3).map((card) => (
            <JourneyCardView key={card.id} card={card} />
          ))}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {journeyCards.slice(3).map((card) => (
            <JourneyCardView key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
