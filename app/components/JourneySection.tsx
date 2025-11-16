import AnimatedSection from "./AnimatedSection";

const tags = [
  "Project-based",
  "AI-assisted",
  "Mentor-guided",
  "Digital Professional Ready",
];

type JourneyCard = {
  id: string;
  dotClass: string;
  bulletDotClass: string;
  badgeClass: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

const journeyCards: JourneyCard[] = [
  {
    id: "01 | Discipline",
    dotClass: "bg-intl-orange",
    bulletDotClass: "bg-intl-orange",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    badge: "Structure",
    title: "The Foundation",
    subtitle: "Craft the habit, then trust the habit.",
    description:
      "Structure beats hype. Daily sprints, AI prompts, and reflection rituals build the muscle Digital Professionals rely on to deliver even when motivation dips.",
    bullets: [
      "Daily learning sprints",
      "Guided task systems & accountability",
      "AI for planning & performance tracking",
    ],
  },
  {
    id: "02 | Outcomes",
    dotClass: "bg-cerulean",
    bulletDotClass: "bg-cerulean",
    badgeClass: "bg-cerulean/10 text-cerulean",
    badge: "Tangibility",
    title: "The Measure",
    subtitle: "Proof beats promises.",
    description:
      "Every loop ends with something you can ship. Outcomes turn effort into proof so Digital Professionals can show measurable value.",
    bullets: [
      "Project-based modules",
      "Real, deployable results each week",
      "Portfolio built by incremental achievement",
    ],
  },
  {
    id: "03 | Growth",
    dotClass: "bg-allports",
    bulletDotClass: "bg-allports",
    badgeClass: "bg-allports/10 text-allports",
    badge: "Momentum",
    title: "The Momentum",
    subtitle: "Growth is deliberate iteration.",
    description:
      "Feedback turns results into insight. Reflection, critique, and AI reviews tighten the distance between attempt and improvement for every Digital Professional.",
    bullets: [
      "Continuous mentor + AI feedback",
      "Iterative improvement challenges",
      "Growth dashboards & trajectories",
    ],
  },
  {
    id: "04 | Mastery",
    dotClass: "bg-intl-orange",
    bulletDotClass: "bg-intl-orange",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    badge: "Transformation",
    title: "The Transformation",
    subtitle: "Mastery is earned by designing the playbook.",
    description:
      "Repetition becomes intuition. Mastery means you design the system, lead the decisions, and invent new patterns that define Digital Professional standards.",
    bullets: [
      "Advanced project integrations",
      "AI-simulated interviews & technical drills",
      "Mentorship for portfolio & personal brand",
    ],
  },
  {
    id: "05 | Acceleration",
    dotClass: "bg-cerulean",
    bulletDotClass: "bg-cerulean",
    badgeClass: "bg-cerulean/10 text-cerulean",
    badge: "Multiplier",
    title: "The Multiplier",
    subtitle: "Acceleration is mastery put to work.",
    description:
      "With fundamentals locked, AI multiplies your reach. Routine work shrinks so experimentation, leverage, and delivery expand for client-facing Digital Professionals.",
    bullets: [
      "Rapid prototyping & testing with AI",
      "Workflow automation & optimization",
      "Real-world speed-to-deployment drills",
    ],
  },
  {
    id: "06 | Intelligence",
    dotClass: "bg-allports",
    bulletDotClass: "bg-allports",
    badgeClass: "bg-allports/10 text-allports",
    badge: "Evolution",
    title: "The Evolution",
    subtitle: "Intelligence is disciplined creativity.",
    description:
      "Human judgment plus machine reasoning becomes your edge. You co-create with AI, model complex ideas, and ship intelligent systems on demand.",
    bullets: [
      "AI co-creation labs",
      "Cognitive learning analytics & personalization",
      "Research & innovation challenges",
    ],
  },
];

function JourneyCardView({ card }: { card: JourneyCard }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/80 p-5 shadow-[0_18px_35px_rgba(0,0,0,0.65)]">
      <div className="absolute inset-px rounded-[22px] border border-white/5 opacity-40 transition duration-300 group-hover:opacity-70" />
      <div className="relative z-10 flex flex-1 flex-col gap-4">
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
        <ul className="mt-2 space-y-2 text-xs text-slate-400">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 text-[11px]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40">
                <span className={`h-2.5 w-2.5 rounded-full ${card.bulletDotClass}`} />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-auto text-[11px] font-medium text-slate-400">
          {card.subtitle}
        </p>
      </div>
    </article>
  );
}

export default function JourneySection() {
  return (
    <AnimatedSection
      id="journey"
      className="relative overflow-hidden border-b border-white/5 bg-ebony/80 py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-intl-orange/30 to-transparent" />
        <div className="absolute inset-x-0 top-2/3 h-px bg-gradient-to-r from-transparent via-cerulean/25 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">
              Why It Works
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              The DOGM.AI Loop
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              A repeatable system that compounds skill every week: Discipline
              &rarr; Outcomes &rarr; Growth &rarr; Mastery &rarr; Acceleration
              &rarr; Intelligence. Each stage builds on the last so practice
              becomes proof and proof becomes leverage.
            </p>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              This loop becomes the backbone of your career &mdash; a system you
              can reuse for any skill, field, or project.
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

        <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
          {journeyCards.slice(0, 3).map((card) => (
            <JourneyCardView key={card.id} card={card} />
          ))}
        </div>
        <div className="mt-6 grid auto-rows-fr gap-5 md:grid-cols-3">
          {journeyCards.slice(3).map((card) => (
            <JourneyCardView key={card.id} card={card} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
