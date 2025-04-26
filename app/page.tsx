import Recommendations from "@/components/Recommendations";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import PerfectFit from "../components/PerfectFit";


export default function Home() {
  return (
  <div>
    <Hero />
    <main>
        <Intro />
        <div className="bg-[url(/skye1.svg)]  bg-fixed bg-cover bg-no-repeat w-full">
          <div className="wf-full h-full backdrop-blur-[2px] backdrop-brightness-90">
            <Recommendations />
          </div>
        </div>
        <PerfectFit />       
    </main>
  </div>
  );
}
