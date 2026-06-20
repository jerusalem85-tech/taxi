import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import { Metadata } from "next";
import Link from "next/link";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.services.title,
    description: dict.services.subtitle,
    alternates: {
      canonical: `${siteUrl}/${params.locale}/services`,
    },
    openGraph: {
      title: `${dict.services.title} | ${dict.site.name}`,
      description: dict.services.subtitle,
      url: `${siteUrl}/${params.locale}/services`,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function ServicesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const services = [
    {
      key: "airport",
      icon: "✈️",
      color: "from-blue-500 to-blue-700",
    },
    {
      key: "intercity",
      icon: "🚗",
      color: "from-green-500 to-green-700",
    },
    {
      key: "tours",
      icon: "🏛️",
      color: "from-purple-500 to-purple-700",
    },
    {
      key: "vip",
      icon: "💎",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      key: "daily",
      icon: "🚕",
      color: "from-orange-500 to-orange-700",
    },
    {
      key: "whatsapp",
      icon: "💬",
      color: "from-green-500 to-emerald-700",
    },
  ];

  return (
    <>
      <section className="pt-28 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">{dict.services.title}</h1>
          <p className="section-subtitle">{dict.services.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ key, icon, color }, idx) => {
              const service = (dict.services as any)[key];
              return (
                <div
                  key={key}
                  className={`bg-gradient-to-r ${color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${params.locale}/booking/`}
              className="btn-primary text-lg py-4 px-10"
            >
              {dict.cta.bookNow}
            </Link>
          </div>
        </div>
      </section>
      <FloatingWhatsApp />
    </>
  );
}
