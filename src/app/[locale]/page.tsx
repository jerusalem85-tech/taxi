import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/TestimonialsCarousel";
import CTA from "@/components/CTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RelatedPages from "@/components/RelatedPages";
import DestinationsSection from "@/components/DestinationsSection";
import QuoteWidget from "@/components/QuoteWidget";
import FAQ from "@/components/FAQ";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const l = params.locale;

  const descriptions: Record<Locale, string> = {
    ar: "تاكسي القدس - خدمة تاكسي موثوقة على مدار الساعة. نقل المطار، توصيل بين المدن، جولات البحر الميت ومسادا. حجز سهل عبر واتساب - 054-833-8706",
    he: "מונית ירושלים - שירות מוניות אמין 24/7. הסעות לנתב\"ג, נסיעות בין-עירוניות, סיורים לים המלח ומצדה. הזמנה קלה בוואטסאפ - 054-833-8706",
    en: "Reliable 24/7 taxi service in Jerusalem & across Israel. Airport transfers, intercity travel, Dead Sea & Masada tours. Book via WhatsApp - 054-833-8706",
  };

  return {
    title: dict.site.tagline,
    description: descriptions[l],
    alternates: {
      canonical: `${siteUrl}/${l}/`,
    },
    openGraph: {
      title: `${dict.site.name} - ${dict.site.tagline}`,
      description: descriptions[l],
      url: `${siteUrl}/${l}/`,
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

  const faqItems = [
    { question: dict.faq.q1, answer: dict.faq.a1 },
    { question: dict.faq.q2, answer: dict.faq.a2 },
    { question: dict.faq.q3, answer: dict.faq.a3 },
    { question: dict.faq.q4, answer: dict.faq.a4 },
    { question: dict.faq.q5, answer: dict.faq.a5 },
    { question: dict.faq.q6, answer: dict.faq.a6 },
  ];

  return (
    <>
      <Hero dict={dict} locale={params.locale} />
      <Services dict={dict} locale={params.locale} />
      <DestinationsSection dict={dict} locale={params.locale} />
      <Fleet dict={dict} locale={params.locale} />
      <WhyChooseUs dict={dict} locale={params.locale} />
      <QuoteWidget dict={dict} locale={params.locale} />
      <Testimonials dict={dict} />
      <FAQ dict={dict} items={faqItems} />
      <RelatedPages dict={dict} locale={params.locale} currentPath="/" />
      <CTA dict={dict} locale={params.locale} />
      <FloatingWhatsApp dict={dict} />
    </>
  );
}
