"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";

const tabs = [
  { name: "Nikwax", href: "#nikwax", current: false },
  { name: "Atercare", href: "#aftercare", current: false },
  { name: "Our Shop", href: "#shop", current: true },
  { name: "Materials", href: "#materials", current: false },
  { name: "Peg sizes", href: "#sizes", current: false },
  { name: "Links", href: "#links", current: false },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function AboutNav() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        <select
          defaultValue={tabs.find((tab) => tab.current)?.name ?? tabs[0].name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-text py-2 pr-8 pl-3 text-base text-text-secondary outline-1 -outline-offset-1 outline-text-secondary/10 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary"
          onChange={(e) => {
            const selectedTab = tabs.find((tab) => tab.name === e.target.value);
            if (selectedTab) {
              window.location.hash = selectedTab.href;
            }
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-text-secondary"
        />
      </div>
      <div className="hidden sm:block">
        <nav
          aria-label="Tabs"
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow-sm"
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? "page" : undefined}
              className={classNames(
                tab.current
                  ? "text-text-secondary"
                  : "text-text-secondary/80 hover:bg-gray-50",
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden bg-text/50 px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
              )}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? "bg-secondary" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
