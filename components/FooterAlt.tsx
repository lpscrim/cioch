import Image from "next/image";
import Link from "next/link";

export default function FooterAlt() {
  return (
    <footer className=" mx-auto max-w-7xl overflow-hidden px-6 pt-20 lg:px-8 z-9999">
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
