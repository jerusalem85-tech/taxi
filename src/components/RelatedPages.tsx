import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/server";
import Link from "next/link";

const pageRoutes = [
  { key: "home", path: "" },
  { key: "about", path: "about" },
  { key: "services", path: "services" },
  { key: "prices", path: "prices" },
  { key: "tourism", path: "tourism" },
  { key: "booking", path: "booking" },
  { key: "contact", path: "contact" },
] as const;

export default function RelatedPages({
  dict,
  locale,
  currentPath,
}: {
  dict: Dictionary;
  locale: Locale;
  currentPath: string;
}) {
  const related = pageRoutes.filter((p) => {
    if (p.key === "home") return currentPath !== "/";
    return !currentPath.includes(p.path);
  });

  return (
    <section className="py-16 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gold-400 mb-8 text-center">
          {dict.relatedPages.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {related.map((page) => (
            <Link
              key={page.key}
              href={`/${locale}/${page.path}`}
              className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-center text-sm font-medium text-gray-300 hover:text-gold-400 transition-all duration-300"
            >
              {dict.relatedPages[page.key as keyof typeof dict.relatedPages]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
