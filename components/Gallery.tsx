"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { assets } from "@/data/assets";

const gridPlacement = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-3 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
];

const aspectClasses = [
  "aspect-[4/5] md:row-span-2",
  "aspect-[4/3]",
  "aspect-square md:row-span-2 md:col-span-2",
  "aspect-[4/3]",
  "aspect-[3/4] md:row-span-2",
  "aspect-video md:col-span-2",
];

export default function Gallery() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="gallery"
      className="relative py-28 md:py-40 px-6 bg-ivory-dark/30"
      aria-label="Gallery"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-stone/60">
            {t.galleryEyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-warm-black mt-3 tracking-tight">
            {t.galleryHeading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {t.gallery.map((item, i) => (
            <motion.div
              key={item.label}
              className={`relative overflow-hidden group cursor-pointer ${gridPlacement[i]} ${aspectClasses[i]}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${assets.gallery[i]})` }}
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-warm-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs text-ivory/80 font-light">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
