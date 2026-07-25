import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import TourismDirectory from "@/components/TourismDirectory";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPages from "@/components/RelatedPages";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const t = dict.tourismPage;
  return {
    title: `${t.title} | ${dict.site.name}`,
    description: t.description,
    alternates: { canonical: `${siteUrl}/${params.locale}/tourism` },
    openGraph: {
      title: `${t.title} | ${dict.site.name}`,
      description: t.description,
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
          { label: dict.tourismPage.overline },
        ]}
        locale={params.locale}
      />
      <TourismDirectory dict={dict} locale={params.locale} />
      <RelatedPages dict={dict} locale={params.locale} currentPath="/tourism" />
    </>
  );
}
