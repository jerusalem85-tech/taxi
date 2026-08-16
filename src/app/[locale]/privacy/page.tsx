import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.privacy.title,
    description: dict.privacy.intro,
    alternates: { canonical: `${siteUrl}/${params.locale}/privacy/` },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const p = dict.privacy;

  const sections = [
    { title: p.collectTitle, text: p.collectText },
    { title: p.useTitle, text: p.useText },
    { title: p.cookiesTitle, text: p.cookiesText },
    { title: p.contactTitle, text: p.contactText },
  ];

  return (
    <>
      <Breadcrumbs
        items={[{ label: dict.nav.home, href: "/" }, { label: p.title }]}
        locale={params.locale}
      />
      <section className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="gold-text text-sm font-semibold uppercase tracking-widest mb-2 block">
              {p.overline}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">{p.title}</h1>
            <p className="text-gray-500 text-lg">{p.intro}</p>
          </div>
          <div className="space-y-8">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-extrabold text-navy-900 mb-3">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
