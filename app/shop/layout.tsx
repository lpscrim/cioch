import ShopNav from "@/components/shop/shopNav";
import FooterAlt from "@/components/FooterAlt";
import "@/styles/shop.css";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="shop"
      className="flex items-start w-[100vw] min-h-[100lvh] bg-foreground  bg-cover bg-no-repeat bg-fixed relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent bg-fixed pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25 bg-fixed pointer-events-none z-0"></div>

      <div className="min-h-[80vh] mt-20 sm:mt-25 flex flex-col w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]  mx-auto overflow-y-auto">
        <div className="z-10">
          <ShopNav />
          {children}
        </div>
        <FooterAlt />
      </div>
    </section>
  );
}
