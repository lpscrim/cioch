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
    category: string;
  };
}) {
  return (
    <div
      key={id}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-text bg-text"
    >
      <Link href={`/shop/${category}/${id}`}>
        <Image
          alt={images[0]?.alt || "Product image"}
          src={images[0]?.src || "/placeholder.jpg"}
          width={500}
          height={500}
          className="aspect-3/4 w-full bg-text object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
        />
        <div className="flex flex-1 flex-col space-y-2 p-4">
          <h3 className="text-sm font-medium text-text-secondary">{name}</h3>
          <p className="text-sm text-text-secondary">{brief}</p>
          <div className="flex flex-1 flex-col justify-end">
            <p className="text-base font-medium text-text-secondary">{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
