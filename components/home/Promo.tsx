import Image from "next/image";
import Link from "next/link";


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
      className="relative bg-foreground pb-20 xl:min-h-[105vh] overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          alt="image of the quirang"
          src="/quirang2.webp"
          fill
          quality={80}
          sizes="100vw"
          priority={false}
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-background opacity-38" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-24 sm:pb-0 xl:pb-10 text-center sm:px-6 lg:px-8">
        <div className="relative py-26 sm:py-38">
          <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Explore Our Collection
          </h2>
        </div>
      </div>

      <div
        aria-labelledby="collection-heading"
        className="relative z-10 -mt-24 sm:mt-0"
      >
        <h2 id="collection-heading" className="sr-only">
          Collections
        </h2>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-8 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative h-65 rounded-lg bg-text shadow hover:brightness-115 hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-99 duration-200 transition-all sm:aspect-4/5 sm:h-auto"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 overflow-hidden ">
                  <Image
                    alt={collection.imageAlt}
                    src={collection.imageSrc}
                    width={500}
                    height={500}
                    className="size-full object-cover px-20 sm:px-8"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-md lg:text-lg text-text">
                    See all
                  </p>
                  <h3 className="mt-1 font-semibold text-lg lg:text-xl text-text">
                    <Link href={collection.href}>
                      <span className="absolute inset-0" />
                      {collection.name} clothing
                    </Link>
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
