"use client";

import { useState, useEffect } from "react";
import type { Dictionary } from "@/i18n/server";

export default function CookieConsent({ dict, gaId }: { dict?: Dictionary; gaId?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no prior choice and analytics is configured
    if (typeof window === "undefined") return;
    const choice = localStorage.getItem("jt_cookie_consent");
    if (!choice) {
      setVisible(true);
    }
  }, []);

  const choose = (accept: boolean) => {
    localStorage.setItem("jt_cookie_consent", accept ? "accepted" : "declined");
    setVisible(false);
    if (accept && gaId) {
      loadGA(gaId);
    }
  };

  const t = dict?.analytics;

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-t border-white/10 px-4 py-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-gray-300 flex-1">
          {t?.cookiesText || "We use analytics to improve your experience. You can accept or decline."}
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => choose(false)}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-300 hover:text-white border border-white/20 transition-colors"
          >
            {t?.decline || "Decline"}
          </button>
          <button
            onClick={() => choose(true)}
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-gold-500 hover:bg-gold-400 text-navy-900 transition-colors"
          >
            {t?.accept || "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Loads Google Analytics 4 (only after consent)
function loadGA(gaId: string) {
  if (typeof window === "undefined" || (window as any).gtag) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag = function gtag() {
    (window as any).dataLayer.push(arguments);
  };
  (window as any).gtag("js", new Date());
  (window as any).gtag("config", gaId);
}
