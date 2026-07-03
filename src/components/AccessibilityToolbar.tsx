"use client";

import { useState, useEffect, useCallback } from "react";

export default function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle("grayscale", grayscale);
  }, [grayscale]);

  const reset = useCallback(() => {
    setFontSize(100);
    setHighContrast(false);
    setGrayscale(false);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-navy-900 text-gold-400 rounded-full shadow-lg hover:bg-navy-800 transition-all flex items-center justify-center text-lg"
        aria-label="Accessibility options"
      >
        ♿
      </button>

      {open && (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 mt-14 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-4 w-56">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-navy-900">Accessibility</span>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 text-sm">&times;</button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-semibold text-gray-500 mb-1">Font Size: {fontSize}%</p>
              <div className="flex gap-1">
                <button onClick={() => setFontSize((s) => Math.max(70, s - 10))} className="flex-1 text-xs bg-gray-100 hover:bg-gray-200 rounded py-1 font-semibold">A-</button>
                <button onClick={() => setFontSize(100)} className="flex-1 text-xs bg-gray-100 hover:bg-gray-200 rounded py-1 font-semibold">Reset</button>
                <button onClick={() => setFontSize((s) => Math.min(200, s + 10))} className="flex-1 text-xs bg-gray-100 hover:bg-gray-200 rounded py-1 font-semibold">A+</button>
              </div>
            </div>

            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full text-xs font-semibold py-2 rounded-lg transition-all ${highContrast ? "bg-navy-900 text-gold-400" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {highContrast ? "✓ High Contrast" : "High Contrast"}
            </button>

            <button
              onClick={() => setGrayscale(!grayscale)}
              className={`w-full text-xs font-semibold py-2 rounded-lg transition-all ${grayscale ? "bg-navy-900 text-gold-400" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {grayscale ? "✓ Grayscale" : "Grayscale"}
            </button>

            <button onClick={reset} className="w-full text-xs font-semibold py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all">
              Reset All
            </button>
          </div>
        </div>
      )}
    </>
  );
}
