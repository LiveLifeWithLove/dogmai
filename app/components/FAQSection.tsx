import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Who is DOGM.AI for?",
    answer:
      "Ambitious builders, designers, analysts, and Digital Professionals who want AI-native workflows and proof of mastery.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No. Foundations + AI + mentors meet you where you are.",
  },
  {
    question: "How do the bootcamps work?",
    answer:
      "Intensive, project-first sprints with weekly outcomes and constant feedback.",
  },
  {
    question: "What's the time commitment?",
    answer: "6&ndash;12 weeks, 6&ndash;10 focused hours per week.",
  },
  {
    question: "Is there a certificate?",
    answer:
      "Yes &mdash; plus the more important part: your portfolio artifacts.",
  },
];

export default function FAQSection() {
  return (
    <AnimatedSection id="faq" className="border-t border-white/10 bg-ebony/95 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/85 p-8 shadow-[0_20px_45px_rgba(0,0,0,0.65)]">
            <div className="pointer-events-none absolute inset-px rounded-[2.25rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
            <div className="relative z-10 space-y-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-intl-orange">
                  FAQ · TRUST SIGNALS
                </p>
                <h2 className="mt-2 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                  Everything Candidates Ask Before They Apply
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  The DOGM.AI team responds to applicants within 24 hours. The FAQ
                  covers the questions that keep Digital Professionals on the
                  fence—time commitment, requirements, and what you actually ship.
                </p>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[11px] font-semibold text-intl-orange">
                    01
                  </span>
                  Daily support from AI copilots + mentors.
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[11px] font-semibold text-cerulean">
                    02
                  </span>
                  Weekly outcomes that show up in your portfolio.
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[11px] font-semibold text-allports">
                    03
                  </span>
                  Mastery narrative that recruiters can verify.
                </li>
              </ul>
              <div className="rounded-2xl border border-white/5 bg-black/50 p-4 text-sm text-slate-300">
                Not seeing the question you have?{" "}
                <a href="#contact" className="font-semibold text-intl-orange hover:text-orange-300">
                  Talk to the team
                </a>{" "}
                and we&apos;ll send you an honest answer within a day.
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-950/80 to-black/90 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.65)]">
            <div className="pointer-events-none absolute inset-px rounded-[2rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
            <div className="relative space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-white/5 bg-black/40 px-4 py-3 text-left text-slate-300 transition duration-200 open:ring-1 open:ring-intl-orange/40"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-white marker:hidden">
                    <span>{faq.question}</span>
                    <span className="text-lg text-intl-orange transition-transform duration-200 open:-rotate-45">
                      +
                    </span>
                  </summary>
                  <p
                    className="mt-2 text-xs text-slate-400"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
