"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 px-6 bg-ivory"
      aria-label="Guest testimonials"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-stone/60">
            {t.testimonialsEyebrow}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {t.testimonials.map((quote, i) => (
            <motion.blockquote
              key={quote.id}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="text-5xl font-light text-sand/40 leading-none block mb-4">
                &ldquo;
              </span>
              <p className="text-sm md:text-base leading-relaxed text-stone font-light mb-6">
                {quote.quote}
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block text-xs tracking-[0.1em] uppercase text-dark-olive font-medium">
                    {quote.author}
                  </span>
                  <span className="block text-[10px] tracking-wide text-stone/60 mt-0.5">
                    {quote.location}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center border-t border-sand/20 pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xs tracking-[0.15em] uppercase text-stone/50">
            {t.trustBar}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
