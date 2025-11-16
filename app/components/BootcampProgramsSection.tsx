import AnimatedSection from "./AnimatedSection";

type CurriculumItem = {
  title: string;
  detail: string;
};

type BootcampProgram = {
  id: string;
  dotClass: string;
  intro: string;
  badge: string;
  badgeClass: string;
  title: string;
  duration: string;
  description: string;
  buttonText: string;
  buttonClass: string;
  tags: string[];
  curriculumLabel: string;
  curriculum: CurriculumItem[];
  stackLabel: string;
  stackItems: string[];
  capstone: string;
};

const programs: BootcampProgram[] = [
  {
    id: "Builder Track",
    dotClass: "bg-intl-orange",
    intro: "Builder Track - Web Development Bootcamp",
    badge: "Full-Stack Product Builder",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    title: "Full-Stack Product Builder (8-12 weeks)",
    duration: "8-12 weeks",
    description:
      "Build production-grade apps from idea &rarr; prototype &rarr; deployed product using modern frontends, pragmatic backends, and AI-native workflows.",
    buttonText: "See Curriculum",
    buttonClass:
      "bg-gradient-to-r from-intl-orange to-cerulean text-ebony",
    tags: [
      "Ship full-stack products",
      "AI pair programming",
      "Deploy & monitor",
      "Mentor feedback loops",
      "Portfolio proof",
    ],
    curriculumLabel: "Curriculum Overview",
    curriculum: [
      {
        title: "Weeks 1-2 - Modern Frontend",
        detail:
          "Build responsive, production-ready interfaces (React, Next.js, Tailwind) with AI-assisted scaffolding and refactors.",
      },
      {
        title: "Weeks 3-4 - APIs, Auth & Databases",
        detail:
          "Design secure, scalable APIs and model real-world relational data.",
      },
      {
        title: "Weeks 5-6 - AI Integration & Automation",
        detail:
          "Embed copilots, prompt flows, and background automations that handle real user tasks.",
      },
      {
        title: "Weeks 7-8 - Performance & Launch",
        detail:
          "Optimize, deploy, monitor, refine UX, and ship your final build.",
      },
    ],
    stackLabel: "Stack & Tools",
    stackItems: [
      "React / Next.js / Tailwind",
      "API Design / Databases / Auth",
      "AI Copilots / Codegen / Workflow Automation",
    ],
    capstone:
      "Capstone: Ship a live, real-world product with telemetry, documentation, and AI-enabled workflows.",
  },
  {
    id: "Designer Track",
    dotClass: "bg-cerulean",
    intro: "Designer Track - UI/UX Bootcamp",
    badge: "Intelligent Interface Designer",
    badgeClass: "bg-cerulean/10 text-cerulean",
    title: "Intelligent Interface Designer (6-10 weeks)",
    duration: "6-10 weeks",
    description:
      "Design interfaces that think. Blend UX fundamentals with AI-assisted creativity to produce systems, prototypes, and polished case studies.",
    buttonText: "View Curriculum",
    buttonClass:
      "bg-gradient-to-r from-cerulean to-allports text-ebony",
    tags: [
      "Design systems mastery",
      "AI concept sprints",
      "User research ready",
      "Prototype storytelling",
      "Case study polish",
    ],
    curriculumLabel: "Curriculum Overview",
    curriculum: [
      {
        title: "Weeks 1-2 - Research, Flows & Journeys",
        detail:
          "Interview users, map flows, and uncover insights with AI-supported clustering.",
      },
      {
        title: "Weeks 3-4 - Design Systems & Figma",
        detail:
          "Build scalable systems with components, tokens, and consistent patterns.",
      },
      {
        title: "Weeks 5-6 - Prototyping, Testing & Iteration",
        detail: "Create interactive prototypes, test fast, iterate faster.",
      },
      {
        title: "Optional - AI Creative Labs",
        detail:
          "Explore visual directions with AI-generated concept variations.",
      },
    ],
    stackLabel: "Tools",
    stackItems: [
      "Figma / Design Systems",
      "User Flows / Research",
      "AI-Assisted Research & Ideation",
    ],
    capstone:
      "Capstone: A polished case study with prototypes, flows, and documented decisions.",
  },
  {
    id: "Analyst Track",
    dotClass: "bg-allports",
    intro: "Analyst Track - Applied Data & AI Bootcamp",
    badge: "Data Science for Digital Professionals",
    badgeClass: "bg-allports/10 text-allports",
    title: "Data Science for Digital Professionals (8-12 weeks)",
    duration: "8-12 weeks",
    description:
      "Turn raw data into intelligence with Python, analytics, and applied AI. Solve real business problems and synthesize insights stakeholders trust.",
    buttonText: "Check Curriculum",
    buttonClass:
      "bg-gradient-to-r from-allports to-cerulean text-ebony",
    tags: [
      "Python-first workflows",
      "AI-assisted analysis",
      "Dashboard storytelling",
      "Executive insight decks",
      "Experiment mindset",
    ],
    curriculumLabel: "Curriculum Overview",
    curriculum: [
      {
        title: "Weeks 1-2 - Python, Wrangling & Exploration",
        detail: "Clean datasets, explore patterns, and generate visual summaries.",
      },
      {
        title: "Weeks 3-4 - Analytics, Dashboards & Reporting",
        detail: "Build dashboards that answer real business questions.",
      },
      {
        title: "Weeks 5-6 - Intro to ML & Experimentation",
        detail: "Train baseline models, design experiments, and evaluate results.",
      },
      {
        title: "Weeks 7-8 - AI Insights & Narratives",
        detail: "Generate executive-ready insights and narrative reports.",
      },
    ],
    stackLabel: "Tools",
    stackItems: [
      "Python / Pandas / Visualization",
      "Dashboards / Data Storytelling",
      "AI-Driven Analysis & Insight Generation",
    ],
    capstone:
      "Capstone: An end-to-end data project with a compelling, AI-generated executive narrative.",
  },
  {
    id: "Execution Track",
    dotClass: "bg-intl-orange",
    intro: "Execution Track - Digital Professional Bootcamp",
    badge: "Digital Professional Execution Program",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    title: "Digital Professional Execution Program (6-10 weeks)",
    duration: "6-10 weeks",
    description:
      "Master modern Digital Professional workflows: automation, analysis, content, delivery, and high-quality execution using AI as your teammate.",
    buttonText: "Review Curriculum",
    buttonClass:
      "bg-gradient-to-r from-intl-orange to-cerulean text-ebony",
    tags: [
      "Automation architect",
      "AI productivity ops",
      "Client-ready deliverables",
      "Cross-tool mastery",
      "Systems thinking",
    ],
    curriculumLabel: "Curriculum Overview",
    curriculum: [
      {
        title: "Weeks 1-2 - Systems & AI Workflows",
        detail:
          "Set up productivity systems, task pipelines, and AI-supported research.",
      },
      {
        title: "Weeks 3-4 - Automation & Data Handling",
        detail: "Build automations, clean data, and create simple dashboards.",
      },
      {
        title: "Weeks 5-6 - Communication, Content & Delivery",
        detail:
          "Write, design, and deliver polished outputs clients can act on.",
      },
      {
        title: "Optional - Intelligent Workflow Labs",
        detail: "Experiment with advanced multi-step automations.",
      },
    ],
    stackLabel: "Tools",
    stackItems: [
      "AI Productivity Copilots",
      "Spreadsheets / Dashboards",
      "Automation Apps (Zapier, Make, Notion AI)",
      "Content & Delivery Systems",
    ],
    capstone:
      "Capstone: A complete operating system of workflows, automations, and client-ready assets.",
  },
];

export default function BootcampProgramsSection() {
  return (
    <AnimatedSection
      id="bootcamp"
      className="border-b border-white/5 bg-ebony/90 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end">
          <div className="w-2/3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">
              Bootcamps Powered by the DOGM.AI System
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Choose your track. Build real projects. Become AI-native.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Each bootcamp is a focused loop of Discipline &rarr; Outcomes &rarr;
              Growth &rarr; Mastery with AI copilots built into every workflow so
              you keep shipping better work every week.
            </p>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Pick the track that matches your craft and build production-ready
              proof that recruiters, clients, and hiring managers can actually
              click through.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
            {["6-12 Weeks", "Project-Driven", "AI-Integrated", "Digital Professional Focused"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 px-3 py-1"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.id}
              className="flex flex-col rounded-3xl border border-slate-800 bg-gradient-to-b from-black/40 to-black/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)]"
            >
              <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${program.dotClass}`}
                  />
                  {program.intro}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${program.badgeClass}`}
                >
                  {program.badge}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white">
                {program.title}
              </h3>
              <div className="mt-2 mb-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
                <span className="rounded-full border border-white/10 px-2 py-0.5">
                  {program.duration}
                </span>
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-800 px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                className="mt-2 text-xs text-slate-300"
                dangerouslySetInnerHTML={{ __html: program.description }}
              />
              <button
                className={`mt-4 rounded-full px-5 py-2 text-xs font-bold shadow-lg transition-all duration-200 hover:scale-105 ${program.buttonClass}`}
              >
                {program.buttonText}
              </button>

              <div className="mt-4 border-t border-slate-800/80 pt-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {program.curriculumLabel}
                </p>
                <ul className="mt-2 space-y-1.5 text-[11px] text-slate-400">
                  {program.curriculum.map((item) => (
                    <li key={item.title}>
                      {item.title}
                      <br />
                      <span className="text-slate-500">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 border-t border-slate-800/80 pt-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {program.stackLabel}
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-400">
                  {program.stackItems.map((stack) => (
                    <li key={stack}>{stack}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-[11px] text-slate-400">
                {program.capstone}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
