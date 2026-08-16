import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import { routes, getRoute, popularRoutes } from "@/data/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import DestinationsSection from "@/components/DestinationsSection";

const siteUrl = "https://jerusalemtaxi.com";
const PHONE = "972548338706";

export async function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of ["en", "ar", "he"] as Locale[]) {
    for (const r of routes) {
      params.push({ locale, slug: r.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const route = getRoute(params.slug);
  if (!route) return { title: "Not Found" };

  const l = params.locale;
  const title =
    l === "ar"
      ? `تاكسي من ${route.fromAr} إلى ${route.toAr}`
      : l === "he"
      ? `מונית מ${route.fromHe} ל${route.toHe}`
      : `Taxi from ${route.from} to ${route.to}`;

  const description =
    l === "ar"
      ? `تاكسي من ${route.fromAr} إلى ${route.toAr} بسعر ثابت يبدأ من ${route.priceLow} شيكل. مدة الرحلة ${route.durationMinutes} دقيقة. متاح 24/7 - احجز عبر واتساب.`
      : l === "he"
      ? `מונית מ${route.fromHe} ל${route.toHe} במחיר קבוע מ-${route.priceLow} ש״ח. משך הנסיעה ${route.durationMinutes} דקות. זמין 24/7 - הזמנה בוואטסאפ.`
      : `Taxi from ${route.from} to ${route.to} at a fixed price from ₪${route.priceLow}. Journey time ${route.durationMinutes} min. Available 24/7 - book via WhatsApp.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${l}/destinations/${route.slug}/`,
      languages: {
        en: `${siteUrl}/en/destinations/${route.slug}/`,
        ar: `${siteUrl}/ar/destinations/${route.slug}/`,
        he: `${siteUrl}/he/destinations/${route.slug}/`,
        "x-default": `${siteUrl}/en/destinations/${route.slug}/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${l}/destinations/${route.slug}/`,
      type: "article",
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const route = getRoute(params.slug);
  if (!route) notFound();

  const dict = await getDictionary(params.locale);
  const t = dict.destinations;
  const l = params.locale;

  const fromLabel = l === "ar" ? route.fromAr : l === "he" ? route.fromHe : route.from;
  const toLabel = l === "ar" ? route.toAr : l === "he" ? route.toHe : route.to;

  const faqItems = [
    {
      question: `How much is a taxi from ${fromLabel} to ${toLabel}?`,
      answer: `A taxi from ${fromLabel} to ${toLabel} costs approximately ₪${route.priceLow}-₪${route.priceHigh} for a standard vehicle. The trip takes about ${route.durationMinutes} minutes.`,
    },
    {
      question: `How long is the drive from ${fromLabel} to ${toLabel}?`,
      answer: `The drive from ${fromLabel} to ${toLabel} takes approximately ${route.durationMinutes} minutes, covering about ${route.distanceKm} km.`,
    },
    {
      question: `Can I book a ${fromLabel} → ${toLabel} taxi in advance?`,
      answer: `Yes, you can book your ${fromLabel} to ${toLabel} taxi in advance via WhatsApp or our booking form. We're available 24/7.`,
    },
  ];

  const whatsappMsg = `Hi, I'd like to book a taxi from ${fromLabel} to ${toLabel}.`;

  const otherRoutes = popularRoutes.filter((r) => r.slug !== route.slug).slice(0, 6);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: dict.nav.home, href: "/" },
          { label: t.title, href: "/destinations" },
          { label: `${fromLabel} → ${toLabel}` },
        ]}
        locale={l}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 jerusalem-pattern" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            {t.heroTitle.replace("{from}", fromLabel).replace("{to}", toLabel)}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.heroSubtitle.replace("{from}", fromLabel).replace("{to}", toLabel)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg"
            >
              {t.bookNow.replace("{from}", fromLabel).replace("{to}", toLabel)}
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-6">{t.overview}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-navy-900">{route.durationMinutes}</div>
              <div className="text-sm text-gray-500">{t.duration}</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-navy-900">{route.distanceKm} {t.km}</div>
              <div className="text-sm text-gray-500">{t.distance}</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-gold-600">₪{route.priceLow}–₪{route.priceHigh}</div>
              <div className="text-sm text-gray-500">{t.price}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-8">{t.howItWorks}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[t.step1, t.step2, t.step3].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gold-500 text-navy-900 font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ dict={dict} items={faqItems} title={t.faqTitle} />

      {/* Booking form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm dict={dict} locale={l} />
        </div>
      </section>

      {otherRoutes.length > 0 && (
        <DestinationsSection dict={dict} locale={l} />
      )}
    </>
  );
}
