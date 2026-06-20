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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-fade-in"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1597935258735-206d1c7f9e24?w=1920&q=85')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/75 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="jerusalem-hex" patternUnits="userSpaceOnUse" width="80" height="80">
              <path d="M40 0 L73.3 20 L73.3 60 L40 80 L6.7 60 L6.7 20 Z" fill="none" stroke="#C4A265" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="2" fill="#C4A265" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jerusalem-hex)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 border border-gold-500/10 rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 border border-gold-400/10 rounded-full animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5 mb-10 animate-float">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-gold-200/90 text-sm font-semibold tracking-wide">
              {dict.hero.badgeText}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight text-shadow">
            <span className="gold-text text-shadow-gold">{dict.site.name.split(" ")[0]}</span>
            <br />
            <span>{dict.site.name.split(" ")[1]}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200/90 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
            {dict.hero.subtitle}
          </p>

          <div className="flex items-center justify-center gap-5 mb-10 text-sm">
            <span className="text-gold-400/70 hidden sm:inline font-semibold">
              🇮🇱 {dict.hero.location}
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-gray-400 hidden sm:inline">{dict.contact.hoursText}</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href="tel:+972502246139"
              className="text-gold-400/80 hover:text-gold-300 font-semibold transition-colors"
            >
              050-224-6139
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`/${locale}/booking/`}
              className="group relative bg-gold-500 hover:bg-gold-400 text-navy-900 font-extrabold text-lg py-4 px-10 rounded-2xl transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-gold-500/30 hover:shadow-gold-400/40 overflow-hidden inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">{dict.hero.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </Link>
            <a
              href={`https://wa.me/972502246139?text=${encodeURIComponent(dict.whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 hover:bg-green-400 text-white font-extrabold text-lg py-4 px-10 rounded-2xl transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-green-500/30 hover:shadow-green-400/40 flex items-center justify-center gap-2.5"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">{dict.hero.whatsapp}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "⏱️", title: dict.hero.stats.punctual },
              { icon: "🛡️", title: dict.hero.stats.safe },
              { icon: "💬", title: dict.hero.stats.languages },
            ].map(({ icon, title }) => (
              <div
                key={title}
                className="group flex flex-col items-center gap-2.5 p-5 rounded-2xl glass hover:bg-white/[0.12] transition-all duration-300 cursor-default"
              >
                <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
                <span className="text-gray-200/80 text-sm font-semibold">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
