import Link from "next/link";
import type { Dictionary } from "@/i18n/server";
import type { Locale } from "@/i18n/config";
import { popularRoutes } from "@/data/routes";

export default function DestinationsSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const t = dict.destinations;

  const fromTo = (r: (typeof popularRoutes)[number]) =>
    locale === "ar"
      ? `${r.fromAr} → ${r.toAr}`
      : locale === "he"
      ? `${r.fromHe} → ${r.toHe}`
      : `${r.from} → ${r.to}`;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="gold-text text-sm font-semibold uppercase tracking-widest mb-2 block">
            {t.overline}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">{t.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularRoutes.map((r) => (
            <Link
              key={r.slug}
              href={`/${locale}/destinations/${r.slug}/`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-200 hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{fromTo(r)}</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-gold-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  {r.durationMinutes} {t.minutesShort}
                </div>
                <div className="text-lg font-extrabold text-navy-900">
                  ₪{r.priceLow}
                  <span className="text-sm font-normal text-gray-400"> – ₪{r.priceHigh}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${locale}/prices/`} className="btn-primary text-lg">
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
