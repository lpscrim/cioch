import Image from "next/image";

const collections = [
  {
    name: "Waterproof",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-collection-01.jpg",
    imageAlt: "Image of a person wearing a waterproof jacket.",
  },
  {
    name: "Windproof",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-collection-02.jpg",
    imageAlt: "Image of a person wearing a windproof jacket.",
  },
  {
    name: "Kids",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-collection-03.jpg",
    imageAlt:
      "Image of a child wearing outdoor clothing.",
  },
];

export default function Promo() {
  return (
    <div className="relative bg-white">
      {/* Background image and overlap */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden sm:flex sm:flex-col"
      >
        <div className="relative w-full flex-1 bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt=""
              src="/quirang2.jpg"
              width={500}
              height={500}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col sm:hidden"
        >
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                alt=""
                src="/quirang2.jpg"
                width={500}
                height={500}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="h-48 w-full bg-white" />
        </div>
        <div className="relative py-32">
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
            Explore Our Collection
          </h1>
          <div className="mt-4 sm:mt-6">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-secondary px-8 py-3 font-medium text-text hover:brightness-105"
            >
              Full Collection
            </a>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="collection-heading"
        className="relative -mt-96 sm:mt-0"
      >
        <h2 id="collection-heading" className="sr-only">
          Collections
        </h2>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative h-96 rounded-lg bg-text shadow-xl sm:aspect-4/5 sm:h-auto"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                  <Image
                    alt={collection.imageAlt}
                    src={collection.imageSrc}
                    width={500}
                    height={500}
                    className="size-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-text">
                    See all
                  </p>
                  <h3 className="mt-1 font-semibold text-text">
                    <a href={collection.href}>
                      <span className="absolute inset-0" />
                      {collection.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
