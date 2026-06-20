import type { Dictionary } from "@/i18n/server";

export default function WhyChooseUs({ dict }: { dict: Dictionary }) {
  const items = [
    { key: "punctual", icon: "⏱️" },
    { key: "drivers", icon: "👨‍✈️" },
    { key: "prices", icon: "💰" },
    { key: "available", icon: "🕐" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{dict.why.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {items.map(({ key, icon }) => {
            const item = (dict.why.items as any)[key];
            return (
              <div key={key} className="text-center">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
