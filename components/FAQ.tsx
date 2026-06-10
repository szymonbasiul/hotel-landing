"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import type { PackageContent } from "@/data/package";

function FAQItem({
  item,
  isOpen,
  toggle,
}: {
  item: PackageContent["faq"][number];
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-sand/20">
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full py-5 text-left group"
        aria-expanded={isOpen}
        aria-label={`Toggle FAQ: ${item.q}`}
      >
        <span className="text-sm md:text-base text-dark-olive font-light pr-4 group-hover:text-warm-black transition-colors">
          {item.q}
        </span>
        <span
          className={`shrink-0 text-xl text-stone/50 transition-transform duration-300 ${
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
            <p className="pb-5 text-sm leading-relaxed text-stone font-light max-w-xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="faq"
      className="relative py-28 md:py-40 px-6 bg-ivory-dark/30"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-stone/60">
            {t.faqEyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-warm-black mt-3 tracking-tight">
            {t.faqHeading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.faq.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
