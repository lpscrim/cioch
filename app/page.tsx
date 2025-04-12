import Image from "next/image";


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
          <h1 id="heroName" className={`mt-20 mb-2 text-9xl text-(--color-accent) fade-in tracking-wide`}>Cíoch</h1>
          <h3 className="text-3xl text-(--color-text) mb-2 fade-in-slow">Outdoor Clothing</h3>
          <h4 className="text-2xl text-(--color-text-secondary) fade-in-slower">Handmade on the isle of Skye</h4>
        </div>
        <div id="scrollButton" className="absolute left-10 bottom-10 z-10 text-center">
          <span className="text-md font-[700] tracking-widest text-(--color-text) fade-in-slow">SCROLL</span>
          <span className="ml-1 text-md font-extrabold animate-bounce">↓</span>
        </div>
      </div>
    </div>

    <main>
      <section>
        
      </section>
    </main>
  </div>
  );
}
