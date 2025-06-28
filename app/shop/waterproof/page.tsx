import ProductCard from "@/components/shop/productCard";
import Link from "next/link";
import { waterproofs } from "@/products/productList";

const products = waterproofs;

export default function Waterproof() {
  return (
    <div className="rounded-md">
      <div className="mx-auto md:max-w-2xl px-4 py-8 lg:max-w-7xl lg:px-8">
        <div className="relative py-15 text-center bg-[url('/pic.jpg')] bg-cover bg-center bg-no-repeat rounded-lg min-h-[27vh]">
          <div className="absolute inset-0 bg-black/55 rounded-lg"></div>
            <div className="relative z-10">  
              <h1 className="text-4xl font-bold tracking-tight text-text">
                Waterproofs
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base text-text/90 font-bold px-2">
                Explore our range of waterproof <Link href='/about/nikwax'><span className="text-accent font-bold"> Nikwax </span> </Link>clothing designed to keep you dry and comfortable in any weather. We have everything you need for your outdoor adventures.
              </p>
            </div>  
        </div>

        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 py-8 md:grid-cols-2 sm:gap-x-6 sm:gap-y-10 xl:grid-cols-3 lg:gap-x-8 sm:px-8 px-0 md:px-0">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
