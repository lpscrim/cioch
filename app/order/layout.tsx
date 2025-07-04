import FooterAlt from "@/components/FooterAlt";
import OrderNav from "@/components/order/OrderNav";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="about"
      className="flex items-start w-[100vw] min-h-[105vh] bg-foreground  bg-cover bg-no-repeat bg-fixed relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent bg-fixed pointer-events-none z-0"></div>
      <div className="min-h-[80vh] mb-5 pb-10 mt-25 flex flex-col w-[100vw] px-6 pt-0 sm:px-12 mx-auto bg-foreground/80 rounded-md overflow-y-auto ">
        <div className="z-10">
          <OrderNav />
          {children}
        </div>
        <FooterAlt />
      </div>
    </section>
  );
}
