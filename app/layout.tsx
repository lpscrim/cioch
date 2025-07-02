import type { Metadata } from "next";
import { Geist, Geist_Mono, Karla, Noto_Sans_Gothic, Oswald, Roboto, Anek_Devanagari } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import { Providers } from "./providers";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  title: "Cioch Outdoor Clothing",
  description: "Handmade outdoor clothing for the Scottish Highlands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anekDevanagari.variable} ${geistSans.variable} ${geistMono.variable} ${notoSans.variable} ${oswald.variable} ${roboto.variable} ${karla.variable} antialiased  overflow-x-hidden`}
      >
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
