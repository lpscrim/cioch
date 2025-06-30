import { notFound } from "next/navigation";
import { products } from "@/products/productList";


export default function ProductPage({ params }: { params: { id: number } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Add more product details here */}
    </div>
  );
}