import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import ContactForm from "@/components/ContactForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const siteUrl = "https://jerusalemtaxi.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.contact.title,
    description: dict.contact.subtitle,
    alternates: { canonical: `${siteUrl}/${params.locale}/contact` },
    openGraph: {
      title: `${dict.contact.title} | ${dict.site.name}`,
      description: dict.contact.subtitle,
      url: `${siteUrl}/${params.locale}/contact`,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "he" }, { locale: "en" }];
}

export default async function ContactPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <section className="pt-28 pb-20 bg-white jerusalem-pattern min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="gold-text text-sm font-semibold uppercase tracking-widest mb-2 block">
              {params.locale === "ar" ? "تواصل معنا" : params.locale === "he" ? "צור קשר" : "Get In Touch"}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">{dict.contact.title}</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">{dict.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <div className="space-y-6">
              {[
                { icon: "📞", bg: "bg-navy-50", label: dict.contact.phone, value: "050-224-6139", href: "tel:+972502246139", color: "text-navy-600" },
                { icon: "💬", bg: "bg-green-50", label: dict.contact.whatsapp, value: "050-224-6139", href: "https://wa.me/972502246139", color: "text-green-600" },
                { icon: "✉️", bg: "bg-blue-50", label: dict.contact.email, value: "info@jerusalemtaxi.com", href: "mailto:info@jerusalemtaxi.com", color: "text-blue-600" },
              ].map(({ icon, bg, label, value, href, color }) => (
                <div key={label} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gold-200 transition-all">
                  <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>{icon}</div>
                  <div>
                    <h3 className="text-sm text-gray-500 mb-0.5">{label}</h3>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={`${color} font-bold text-lg hover:opacity-80 transition`}>
                      {value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-0.5">{dict.contact.address}</h3>
                  <p className="text-navy-800 font-bold text-lg">{dict.contact.addressText}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">🕐</div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-0.5">{dict.contact.hours}</h3>
                  <p className="text-navy-800 font-bold text-lg">{dict.contact.hoursText}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">{dict.contact.form.message}</h3>
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
      <FloatingWhatsApp />
    </>
  );
}
