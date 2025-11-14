import Recommendations from "@/components/home/Recommendations";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import PerfectFit from "@/components/home/PerfectFit";
import Footer from "@/components/home/FooterHome";
import Promo from "@/components/home/Promo";
import "@/styles/home.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-[100svh]">
      <div className="inset-0 -z-10 fixed h-[100svh] w-[100lvw] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-white/2 to-transparent z-2 bg-fixed h-[100lvh]"></div>

        <Image
          alt="background"
          src="/storr.webp"
          fill
          quality={100}
          priority
          className="object-cover"
        />
      </div>
      <div className="relative z-10 h-[100svh] overflow-hidden">
        <Hero />
      </div>

      <main>
        <Intro />
        <Promo />
        <PerfectFit />
        <div className="relative">
          <div className="inset-0 -z-10 fixed h-[100svh] w-[100lvw] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/14 via-transparent to-black/20 z-2"></div>
            <Image
              alt="Lagan background"
              src="/lagan.webp"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
          
          {/* Content overlay */}
          <div className="relative z-10">
            <Recommendations />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
