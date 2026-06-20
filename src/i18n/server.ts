import { locales, type Locale } from "./config";

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  ar: () => import("./dictionaries/ar.json").then((m) => m.default),
  he: () => import("./dictionaries/he.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  if (!locales.includes(locale)) {
    locale = "ar";
  }
  return dictionaries[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
