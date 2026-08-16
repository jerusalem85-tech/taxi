"use client";

import { useState, useMemo } from "react";
import type { Dictionary } from "@/i18n/server";
import type { Locale } from "@/i18n/config";
import { routes } from "@/data/routes";

const PHONE = "972548338706";

const vehicleMultiplier: Record<string, number> = {
  standard: 1,
  minivan: 1.5,
  vip: 2,
};

export default function QuoteWidget({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const t = dict.quote;
  const [from, setFrom] = useState(routes[0].slug);
  const [vehicle, setVehicle] = useState<keyof typeof vehicleMultiplier>("standard");

  const selected = useMemo(() => routes.find((r) => r.slug === from), [from]);
  const mult = vehicleMultiplier[vehicle];

  const priceLow = selected ? Math.round(selected.priceLow * mult) : 0;
  const priceHigh = selected ? Math.round(selected.priceHigh * mult) : 0;

  const fromLabel = (r: (typeof routes)[number]) =>
    locale === "ar" ? `${r.fromAr} → ${r.toAr}` : locale === "he" ? `${r.fromHe} → ${r.toHe}` : `${r.from} → ${r.to}`;

  const message = selected
    ? `Hi, I'd like a quote for a ${vehicle} taxi from ${selected.from} to ${selected.to} (estimated ₪${priceLow}-₪${priceHigh}).`
    : "Hi, I'd like a taxi quote";

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition bg-white text-sm";

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 jerusalem-pattern" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2 block">
            {t.overline}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{t.title}</h2>
          <p className="text-gray-400 max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-navy-800 mb-2">{t.fromLabel}</label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className={inputClass}
              >
                {routes.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.from} → {r.to}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-800 mb-2">{t.vehicleLabel}</label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value as keyof typeof vehicleMultiplier)}
                className={inputClass}
              >
                <option value="standard">{t.standard}</option>
                <option value="minivan">{t.minivan}</option>
                <option value="vip">{t.vip}</option>
              </select>
            </div>
          </div>

          {selected && (
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-500 mb-1">{t.estimatedPrice}</div>
              <div className="text-4xl md:text-5xl font-black text-navy-900">
                ₪{priceLow}{priceHigh !== priceLow ? `–₪${priceHigh}` : ""}
              </div>
              <div className="text-xs text-gray-400 mt-1">{t.perTrip}</div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a
                  href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                >
                  {t.bookNow}
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-4">{t.note}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
