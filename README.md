# Weekend Wellness Escape — Hotel Landing Page

Premium landing page for a luxury hotel package built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run lint
```

## Project structure

```
app/
  globals.css        — Tailwind design tokens, keyframes
  layout.tsx         — Root layout with Playfair Display font
  page.tsx           — Assembles all sections
components/
  Hero.tsx           — Cinematic fullscreen hero
  BookingCard.tsx    — Sticky desktop / fixed mobile booking card
  EditorialIntro.tsx — Large magazine-style quote
  StorySection.tsx   — 5 scrollable storytelling sections
  PackageComposition.tsx — Interactive hotspots / accordion
  StayTimeline.tsx   — Sticky desktop timeline / mobile vertical
  Gallery.tsx        — Editorial masonry gallery
  Testimonials.tsx   — Guest quotes
  FAQ.tsx            — Accordion FAQ
  FinalCTA.tsx       — Emotional closing section
data/
  package.ts         — All package content and copy
```
