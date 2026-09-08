import type { Metadata } from "next";
import ProductPage from "@/components/shop/productPage";
import { products } from "@/products/productList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.name} | Cioch Outdoor Clothing`,
    description: product.brief,
  };
}

export default async function WindproofProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductPage params={{ id }} />;
}