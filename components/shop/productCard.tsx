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
      className="group pt-4 relative flex flex-col overflow-hidden rounded-lg border border-text bg-text z-999"
    >
      <Link href={`/shop/${category}/${id}`}>
        <Image
          alt={images[0]?.alt || "Product image"}
          src={images[0]?.src || "/placeholder.jpg"}
          width={500}
          height={700}
          className="px-4 mx-auto w-[90%] bg-text object-cover group-hover:opacity-75 sm:aspect-[3/2] sm:h-96"
        />
        <div className="flex flex-1 flex-col space-y-2 p-4">
          <h3 className="text-base font-medium text-text-secondary">{name}</h3>
          <p className="text-sm text-text-secondary">{brief}</p>
          <div className="flex flex-1 flex-col justify-end">
            <p className="text-base font-medium text-text-secondary">{price}</p>
          </div>
        </div>
      </Link>
      
    </div>
  );
}
