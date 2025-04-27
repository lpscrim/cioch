import Image from "next/image";

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt,
  color,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
}) {
  return (
    <div className={`cursor-pointer group card relative w-[200px] lg:w-[350px] bg-${color} rounded-lg shadow-md px-2 lg:px-15 py-30 lg:py-50`}>
      <h2 className="invisible group-hover:visible mx-auto text-center text-2xl">{title}</h2>
      <p className="invisible text-center mx-auto group-hover:visible">{description}</p>
      <Image 
        src={imageSrc} 
        alt={imageAlt} 
        width={150}
        height={150}
        className="-z-10 absolute top-0 left-0 rounded-lg w-full h-full" />
    </div>
  );
}
