import Image from "next/image";
import Link from "next/link";
import AnimateMe from "./Animation/AnimateMe";

export default function FooterAlt() {
  return (
    <footer className=" mx-auto max-w-7xl overflow-hidden px-6 pb-5 lg:px-8 z-9999">
      <div className="mt-16 border-t border-text-secondary pt-8">
              <p className="text-center text-sm leading-6 text-text">
                &copy; 2003-{new Date().getFullYear()} Cioch Outdoor Clothing, All rights reserved.
              </p>
              <AnimateMe />
              <div className="pt-6 pb-6 flex justify-center ">
                <Link href="/">
                  <Image
                    src="/main.webp"
                    alt="Cioch Outdoor Clothing"
                    className="max-w-[100px] h-auto  w-auto mr-4 rounded-sm shadow hover:brightness-120 hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-98 duration-150 transition-all"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>
            </div>
          </footer>
        );
      }
      