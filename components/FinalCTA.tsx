"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7]);

  return (
    <section
      ref={ref}
      className="relative h-[80dvh] min-h-[600px] overflow-hidden"
      aria-label="Final call to action"
    >
      <motion.div className="absolute inset-0" style={{ scale }}>
        <div className="h-full w-full bg-gradient-to-br from-warm-black via-dark-olive to-stone" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,240,235,0.05) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        style={{ opacity }}
      >
        <motion.span
          className="text-xs tracking-[0.3em] uppercase text-sand-light/50 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.eyebrow}
        </motion.span>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-ivory text-balance mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.finalHeadline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#book"
            className="inline-flex items-center justify-center px-10 py-4 border border-ivory/30 text-ivory text-sm tracking-[0.15em] uppercase hover:bg-ivory hover:text-warm-black transition-all duration-500"
            aria-label={t.cta}
          >
            {t.cta}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
