"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Hero from "@/components/Hero";
import BookingCard from "@/components/BookingCard";
import EditorialIntro from "@/components/EditorialIntro";
import StorySection from "@/components/StorySection";
import PackageComposition from "@/components/PackageComposition";
import StayTimeline from "@/components/StayTimeline";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-12 px-6 bg-warm-black text-center">
      <p className="text-xs tracking-[0.15em] uppercase text-stone/40">
        {t.footerText} {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative bg-ivory">
      <Hero />
      <BookingCard />
      <EditorialIntro />
      <StorySection />
      <PackageComposition />
      <StayTimeline />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
