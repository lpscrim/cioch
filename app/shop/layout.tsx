import ShopNav from "@/components/shop/shopNav";
import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="about"
      className="flex items-start w-[100vw] min-h-[105vh] bg-foreground  bg-cover bg-no-repeat bg-fixed relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent bg-fixed pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/12 bg-fixed pointer-events-none"></div>

      <div className="min-h-[80vh] mb-5 pb-15 mt-25 flex flex-col w-[100vw] px-6 pt-2 sm:px-12 mx-auto bg-foreground/80 rounded-md overflow-y-auto">
        <ShopNav />
        {children}
        
      </div>
    </section>
  );
}