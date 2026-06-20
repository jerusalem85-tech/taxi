import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import Link from "next/link";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.prices.title,
    description: dict.prices.subtitle,
    alternates: {
      canonical: `${siteUrl}/${params.locale}/prices`,
    },
    openGraph: {
      title: `${dict.prices.title} | ${dict.site.name}`,
      description: dict.prices.subtitle,
      url: `${siteUrl}/${params.locale}/prices`,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

const prices: Record<
  string,
  { from: string; to: string; price: string; time: string }
> = {
  jerusalem_airport: {
    from: "القدس",
    to: "مطار بن غوريون",
    price: "₪250-₪300",
    time: "~45 دقيقة",
  },
  airport_jerusalem: {
    from: "مطار بن غوريون",
    to: "القدس",
    price: "₪250-₪300",
    time: "~45 دقيقة",
  },
  jerusalem_telaviv: {
    from: "القدس",
    to: "تل أبيب",
    price: "₪350-₪400",
    time: "~60 دقيقة",
  },
  jerusalem_haifa: {
    from: "القدس",
    to: "حيفا",
    price: "₪550-₪650",
    time: "~90 دقيقة",
  },
  jerusalem_deadsea: {
    from: "القدس",
    to: "البحر الميت",
    price: "₪250-₪300",
    time: "~60 دقيقة",
  },
  jerusalem_eilat: {
    from: "القدس",
    to: "إيلات",
    price: "₪1,200-₪1,500",
    time: "~3.5 ساعات",
  },
  jerusalem_nazareth: {
    from: "القدس",
    to: "الناصرة",
    price: "₪450-₪550",
    time: "~90 دقيقة",
  },
  jerusalem_bethlehem: {
    from: "القدس",
    to: "بيت لحم",
    price: "₪150-₪200",
    time: "~30 دقيقة",
  },
  telaviv_airport: {
    from: "تل أبيب",
    to: "مطار بن غوريون",
    price: "₪150-₪200",
    time: "~25 دقيقة",
  },
  telaviv_haifa: {
    from: "تل أبيب",
    to: "حيفا",
    price: "₪350-₪450",
    time: "~60 دقيقة",
  },
  telaviv_jerusalem: {
    from: "تل أبيب",
    to: "القدس",
    price: "₪350-₪400",
    time: "~60 دقيقة",
  },
};

export default async function PricesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <section className="pt-28 pb-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">{dict.prices.title}</h1>
          <p className="section-subtitle">{dict.prices.subtitle}</p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500 text-white">
                    <th className="py-4 px-6 text-sm font-semibold">
                      {dict.booking.form.from}
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold">
                      {dict.booking.form.to}
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold text-center">
                      السعر التقريبي
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold text-center">
                      الوقت التقريبي
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(prices).map(([key, row], idx) => {
                    const routeName = (dict.prices.routes as any)[key];
                    return (
                      <tr
                        key={key}
                        className={`${
                          idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-primary-50 transition-colors`}
                      >
                        <td className="py-4 px-6 text-gray-700 font-medium">
                          {row.from}
                        </td>
                        <td className="py-4 px-6 text-gray-700 font-medium">
                          {row.to}
                        </td>
                        <td className="py-4 px-6 text-primary-600 font-bold text-center">
                          {row.price}
                        </td>
                        <td className="py-4 px-6 text-gray-500 text-center text-sm">
                          {row.time}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${params.locale}/booking/`}
              className="btn-primary text-lg py-4 px-10"
            >
              {dict.cta.bookNow}
            </Link>
          </div>
        </div>
      </section>
      <FloatingWhatsApp />
    </>
  );
}
