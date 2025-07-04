"use client";

import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import Image from "next/image";

const categories = [
  {
    name: "Waterproofs",
    description: "See selection of waterproof clothing",
    href: "/shop/waterproof",
  },
  {
    name: "Windproof",
    description: "See selection of windproof clothing",
    href: "/shop/windproof",
  },
  {
    name: "Kids",
    description: "See selection of kids clothing",
    href: "/shop/kids/kids",
  },
];

export default function Footer() {
  return (
    <footer className=" mx-auto max-w-7xl overflow-hidden px-6 pt-64 lg:px-8">
      <nav
        aria-label="Footer"
        className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 sm:text-sm/6"
      >
        <PopoverGroup className="flex gap-x-6 lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 sm:text-lg/6 font-semibold text-text hover:text-secondary">
              Shop
              <ChevronUpIcon aria-hidden="true" className="size-5 flex-none " />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute bottom-full -left-8 z-10 mt-3 w-screen max-w-[20rem] overflow-hidden rounded-md bg-(--color-background)/95 ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 sm:text-sm/6 hover:backdrop-brightness-150"
                  >
                    <div className="flex-auto">
                      <Link
                        href={category.href}
                        aria-label={category.description}
                        className="block font-semibold text-text hover:text-secondary"
                      >
                        {category.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            href="/about/nikwax"
            className="sm:text-lg/6 font-semibold text-text hover:text-secondary"
          >
            About
          </Link>

          <Link
            href="/order/about"
            className="sm:text-lg/6 font-semibold text-text hover:text-secondary"
          >
            Order
          </Link>

          <Link
            href="#"
            className="sm:text-lg/6 font-semibold text-text hover:text-secondary"
          >
            Gallery
          </Link>
        </PopoverGroup>
      </nav>

      <div className="mt-16 border-t border-text-secondary pt-8">
        <p className="text-center text-sm leading-6 text-text">
          &copy; 2003 Cioch Outdoor Clothing, All rights reserved.
        </p>
        <div className="mt-6 flex justify-center gap-x-12">
          <Link href="/">
            <Image
              src="/main.jpg"
              alt="Cioch Outdoor Clothing"
              className=" max-w-[100px] h-auto rounded-sm hover:brightness-120"
              width={300}
              height={300}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
