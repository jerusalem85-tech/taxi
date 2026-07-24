import type { MetadataRoute } from "next";

const siteUrl = "https://jerusalemtaxi.com";
const locales = ["en", "ar", "he"] as const;
const pages = [
  { path: "", priority: 1.0, changefreq: "weekly" },
  { path: "about", priority: 0.7, changefreq: "monthly" },
  { path: "services", priority: 0.9, changefreq: "weekly" },
  { path: "prices", priority: 0.8, changefreq: "weekly" },
  { path: "tourism", priority: 0.8, changefreq: "weekly" },
  { path: "booking", priority: 0.9, changefreq: "weekly" },
  { path: "contact", priority: 0.7, changefreq: "monthly" },
  { path: "accessibility", priority: 0.5, changefreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split("T")[0];

  const urls: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const path = page.path ? `/${locale}/${page.path}/` : `/${locale}/`;
      const alternates: Record<string, string> = {};
      for (const altLocale of locales) {
        alternates[altLocale] = page.path
          ? `${siteUrl}/${altLocale}/${page.path}/`
          : `${siteUrl}/${altLocale}/`;
      }
      alternates["x-default"] = page.path
        ? `${siteUrl}/en/${page.path}/`
        : `${siteUrl}/en/`;

      urls.push({
        url: `${siteUrl}${path}`,
        lastModified,
        changeFrequency: page.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority: page.priority,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return urls;
}
