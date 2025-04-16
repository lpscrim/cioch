import Hero from "../components/Hero";
import Intro from "../components/Intro";
import PerfectFit from "../components/PerfectFit";


export default function Home() {
  return (
  <div>
    <Hero />
    <main>
        <Intro />
        <PerfectFit />
    </main>
  </div>
  );
}
