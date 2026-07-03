import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import TourismDirectory from "@/components/TourismDirectory";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: "Tourism Directory | Jerusalem Taxi",
    description: "Complete directory of tourism companies, hotels, travel agencies, and tourist services in Jerusalem, Israel. Find phone numbers and contact information.",
    alternates: { canonical: `${siteUrl}/${params.locale}/tourism` },
    openGraph: {
      title: `Tourism Directory | ${dict.site.name}`,
      description: "Complete directory of tourism companies, hotels, travel agencies, and tourist services in Jerusalem.",
      url: `${siteUrl}/${params.locale}/tourism`,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function TourismPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: dict.nav.home, href: "/" },
          { label: "Tourism Directory" },
        ]}
        locale={params.locale}
      />
      <TourismDirectory dict={dict} />
    </>
  );
}
