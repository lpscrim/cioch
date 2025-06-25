import ProductCard from "@/components/shop/productCard";

const products = [
  {
    id: 1,
    name: "Waterproof Jacket 1",
    href: "#",
    imageSrc: "/jacket1.jpg",
    imageAlt: "Waterproof jacket in blue.",
    description: "A high-quality waterproof jacket for all weather conditions.",
    options: "Available in sizes S, M, L, XL",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Waterproof jacket 2",
    href: "#",
    imageSrc: "/jacket2.jpg",
    imageAlt: "Waterproof pants in black.",
    description: "Durable waterproof pants for outdoor adventures.",
    options: "Available in sizes S, M, L, XL",
    price: "$90.00",
  },
  {
    id: 3,
    name: "Waterproof jacket3",
    href: "#",
    imageSrc: "/jacket3.jpg",
    imageAlt: "Waterproof boots in brown.",
    description: "Comfortable waterproof boots for hiking and trekking.",
    options: "Available in sizes 7, 8, 9, 10, 11",
    price: "$150.00",
  },
  {
    id: 4,
    name: "Waterproof jacket 4",
    href: "#",
    imageSrc: "/jacket4.jpg",
    imageAlt: "Waterproof gloves in black.",
    description: "Warm waterproof gloves for cold weather.",
    options: "Available in sizes S, M, L",
    price: "$40.00",
  },
  {
    id: 5,
    name: "Waterproof jacket 5",
    href: "#",
    imageSrc: "/jacket5.jpg",
    imageAlt: "Waterproof hat in grey.",
    description: "Stylish waterproof hat for rainy days.",
    options: "One size fits all",
    price: "$30.00",
  },
  {
    id: 6,
    name: "Waterproof jacket 6",
    href: "#",
    imageSrc: "/jacket1.jpg",
    imageAlt: "Waterproof backpack in green.",
    description: "Spacious waterproof backpack for travel.",
    options: "Available in various colors",
    price: "$80.00",
  },
];

export default function Waterproof() {


  return (
    <div className="px-6">
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
