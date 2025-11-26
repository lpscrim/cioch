import type { Metadata } from "next";
import { Karla, Noto_Sans_Gothic, Roboto, Anek_Devanagari } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import LenisScroll from '@/components/Animation/LenisScroll';

const notoSans = Noto_Sans_Gothic({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: 'swap',
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: 'swap',
});

const anekDevanagari = Anek_Devanagari({
  variable: "--font-anek-devanagari",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: 'block',
});

export const metadata: Metadata = {
  title: 'Cioch Outdoor Clothing - Handmade Waterproof & Windproof Clothing',
  description: 'Premium handmade outdoor clothing from the Isle of Skye. Waterproof jackets, windproof fleece, and custom-fit outdoor gear for all adventures.',
  keywords: 'outdoor clothing, waterproof jackets, windproof fleece, Isle of Skye, handmade clothing, custom fit, Scottish outdoor gear',
  authors: [
    { name: 'Cioch Outdoor Clothing' },
    { name: 'Lewis Scrimgeour', url: 'https://lewisscrimgeour.com' }
  ],
  creator: 'Lewis Scrimgeour',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Cioch Outdoor Clothing - Handmade Waterproof & Windproof Clothing',
    description: 'Premium handmade outdoor clothing from the Isle of Skye',
    url: 'https://cioch-direct.co.uk',
    siteName: 'Cioch Outdoor Clothing',
    locale: 'en_GB',
    type: 'website',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${anekDevanagari.variable} ${notoSans.variable} ${roboto.variable} ${karla.variable} antialiased  overflow-x-hidden`}
      >
        <LenisScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}
