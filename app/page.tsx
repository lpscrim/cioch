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
      
    <main>
      <Hero />
        <Intro />
        <Promo />
        <PerfectFit /> 
        <div className="bg-[url(/lagan.webp)] bg-fixed bg-cover bg-no-repeat w-full">
          <div className="w-full h-full backdrop-blur-[0px] backdrop-brightness-75">
            <Recommendations />
            <Footer />
          </div>  
        </div>
        
    </main>
  </div>
  );
}
