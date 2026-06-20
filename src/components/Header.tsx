"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/i18n/server";
import type { Locale } from "@/i18n/config";
import { localeNames, locales } from "@/i18n/config";

export default function Header({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}/`, label: dict.nav.home },
    { href: `/${locale}/services/`, label: dict.nav.services },
    { href: `/${locale}/prices/`, label: dict.nav.prices },
    { href: `/${locale}/booking/`, label: dict.nav.booking },
    { href: `/${locale}/contact/`, label: dict.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={`/${locale}/`}
            className="text-xl font-bold text-primary-600 flex items-center gap-2"
          >
            <span className="text-2xl">🚕</span>
            <span>{dict.site.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher locale={locale} />
            <a
              href="https://wa.me/972500000000?text=مرحباً، أريد حجز تاكسي"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
            >
              {dict.cta.whatsapp}
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-3 py-2">
                <LanguageSwitcher locale={locale} />
              </div>
              <a
                href="https://wa.me/972500000000?text=مرحباً، أريد حجز تاكسي"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 mt-1 mx-2"
              >
                {dict.cta.whatsapp}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex gap-1">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}/`}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            locale === l
              ? "bg-primary-500 text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {localeNames[l]}
        </Link>
      ))}
    </div>
  );
}
