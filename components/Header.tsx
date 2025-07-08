"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "./contact/ContactButton";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { products } from "@/products/productList";

const categories = [
  {
    name: "Waterproofs",
    description: "See selection of waterproof clothing",
    href: "/shop/waterproof",
    products: products.filter((product) => product.category === "waterproof"),
  },
  {
    name: "Windproof",
    description: "See selection of windproof clothing",
    href: "/shop/windproof",
    products: products.filter((product) => product.category === "windproof"),
  },
  {
    name: "Kids",
    description: "See selection of kids clothing",
    href: "/shop/kids/kids",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute  top-0 left-0 w-[100lvw] z-9900 bg-background/0 text-text brightness-120">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-6 lg:px-8"
      >
        <div className="flex lg:flex-1 items-center ">
          <Link href="/" className="-m-1.5 p-1.5 ">
            <span className="sr-only">Cioch Clothing</span>
            <Image
              alt=""
              src="/main.jpg"
              className="h-8 w-auto mr-3 rounded-sm "
              height="300"
              width="300"
              quality={100}
            />
          </Link>
          <Link href="/" className="-m-1.5 p-1.5">
            <h2 className="mr-3 text-xl/6 font-semibold text-text hover:text-secondary transition-colors ">
              Outdoor Clothing
            </h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 cursor-pointer" />
          </button>
        </div>
        {/* Desktop */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton
                  className={`flex -mr-2 items-center gap-x-1 text-lg/6 transition-colors font-semibold cursor-pointer  hover:text-secondary ${
                    pathname?.startsWith("/shop") ? "text-accent" : "text-text"
                  }`}
                >
                  Shop
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none "
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-[20rem] overflow-hidden rounded-md bg-background/97 ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className="relative flex items-center gap-x-6 rounded-lg p-2 text-base/6 "
                      >
                        <div className="flex-auto">
                          <Link
                            href={category.href}
                            aria-label={category.description}
                            className="block font-semibold hover:backdrop-brightness-150 p-1 pb-2"
                            onClick={() => close()}
                          >
                            {category.name}
                            <span className="absolute inset-0" />
                          </Link>
                          {category.products?.map((product) => (
                            <div key={product.id}>
                              <Link
                                href={`/shop/${product.category}/${product.id}`}
                                aria-label={product.description}
                                className=" pl-5 block font-light hover:backdrop-brightness-150 pt-1 text-text/70"
                                onClick={() => close()}
                              >
                                {product.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link
            href="/about/nikwax"
            className={`text-lg/6 font-semibold hover:text-secondary transition-colors ${
              pathname?.startsWith("/about") ? "text-accent" : ""
            }`}
          >
            About
          </Link>

          <Link
            href="/order/about"
            className={`text-lg/6 font-semibold hover:text-secondary transition-colors ${
              pathname?.startsWith("/order") ? "text-accent" : ""
            }`}
          >
            Order
          </Link>

          <Link
            href="/gallery"
            className={`text-lg/6 font-semibold hover:text-secondary transition-colors${
              pathname === "/gallery" ? "text-accent" : ""
            }`}
          >
            Gallery
          </Link>

          <ContactButton>
            <EnvelopeIcon className="size-6 pb-1 mt-0.5 " />
          </ContactButton>
        </PopoverGroup>
      </nav>
      {/* Mobile */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-200" />
        <DialogPanel className="fixed inset-y-0 right-0 z-9999 w-full overflow-y-auto bg-background text-text px-6 py-6 sm:max-w-[20rem] sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className=" p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Cioch CLothing</span>
              <Image
                alt="Cioch logo"
                src="/main.jpg"
                className="h-8 w-auto -ml-2 rounded-sm"
                height="300"
                width="300"
                quality={100}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="size-6 mt-1 cursor-pointer"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-text-secondary/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold  hover:backdrop-brightness-150 ${
                      pathname?.startsWith("/shop") ? "text-accent" : ""
                    }`}
                  >
                    Shop
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...categories].map((category) => (
                      <div key={category.name}>
                        <DisclosureButton
                          as="a"
                          href={category.href}
                          className="block rounded-lg py-2 pr-3 pl-5 text-sm/7 font-semibold  hover:backdrop-brightness-150"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {category.name}
                        </DisclosureButton>
                        {category.products?.map((product) => (
                          <Link
                            key={product.id}
                            href={`/shop/${product.category}/${product.id}`}
                            aria-label={product.description}
                            className="block font-light hover:backdrop-brightness-150 pl-10 text-text/70"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/about/nikwax"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:backdrop-brightness-150 ${
                    pathname?.startsWith("/about") ? "text-accent" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/order/about"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:backdrop-brightness-150 ${
                    pathname === "/order" ? "text-accent" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order
                </Link>
                <Link
                  href="/gallery"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:backdrop-brightness-150 ${
                    pathname === "/gallery" ? "text-accent" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
              </div>
              <Link 
                className="absolute bottom-5"
                href="#"
                >
                <ContactButton>
                  <EnvelopeIcon className="size-6 pb-1 -mb-2.5" />
                  <span className="ml-2 text-sm font-bold">Contact us</span>
                </ContactButton>
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
