import ProductCard from "@/components/shop/productCard";
import { windproofs } from "@/products/productList";
const products = windproofs

export default function Windproof() {
  return (
    <div className="px-6 rounded-md">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:max-w-7xl lg:px-8">
        <div className="relative py-15 text-center bg-[url('/pic.jpg')] bg-cover bg-center bg-no-repeat rounded-lg min-h-[27vh]">
          <div className="absolute inset-0 bg-black/55 rounded-lg"></div>
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
        <div className="grid grid-cols-1 gap-y-4 py-8 lg:grid-cols-2 sm:gap-x-6 sm:gap-y-10  lg:gap-x-8 xl:px-12 lg:px-0 sm:px-8 px-0">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
