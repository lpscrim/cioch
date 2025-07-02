import ProductPage from "@/components/shop/productPage";

export default function WindproofProductPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProductPage params={params} />;
}