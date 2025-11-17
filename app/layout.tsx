
import type { Metadata } from "next";
import { Karla, Noto_Sans_Gothic, Oswald, Roboto, Anek_Devanagari } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const notoSans = Noto_Sans_Gothic({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const anekDevanagari = Anek_Devanagari({
  variable: "--font-anek-devanagari",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${anekDevanagari.variable} ${notoSans.variable} ${oswald.variable} ${roboto.variable} ${karla.variable} antialiased  overflow-x-hidden`}
      >
          <Header />
        {children}
      </body>
    </html>
  );
}
