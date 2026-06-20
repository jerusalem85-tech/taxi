"use client";

import Link from "next/link";
import type { Dictionary } from "@/i18n/server";
import type { Locale } from "@/i18n/config";

export default function Hero({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1597935258735-206d1c7f9e24?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/70 to-navy-900/80" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-gold-400 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold-400 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/30 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full px-5 py-2 mb-8 animate-float">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gold-200 text-sm font-medium">
              Available 24/7 &bull; متوفر &bull; זמין
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            <span className="text-gold-400">{dict.site.name.split(" ")[0]}</span>
            <br />
            <span className="text-white">{dict.site.name.split(" ")[1]}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
            {dict.hero.subtitle}
          </p>

          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="text-gold-400/60 text-sm hidden sm:inline">
              {locale === "ar" ? "🇮🇱 القدس" : locale === "he" ? "🇮🇱 ירושלים" : "🇮🇱 Jerusalem"}
            </span>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <span className="text-gold-400/60 text-sm hidden sm:inline">
              {dict.contact.hoursText}
            </span>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <a href="tel:+972502246139" className="text-gold-400/80 hover:text-gold-300 text-sm transition">
              050-224-6139
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/booking/`}
              className="group relative bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-gold-500/25 overflow-hidden"
            >
              <span className="relative z-10">{dict.hero.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
            <a
              href="https://wa.me/972502246139?text=Hi, I want to book a taxi"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 hover:bg-green-400 text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">{dict.hero.whatsapp}</span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: "⏱️", title: locale === "ar" ? "دقة في المواعيد" : locale === "he" ? "דייקנות" : "Always Punctual" },
              { icon: "🛡️", title: locale === "ar" ? "آمن وموثوق" : locale === "he" ? "בטוח ואמין" : "Safe & Reliable" },
              { icon: "💬", title: locale === "ar" ? "3 لغات" : locale === "he" ? "3 שפות" : "3 Languages" },
            ].map(({ icon, title }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="text-3xl">{icon}</span>
                <span className="text-gray-200 text-sm font-medium">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
