"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function BookingCard() {
  const { t } = useLanguage();

  return (
    <>
      <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-0 z-30 pr-6">
        <div
          id="booking"
          className="w-72 bg-ivory/80 backdrop-blur-xl border border-sand/30 shadow-2xl"
        >
          <div className="p-6">
            <h3 className="text-sm tracking-[0.15em] uppercase text-dark-olive font-medium mb-1">
              {t.name}
            </h3>
            <p className="text-xs text-stone font-light mb-4">
              {t.duration}
            </p>

            <ul className="space-y-2 mb-6">
              {t.inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-dark-olive/80"
                >
                  <span className="w-1 h-1 rounded-full bg-dark-olive/30" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <span className="text-2xl font-light text-warm-black">
                {t.price.toLocaleString()}{" "}
                <span className="text-xs text-stone">{t.currency}</span>
              </span>
              <p className="text-[10px] text-stone tracking-wide mt-0.5">
                {t.priceLabel}
              </p>
            </div>

            <a
              href="#book"
              className="block w-full py-3 text-center text-xs tracking-[0.15em] uppercase text-ivory bg-warm-black hover:bg-dark-olive transition-colors duration-500"
              aria-label={t.bookNow}
            >
              {t.bookNow}
            </a>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30">
        <div className="bg-ivory/90 backdrop-blur-xl border-t border-sand/30 shadow-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.1em] uppercase text-dark-olive font-medium">
                {t.name}
              </p>
              <p className="text-lg font-light text-warm-black">
                {t.price.toLocaleString()}{" "}
                <span className="text-[10px] text-stone">{t.currency}</span>
              </p>
            </div>
            <a
              href="#book"
              className="px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-ivory bg-warm-black hover:bg-dark-olive transition-colors duration-500"
              aria-label={t.bookNow}
            >
              {t.bookNow}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
