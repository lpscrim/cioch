import AboutNav from "@/components/about/aboutNav";
import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="about"
      className="flex items-start w-[100vw] min-h-[105vh] bg-foreground bg-[url(/brittle.jpg)] bg-cover bg-no-repeat bg-fixed relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent bg-fixed pointer-events-none"></div>
      <div className="min-h-[80vh] mb-5 pb-15 mt-25 flex flex-col w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] px-6 pt-2 sm:px-12 mx-auto bg-foreground/90 rounded-md overflow-y-auto z-10">
        <AboutNav />
        {children}
        <Link
          href="/#perfectFit"
        >
          <h2 className="text-xl font-semibold text-text-secondary sm:text-2xl text-center mt-20 mx-auto">
            <span className="text-primary">Perfect Fit™</span> garments
            can be made in any combination of available colours from our swatch
          </h2>
        </Link>
      </div>
    </section>
  );
}