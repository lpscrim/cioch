import FooterAlt from "@/components/FooterAlt";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="gallery"
      className="flex flex-col items-start w-[100vw] min-h-[105vh] bg-background bg-cover bg-no-repeat bg-fixed relative pb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent bg-fixed pointer-events-none"></div>
      <div className="min-h-[80vh] pb-15 mt-25 flex flex-col w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] px-6 pt-2 sm:px-12 mx-auto bg-foreground/90 rounded-md overflow-y-auto">
        <div className="z-10">
          {children}
        </div>
      </div>
      <FooterAlt />
    </section>
  );
}
