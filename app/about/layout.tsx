import AboutNav from "@/components/about/aboutNav";
import FooterAlt from "@/components/FooterAlt";
import Link from "next/link";
import "@/styles/about.css";
import Image from "next/image";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="about"
      className="flex flex-col items-start w-[100vw] min-h-[100lvh] relative pb-10"
    >
      <div className=" inset-0  -z-10 fixed h-[100lvh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-white/5 to-transparent z-2 bg-fixed h-[100lvh]"></div>

        <Image
          alt="123"
          src="/brittle.webp"
          fill
          className="h-full object-cover"
          quality={100}
        />
      </div>
      <div className="min-h-[80vh] pb-15 mt-25 flex flex-col w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] px-6 pt-2 sm:px-12 mx-auto bg-text/90 rounded-md overflow-y-auto">
        <div className="z-10">
          <AboutNav />
          {children}
          <Link href="/#perfectFit">
            <h4 className="text-xl font-semibold text-text-secondary sm:text-2xl text-center mt-20 mx-auto">
              <span className="drop-shadow-sm text-primary hover:text-secondary">
                Perfect Fit™
              </span>{" "}
              garments can be made in any combination of available colours from
              our swatch
            </h4>
          </Link>
        </div>
      </div>
      <FooterAlt />
    </section>
  );
}
