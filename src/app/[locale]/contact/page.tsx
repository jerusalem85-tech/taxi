import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import ContactForm from "@/components/ContactForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">{dict.contact.title}</h1>
          <p className="section-subtitle">{dict.contact.subtitle}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {dict.contact.phone}
                  </h3>
                  <a
                    href="tel:+972500000000"
                    className="text-primary-600 hover:text-primary-700 text-lg font-semibold"
                  >
                    050-000-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {dict.contact.whatsapp}
                  </h3>
                  <a
                    href="https://wa.me/972500000000?text=مرحباً، أريد حجز تاكسي"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 text-lg font-semibold"
                  >
                    050-000-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {dict.contact.email}
                  </h3>
                  <a
                    href="mailto:info@jerusalemtaxi.com"
                    className="text-blue-600 hover:text-blue-700 text-lg font-semibold"
                  >
                    info@jerusalemtaxi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {dict.contact.address}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {dict.contact.addressText}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🕐
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {dict.contact.hours}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {dict.contact.hoursText}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">
                {dict.contact.form.message}
              </h3>
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
      <FloatingWhatsApp />
    </>
  );
}
