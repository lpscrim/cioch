export default function About() {
  return (
    <section
      id="about"
      className="flex items-center w-[100vw] min-h-[100vh] bg-foreground bg-[url(/brittle.jpg)] bg-cover bg-no-repeat bg-fixed relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-2 bg-fixed"></div>
      <div className="flex flex-col max-w-[90rem] px-6 sm:px-12 mx-auto py-15 bg-foreground rounded-md">
        <h2 className="text-4xl font-bold text-text-secondary sm:text-5xl text-center lg:mb-10">
          Cioch Outdoor Clothing
        </h2>
        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Cioch Outdoor Clothing is dedicated to providing high-quality,
          handmade outdoor clothing designed for the rugged beauty of the
          Scottish Highlands.
        </p>
      </div>
    </section>
  );
}
