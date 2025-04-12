import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Gothic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";



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
        className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
