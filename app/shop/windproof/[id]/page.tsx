import { notFound } from "next/navigation";
import { products } from "@/products/productList";


export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="text-text-secondary px-4 py-8 lg:px-8">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.options}</p>
      <p>{product.price}</p>  
    </div>
  );
}