"use client";

import { useState, useEffect } from "react";
import type { Dictionary } from "@/i18n/server";

export default function DarkModeToggle({ dict }: { dict?: Dictionary }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("jt_dark_mode");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = saved ? saved === "on" : prefers;
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("jt_dark_mode", next ? "on" : "off");
  };

  const t = dict?.darkMode;

  return (
    <button
      onClick={toggle}
      aria-label={t?.toggle || "Toggle dark mode"}
      className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-gold-400 hover:bg-white/5 transition-colors"
    >
      {dark ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
