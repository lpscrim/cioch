'use client'
import type { Metadata } from "next";
import { Karla, Noto_Sans_Gothic, Oswald, Roboto, Anek_Devanagari } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isStudioPage = pathname?.startsWith('/studio');

  return (
    <html lang="en">
      <body
        className={`${anekDevanagari.variable} ${notoSans.variable} ${oswald.variable} ${roboto.variable} ${karla.variable} antialiased  overflow-x-hidden`}
      >
        {!isStudioPage && <Header />}
        {children}
      </body>
    </html>
  );
}
