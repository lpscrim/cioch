import Image from "next/image";

export default function Home() {
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
        <h1 className="absolute top-1/2 left-1/2 z-10 w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-bold text-black">
          COICH
        </h1>
      </div>
    </div>
  );
}
