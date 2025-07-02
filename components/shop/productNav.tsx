"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { usePathname, useRouter } from "next/navigation";
import { products } from "@/products/productList";


const tabs = products.map(product => ({
  name: product.name,
  href: `/shop/${product.category}/${product.id}`,
}));

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function ProductNav() {
  const pathname = usePathname();
  const router = useRouter();

  const isTabActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");



  return (
    <div>
      {/* Mobile */}
      <div className="grid grid-cols-1 sm:hidden pb-1">
        <select
          value={tabs.find(tab => pathname === tab.href)?.name ?? tabs[0].name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-foreground/50 py-2 pr-8 pl-3 text-base text-text-secondary outline-1 -outline-offset-1 outline-text focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
          onChange={e => {
            const selectedTab = tabs.find(tab => tab.name === e.target.value);
            if (selectedTab) {
              router.push(selectedTab.href);
            }
          }}
        >
          {tabs.map(tab => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-text-secondary"
        />
      </div>
      {/* Desktop */}
      <div className="hidden sm:block pb-2 mx-auto">
        <nav
          aria-label="Tabs"
          className="isolate flex divide-x divide-text/50 rounded-lg shadow-sm"
        >
          {tabs.map((tab, tabIdx) => {
             const isActive = isTabActive(tab.href);
            return (
              <Link
                key={tab.name}
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={classNames(
                  isActive
                    ? "text-text-secondary bg-primary"
                    : "text-text-secondary/80 hover:backdrop-brightness-110 bg-primary/80",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium hover:backdrop-brightness-110 focus:z-10"
                )}
              >
              <span>{tab.name}</span>
                
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
