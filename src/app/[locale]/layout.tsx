import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ActionBar from "@/components/ActionBar";
import CookieConsent from "@/components/CookieConsent";
import { getDictionary } from "@/i18n/server";
import { localeDirections, locales, type Locale } from "@/i18n/config";
import { ReactNode } from "react";
import { cairo } from "@/lib/fonts";
import { notFound } from "next/navigation";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const l = params.locale as Locale;

  const descriptions: Record<Locale, string> = {
    ar: "تاكسي القدس - خدمة تاكسي موثوقة على مدار الساعة. نقل المطار، توصيل بين المدن، جولات البحر الميت ومسادا. حجز سهل عبر واتساب - 054-833-8706",
    he: "מונית ירושלים - שירות מוניות אמין 24/7. הסעות לנתב\"ג, נסיעות בין-עירוניות, סיורים לים המלח ומצדה. הזמנה קלה בוואטסאפ - 054-833-8706",
    en: "Reliable 24/7 taxi service in Jerusalem & across Israel. Airport transfers, intercity travel, Dead Sea & Masada tours. Book via WhatsApp - 054-833-8706",
  };

  const keywords: Record<Locale, string[]> = {
    ar: [
      "تاكسي", "تاكسي القدس", "تاكسي في القدس", "تاكسي اسرائيل", "نقل مطار", "مطار بن غوريون", "توصيل", "سفريات",
      "القدس", "تل ابيب", "حيفا", "ايلات", "الناصرة", "بيت لحم", "البحر الميت", "مسادا", "الجليل",
      "حجز تاكسي", "واتساب", "تاكسي 24 ساعة", "تاكسي VIP", "جولات سياحية", "سيارة مع سائق",
      "خدمة توصيل", "سعر تاكسي", "مواصلات", "نقل سياحي", "شركة تاكسي", "رقم تاكسي",
      "jerusalem taxi", "מונית ירושלים", "מונית",
    ],
    he: [
      "מונית", "מונית ירושלים", "מונית בירושלים", "מונית ישראל", "הסעות לנתבג", "נתב״ג",
      "הסעות", "נסיעות", "ירושלים", "תל אביב", "חיפה", "אילת", "נצרת", "בית לחם",
      "ים המלח", "מצדה", "גליל", "הזמנת מונית", "וואטסאפ", "מונית 24 שעות",
      "מונית VIP", "סיורי תיירות", "נהג צמוד", "שירות הסעות", "מחיר מונית",
      "תחבורה", "הסעות תיירים", "חברת מוניות", "מספר מונית",
      "jerusalem taxi", "تاكسي القدس",
    ],
    en: [
      "taxi", "jerusalem taxi", "taxi jerusalem", "taxi israel", "airport transfer", "ben gurion airport",
      "intercity travel", "jerusalem", "tel aviv", "haifa", "eilat", "nazareth", "bethlehem",
      "dead sea", "masada", "galilee", "book taxi", "whatsapp booking", "24 hour taxi",
      "VIP taxi", "tourist tours", "private driver", "car service", "taxi price",
      "transportation israel", "jerusalem airport taxi", "jerusalem tours", "taxi company",
      "تاكسي القدس", "מונית ירושלים",
    ],
  };

  return {
    title: {
      default: `${dict.site.name} - ${dict.site.tagline}`,
      template: `%s | ${dict.site.name}`,
    },
    description: descriptions[l],
    keywords: keywords[l],
    authors: [{ name: "Jerusalem Taxi", url: siteUrl }],
    creator: "Jerusalem Taxi",
    publisher: "Jerusalem Taxi",
    formatDetection: { telephone: true, email: true, address: true },
    openGraph: {
      title: `${dict.site.name} - ${dict.site.tagline}`,
      description: descriptions[l],
      url: `${siteUrl}/${l}/`,
      siteName: dict.site.name,
      locale: l === "ar" ? "ar_IL" : l === "he" ? "he_IL" : "en_IL",
      type: "website",
      images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: dict.site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.site.name} - ${dict.site.tagline}`,
      description: descriptions[l],
      images: [`${siteUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: `${siteUrl}/${l}/`,
      languages: {
        ar: `${siteUrl}/ar/`,
        he: `${siteUrl}/he/`,
        en: `${siteUrl}/en/`,
        "x-default": `${siteUrl}/en/`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
    metadataBase: new URL(siteUrl),
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  // Ensure only supported locales are served; otherwise return a proper 404.
  // Prevents arbitrary paths (e.g. /wp-login.php) from being rendered as a
  // locale and producing indexable soft-404 pages.
  if (!locales.includes(params.locale)) {
    notFound();
  }

  const dict = await getDictionary(params.locale);
  const dir = localeDirections[params.locale];

  return (
    <html lang={params.locale} dir={dir}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f1d3d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" as="image" href="/images/jerusalem.jpg" fetchPriority="high" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <LocalBusinessSchema />
      </head>
      <body className={`${cairo.variable} bg-white text-gray-900 antialiased`}>
        <Header dict={dict} locale={params.locale} />
        <AccessibilityToolbar />
        <main id="main-content" className="min-h-screen pb-16 md:pb-0">{children}</main>
        <Footer dict={dict} locale={params.locale} />
        <ActionBar dict={dict} locale={params.locale} />
        <CookieConsent dict={dict} />
      </body>
    </html>
  );
}
