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
