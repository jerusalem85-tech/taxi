import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.accessibility.title,
    description: dict.accessibility.subtitle,
    alternates: { canonical: `${siteUrl}/${params.locale}/accessibility` },
    openGraph: {
      title: `${dict.accessibility.title} | ${dict.site.name}`,
      description: dict.accessibility.subtitle,
      url: `${siteUrl}/${params.locale}/accessibility`,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function AccessibilityPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale);
  const a = dict.accessibility;

  return (
    <section className="pt-32 pb-20 bg-white jerusalem-pattern min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="gold-text text-sm font-semibold uppercase tracking-widest mb-2 block">{a.overline}</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">{a.title}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">{a.subtitle}</p>
        </div>

        <div className="space-y-10">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-navy-900 mb-3">{a.commitment}</h2>
            <p className="text-gray-600 leading-relaxed">{a.commitmentText}</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-navy-900 mb-3">{a.standards}</h2>
            <p className="text-gray-600 leading-relaxed">{a.standardsText}</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-navy-900 mb-4">{a.features}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {a.featuresList.map((f: string, i: number) => (
                <li key={i} className="flex items-center gap-2.5 text-gray-600 text-sm">
                  <span className="w-6 h-6 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-navy-900 mb-3">{a.coordinator}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{a.coordinatorText}</p>
            <div className="bg-navy-50 rounded-xl p-5 space-y-2 text-sm">
              <p><span className="font-semibold text-navy-900">Name:</span> {a.coordinatorName}</p>
              <p><span className="font-semibold text-navy-900">Email:</span> <a href={`mailto:${a.coordinatorEmail}`} className="text-gold-600 hover:underline">{a.coordinatorEmail}</a></p>
              <p><span className="font-semibold text-navy-900">Phone:</span> <a href="tel:+972548338706" className="text-gold-600 hover:underline">{a.coordinatorPhone}</a></p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-navy-900 mb-3">{a.complaints}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{a.complaintsText}</p>
            <p className="text-gray-500 text-sm mb-3">{a.complaintsAlt}</p>
            <div className="bg-navy-50 rounded-xl p-5 space-y-2 text-sm">
              <p><span className="font-semibold text-navy-900">{a.commissionName}</span></p>
              <p className="text-gray-600">{a.commissionAddress}</p>
              <p className="text-gray-600">{a.commissionPhone} | {a.commissionInfo}</p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400">{a.lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
