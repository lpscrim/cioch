import Image from "next/image";

const recommendations = [
  {
    name: "George Yeomans- Skye Mountain Guide",
    description:
      "“During last season, the Marsco pullover proved invaluable to my work. Whether it was bivi-ing in the Swiss Alps, crossing the Pyrenees in a thunder storm or standing up to the daily demands of Munro guiding in Scotland, the jacket kept me warm, dry and comfortable. Very good kit from a very good company.”",
    imageSrc: "/georgeyeomans.jpg",
    imageAlt: "Mountain guide wearing Cioch jacket, in the mountains.",
    webSite: "www.guidingonskye.co.uk",
  },
  {
    name: "Cairngorm Mountain Rescue Team",
    description:
      '“The material used on the Cioch kit is second to none! Immediately after trying the trousers of our supplied team kit, I ordered a pair of salopettes for skiing use. They are superb!” \n\n “The Cioch equipment has shown itself to be warm, comfortable and well able to withstand the rigours of winter nights in the Cairngorms.”',
    imageSrc: "/cmt.jpeg",
    imageAlt:
      "Cairngorms mountain rescure team, wearing Cioch jackets, in the mountains.",
    webSite: "",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Recommendations() {
  return (
    <section id="recommendations" className="pb-30">
      <div className="mx-auto max-w-[38rem] px-4 pt-30 pb-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-(--color-secondary) sm:text-5xl">
            Recommendations
          </h2>
        </div>
        <div className="mt-30 space-y-30">
          {recommendations.map((recommendation, recommendationIdx) => (
            <div
              key={recommendation.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 rounded-md px-12 lg:px-8 py-12 lg:py-6 bg-(--color-foreground)  bg-[url(/mocha-grunge.png)]"
            >
              <div
                className={classNames(
                  recommendationIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <Image
                  alt={recommendation.imageAlt}
                  src={recommendation.imageSrc}
                  className="aspect-1/1 w-full h-full max-w-[400] lg:max-w-[280px] rounded-sm object-cover mx-auto"
                  width={500}
                  height={500}
                />
              </div>
              <div
                className={classNames(
                  recommendationIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <h3 className="text-xl font-medium text-(--color-secondary) pb-2">
                  {recommendation.name}
                </h3>
                <p className="my-4 text-lg text-(--color-text-secondary) whitespace-pre-line">
                  {recommendation.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
