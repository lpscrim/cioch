import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Promo from "@/components/home/Promo";
import PerfectFit from "@/components/home/PerfectFit";
import Recommendations from "@/components/home/Recommendations";
import Footer from "@/components/home/FooterHome";
import "@/styles/home.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-[100lvh]">
      <div className="inset-0 -z-10 fixed h-[100svh] w-[100lvw] overflow-hidden bg-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-white/2 to-transparent z-2 bg-fixed h-[100lvh]"></div>

        <Image
          alt=""
          src="/storr.webp"
          fill
          unoptimized
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2000px"
          className="object-cover"
        />
      </div>
      <div className="relative z-10 h-[100svh] overflow-hidden">
        <Hero />
      </div>

      <main className="relative z-10 mobile-fixed-bg">
        <div className="relative backdrop-brightness-82">
          <div className="bg-white">
            <Intro />
            <Promo />
            <PerfectFit />
          </div>
          
          <div className="min-h-[100lvh]">
            <Recommendations />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
