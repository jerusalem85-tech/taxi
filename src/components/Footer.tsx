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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🚕</span>
              <span>{dict.site.name}</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {dict.site.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              {dict.contact.title}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:+972500000000"
                  className="hover:text-white transition-colors"
                >
                  050-000-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>{dict.contact.addressText}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a
                  href="mailto:info@jerusalemtaxi.com"
                  className="hover:text-white transition-colors"
                >
                  info@jerusalemtaxi.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>{dict.contact.hoursText}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {dict.site.name}. {dict.footer.rights}
          .
        </div>
      </div>
    </footer>
  );
}
