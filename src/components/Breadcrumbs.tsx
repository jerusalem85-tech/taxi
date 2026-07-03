import type { Locale } from "@/i18n/config";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  items,
  locale,
}: {
  items: BreadcrumbItem[];
  locale: Locale;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://jerusalemtaxi.com/${locale}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-400">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {item.href ? (
                <a href={`/${locale}${item.href}`} className="hover:text-gold-500 transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-600 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
