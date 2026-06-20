import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
      <FloatingWhatsApp />
    </>
  );
}
