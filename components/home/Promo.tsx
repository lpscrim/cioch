'use client';
import Image from "next/image";


const collections = [
  {
    name: "Waterproof",
    href: "/shop/waterproof",
    imageSrc:
      "/jacket1.webp",
    imageAlt: "Image of a person wearing a waterproof jacket.",
  },
  {
    name: "Windproof",
    href: "/shop/windproof",
    imageSrc:
      "/fleece.webp",
    imageAlt: "Image of fleece.",
  },
  {
    name: "Kids",
    href: "/shop/kids/kids",
    imageSrc:
      "/jacket4.webp",
    imageAlt:
      "Image of a child wearing outdoor clothing.",
  },
];

export default function Promo() {
  return (
    <section
       id="promo"
       className="relative bg-foreground pb-5 xl:min-h-[105vh]">
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden sm:flex sm:flex-col"
      >
        <div className="relative w-full flex-1 bg-background">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt=""
              src="/quirang2.webp"
              width={1000}
              height={500}
              quality={100}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-background opacity-50" />
        </div>
        <div className="h-32 w-full bg-foreground md:h-40 lg:h-45" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col sm:hidden"
        >
          <div className="relative w-full flex-1 bg-background">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                alt=""
                src="/quirang2.webp"
                width={500}
                height={500}
                quality={100}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-background opacity-45" />
          </div>
          <div className="h-15 w-full bg-foreground" />
        </div>
        <div className="relative py-32">
          <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Explore Our Collection
          </h2>
          <div className="mt-12">
          {/*<a id="shopButton"
              href="#"
              className="rounded-md bg-secondary px-4 py-3 text-lg font-bold text-primary shadow-xs hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Shop All
            </a>*/}
          </div>
        </div>
      </div>

      <div
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
                      {collection.name} clothing
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
