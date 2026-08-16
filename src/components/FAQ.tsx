import type { Dictionary } from "@/i18n/server";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({
  dict,
  items,
  title,
}: {
  dict: Dictionary;
  items: FAQItem[];
  title?: string;
}) {
  const heading = title || dict.faq.homeTitle;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            {heading}
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-navy-900 list-none">
                <span>{item.question}</span>
                <span className="ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-lg font-bold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
