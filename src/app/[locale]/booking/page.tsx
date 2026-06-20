import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import BookingForm from "@/components/BookingForm";

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
