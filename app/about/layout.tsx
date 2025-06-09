import AboutNav from "@/components/about/aboutNav";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="about"
      className="flex items-start w-[100vw] min-h-[100vh] bg-foreground bg-[url(/brittle.jpg)] bg-cover bg-no-repeat bg-fixed relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-2 bg-fixed pointer-events-none"></div>
      <div className="min-h-[80vh] pb-15 mt-25 flex flex-col max-w-[90rem] px-6 pt-2 sm:pt-5 sm:px-12 mx-auto bg-foreground/80 rounded-md overflow-y-auto">
        <AboutNav />
        {children}
      </div>
    </section>
  );
}