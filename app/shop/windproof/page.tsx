import ProductCard from "@/components/shop/productCard";
import { products } from "@/products/productList";


export default function Windproof() {
  return (
    <div className="rounded-md">
      <div className="mx-auto py-2 lg:max-w-7xl">
        <div className="relative py-15 text-center bg-[url('/pic.jpg')] bg-cover bg-center bg-no-repeat rounded-lg min-h-[27vh]">
          <div className="absolute inset-0 bg-black/45 rounded-lg"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-tight text-text">
              Windproof Clothing
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base text-text/90 font-bold">
              See our windproof clothing items below.
            </p>
          </div>
        </div>

        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-6 py-8 md:grid-cols-2 sm:gap-x-6 xl:px-12 lg:px-0 sm:px-8 px-0 justify-items-center">
          {products.filter((product) => product.category === "windproof")
            .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
