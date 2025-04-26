import Image from "next/image";

export default function Intro() {
  return (
    <section
      id="intro"
      className="w-full min-h-[90vh] h-full bg-(--color-foreground) border"
    >
      <div className="flex flex-col max-w-[90rem] px-6 sm:px-12 mx-auto py-35">
        <h2 className="text-4xl font-bold text-(--color-text-secondary) sm:text-5xl text-center">
          Welcome to <span className="text-(--color-secondary) text-5xl sm:text-6xl">Cíoch </span><span className="text-(--color-text-secondary)">Outdoor Clothing</span>
        </h2>
        <div className="flex flex-col lg:flex-row mx-auto pt-30">
          <div className="w-full lg:w-1/2 mb-10 sm:mb-15 lg:mb-0 mx-auto flex flex-col items-center justify-center ">
            <Image
              src="/neilhelen.jpg"
              alt="Cioch Outdoor Clothing"
              className="w-3/4 max-w-[500px] h-auto rounded-lg"
              width={360}
              height={450}
            />
          </div>
          <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center px-4">
            <p className="text-lg text-(--color-text-secondary) sm:text-xl mb-10 text-justify">
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
              <h2 className="text-xl font-bold text-(--color-secondary) sm:text-2xl text-center mt-10 mb-10 ">
                Please note
              </h2>
              <p className="text-lg text-(--color-text-secondary) sm:text-xl text-justify mb-10 ">
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
        <div className="block xl:hidden max-w-[80rem] mx-auto px-4">
          <h2 className="text-xl font-bold text-(--color-secondary) sm:text-2xl text-center mt-10 mb-10 ">
            Please note
          </h2>
          <p className="text-lg text-(--color-text-secondary) sm:text-xl text-justify mb-10 ">
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
