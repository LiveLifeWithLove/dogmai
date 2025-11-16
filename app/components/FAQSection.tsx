const faqs = [
  {
    question: "Who is DOGM.AI for?",
    answer:
      "DOGM.AI is for ambitious builders, designers, Digital Professionals, and hybrid pros who want AI-native workflows plus evidence of mastery.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No AI background required. Track foundations plus AI and mentor support meet you where you are.",
  },
  {
    question: "How do the bootcamps work?",
    answer:
      "Bootcamps are intensive, project-first sprints. You build, revise, and ship with AI and mentor feedback at every step so your Digital Professional portfolio keeps growing.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "Plan for 6&ndash;12 weeks with 6&ndash;10 focused hours per week &mdash; go faster if you want to stack reps.",
  },
  {
    question: "Is there a certificate?",
    answer:
      "Yes. You earn a DOGM.AI certificate plus the portfolio artifacts you produce.",
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="border-t border-white/10 bg-ebony/95 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-6 text-center font-heading text-2xl font-extrabold text-white sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-base font-semibold text-intl-orange">
                {faq.question}
              </h3>
              <p
                className="mt-1 text-sm text-slate-300"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
