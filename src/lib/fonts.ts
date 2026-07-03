import { Cairo } from "next/font/google";

export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
  preload: true,
  fallback: ["system-ui", "arial", "sans-serif"],
});
