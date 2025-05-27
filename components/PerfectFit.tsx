import Image from "next/image";

export default function perfectFit() {
  return (
    <section
      id="perfectFit"
      className="relative w-full min-h-[90vh] h-full bg-tertiary z-0"
    >
      <Image
        src="/contourP.png"
        alt="background"
        className="flex lg:hidden absolute top-0 left-0 h-full w-full object-cover opacity-5 -z-10"
        width={1000}
        height={2000}
      />
      <Image
        src="/contour.png"
        alt="background"
        className="hidden lg:flex absolute top-0 left-0 h-full w-full object-cover opacity-5 -z-10"
        width={2000}
        height={1000}
      />
      <div className="flex flex-col max-w-[90rem] px-6 sm:px-12 mx-auto py-25">
        <div className="flex flex-col lg:flex-row mx-auto">
          <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center px-6">
            <h2 className="text-4xl font-bold text-primary sm:text-5xl  xl:text-6xl text-center">
              Perfect Fit™
            </h2>
            
            <p className="text-xl text-text sm:text-2xl mb-10 text-justify pt-20">
              We have realised that many people cannot buy properly fitting
              outdoor gear in the high-street, and in our view, they are wasting
              their money on clothing that cannot deliver it’s potential
              performance.
            </p>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl text-center mt-10 mb-10 ">
              You can be sure that in buying Perfect Fit™:
            </h2>
            <p className="text-xl text-text sm:text-2xl text-justify mb-10 ">
              Each garment is individually made to your measurements Your
              garment’s performance and comfort (i.e. water-resistance,
              breathability, ventilation and durability) will be maximised.<br/> We
              try to eliminate tight areas, which may cause chaffing and leakage
              Areas of excess fabric which add wear and weight are also removed.<br />
              Every item is made in Struan on the Isle of Skye Cioch staff are
              here to advise and help our customers before and after sales.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mb-10 sm:mb-15 lg:mb-0 mx-auto flex flex-col items-center justify-center ">
            <Image
              src="/production.jpg"
              alt="Cioch Outdoor Clothing"
              className="w-3/4 max-w-[500px] h-auto rounded-lg"
              width={360}
              height={450}
            />
          </div>
        </div>
        <h2 className="text-xl font-bold text-(--color-text) sm:text-2xl text-center mt-10 lg:mt-30  mb-10 mx-auto">
          <span className="text-(--color-primary)">Perfect Fit™</span> garments
          can be made in any combination of available colours from our swatch
        </h2>
      </div>
    </section>
  );
}
