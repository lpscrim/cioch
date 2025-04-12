import Image from "next/image";

import { ArrowDownIcon } from "@heroicons/react/20/solid";


export default function Home() {
  return (
  <div>
    <div id="hero" className="h-[100vh] w-[100vw] overflow-hidden">
      <div className="relative h-full w-full">
        <Image
          src="/skye1.svg"
          alt="Skye"
          className="-z-100 "
          priority
          layout="fill"
          objectFit="cover"
        />
        <div id="heroText" className="absolute top-1/2 left-1/2 z-10 w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 text-center font-bold">
          <h1 id="heroName" className={`mt-20 mb-2 text-8xl text-(--color-accent) fade-in tracking-wide`}>Cíoch</h1>
          <h3 className="text-2xl text-(--color-text) mb-2 fade-in-slow">Outdoor Clothing</h3>
          <h4 className="text-xl text-(--color-text-secondary) fade-in-slower">Handmade on the isle of Skye</h4>
        </div>
        <button id="scrollButton" className="invisible md:visible absolute flex flex-row left-10 bottom-10 z-10 text-center text-(--color-text) text-md font-[700]">
          <p className="tracking-widest">SCROLL</p>
          <ArrowDownIcon className="ml-2 size-4 mt-1 animate-bounce" />
        </button>
      </div>
    </div>

    <main>
      <section>
        
      </section>
    </main>
  </div>
  );
}
