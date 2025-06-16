import Image from "next/image";
export default function Shop() {
  return (
    <div className="px-6 flex flex-col lg:flex-row mx-auto">
      <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center justify-start">
        <h2 className="text-3xl font-bold text-secondary sm:text-4xl text-center my-10">
          Our shop & Factory
        </h2>
        <p className="mt-6 text-lg sm:text-xl leading-8 text-text-secondary">
          Opened in May 2000 our new shop gives customers the opportunity to
          browse through our range of clothing and accessories under the shadow
          of the Cuillin Hills. <br />
          <br /> As well as our range of Outdoor Clothing, we also stock thermal
          and leisure clothing from Paramo, Montane, Meindl boots, as well as
          walking and climbing accessories and local books and maps. Please call
          for further details.
          <br />
        </p>
      </div>
      <div className="w-full lg:w-1/2 mt-15 mb-10 sm:mb-15 lg:mb-0 mx-auto flex flex-col items-center justify-center ">
        <Image
          src="/shop.jpg"
          alt="Cioch Shop and Factory"
          className="w-4/5 max-w-[400px] h-auto rounded-lg"
          width={360}
          height={450}
        />
      </div>
    </div>
  );
}
