import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden">
      <div className="relative h-full w-full">
        <Image
          src="/skye1.svg"
          alt="Skye"
          className="z-100 "
          priority
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
