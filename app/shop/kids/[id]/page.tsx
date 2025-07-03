"use client";
import React from "react";
import ProductPage from "@/components/shop/productPage";

export default function KidsProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  return <ProductPage params={{ id }} />;
}