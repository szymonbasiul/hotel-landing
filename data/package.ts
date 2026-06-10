export interface PackageContent {
  name: string;
  eyebrow: string;
  tagline: string;
  subtitle: string;
  duration: string;
  price: number;
  currency: string;
  priceLabel: string;
  inclusions: string[];
  cta: string;
  secondaryCta: string;
  bookNow: string;
  intro: string;
  scrollLabel: string;
  stories: { number: string; title: string; description: string }[];
  composition: {
    id: string;
    label: string;
    title: string;
    description: string;
  }[];
  compositionEyebrow: string;
  compositionHeading: string;
  timeline: { day: number; title: string; events: string[] }[];
  timelineEyebrow: string;
  timelineHeading: string;
  gallery: { label: string; caption: string }[];
  galleryEyebrow: string;
  galleryHeading: string;
  testimonials: { id: string; quote: string; author: string; location: string }[];
  testimonialsEyebrow: string;
  trustBar: string;
  faq: { q: string; a: string }[];
  faqEyebrow: string;
  faqHeading: string;
  finalHeadline: string;
  navLinks: { label: string; href: string }[];
  footerText: string;
  dayImages: string[];
}

export const pl: PackageContent = {
  name: "Weekend Wellness Escape",
  eyebrow: "Weekend Wellness Escape",
  tagline: "Wolniejszy weekend nad wodą",
  subtitle: "Dwie noce cichych poranków, rytuałów odnowy i sezonowej kolacji.",
  duration: "2 noce",
  price: 2490,
  currency: "PLN",
  priceLabel: "od osoby / 2 noce",
  inclusions: [
    "Śniadanie w cenie",
    "Rytuał spa",
    "Kolacja degustacyjna",
  ],
  cta: "Rezerwuj pobyt",
  secondaryCta: "Poznaj pakiet",
  bookNow: "Rezerwuj",
  intro:
    "Stworzony dla tych, którzy chcą na chwilę zniknąć — w ciepłe wnętrza, cichą wodę, powolne jedzenie i dotyk regeneracji.",
  scrollLabel: "Przewiń",
  stories: [
    {
      number: "01",
      title: "Przyjazd",
      description:
        "Spokojne zameldowanie, drink powitalny i czas, by zadomowić się w pokoju.",
    },
    {
      number: "02",
      title: "Powolne Poranki",
      description:
        "Dwa śniadania z sezonowych składników, podawane bez pośpiechu.",
    },
    {
      number: "03",
      title: "Regeneracja",
      description:
        "50-minutowy rytuał spa zaprojektowany, by rozpuścić napięcie i przywrócić równowagę.",
    },
    {
      number: "04",
      title: "Smak",
      description:
        "Sezonowa kolacja degustacyjna inspirowana lokalnymi składnikami.",
    },
    {
      number: "05",
      title: "Woda i Cisza",
      description:
        "Nieograniczony dostęp do strefy wellness, basenu i cichych przestrzeni relaksu.",
    },
  ],
  composition: [
    {
      id: "suite",
      label: "Apartament",
      title: "Superior Suite",
      description:
        "Przestronny pokój z łazienką z naturalnego kamienia, prywatnym tarasem i widokiem na wodę.",
    },
    {
      id: "breakfast",
      label: "Śniadanie",
      title: "Sezonowe Śniadanie",
      description:
        "Lokalne pieczywo, jajka, owoce i świeżo tłoczony sok serwowane do południa.",
    },
    {
      id: "spa",
      label: "Spa",
      title: "50-minutowy Rytuał",
      description:
        "Masaż ciepłym olejkiem, ziołowa para i guided breathwork w komnacie przy świecach.",
    },
    {
      id: "dinner",
      label: "Kolacja",
      title: "Menu Degustacyjne",
      description:
        "Pięć dań inspirowanych regionem, z parowaniem win lub napojów bezalkoholowych.",
    },
    {
      id: "wellness",
      label: "Wellness",
      title: "Basen i Relaks",
      description:
        "Basen kryty, sauna, hammam i cicha czytelnia z herbatą ziołową.",
    },
  ],
  compositionEyebrow: "W skład pakietu",
  compositionHeading: "Kompozycja",
  timeline: [
    {
      day: 1,
      title: "Dzień 1",
      events: ["Przyjazd", "Drink powitalny", "Kolacja"],
    },
    {
      day: 2,
      title: "Dzień 2",
      events: [
        "Powolne śniadanie",
        "Rytuał spa",
        "Basen i relaks",
        "Kolacja degustacyjna",
      ],
    },
    {
      day: 3,
      title: "Dzień 3",
      events: ["Śniadanie", "Późne wymeldowanie"],
    },
  ],
  timelineEyebrow: "Twój pobyt",
  timelineHeading: "Powoli rozłożony w czasie",
  gallery: [
    { label: "Pokoje", caption: "Wnętrza apartamentów w naturalnym świetle" },
    { label: "Spa", caption: "Komnaty zabiegowe przy świecach" },
    { label: "Kolacja", caption: "Sezonowe doznania kulinarne" },
    { label: "Basen", caption: "Basen kryty i strefa relaksu" },
    { label: "Architektura", caption: "Kamień, światło i lokalne rzemiosło" },
    { label: "Natura", caption: "Widoki na jezioro i ciche ogrody" },
  ],
  galleryEyebrow: "Galeria",
  galleryHeading: "Atmosfera",
  testimonials: [
    {
      id: "1",
      quote:
        "Najspokojniejsze dwa dni od lat. Każdy detal był przemyślany, nigdy komercyjny.",
      author: "Anna & Marek",
      location: "Warszawa",
    },
    {
      id: "2",
      quote:
        "Sam rytuał spa był wart podróży. Wróciliśmy odnowieni w sposób, którego się nie spodziewaliśmy.",
      author: "Katarzyna",
      location: "Kraków",
    },
    {
      id: "3",
      quote:
        "Rzadko można znaleźć miejsce, które rozumie prawdziwy spokój. To jest to miejsce.",
      author: "Tomasz & Julia",
      location: "Gdańsk",
    },
  ],
  testimonialsEyebrow: "Wspomnienia gości",
  trustBar: "Zaufany przez gości szukających cichego luksusu, powolnego jedzenia i regenerujących pobytów.",
  faq: [
    {
      q: "Co wchodzi w skład pakietu?",
      a: "Weekend Wellness Escape obejmuje dwie noce w Superior Suite, codzienne sezonowe śniadanie, jeden 50-minutowy rytuał spa na osobę, jedną kolację degustacyjną oraz nieograniczony dostęp do strefy wellness, basenu i przestrzeni relaksu.",
    },
    {
      q: "Czy dostęp do spa jest nieograniczony?",
      a: "Strefa wellness — basen, sauna, hammam i lounge relaksacyjny — jest wliczona na czas całego pobytu. Zabiegi spa rezerwowane są osobno; dodatkowe rytuały można zorganizować.",
    },
    {
      q: "Czy można zarezerwować dodatkowe zabiegi?",
      a: "Tak. Nasz zespół spa może polecić i zaplanować dodatkowe rytuały, takie jak zabiegi twarzy, okłady ciała czy prywatne sesje jogi. Prosimy o zapytanie przy rezerwacji.",
    },
    {
      q: "Czy późne wymeldowanie jest wliczone?",
      a: "Późne wymeldowanie do godziny 14:00 jest wliczone w pakiet. W przypadku późniejszych wyjazdów prosimy o kontakt z recepcją — zależnie od dostępności.",
    },
    {
      q: "Czy pakiet można podarować?",
      a: "Oczywiście. Oferujemy cyfrowe vouchery prezentowe ze spersonalizowaną wiadomością, ważne przez 12 miesięcy od zakupu.",
    },
  ],
  faqEyebrow: "Pytania",
  faqHeading: "Najczęściej zadawane",
  finalHeadline: "Odejdź lżejszy niż przyszedłeś.",
  navLinks: [
    { label: "Pakiet", href: "#package" },
    { label: "Galeria", href: "#gallery" },
    { label: "Pytania", href: "#faq" },
  ],
  footerText: "Weekend Wellness Escape &copy;",
  dayImages: [
    "Przyjazd — Wieczorne światło",
    "Poranna cisza — Widok na basen",
    "Późne wymeldowanie — Ostatnie spojrzenie",
  ],
};

export const en: PackageContent = {
  name: "Weekend Wellness Escape",
  eyebrow: "Weekend Wellness Escape",
  tagline: "A slower weekend by the water",
  subtitle: "Two nights of quiet mornings, restorative rituals and seasonal dining.",
  duration: "2 nights",
  price: 2490,
  currency: "PLN",
  priceLabel: "per person / 2 nights",
  inclusions: [
    "Breakfast included",
    "Spa ritual",
    "Tasting dinner",
  ],
  cta: "Reserve the experience",
  secondaryCta: "Explore the package",
  bookNow: "Book now",
  intro:
    "Designed for those who want to disappear for a moment — into warm interiors, quiet water, slow food and restorative touch.",
  scrollLabel: "Scroll",
  stories: [
    {
      number: "01",
      title: "Arrival",
      description:
        "A calm check-in, a welcome drink and time to settle into your room.",
    },
    {
      number: "02",
      title: "Slow Mornings",
      description:
        "Two breakfasts prepared with seasonal ingredients, served slowly.",
    },
    {
      number: "03",
      title: "Restore",
      description:
        "A 50-minute spa ritual designed to release tension and restore balance.",
    },
    {
      number: "04",
      title: "Taste",
      description:
        "A seasonal tasting dinner inspired by local ingredients.",
    },
    {
      number: "05",
      title: "Water & Stillness",
      description:
        "Unlimited access to the wellness area, pool and quiet relaxation spaces.",
    },
  ],
  composition: [
    {
      id: "suite",
      label: "Suite",
      title: "Superior Suite",
      description:
        "Generous living space with natural stone bathroom, private terrace and view of the water.",
    },
    {
      id: "breakfast",
      label: "Breakfast",
      title: "Seasonal Breakfast",
      description:
        "Locally sourced pastries, eggs, fruit and freshly pressed juice served until noon.",
    },
    {
      id: "spa",
      label: "Spa",
      title: "50-Minute Ritual",
      description:
        "Warm oil massage, herbal steam and guided breathwork in a candlelit treatment room.",
    },
    {
      id: "dinner",
      label: "Dinner",
      title: "Tasting Menu",
      description:
        "Five courses inspired by the region, paired with wine or non-alcoholic pairings.",
    },
    {
      id: "wellness",
      label: "Wellness",
      title: "Pool & Relaxation",
      description:
        "Indoor pool, sauna, hammam and silent reading lounge with herbal tea.",
    },
  ],
  compositionEyebrow: "What is included",
  compositionHeading: "The composition",
  timeline: [
    {
      day: 1,
      title: "Day 1",
      events: ["Arrival", "Welcome drink", "Dinner"],
    },
    {
      day: 2,
      title: "Day 2",
      events: [
        "Slow breakfast",
        "Spa ritual",
        "Pool & relaxation",
        "Tasting dinner",
      ],
    },
    {
      day: 3,
      title: "Day 3",
      events: ["Breakfast", "Late checkout"],
    },
  ],
  timelineEyebrow: "Your stay",
  timelineHeading: "Slowly unfolded",
  gallery: [
    { label: "Rooms", caption: "Suite interiors with natural light" },
    { label: "Spa", caption: "Candlelit treatment rooms" },
    { label: "Dining", caption: "Seasonal tasting experiences" },
    { label: "Pool", caption: "Indoor pool and relaxation area" },
    { label: "Architecture", caption: "Stone, light and local craft" },
    { label: "Nature", caption: "Lake views and quiet gardens" },
  ],
  galleryEyebrow: "Gallery",
  galleryHeading: "The atmosphere",
  testimonials: [
    {
      id: "1",
      quote:
        "The quietest two days we have had in years. Every detail felt considered, never commercial.",
      author: "Anna & Marek",
      location: "Warsaw",
    },
    {
      id: "2",
      quote:
        "The spa ritual alone was worth the journey. We left feeling restored in a way we did not expect.",
      author: "Katarzyna",
      location: "Kraków",
    },
    {
      id: "3",
      quote:
        "It is rare to find a place that understands true stillness. This is that place.",
      author: "Tomasz & Julia",
      location: "Gdańsk",
    },
  ],
  testimonialsEyebrow: "Guest memories",
  trustBar: "Trusted by guests seeking quiet luxury, slow food and restorative stays.",
  faq: [
    {
      q: "What is included in the package?",
      a: "The Weekend Wellness Escape includes two nights in a Superior Suite, daily seasonal breakfast, one 50-minute spa ritual per person, one tasting dinner, and unlimited access to the wellness area, pool and relaxation spaces.",
    },
    {
      q: "Is spa access unlimited?",
      a: "The wellness area — pool, sauna, hammam and relaxation lounge — is included throughout your stay. Spa treatments are booked per ritual; additional treatments can be arranged.",
    },
    {
      q: "Can we book additional treatments?",
      a: "Yes. Our spa team can recommend and schedule additional rituals such as facials, body wraps or private yoga sessions. Please enquire at the time of booking.",
    },
    {
      q: "Is late checkout included?",
      a: "Late checkout until 14:00 is included in the package. For later departures, please contact reception — subject to availability.",
    },
    {
      q: "Can the package be gifted?",
      a: "Absolutely. We offer digital gift vouchers with a personalised message, valid for 12 months from purchase.",
    },
  ],
  faqEyebrow: "Questions",
  faqHeading: "Frequently asked",
  finalHeadline: "Leave lighter than you arrived.",
  navLinks: [
    { label: "Package", href: "#package" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ],
  footerText: "Weekend Wellness Escape &copy;",
  dayImages: [
    "Arrival — Evening light",
    "Morning stillness — Pool view",
    "Late checkout — Last glance",
  ],
};
