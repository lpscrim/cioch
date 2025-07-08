import Recommendations from "@/components/home/Recommendations";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import PerfectFit from "@/components/home/PerfectFit";
import Footer from "@/components/home/FooterHome";
import Promo from "@/components/home/Promo";
import "@/styles/home.css";

export default function Home() {
  return (
  <div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-white/5 to-transparent z-2 bg-fixed h-[100svh]"></div>
    <div className="relative bg-[url(/storr.webp)] bg-center bg-cover bg-no-repeat w-[100lvw] overflow-hidden sm:bg-fixed h-[100svh]">
      
      <Hero />
      
    </div>
    <main>
        <Intro />
        <Promo />
        <PerfectFit /> 
        <div className="bg-[url(/lagan.webp)] bg-fixed bg-cover bg-no-repeat w-full h-[100svh]">
          <div className="w-full h-[100svh] backdrop-blur-[0px] backdrop-brightness-75">
            <Recommendations />
            <Footer />
          </div>  
        </div>
        
    </main>
  </div>
  );
}
