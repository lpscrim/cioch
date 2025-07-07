import Image from "next/image";

export default function Intro() {
  return (
    <section
      id="intro"
      className="w-full min-h-[90vh] h-full bg-foreground bg-[url(/mocha-grunge.webp)]"
    >
      <div className="flex flex-col max-w-[90rem] px-6 sm:px-12 mx-auto py-25">
        <h2 className="text-4xl font-bold text-text-secondary sm:text-5xl text-center lg:mb-10">
          Welcome to <span id="cioch" className="text-secondary text-4xl sm:text-5xl font-[800]">Cíoch </span><span className="text-text-secondary">Outdoor Clothing</span>
        </h2>
        <div className="flex flex-col lg:flex-row mx-auto pt-20">
          <div className="w-full lg:w-1/2 mb-10 sm:mb-15 lg:mb-0 mx-auto flex flex-col items-center justify-start px-5">
            <Image
              src="/neilhelen.webp"
              alt="Cioch Outdoor Clothing"
              className="w-full max-w-[400px] xl:max-w-[450px] h-auto rounded-lg"
              width={360}
              height={450}
            />
          </div>
          <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center px-6">

            <p className="text-xl text-text-secondary sm:text-2xl text-justify">
              Neil and Helen Urquhart have been designing and manufacturing
              outdoor clothing for individual customers since 1988. From
              personal use, feedback from customers, professional mountaineers,
              rescue teams and other organisations, we have developed a range of
              clothing which excels in all weather conditions. We think this
              catalogue gives an excellent summary of our products, but if you
              would like to find out more, then please email or call us on{" "}
              <strong>01470 572707</strong>.
            </p>
            <div className="hidden xl:block">
              <h2 className="text-2xl font-bold text-secondary sm:text-3xl text-center mt-10 mb-5 ">
                Please note
              </h2>
              <p className="text-xl text-text-secondary sm:text-2xl text-justify mb-10 ">
                All changes to garments or materials shown on this website
                represent our continual effort to improve our products, using
                newly available fabrics and feedback from our customers,
                including professional mountaineers. In all cases, the essential
                ‘look’ of each garment remains the same as in the photographs.
                Clothing from Paramo, Montane, Lowe Alpine, Sprayway, Trespass &
                Meindl boots, as well as walking and climbing accessories, and
                local books and maps. Please call us for further details.
              </p>
            </div>
          </div>
        </div>
        <div className="block xl:hidden max-w-[80rem] mx-auto px-6">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl text-center mt-10 mb-10 ">
            Please note
          </h2>
          <p className="text-xl text-text-secondary sm:text-2xl text-justify mb-10 ">
            All changes to garments or materials shown on this website represent
            our continual effort to improve our products, using newly available
            fabrics and feedback from our customers, including professional
            mountaineers. In all cases, the essential ‘look’ of each garment
            remains the same as in the photographs. Clothing from Paramo,
            Montane, Lowe Alpine, Sprayway, Trespass & Meindl boots, as well as
            walking and climbing accessories, and local books and maps. Please
            call us for further details.
          </p>
        </div>
      </div>
    </section>
  );
}
