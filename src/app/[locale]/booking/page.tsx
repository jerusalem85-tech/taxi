import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import BookingForm from "@/components/BookingForm";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.booking.title,
    description: dict.booking.subtitle,
    alternates: {
      canonical: `${siteUrl}/${params.locale}/booking`,
    },
    openGraph: {
      title: `${dict.booking.title} | ${dict.site.name}`,
      description: dict.booking.subtitle,
      url: `${siteUrl}/${params.locale}/booking`,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function BookingPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return <BookingForm dict={dict} locale={params.locale} />;
}
