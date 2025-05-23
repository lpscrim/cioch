import Recommendations from "../components/Recommendations";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import PerfectFit from "../components/PerfectFit";
import CardScroller from "../components/CardScroller";
import Footer from "../components/Footer";


export default function Home() {
  return (
  <div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-2 bg-fixed"></div>
    <div className="relative bg-[url(/storr.jpg)] bg-center bg-cover bg-no-repeat w-full  bg-fixed">
      <Hero />
    </div>
    <main>
        <Intro />
        <div className="bg-[url(/pin.jpg)] bg-fixed bg-cover bg-no-repeat w-full ">
          <div className="w-full h-full backdrop-blur-[0px] backdrop-brightness-75">
            <CardScroller />  
          </div>
        </div>
        <PerfectFit /> 
        <div className="bg-[url(/lagan.jpg)] bg-fixed bg-cover bg-no-repeat w-full">
          <div className="w-full h-full backdrop-blur-[0px] backdrop-brightness-75">
            <Recommendations />
            <Footer />
          </div>  
        </div>
        
    </main>
  </div>
  );
}
