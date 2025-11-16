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
  price: string;
  duration: string;
  description: string;
  buttonText: string;
  buttonClass: string;
  priceClass: string;
  curriculum: CurriculumItem[];
  curriculumLabel: string;
  stackLabel: string;
  stackItems: string[];
  capstone: string;
};

const programs: BootcampProgram[] = [
  {
    id: "Web Development | 8-12 weeks",
    dotClass: "bg-intl-orange",
    intro: "Web Development | 8-12 weeks",
    badge: "Builder Track",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    title: "Full-stack Product Bootcamp",
    price: "PHP 39,999",
    duration: "8-12 weeks",
    description:
      "Build production-grade apps by pairing modern frontends, pragmatic backends, and AI-native workflows so Digital Professionals can go from idea &rarr; prototype &rarr; deployed product with copilots wired into every layer.",
    buttonText: "See What You'll Build",
    buttonClass:
      "bg-gradient-to-r from-intl-orange to-cerulean text-ebony",
    priceClass: "bg-intl-orange/20 text-intl-orange",
    curriculumLabel: "Curriculum snapshot",
    curriculum: [
      {
        title: "Week 1-2 - Modern frontend (React, Next.js, Tailwind)",
        detail:
          "Build responsive, production-grade interfaces using modern component frameworks with AI-assisted scaffolding and refactors.",
      },
      {
        title: "Week 3-4 - APIs, auth & databases",
        detail:
          "Design and secure APIs, model relational data, and connect your app to persistent storage with real-world patterns.",
      },
      {
        title: "Week 5-6 - AI integration & automation flows",
        detail:
          "Embed AI copilots, prompt flows, and background automation into your product to handle real user tasks.",
      },
      {
        title: "Week 7-8 - Performance, deployment & polish",
        detail:
          "Optimize speed and reliability, ship to production, set up monitoring, and refine UX details for a launch-ready app.",
      },
    ],
    stackLabel: "Tech stack & AI",
    stackItems: [
      "React, Next.js, Tailwind",
      "API design, databases & auth",
      "AI copilots, codegen & workflow automation",
    ],
    capstone:
      "Capstone: Ship a live product with telemetry, docs, and AI-enabled workflows ready for real users.",
  },
  {
    id: "UI/UX Design | 6-10 weeks",
    dotClass: "bg-cerulean",
    intro: "UI/UX Design | 6-10 weeks",
    badge: "Designer Track",
    badgeClass: "bg-cerulean/10 text-cerulean",
    title: "Intelligent Interface Bootcamp",
    price: "PHP 19,999",
    duration: "6-10 weeks",
    description:
      "Craft intelligent interfaces from blank canvas to system-level thinking. Digital Professionals blend research, visual direction, and AI-assisted ideation to iterate faster.",
    buttonText: "View Sample Projects",
    buttonClass:
      "bg-gradient-to-r from-cerulean to-allports text-ebony",
    priceClass: "bg-cerulean/20 text-cerulean",
    curriculumLabel: "Curriculum snapshot",
    curriculum: [
      {
        title: "Week 1-2 - UX research, user flows & journeys",
        detail:
          "Interview users, map journeys, and define flows that solve real problems, supported by AI-assisted research and insight clustering.",
      },
      {
        title: "Week 3-4 - Design systems & Figma mastery",
        detail:
          "Build scalable design systems, components, and tokens in Figma to keep interfaces consistent and easy to iterate.",
      },
      {
        title: "Week 5-6 - Prototyping, testing & iteration",
        detail:
          "Create interactive prototypes, test with users, and refine flows quickly using feedback and AI-generated variations.",
      },
      {
        title: "Optional - AI-assisted creative exploration labs",
        detail:
          "Use AI tools to explore visual directions, generate concepts, and experiment with smart interface patterns.",
      },
    ],
    stackLabel: "Design & AI tooling",
    stackItems: [
      "Figma mastery & design systems",
      "User flows, journeys & interaction patterns",
      "AI-augmented research, ideation & visuals",
    ],
    capstone:
      "Capstone: Publish a complete case study with interaction prototypes and clear decision rationale.",
  },
  {
    id: "Data Science | 8-12 weeks",
    dotClass: "bg-allports",
    intro: "Data Science | 8-12 weeks",
    badge: "Analyst Track",
    badgeClass: "bg-allports/10 text-allports",
    title: "Applied Data & AI Bootcamp",
    price: "PHP 29,999",
    duration: "8-12 weeks",
    description:
      "Turn raw data into intelligence. Master Python, analytics, and applied AI while solving real company-style problems and telling search-friendly stories for stakeholders.",
    buttonText: "Check Data Science Outputs",
    buttonClass:
      "bg-gradient-to-r from-allports to-cerulean text-ebony",
    priceClass: "bg-allports/20 text-allports",
    curriculumLabel: "Curriculum snapshot",
    curriculum: [
      {
        title: "Week 1-2 - Python, data wrangling & exploration",
        detail:
          "Set up your environment, clean messy datasets, and explore patterns using Python, Pandas, and visual summaries.",
      },
      {
        title: "Week 3-4 - Analytics, dashboards & reporting",
        detail:
          "Build dashboards and reports that answer business questions, with AI helping you frame metrics and surface insights.",
      },
      {
        title: "Week 5-6 - Intro ML & experiment design",
        detail:
          "Train baseline machine learning models, design simple experiments, and evaluate results with clear reasoning.",
      },
      {
        title: "Week 7-8 - AI-assisted analysis & narratives",
        detail:
          "Use AI to synthesize findings, generate executive-ready narratives, and communicate recommendations with confidence.",
      },
    ],
    stackLabel: "Tools & workflows",
    stackItems: [
      "Python, Pandas & core ML",
      "Data storytelling & dashboards",
      "AI-driven analysis & insight generation",
    ],
    capstone:
      "Capstone: Deliver an end-to-end data project with an executive-ready narrative and AI-generated insight pack.",
  },
  {
    id: "Digital Professional | 6-10 weeks",
    dotClass: "bg-intl-orange",
    intro: "Digital Professional | 6-10 weeks",
    badge: "Execution Track",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    title: "Digital Professional Execution Bootcamp",
    price: "PHP 14,999",
    duration: "6-10 weeks",
    description:
      "Run modern Digital Professional workflows with AI as your teammate. Automate busywork, analyze, create, and ship client-ready outputs with confidence.",
    buttonText: "View Digital Professional Projects",
    buttonClass:
      "bg-gradient-to-r from-intl-orange to-cerulean text-ebony",
    priceClass: "bg-intl-orange/20 text-intl-orange",
    curriculumLabel: "Curriculum snapshot",
    curriculum: [
      {
        title: "Week 1-2 - Digital systems & AI workflows",
        detail:
          "Set up robust productivity systems, manage tasks, and use AI to research, prioritize, and execute high-impact work.",
      },
      {
        title: "Week 3-4 - Automation & data handling",
        detail:
          "Clean and organize data, build simple dashboards, and design automations that reduce manual, repetitive tasks.",
      },
      {
        title: "Week 5-6 - Communication, content & client delivery",
        detail:
          "Create clear content, presentations, and reports, and deliver polished outputs that clients and stakeholders can act on.",
      },
      {
        title: "Optional - Intelligent workflow labs",
        detail:
          "Experiment with advanced automations, multi-step workflows, and performance systems for high-leverage digital work.",
      },
    ],
    stackLabel: "Tools & workflows",
    stackItems: [
      "AI copilots for productivity",
      "Spreadsheets, dashboards & reporting",
      "Automation apps (Zapier, Make, Notion AI, etc.)",
      "Content creation & execution systems",
    ],
    capstone:
      "Capstone: Package a complete operating system of workflows, automations, reports, and an AI-enabled productivity stack.",
  },
];

export default function BootcampProgramsSection() {
  return (
    <section
      id="bootcamp"
      className="border-b border-white/5 bg-ebony/90 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 pb-8 md:flex-row md:items-end">
          <div>
            <h2 className="whitespace-nowrap font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Bootcamps
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Every bootcamp runs on the DOGM.AI Journey &mdash; concise,
              outcome-driven programs with weekly milestones, shipped work, and
              SEO-friendly case studies for Digital Professionals.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
            {[
              "6-12 Weeks",
              "Project-Driven",
              "AI-Integrated",
              "Digital Professional Focused",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 px-3 py-1"
              >
                {tag}
              </span>
            ))}
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
              <div className="mt-1 mb-2 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-bold shadow-sm ${program.priceClass}`}
                >
                  {program.price}
                </span>
                <span className="text-xs text-slate-400">
                  {program.duration}
                </span>
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
    </section>
  );
}
