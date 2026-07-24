"use client";

import { useState, useMemo } from "react";
import { tourismCompanies, categoryLabels, categoryIcons } from "@/data/tourism-directory";
import type { Dictionary } from "@/i18n/server";
import type { Locale } from "@/i18n/config";

export default function TourismDirectory({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(tourismCompanies.map((c) => c.category)))];

  const filtered = useMemo(() => {
    return tourismCompanies.filter((c) => {
      const matchCategory = activeCategory === "all" || c.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        (c.nameAr || "").includes(q) ||
        (c.nameHe || "").includes(q) ||
        (c.phone || "").includes(q) ||
        (c.area || "").toLowerCase().includes(q) ||
        (c.address || "").toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  const t = dict.tourismPage;
  const categoriesTranslated = t.categories;

  return (
    <section className="py-20 bg-white jerusalem-pattern min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="gold-text text-sm font-semibold uppercase tracking-widest mb-2 block">
            {t.overline}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">
            {t.title}
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all bg-gray-50 focus:bg-white text-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const label = cat === "all" ? t.all : categoriesTranslated[cat as keyof typeof categoriesTranslated];
            const icon = cat === "all" ? "📋" : categoryIcons[cat as keyof typeof categoryIcons];
            const count = cat === "all" ? tourismCompanies.length : tourismCompanies.filter((c) => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-navy-900 text-gold-400 shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
                <span className={`text-xs ml-1 ${isActive ? "text-gold-300" : "text-gray-400"}`}>({count})</span>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">{t.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold-200 transition-all duration-300 p-6 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{categoryIcons[company.category]}</span>
                    <div>
                      <h3 className="font-bold text-navy-900 text-sm">
                        {locale === "ar" && company.nameAr ? company.nameAr : locale === "he" && company.nameHe ? company.nameHe : company.name}
                      </h3>
                      {locale !== "ar" && company.nameAr && (
                        <p className="text-xs text-gray-400">{company.nameAr}</p>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded-md whitespace-nowrap">
                    {categoriesTranslated[company.category as keyof typeof categoriesTranslated]}
                  </span>
                </div>

                <div className="space-y-1.5 text-sm text-gray-500 mb-4">
                  {company.area && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">📍</span>
                      <span>{company.area}</span>
                    </div>
                  )}
                  {company.address && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">🏠</span>
                      <span className="text-xs">{company.address}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {company.phone && (
                    <a
                      href={`tel:+972${company.phone.replace(/[^0-9]/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-navy-50 text-navy-700 px-3 py-1.5 rounded-lg hover:bg-navy-900 hover:text-gold-400 transition-all"
                    >
                      📞 {company.phone}
                    </a>
                  )}
                  {company.whatsapp && (
                    <a
                      href={`https://wa.me/${company.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-green-50 text-green-700 px-3 py-1.5 rounded-lg hover:bg-green-500 hover:text-white transition-all"
                    >
                      💬 WhatsApp
                    </a>
                  )}
                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                    >
                      🌐 Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10 text-xs text-gray-400">
          {t.showing} {filtered.length} {t.of} {tourismCompanies.length} {t.companies}
        </div>
      </div>
    </section>
  );
}
