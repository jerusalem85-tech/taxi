import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";

export default function LocaleNotFound({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : "en";

  const copy = {
    en: { title: "Page Not Found", text: "The page you are looking for does not exist or has been moved.", back: "Back to Home" },
    ar: { title: "الصفحة غير موجودة", text: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.", back: "العودة للرئيسية" },
    he: { title: "הדף לא נמצא", text: "הדף שחיפשת אינו קיים או הועבר.", back: "חזרה לדף הבית" },
  }[locale];

  const dir = locale === "ar" || locale === "he" ? "rtl" : "ltr";

  return (
    <div style={{ textAlign: "center", padding: "2rem", maxWidth: "480px", margin: "0 auto" }}>
      <div style={{ fontSize: "6rem", fontWeight: 900, color: "#f59e0b", lineHeight: 1 }}>404</div>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{copy.title}</h1>
      <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>{copy.text}</p>
      <Link
        href={`/${locale}/`}
        dir={dir}
        style={{
          display: "inline-block",
          backgroundColor: "#f59e0b",
          color: "#0f1d3d",
          fontWeight: 700,
          padding: "0.75rem 2rem",
          borderRadius: "1rem",
          textDecoration: "none",
        }}
      >
        {copy.back}
      </Link>
    </div>
  );
}
