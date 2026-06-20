import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { getDictionary } from "@/i18n/server";
import { localeDirections, type Locale } from "@/i18n/config";
import { ReactNode } from "react";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const l = params.locale as Locale;

  const descriptions: Record<Locale, string> = {
    ar: "تاكسي القدس - خدمة تاكسي موثوقة 24/7 في القدس وكل إسرائيل. حجز سهل عبر واتساب. نقل مطار بن غوريون، توصيل بين المدن، جولات سياحية للبحر الميت ومسادا، خدمة VIP. أسعار تنافسية - 050-224-6139",
    he: "מונית ירושלים - שירות מוניות אמין 24/7 בירושלים ובכל ישראל. הזמנה קלה בוואטסאפ. הסעות לנתב\"ג, נסיעות בין-עירוניות, סיורי תיירות לים המלח ומצדה, שירות VIP. מחירים תחרותיים - 050-224-6139",
    en: "Jerusalem Taxi - Reliable 24/7 taxi service in Jerusalem and across Israel. Easy WhatsApp booking. Ben Gurion Airport transfers, intercity travel to Tel Aviv, Haifa, Eilat, tourist tours to Dead Sea & Masada, VIP service. Competitive prices - 050-224-6139",
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
      url: `${siteUrl}/${l}`,
      siteName: dict.site.name,
      locale: l === "ar" ? "ar_IL" : l === "he" ? "he_IL" : "en_IL",
      type: "website",
      images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.site.name} - ${dict.site.tagline}`,
      description: descriptions[l],
      images: [`${siteUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: `${siteUrl}/${l}`,
      languages: { ar: `${siteUrl}/ar`, he: `${siteUrl}/he`, en: `${siteUrl}/en` },
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
  const dict = await getDictionary(params.locale);
  const dir = localeDirections[params.locale];

  return (
    <html lang={params.locale} dir={dir}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f1d3d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
        <LocalBusinessSchema />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header dict={dict} locale={params.locale} />
        <main className="min-h-screen">{children}</main>
        <Footer dict={dict} locale={params.locale} />
      </body>
    </html>
  );
}
