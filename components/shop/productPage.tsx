import { useState } from "react";
import { notFound } from "next/navigation";
import { products } from "@/products/productList";
import Image from "next/image";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import ProductNav from "./productNav";
import Link from "next/link";

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  if (!product) return notFound();

  return (
    <div className="mx-auto  lg:max-w-7xl z-999">
      <ProductNav />
      <div className="bg-text rounded-md overflow-hidden shadow-lg">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 pb-12 pt-6 lg:max-w-7xl lg:px-12">
            <Link
            className={classNames(
              product.category === "kids" ? "invisible" : "",
              "inline-block mb-2 text-secondary font-semibold hover:underline")}
            href={`/shop/${product.category}`}
          >
           See all {product.category}s
          </Link> 
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 pt-2">
            {/* Image gallery */}
            <TabGroup className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-text text-sm font-medium text-text-secondary uppercase hover:bg-text/70 focus:ring-3 focus:ring-secondary/50 focus:ring-offset-4 focus:outline-hidden"
                    >
                      <span className="sr-only">{image.name}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <Image
                          alt=""
                          src={image.src}
                          width={"500"}
                          height={"500"}
                          className="size-full object-cover aspect-square"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-secondary/50"
                      />
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels>
                {product.images.map((image) => (
                  <TabPanel key={image.id}>
                    <Image
                      alt={image.alt}
                      src={image.src}
                      width={"500"}
                      height={"700"}
                      className="w-full object-cover sm:rounded-lg sm:pr-4"
                    />
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            {/* Product info */}
            <div className="relative mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-secondary">
                {product.name}
              </h1>
              <Image
                src="/perfectfitsm.gif"
                alt="Cioch Outdoor Clothing"
                className="absolute right-0 top-0 w-1/4 max-w-[100px] h-auto rounded-lg"
                width={450}
                height={300}
              />

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  className="space-y-6 text-base text-text-secondary"
                />
              </div>

              <form className="mt-6">
                {/* Colors */}
                <div>
                  <h3 className="text-lg font-medium text-secondary pb-2">
                    Color
                  </h3>
                  <fieldset aria-label="Choose a color" className="mt-2">
                    <div className="flex items-center gap-x-3">
                      {product.colors.map((color, idx) => (
                        <div
                          key={color.id}
                          className="flex rounded-full outline -outline-offset-1 outline-text-secondary/10"
                        >
                          <input
                            defaultValue={color.id}
                            defaultChecked={idx === 0}
                            name="color"
                            type="radio"
                            aria-label={color.name}
                            className={classNames(
                              color.classes,
                              "size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3"
                            )}
                            onChange={() => setSelectedColor(color)}
                          />
                        </div>
                      ))}
                      {/* Show selected color name */}
                    </div>
                    <div className="flex mx-auto justify-left">
                      <span className={classNames(selectedColor?.classes, "block mt-2 px-3 py-1 text-text text-center rounded-md")}>
                        {selectedColor?.name || product.colors[0].name}
                      </span>
                    </div>
                  </fieldset>
                  {product.cordura && (
                     <fieldset aria-label="Choose a color" className="mt-2">
                    <div className="flex items-center gap-x-3">
                        <div
                          className="flex rounded-full outline -outline-offset-1 outline-text-secondary/10"
                        >
                          <input
                            defaultValue={'black'}
                            defaultChecked={true}
                            name="color"
                            type="radio"
                            aria-label={'black'}
                            className={classNames(
                              "bg-black checked:bg-black text-text-secondary/70",
                              "size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3"
                            )}
                          />
                        </div>
                      
                    </div>
                    <div className="flex mx-auto justify-left">
                            <span className="bg-black block mt-2 px-3 py-1  text-text  min-w-[80px] text-center rounded-md">
                        Cordura: Black
                      </span>
                    </div>
                  </fieldset>
                    )}
                    {product?.fleece && (
                     <fieldset aria-label="Choose a color" className="mt-2">
                    <div className="flex items-center gap-x-3">
                        <div
                          className="flex rounded-full outline -outline-offset-1 outline-text-secondary/10"
                        >
                          <input
                            defaultValue={'green'}
                            defaultChecked={true}
                            name="color"
                            type="radio"
                            aria-label={'green'}
                            className={classNames(
                              "bg-emerald-700 checked:bg-emerald-700 text-text-secondary/70",
                              "size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3"
                            )}
                          />
                        </div>
                      <span className=" px-3 py-1  text-text-secondary  min-w-[80px] text-center">
                        Single Sided Velour: Green
                      </span>
                    </div>
                  </fieldset>
                    )}
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-text border-t border-text">
                  {product.details.map((detail, idx) => (
                    <Disclosure key={idx} as="div">
                      <h3>
                        <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span className="text-base sm:text-lg font-semibold text-secondary">
                            {detail.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="block size-6 text-text-secondary group-hover:text-text-secondary group-data-open:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="hidden size-6 text-secondary group-hover:text-secondary group-data-open:block"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pb-6">
                        <ul
                          role="list"
                          className="list-disc space-y-1 pl-5 text-sm/6 sm:text-base/6 text-text-secondary marker:text-text"
                        >
                          {detail.items.map((item, idx) => (
                            <li key={idx} className="pl-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </div>
                
              </section>
              
            </div>
          </div>
          
        </div>    
          <Link
            href="/#perfectFit"
          >
            <h2 className="text-xl bg-accent font-semibold text-text-secondary sm:text-2xl text-center mt-6 py-4 px-2">
              <span className="text-secondary hover:text-text-secondary">Perfect Fit™</span> garments
              can be made in any combination of available colours from our swatch
            </h2>
          </Link>        
      </div>
      
    </div>
  );
}
