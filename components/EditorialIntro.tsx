"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function EditorialIntro() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 px-6 bg-ivory"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-7">
            <motion.blockquote
              className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] text-warm-black tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              &ldquo;{t.intro}&rdquo;
            </motion.blockquote>
          </div>

          <motion.div
            className="md:col-span-5 aspect-[4/5] w-full"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="h-full w-full bg-gradient-to-br from-sand-light via-stone/20 to-sand flex items-center justify-center">
              <span className="text-stone/40 text-xs tracking-[0.2em] uppercase">
                Editorial Image
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
