import Link from "next/link";
import type { Dictionary } from "@/i18n/server";
import type { Locale } from "@/i18n/config";

export default function Services({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const services = [
    {
      key: "airport",
      icon: "✈️",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      key: "intercity",
      icon: "🚗",
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      key: "tours",
      icon: "🏛️",
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      key: "vip",
      icon: "💎",
      color: "bg-yellow-50 text-yellow-600 border-yellow-200",
    },
    {
      key: "daily",
      icon: "🚕",
      color: "bg-orange-50 text-orange-600 border-orange-200",
    },
    {
      key: "whatsapp",
      icon: "💬",
      color: "bg-green-50 text-green-600 border-green-200",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{dict.services.title}</h2>
        <p className="section-subtitle">{dict.services.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ key, icon, color }) => {
            const service = (dict.services as any)[key];
            return (
              <div
                key={key}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 border ${color}`}
                >
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${locale}/booking/`} className="btn-primary">
            {dict.cta.bookNow}
          </Link>
        </div>
      </div>
    </section>
  );
}
