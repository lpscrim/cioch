import { lazy, Suspense } from "react";
import Hero from "@/components/home/Hero";
import "@/styles/home.css";
import Image from "next/image";

const Intro = lazy(() => import("@/components/home/Intro"));
const Promo = lazy(() => import("@/components/home/Promo"));
const PerfectFit = lazy(() => import("@/components/home/PerfectFit"));
const Recommendations = lazy(() => import("@/components/home/Recommendations"));
const Footer = lazy(() => import("@/components/home/FooterHome"));

export default function Home() {
  return (
    <div className="relative min-h-[100svh]">
      <div className="inset-0 -z-10 fixed h-[100svh] w-[100lvw] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-white/2 to-transparent z-2 bg-fixed h-[100lvh]"></div>

        <Image
          alt="background"
          src="/storr.webp"
          fill
          quality={90}
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative z-10 h-[100svh] overflow-hidden">
        <Hero />
      </div>

      <main className="relative z-10 bg-white">
        <Suspense fallback={<div className="h-20 bg-foreground animate-pulse" />}>
          <Intro />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-foreground animate-pulse" />}>
          <Promo />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-foreground animate-pulse" />}>
          <PerfectFit />
        </Suspense>
        
        {/* Bottom section with constrained fixed background */}
        <div className="relative min-h-[100svh] overflow-hidden">
          {/* Background that only covers this section */}
          <div className="absolute inset-0 bg-[url(/lagan.webp)] bg-fixed bg-cover bg-no-repeat bg-center">
            <div className="absolute inset-0 backdrop-blur-[0px] backdrop-brightness-82"></div>
          </div>
          
          <div className="relative z-10">
            <Suspense fallback={<div className="h-20 bg-foreground animate-pulse" />}>
              <Recommendations />
            </Suspense>
            <Suspense fallback={<div className="h-20 bg-foreground animate-pulse" />}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
