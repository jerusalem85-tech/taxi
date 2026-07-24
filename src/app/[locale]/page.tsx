import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const l = params.locale;

  const descriptions: Record<Locale, string> = {
    ar: "تاكسي القدس - خدمة تاكسي موثوقة 24/7 في القدس وكل إسرائيل. حجز سهل عبر واتساب. نقل مطار بن غوريون، توصيل بين المدن، جولات سياحية للبحر الميت ومسادا، خدمة VIP. أسعار تنافسية - 054-833-8706",
    he: "מונית ירושלים - שירות מוניות אמין 24/7 בירושלים ובכל ישראל. הזמנה קלה בוואטסאפ. הסעות לנתב\"ג, נסיעות בין-עירוניות, סיורי תיירות לים המלח ומצדה, שירות VIP. מחירים תחרותיים - 054-833-8706",
    en: "Jerusalem Taxi - Reliable 24/7 taxi service in Jerusalem and across Israel. Easy WhatsApp booking. Ben Gurion Airport transfers, intercity travel to Tel Aviv, Haifa, Eilat, tourist tours to Dead Sea & Masada, VIP service. Competitive prices - 054-833-8706",
  };

  return {
    title: dict.site.tagline,
    description: descriptions[l],
    alternates: {
      canonical: `${siteUrl}/${l}`,
    },
    openGraph: {
      title: `${dict.site.name} - ${dict.site.tagline}`,
      description: descriptions[l],
      url: `${siteUrl}/${l}`,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <Hero dict={dict} locale={params.locale} />
      <Services dict={dict} locale={params.locale} />
      <Fleet dict={dict} locale={params.locale} />
      <WhyChooseUs dict={dict} locale={params.locale} />
      <Testimonials dict={dict} />
      <CTA dict={dict} locale={params.locale} />
      <FloatingWhatsApp dict={dict} />
    </>
  );
}
