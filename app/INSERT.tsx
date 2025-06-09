"use client";
import { usePathname } from "next/navigation";
import AboutNikwax from "@/app/about/nikwax/page.tsx";
import AboutAftercare from "@/components/about/aboutAftercare";
import AboutShop from "@/components/about/aboutShop";
import AboutMaterials from "@/components/about/aboutMaterials";
import AboutSizes from "@/components/about/aboutSizes";
import AboutLinks from "@/components/about/aboutLinks";
import AboutNav from "@/components/about/aboutNav";

const pathToComponent: Record<string, JSX.Element> = {
  "/about/nikwax": <AboutNikwax />,
  "/about/aftercare": <AboutAftercare />,
  "/about/shop": <AboutShop />,
  "/about/materials": <AboutMaterials />,
  "/about/sizes": <AboutSizes />,
  "/about/links": <AboutLinks />,
};

export default function About() {
  const pathname = usePathname();
  const component = pathToComponent[pathname] || <AboutNikwax />;

  return (
    <section
      id="about"
      className="flex items-start w-[100vw] min-h-[100vh] bg-foreground bg-[url(/brittle.jpg)] bg-cover bg-no-repeat bg-fixed relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-2 bg-fixed pointer-events-none"></div>
      <div className="min-h-[80vh] pb-15 mt-25 flex flex-col max-w-[90rem] px-6 pt-2 sm:pt-5 sm:px-12 mx-auto bg-foreground/80 rounded-md overflow-y-auto">
        <AboutNav />
        {component}
      </div>
    </section>
  );
}