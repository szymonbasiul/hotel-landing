"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Nav() {
  const { lang, t, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-ivory/90 backdrop-blur-xl border-b border-sand/20"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a
            href="#"
            className={`text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-500 ${
              scrolled ? "text-warm-black" : "text-ivory"
            }`}
          >
            {t.name}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {t.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-60 ${
                  scrolled ? "text-dark-olive" : "text-ivory/80"
                }`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={toggleLang}
              className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ml-4 pl-4 border-l cursor-pointer ${
                scrolled
                  ? "text-dark-olive border-dark-olive/20 hover:text-warm-black"
                  : "text-ivory/80 border-ivory/20 hover:text-ivory"
              }`}
              aria-label={`Switch language to ${lang === "pl" ? "English" : "Polish"}`}
            >
              {lang === "pl" ? "EN" : "PL"}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden relative w-6 h-5 flex flex-col justify-between"
            aria-label="Open menu"
          >
            <span
              className={`block h-px w-full transition-colors duration-500 ${
                scrolled ? "bg-warm-black" : "bg-ivory"
              }`}
            />
            <span
              className={`block h-px w-full transition-colors duration-500 ${
                scrolled ? "bg-warm-black" : "bg-ivory"
              }`}
            />
            <span
              className={`block h-px w-full transition-colors duration-500 ${
                scrolled ? "bg-warm-black" : "bg-ivory"
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-ivory flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-sand/20">
              <span className="text-sm tracking-[0.2em] uppercase text-warm-black font-medium">
                {t.name}
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-dark-olive font-light leading-none"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-10 px-6">
              {t.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl tracking-[0.15em] uppercase text-dark-olive font-light hover:text-warm-black transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => { toggleLang(); setMenuOpen(false); }}
                className="text-sm tracking-[0.2em] uppercase text-stone/60 border-t border-sand/20 pt-8 mt-8 w-full text-center hover:text-dark-olive transition-colors cursor-pointer"
              >
                {lang === "pl" ? "Switch to English" : "Przełącz na polski"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
