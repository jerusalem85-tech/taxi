import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.about.title,
    description: dict.about.subtitle,
    alternates: { canonical: `${siteUrl}/${params.locale}/about` },
    openGraph: {
      title: `${dict.about.title} | ${dict.site.name}`,
      description: dict.about.subtitle,
      url: `${siteUrl}/${params.locale}/about`,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function AboutPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const l = params.locale;

  const stats = [
    { number: "15+", label: dict.why.stats.years },
    { number: "10,000+", label: dict.why.stats.trips },
    { number: "24/7", label: dict.why.stats.availability },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: dict.nav.home, href: "/" },
          { label: dict.about.title },
        ]}
        locale={params.locale}
      />
      <section className="pt-24 pb-20 bg-white jerusalem-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="gold-text text-sm font-semibold uppercase tracking-widest mb-2 block">
              {dict.about.title}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">{dict.about.title}</h1>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
              {dict.about.subtitle}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-16">
            <p className="text-lg">{dict.about.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map(({ number, label }) => (
              <div key={label} className="text-center p-8 rounded-2xl bg-navy-50 border border-navy-100">
                <div className="text-4xl font-extrabold text-gold-500 mb-2">{number}</div>
                <div className="text-navy-700 font-semibold">{label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href={`/${l}/booking/`} className="btn-primary text-lg py-4 px-10">
              {dict.cta.bookNow}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
