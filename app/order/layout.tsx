import FooterAlt from "@/components/FooterAlt";
import OrderNav from "@/components/order/OrderNav";
import "@/styles/order.css";
import Image from "next/image";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="order"
      className="flex items-start w-[100vw] min-h-[105%] relative"
    >
      <div className=" inset-0 -z-10 fixed h-[100lvh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-white/5 to-transparent z-2 bg-fixed h-[100lvh]"></div>

        <Image
          alt="123"
          src="/brittle.webp"
          fill
          className="h-full object-cover blur-[2px]"
          quality={50}
        />
      </div>

      <div className="min-h-[80vh] mt-20 sm:mt-25 flex flex-col w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]  mx-auto overflow-y-auto">
        <div className="z-10">
          <OrderNav />
          {children}
        </div>
        <FooterAlt />
      </div>
    </section>
  );
}
