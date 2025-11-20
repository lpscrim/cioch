import Image from "next/image";
import Link from "next/link";
export default function ProductCard({
  product: { id, name, images, brief, price, category },
}: {
  product: {
    id: string;
    name: string;
    images: { src: string; alt?: string }[];
    description: string;
    price: string;
    brief: string;
    category: string;
  };
}) {
  return (
    <div
      key={id}
      className="group pt-4 relative flex flex-col overflow-hidden rounded-lg border shadow hover:brightness-115 hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-99 duration-200 transition-all border-text bg-text/80 z-999 max-w-[450px] w-full"
    >
      <Link href={`/shop/${category}/${id}`}>
        <Image
          alt={images[0]?.alt || "Product image"}
          src={images[0]?.src || "/placeholder.jpg"}
          width={500}
          height={700}
          className="sm:px-4 mx-auto w-[90%] bg-text object-cover sm:aspect-[3/2] sm:h-96 transition-all rounded-sm "
        />
        <div className="flex flex-1 flex-col space-y-2 p-4">
          <h3 className="text-2xl sm:text-xl font-medium text-text-secondary">{name}</h3>
          <p className="text-xl sm:text-lg text-text-secondary">{brief}</p>
          <div className="flex flex-1 flex-col justify-end">
            <p className="text-lg sm:base font-medium text-text-secondary">{price}</p>
          </div>
        </div>
      </Link>
      
    </div>
  );
}
