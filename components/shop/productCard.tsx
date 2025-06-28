import Image from 'next/image';
export default function ProductCard({
  product: {
    id,
    name,
    imageSrc,
    imageAlt,
    description,
    options,
    price,
    slug,
  },
}: {
  product: {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    options: string;
    price: string;
    slug: string;
  };
}) {
  return (
    <div
              key={id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-text bg-text"
            >
              <Image
                alt={imageAlt}
                src={imageSrc}
                width={500}
                height={500}
                className="aspect-3/4 w-full bg-text object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-text-secondary">
                  <a href={`/shop/product/${slug}`} className="absolute inset-0">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                  </a>
                </h3>
                <p className="text-sm text-text-secondary">{description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm text-text-secondary italic">{options}</p>
                  <p className="text-base font-medium text-text-secondary">{price}</p>
                </div>
              </div>
            </div>
  );
}