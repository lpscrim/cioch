import Recommendations from "@/components/Recommendations";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import PerfectFit from "../components/PerfectFit";
import CardScroller from "@/components/CardScroller";


export default function Home() {
  return (
  <div>
    <Hero />
    <main>
        <Intro />
        <div className="bg-[url(/quirang1.jpg)] bg-fixed bg-cover bg-no-repeat w-full">
          <div className="wf-full h-full backdrop-blur-[0px] backdrop-brightness-75">
            <CardScroller />  
            <PerfectFit /> 
            <Recommendations />
          </div>
        </div>
    </main>
  </div>
  );
}
