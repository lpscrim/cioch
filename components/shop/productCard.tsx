import Image from 'next/image';
export default function ProductCard({
  product: {
    id,
    name,
    href,
    imageSrc,
    imageAlt,
    description,
    options,
    price,
  },
}: {
  product: {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    options: string;
    price: string;
  };
}) {
  return (
    <div
              key={id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <Image
                alt={imageAlt}
                src={imageSrc}
                width={500}
                height={500}
                className="aspect-3/4 w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm text-gray-500 italic">{options}</p>
                  <p className="text-base font-medium text-gray-900">{price}</p>
                </div>
              </div>
            </div>
  );
}