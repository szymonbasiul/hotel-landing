import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import Nav from "@/components/Nav";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weekend Wellness Escape — Hotel Landing",
  description:
    "Two nights of quiet mornings, restorative rituals and seasonal dining.",
  openGraph: {
    title: "Weekend Wellness Escape",
    description:
      "A slower weekend by the water. Two nights of quiet mornings, restorative rituals and seasonal dining.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${display.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full antialiased">
        <LanguageProvider>
          <Nav />
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
