import AboutNav from "@/components/about/aboutNav";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="about"
      className="flex items-start w-[100vw] min-h-[105vh] bg-foreground bg-[url(/brittle.jpg)] bg-cover bg-no-repeat bg-fixed relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent bg-fixed pointer-events-none"></div>
      <div className="min-h-[80vh] pb-15 mt-25 flex flex-col max-w-[90rem] px-6 pt-2 sm:pt-5 sm:px-12 mx-auto bg-foreground/80 rounded-md overflow-y-auto">
        <AboutNav />
        {children}
        <h2 className="text-xl font-semibold text-text-secondary sm:text-2xl text-center mt-15 lg:mt-15  mb-10 mx-auto">
          <span className="text-primary">Perfect Fit™</span> garments
          can be made in any combination of available colours from our swatch
        </h2>
      </div>
    </section>
  );
}