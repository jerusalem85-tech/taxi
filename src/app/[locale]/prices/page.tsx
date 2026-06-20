import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
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
    title: dict.prices.title,
    description: dict.prices.subtitle,
    alternates: { canonical: `${siteUrl}/${params.locale}/prices` },
    openGraph: {
      title: `${dict.prices.title} | ${dict.site.name}`,
      description: dict.prices.subtitle,
      url: `${siteUrl}/${params.locale}/prices`,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

const prices: Record<string, { from: string; to: string; price: string; time: string }> = {
  jerusalem_airport: { from: "Jerusalem", to: "Ben Gurion Airport", price: "₪250-₪300", time: "~45 min" },
  airport_jerusalem: { from: "Ben Gurion Airport", to: "Jerusalem", price: "₪250-₪300", time: "~45 min" },
  jerusalem_telaviv: { from: "Jerusalem", to: "Tel Aviv", price: "₪350-₪400", time: "~60 min" },
  jerusalem_haifa: { from: "Jerusalem", to: "Haifa", price: "₪550-₪650", time: "~90 min" },
  jerusalem_deadsea: { from: "Jerusalem", to: "Dead Sea", price: "₪250-₪300", time: "~60 min" },
  jerusalem_eilat: { from: "Jerusalem", to: "Eilat", price: "₪1,200-₪1,500", time: "~3.5 hrs" },
  jerusalem_nazareth: { from: "Jerusalem", to: "Nazareth", price: "₪450-₪550", time: "~90 min" },
  jerusalem_bethlehem: { from: "Jerusalem", to: "Bethlehem", price: "₪150-₪200", time: "~30 min" },
  telaviv_airport: { from: "Tel Aviv", to: "Ben Gurion Airport", price: "₪150-₪200", time: "~25 min" },
  telaviv_haifa: { from: "Tel Aviv", to: "Haifa", price: "₪350-₪450", time: "~60 min" },
  telaviv_jerusalem: { from: "Tel Aviv", to: "Jerusalem", price: "₪350-₪400", time: "~60 min" },
};

export default async function PricesPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);

  const routeEntries = Object.entries(prices).map(([key, row]) => {
    const routeName = (dict.prices.routes as any)[key] as string | undefined;
    const [from, to] = routeName ? routeName.split(" → ") : [row.from, row.to];
    return { key, from: from || row.from, to: to || row.to, price: row.price, time: row.time };
  });

  return (
    <>
      <section className="pt-28 pb-20 bg-white jerusalem-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="gold-text text-sm font-semibold uppercase tracking-widest mb-2 block">
              {dict.prices.overline}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">{dict.prices.title}</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">{dict.prices.subtitle}</p>
          </div>

          <div className="space-y-3">
            {routeEntries.map(({ key, from, to, price, time }) => (
              <div
                key={key}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gold-200 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center text-navy-600 group-hover:bg-navy-900 group-hover:text-gold-400 transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-navy-900">{from}</span>
                      <span className="text-gray-300">→</span>
                      <span className="font-semibold text-navy-900">{to}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-gray-400 text-sm">{time}</span>
                  <span className="text-gold-600 font-extrabold text-lg min-w-[100px] text-right">{price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${params.locale}/booking/`} className="btn-primary text-lg py-4 px-10">
              {dict.cta.bookNow}
            </Link>
          </div>
        </div>
      </section>
      <FloatingWhatsApp />
    </>
  );
}
