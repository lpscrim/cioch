'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const categories = [
  { name: 'Waterproof Jackets', description: 'See selection of waterproof Jackets', href: '#'},
  { name: 'Windproof Jackets', description: 'See selection of windproof jackets', href: '#'},
  { name: 'Trousers', description: 'See selection of trousers', href: '#'},
  { name: 'Kids', description: 'See selection of kids clothing', href: '#'},
]


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-60 bg-(--color-background)/0 text-(--color-text) brightness-150">
      <nav aria-label="Global" className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-8 lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Cioch Clothing</span>
            <Image
              alt=""
              src="/main.jpg"
              className="h-8 w-auto mr-3"
              height="32"
              width="32"
              quality={100}
                          />
          </Link>
          <h2 className='mr-3 text-xl/6 font-semibold text-(--color-text)'>Outdoor Clothing</h2>
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg/6 font-semibold">
              Products
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none " />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-[20rem] overflow-hidden rounded-md bg-(--color-background)/95 ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:backdrop-brightness-150"
                  >
                    <div className="flex-auto">
                      <Link href={category.href} aria-label={category.description} className="block font-semibold ">
                        {category.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="#" className="text-lg/6 font-semibold">
            About
          </Link>
          
          <Link href="#" className="text-lg/6 font-semibold ">
            Order
          </Link>

          <Link href="#" className="text-lg/6 font-semibold ">
            Gallery
          </Link>

          <Link href="#" className="text-lg/6 font-semibold ">
            Contact
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-70" />
        <DialogPanel className="fixed inset-y-0 right-0 z-70 w-full overflow-y-auto bg-(--color-background) text-(--color-text) px-6 py-6 sm:max-w-[20rem] sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className=" p-1.5">
              <span className="sr-only">Cioch CLothing</span>
              <Image
                alt=""
                src="/main.jpg"
                className="h-8 w-auto"
                height="32"
                width="32"
                quality={100}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 mr-3 cursor-pointer" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold  hover:backdrop-brightness-150">
                    Products
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...categories].map((category) => (
                      <DisclosureButton
                        key={category.name}
                        as="a"
                        href={category.href}
                        className="block rounded-lg py-2 pr-3 pl-8 text-sm/7 font-semibold  hover:backdrop-brightness-150"
                      >
                        {category.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:backdrop-brightness-150"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:backdrop-brightness-150"
                >
                  Order
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:backdrop-brightness-150"
                >
                  Gallery
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:backdrop-brightness-150"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
