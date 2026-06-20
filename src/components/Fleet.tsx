import type { Dictionary } from "@/i18n/server";
import type { Locale } from "@/i18n/config";

export default function Fleet({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const vehicles = [
    {
      key: "standard",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8M8 11h8M8 15h5M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      seats: "4",
      bags: "3",
    },
    {
      key: "minivan",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 6h18M3 18h18M9 6v12M15 6v12" />
        </svg>
      ),
      seats: "7",
      bags: "6",
    },
    {
      key: "vip",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
      seats: "4",
      bags: "4",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="gold-text text-sm font-semibold uppercase tracking-widest mb-2 block">
            {dict.fleet.overline}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">
            {dict.fleet.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {dict.fleet.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map(({ key, icon, seats, bags }) => {
            const vehicle = (dict.fleet as any)?.[key];
            if (!vehicle) return null;
            return (
              <div
                key={key}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-300 hover:-translate-y-3"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold-50 to-transparent rounded-tr-3xl rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-gold-500/30">
                  <svg className="w-5 h-5 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="w-20 h-20 bg-navy-50 rounded-2xl flex items-center justify-center text-navy-600 group-hover:bg-navy-900 group-hover:text-gold-400 transition-all duration-500 mb-6 group-hover:scale-110 group-hover:shadow-xl">
                  {icon}
                </div>

                <h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-navy-800">
                  {vehicle.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {vehicle.desc}
                </p>

                <div className="flex gap-5 pt-5 border-t border-gray-100 group-hover:border-gold-200 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-navy-50 rounded-lg flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                      <svg className="w-3.5 h-3.5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 font-semibold">{seats} {dict.fleet.seats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-navy-50 rounded-lg flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                      <svg className="w-3.5 h-3.5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 font-semibold">{bags} {dict.fleet.bags}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
