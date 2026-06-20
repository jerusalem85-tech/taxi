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
    ar: "تاكسي القدس - خدمة تاكسي موثوقة في القدس وجميع أنحاء إسرائيل. نقل مطار، توصيل بين المدن، جولات سياحية، خدمة VIP. احجز عبر واتساب 050-224-6139",
    he: "מונית ירושלים - שירות מוניות אמין בירושלים ובכל ישראל. הסעות לנתב\"ג, נסיעות בין-עירוניות, סיורי תיירות, שירות VIP. הזמן בוואטסאפ 050-224-6139",
    en: "Jerusalem Taxi - Reliable taxi service in Jerusalem and throughout Israel. Airport transfers, intercity travel, tourist tours, VIP service. Book via WhatsApp +972-50-224-6139",
  };

  return {
    title: {
      default: `${dict.site.name} - ${dict.site.tagline}`,
      template: `%s | ${dict.site.name}`,
    },
    description: descriptions[l],
    keywords: ["taxi", "jerusalem", "airport transfer", "israel", "intercity", "tours", "VIP", "تاكسي", "القدس", "מונית", "ירושלים"],
    authors: [{ name: "Jerusalem Taxi" }],
    creator: "Jerusalem Taxi",
    publisher: "Jerusalem Taxi",
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    openGraph: {
      title: `${dict.site.name} - ${dict.site.tagline}`,
      description: descriptions[l],
      url: `${siteUrl}/${l}`,
      siteName: dict.site.name,
      locale: l === "ar" ? "ar_IL" : l === "he" ? "he_IL" : "en_IL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.site.name} - ${dict.site.tagline}`,
      description: descriptions[l],
    },
    alternates: {
      canonical: `${siteUrl}/${l}`,
      languages: {
        ar: `${siteUrl}/ar`,
        he: `${siteUrl}/he`,
        en: `${siteUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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
        <meta name="theme-color" content="#f97316" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" href="/sitemap.xml" />
        <StructuredData />
        <LocalBusinessSchema />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "PLACEHOLDER_ID");
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header dict={dict} locale={params.locale} />
        <main className="min-h-screen">{children}</main>
        <Footer dict={dict} locale={params.locale} />
      </body>
    </html>
  );
}
