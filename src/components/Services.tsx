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
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      color: "border-blue-200 bg-blue-50 group-hover:bg-blue-500",
      iconBg: "bg-blue-100 text-blue-600 group-hover:bg-white/20 group-hover:text-white",
    },
    {
      key: "intercity",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "border-green-200 bg-green-50 group-hover:bg-green-500",
      iconBg: "bg-green-100 text-green-600 group-hover:bg-white/20 group-hover:text-white",
    },
    {
      key: "tours",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "border-purple-200 bg-purple-50 group-hover:bg-purple-500",
      iconBg: "bg-purple-100 text-purple-600 group-hover:bg-white/20 group-hover:text-white",
    },
    {
      key: "vip",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: "border-amber-200 bg-amber-50 group-hover:bg-amber-500",
      iconBg: "bg-amber-100 text-amber-600 group-hover:bg-white/20 group-hover:text-white",
    },
    {
      key: "daily",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      color: "border-orange-200 bg-orange-50 group-hover:bg-orange-500",
      iconBg: "bg-orange-100 text-orange-600 group-hover:bg-white/20 group-hover:text-white",
    },
    {
      key: "whatsapp",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: "border-emerald-200 bg-emerald-50 group-hover:bg-emerald-500",
      iconBg: "bg-emerald-100 text-emerald-600 group-hover:bg-white/20 group-hover:text-white",
    },
  ];

  return (
    <section className="py-20 bg-white relative jerusalem-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="gold-text text-sm font-semibold uppercase tracking-widest mb-2 block">
            {locale === "ar" ? "ماذا نقدم" : locale === "he" ? "מה אנחנו מציעים" : "What We Offer"}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">
            {dict.services.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {dict.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, icon, color, iconBg }) => {
            const service = (dict.services as any)[key];
            return (
              <div
                key={key}
                className={`group relative border-2 ${color} rounded-2xl p-6 transition-all duration-500`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${iconBg}`}
                >
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${locale}/booking/`} className="btn-primary text-lg">
            {dict.cta.bookNow}
          </Link>
        </div>
      </div>
    </section>
  );
}
