import Link from "next/link";
import type { Dictionary } from "@/i18n/server";
import type { Locale } from "@/i18n/config";

export default function CTA({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {dict.hero.subtitle}
        </h2>
        <p className="text-primary-100 mb-8 text-lg max-w-2xl mx-auto">
          {dict.booking.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/booking/`} className="btn-outline text-lg py-4 px-10">
            {dict.cta.bookNow}
          </Link>
          <a
            href="https://wa.me/972502246139?text=مرحباً، أريد حجز تاكسي"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg py-4 px-10"
          >
            {dict.cta.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
