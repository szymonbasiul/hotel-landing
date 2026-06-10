"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import type { PackageContent } from "@/data/package";
import { assets } from "@/data/assets";

const storyAssets = [
  assets.story.arrival,
  assets.story.breakfast,
  assets.story.wellness,
  assets.story.dining,
  assets.story.spa,
];

function StoryItem({
  story,
  index,
}: {
  story: PackageContent["stories"][number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center min-h-[70dvh] py-20 md:py-28"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`md:col-span-5 ${index % 2 === 1 ? "md:order-2" : ""}`}
      >
        <span className="text-6xl md:text-8xl font-light text-sand/50 leading-none block mb-4">
          {story.number}
        </span>
        <h3 className="text-2xl md:text-3xl font-light text-warm-black mb-4 tracking-tight">
          {story.title}
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-stone font-light max-w-md">
          {story.description}
        </p>
      </div>

      <motion.div
        className={`md:col-span-7 aspect-[4/3] w-full overflow-hidden ${
          index % 2 === 1 ? "md:order-1" : ""
        }`}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={storyAssets[index]} type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
}

export default function StorySection() {
  const { t } = useLanguage();

  return (
    <section
      id="package"
      className="relative px-6 bg-ivory"
      aria-label="Package storytelling"
    >
      <div className="max-w-7xl mx-auto">
        <div className="sr-only">
          <h2>The Experience</h2>
        </div>
        {t.stories.map((story, i) => (
          <StoryItem key={story.number} story={story} index={i} />
        ))}
      </div>
    </section>
  );
}
