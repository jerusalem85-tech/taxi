import Link from "next/link";
import type { Dictionary } from "@/i18n/server";
import type { Locale } from "@/i18n/config";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const links = [
    { href: `/${locale}/`, label: dict.nav.home },
    { href: `/${locale}/services/`, label: dict.nav.services },
    { href: `/${locale}/prices/`, label: dict.nav.prices },
    { href: `/${locale}/booking/`, label: dict.nav.booking },
    { href: `/${locale}/contact/`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center text-navy-900 font-extrabold text-lg">
                JT
              </span>
              <h3 className="text-xl font-extrabold">{dict.site.name}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {dict.site.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-6">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-6">
              {dict.contact.title}
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-sm">
                  📞
                </span>
                <a
                  href="tel:+972502246139"
                  className="hover:text-gold-400 transition-colors"
                >
                  050-224-6139
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-sm">
                  📍
                </span>
                <span>{dict.contact.addressText}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-sm">
                  ✉️
                </span>
                <a
                  href="mailto:info@jerusalemtaxi.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@jerusalemtaxi.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-sm">
                  🕐
                </span>
                <span>{dict.contact.hoursText}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {dict.site.name}. {dict.footer.rights}.
        </div>
      </div>
    </footer>
  );
}
