"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { assets } from "@/data/assets";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      className="relative h-dvh w-full overflow-hidden"
      aria-label="Hero section"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-warm-black/60 via-warm-black/40 to-warm-black/70 z-10"
        style={{ opacity }}
      />

      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale, y }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={assets.hero.poster}
          className="h-full w-full object-cover"
        >
          <source src={assets.hero.video} type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-ivory">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            className="inline-block mb-6 text-xs tracking-[0.3em] uppercase text-sand-light/80 font-medium"
            variants={childVariants}
          >
            {t.eyebrow}
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-balance mb-6"
            variants={childVariants}
          >
            {t.tagline}
          </motion.h1>

          <motion.p
            className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-sand-light/80 font-light"
            variants={childVariants}
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            variants={childVariants}
          >
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-ivory/30 text-ivory text-sm tracking-[0.15em] uppercase hover:bg-ivory hover:text-warm-black transition-all duration-500"
              aria-label={t.cta}
            >
              {t.cta}
            </a>
            <a
              href="#package"
              className="inline-flex items-center justify-center px-8 py-3.5 text-ivory/70 text-sm tracking-[0.15em] uppercase hover:text-ivory transition-colors duration-300"
              aria-label={t.secondaryCta}
            >
              {t.secondaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-ivory/50">
          <span className="text-[10px] tracking-[0.2em] uppercase">{t.scrollLabel}</span>
          <div className="w-px h-12 bg-gradient-to-b from-ivory/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
