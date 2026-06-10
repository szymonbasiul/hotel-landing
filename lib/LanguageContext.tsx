"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { pl, en, type PackageContent } from "@/data/package";

type Lang = "pl" | "en";

interface LanguageContextValue {
  lang: Lang;
  t: PackageContent;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pl");

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "pl" ? "en" : "pl"));
  }, []);

  const t = lang === "pl" ? pl : en;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
