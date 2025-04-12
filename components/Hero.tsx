import Image from "next/image";


export default function Hero() {
  return (
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
        <button id="scrollButton" className="invisible md:visible absolute flex flex-row font-mono left-15 bottom-15 z-10 text-center text-(--color-text) text-sm font-[700]">
          <p className="tracking-widest">SCROLL</p>
          <div className="ml-2 animate-bounce"><p className="rotate-90">➔</p></div>
        </button>
      </div>
    </div>
  );
}
