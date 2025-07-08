export default function Hero() {
  return (
    <div id="hero" className="h-[100svh] w-[100vw] overflow-hidden">
            <div id="heroText" className="absolute top-1/2 left-1/2 z-10 w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 text-center font-bold">
            <h1 id="heroName" className="mt-20 mb-2 text-7xl md:text-8xl text-accent fade-in tracking-wide">Cíoch</h1>
            <h3 className="text-2xl text-text mb-2 fade-in-slow ">Outdoor Clothing</h3>
            <h4 className="text-xl text-text brightness-80 fade-in-slower">Handmade on the isle of Skye</h4>
            </div>
            <button id="scrollButton" className="invisible md:visible absolute flex flex-row p-5 left-12 bottom-12 lg:left-35 z-10 text-center text-text text-sm xl:text-base font-[500]">
                <p className="tracking-widest">SCROLL</p>
                <div className="ml-2 animate-bounce"><p className="rotate-90">➔</p></div>
            </button>
        </div>
  );
}
