import FooterAlt from "@/components/FooterAlt";
import "@/styles/gallery.css"
import Image from "next/image";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="gallery"
      className="flex flex-col items-start w-[100vw] min-h-[105%] relative pb-10"
    >
      <div className=" inset-0  -z-10 fixed h-[100lvh] w-[100lvw]">
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-white/5 to-transparent z-2 bg-fixed h-[100lvh]"></div>
      
              <Image
                alt="123"
                src="/brittle.webp"
                fill
                className="h-full object-cover blur-[2px]"
                quality={80}
              />
            </div>
      <div className="min-h-[80vh] pb-15 mt-20 sm:mt-25 flex flex-col w-[98vw] md:w-[90vw] lg:w-[80vw] xl:w-[80vw] max-w-[1350px] px-0 lg:px-6 mx-auto bg-text/90 rounded-md overflow-y-auto z-5">
        <div className="z-10">  
          {children}
        </div>
      </div>
      <FooterAlt />
    </section>
  );
}
