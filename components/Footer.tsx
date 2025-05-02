'use client';

import Link from 'next/link';
import { 
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid'

import Image from "next/image";

const categories = [
    { name: 'Kids', description: 'See selection of kids clothing', href: '#'},
    { name: 'Trousers', description: 'See selection of trousers', href: '#'},
    { name: 'Windproof Jackets', description: 'See selection of windproof jackets', href: '#'},
    { name: 'Waterproof Jackets', description: 'See selection of waterproof Jackets', href: '#'},
    ]


export default function Example() {
  return (
    <footer className="relative w-full min-h-[95vh] sm:min-h-[100vh] h-full z-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center py-16 sm:py-24 lg:py-32">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-text-secondary sm:text-5xl">
            Give us a message or put your order in today!
          </p>
          <div className="mt-12 flex justify-center">
            <a id="button"
              href="#"
              className="rounded-md bg-secondary px-3.5 py-2.5 text-base font-bold text-primary shadow-xs hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className=" mx-auto max-w-7xl overflow-hidden px-6 pt-64 lg:px-8">
          <nav
            aria-label="Footer"
            className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 sm:text-sm/6"
          >
        <PopoverGroup className="flex gap-x-6 lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 sm:text-lg/6 font-semibold text-text hover:text-secondary">
              Products
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
                      <Link href={category.href} aria-label={category.description} className="block font-semibold text-text hover:text-secondary">
                        {category.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="#" className="sm:text-lg/6 font-semibold text-text hover:text-secondary">
            About
          </Link>
          
          <Link href="#" className="sm:text-lg/6 font-semibold text-text hover:text-secondary">
            Order
          </Link>

          <Link href="#" className="sm:text-lg/6 font-semibold text-text hover:text-secondary">
            Gallery
          </Link>

          <Link href="#" className="sm:text-lg/6 font-semibold text-text hover:text-secondary">
            Contact
          </Link>
        </PopoverGroup>
             
          </nav>

          <div className="mt-16 border-t border-text-secondary pt-8">
            <p className="text-center text-sm leading-6 text-text">
              &copy; 2003 Cioch Outdoor Clothing, All rights reserved.
            </p>
            <div className="mt-6 flex justify-center gap-x-12">
              <Image
                src="/main.jpg"
                alt="Cioch Outdoor Clothing"
                className="w-3/4 max-w-[100px] h-auto rounded-lg"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
