"use client";

import { useState, useEffect, useCallback } from "react";
import type { Dictionary } from "@/i18n/server";

export default function TestimonialsCarousel({ dict }: { dict: Dictionary }) {
  const testimonials = (dict.testimonials as any).items;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), [testimonials.length]);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    [testimonials.length]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, paused]);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jerusalem Taxi",
    review: testimonials.map((t: any) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.text,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: testimonials.length,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <section className="py-20 bg-gray-50 jerusalem-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-4">
              {dict.testimonials.title}
            </h2>
          </div>

          <div
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="text-gold-400 text-5xl mb-4 leading-none">&ldquo;</div>

            <div className="overflow-hidden relative min-h-[140px]">
              {testimonials.map((t: any, idx: number) => (
                <div
                  key={idx}
                  className={`transition-opacity duration-500 ${idx === current ? "opacity-100 relative" : "opacity-0 absolute inset-0"}`}
                >
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">{t.name}</div>
                      <div className="text-gray-400 text-sm">{t.city}</div>
                    </div>
                    <div className="flex gap-0.5 ml-auto">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full bg-navy-50 hover:bg-navy-900 text-navy-900 hover:text-gold-400 flex items-center justify-center transition-colors"
                >
                  ‹
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_: any, i: number) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-gold-500" : "w-2 bg-gray-300"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full bg-navy-50 hover:bg-navy-900 text-navy-900 hover:text-gold-400 flex items-center justify-center transition-colors"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
