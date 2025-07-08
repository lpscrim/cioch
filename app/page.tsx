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
    <div className="relative min-h-[100lvh]">
      <div className=" inset-0 -z-10 fixed h-[100lvh]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-white/5 to-transparent z-2 bg-fixed h-[100lvh]"></div>

        <Image
          alt="123"
          src="/storr.webp"
          layout="fill"
          className="w-auto h-full object-cover "
          quality={100}
        />
      </div>
      <div className="relative z-10 h-[100svh] overflow-hidden">
        <Hero />
      </div>

      <main>
        <Intro />
        <Promo />
        <PerfectFit />
        <div className="bg-[url(/lagan.webp)] bg-fixed bg-cover bg-no-repeat w-full h-[105%]">
          <div className="w-full h-[105%] backdrop-blur-[0px] backdrop-brightness-75">
            <Recommendations />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
