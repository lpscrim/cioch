import Image from "next/image";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

export default function Example() {
  return (
    <footer className="relative w-full min-h-[100vh] h-full z-0">
      <div className="mx-auto max-w-7xl px-6  lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center py-16 sm:py-24 lg:py-32">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-text-secondary sm:text-5xl">
            Give us a message or put your order in today!
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-bold text-primary shadow-xs hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className=" mx-auto max-w-7xl overflow-hidden px-6 pt-70 lg:px-8">
          <nav
            aria-label="Footer"
            className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
          >
            {navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text hover:text-secondary"
              >
                {item.name}
              </a>
            ))}
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
