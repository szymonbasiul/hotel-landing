"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { assets } from "@/data/assets";

export default function StayTimeline() {
  const { t } = useLanguage();
  const [activeDay, setActiveDay] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-40 px-6 bg-ivory"
      aria-label="Your stay timeline"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-stone/60">
            {t.timelineEyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-warm-black mt-3 tracking-tight">
            {t.timelineHeading}
          </h2>
        </motion.div>

        <div className="hidden md:grid grid-cols-12 gap-12 items-start">
          <div className="col-span-5 space-y-0">
            {t.timeline.map((day, i) => (
              <motion.button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`block w-full text-left py-6 border-t transition-all duration-500 ${
                  activeDay === day.day
                    ? "border-warm-black"
                    : "border-sand/30 hover:border-stone/50"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                aria-label={`View day ${day.day}`}
              >
                <span
                  className={`text-xs tracking-[0.2em] uppercase block mb-2 transition-colors duration-500 ${
                    activeDay === day.day
                      ? "text-warm-black"
                      : "text-stone/50"
                  }`}
                >
                  {day.title}
                </span>
                <ul
                  className={`space-y-1 transition-all duration-500 ${
                    activeDay === day.day
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {day.events.map((event) => (
                    <li
                      key={event}
                      className="text-sm text-stone font-light flex items-center gap-2"
                    >
                      <span className="w-0.5 h-0.5 bg-stone/40 rounded-full" />
                      {event}
                    </li>
                  ))}
                </ul>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="col-span-7 aspect-[4/3] w-full sticky top-32"
            key={activeDay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${assets.timeline[activeDay - 1]})` }}
            />
          </motion.div>
        </div>

        <div className="md:hidden space-y-8">
          {t.timeline.map((day, i) => (
            <motion.div
              key={day.day}
              className="relative pl-8 border-l-2 border-sand/30"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-sand border-2 border-ivory" />
              <span className="text-xs tracking-[0.2em] uppercase text-stone/60 block mb-3">
                {day.title}
              </span>
              <ul className="space-y-2">
                {day.events.map((event) => (
                  <li
                    key={event}
                    className="text-sm text-dark-olive font-light flex items-center gap-2"
                  >
                    <span className="w-0.5 h-0.5 bg-dark-olive/30 rounded-full" />
                    {event}
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${assets.timeline[i]})` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
