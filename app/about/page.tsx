
import AboutMain from "@/components/about/aboutMain";
import AboutNav from "@/components/about/aboutNav";


export default function About() {
  return (
    <section
      id="about"
      className="flex items-center w-[100vw] min-h-[100vh] bg-foreground bg-[url(/brittle.jpg)] bg-cover bg-no-repeat bg-fixed relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-2 bg-fixed"></div>
      <div className="min-h-[80vh] mt-15 flex flex-col max-w-[90rem] px-6 pt-2 sm:pt-5 sm:px-12 mx-auto bg-foreground/80 rounded-md">
        <AboutNav />
        <AboutMain />
      </div>
    </section>
  );
}
