import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/server";
import { localeDirections, type Locale } from "@/i18n/config";
import { ReactNode } from "react";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: {
      default: `${dict.site.name} - ${dict.site.tagline}`,
      template: `%s | ${dict.site.name}`,
    },
    description: dict.site.tagline,
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
      <body className="bg-white text-gray-900 antialiased">
        <Header dict={dict} locale={params.locale} />
        <main className="min-h-screen">{children}</main>
        <Footer dict={dict} locale={params.locale} />
      </body>
    </html>
  );
}
