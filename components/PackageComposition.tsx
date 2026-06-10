"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import type { PackageContent } from "@/data/package";
import { assets } from "@/data/assets";

function Hotspot({
  item,
  index,
  activeId,
  setActiveId,
}: {
  item: PackageContent["composition"][number];
  index: number;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  const isActive = activeId === item.id;
  const positions = [
    "top-[8%] left-[10%]",
    "top-[8%] right-[10%]",
    "top-[42%] left-[4%]",
    "bottom-[8%] left-[10%]",
    "bottom-[8%] right-[10%]",
  ];

  return (
    <div className={`absolute ${positions[index]} z-10`}>
      <button
        onClick={() => setActiveId(isActive ? null : item.id)}
        className="group relative flex items-center gap-2"
        aria-label={`Toggle ${item.label}`}
        aria-expanded={isActive}
      >
        <span
          className={`w-8 h-8 rounded-full border-2 transition-all duration-500 flex items-center justify-center
            ${
              isActive
                ? "bg-warm-black border-warm-black text-ivory scale-110"
                : "bg-warm-black/70 border-warm-black/60 text-ivory hover:bg-warm-black hover:border-warm-black hover:scale-105"
            }`}
        >
          <span className="text-[10px] tracking-widest">+</span>
        </span>
        <span
          className={`text-xs tracking-[0.15em] uppercase px-2 py-0.5 rounded transition-all duration-300
            ${
              isActive
                ? "text-warm-black font-medium bg-ivory/90"
                : "text-ivory bg-warm-black/50"
            }`}
        >
          {item.label}
        </span>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute top-full left-0 mt-3 w-56 bg-ivory border border-sand/30 shadow-xl p-4"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h4 className="text-sm font-medium text-warm-black mb-1">
              {item.title}
            </h4>
            <p className="text-xs leading-relaxed text-stone font-light">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({ items }: { items: PackageContent["composition"] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border-b border-sand/20 pb-3"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex items-center justify-between w-full py-3 text-left"
              aria-expanded={isOpen}
              aria-label={`Toggle ${item.label}`}
            >
              <span className="text-sm tracking-[0.15em] uppercase text-dark-olive font-medium">
                {item.label}
              </span>
              <span
                className={`text-lg text-stone transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-4">
                    <h4 className="text-sm font-medium text-warm-black mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-stone font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function PackageComposition() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      className="relative py-28 md:py-40 px-6 bg-ivory-dark/30"
      aria-label="Package composition"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-stone/60">
            {t.compositionEyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-warm-black mt-3 tracking-tight">
            {t.compositionHeading}
          </h2>
        </div>

          <div className="hidden lg:block relative aspect-[16/9] max-w-4xl mx-auto">
          <div
            className="h-full w-full bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url(${assets.composition})` }}
          />

          {t.composition.map((item, i) => (
            <Hotspot
              key={item.id}
              item={item}
              index={i}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>

        <div className="lg:hidden max-w-lg mx-auto">
          <MobileAccordion items={t.composition} />
        </div>
      </div>
    </section>
  );
}
