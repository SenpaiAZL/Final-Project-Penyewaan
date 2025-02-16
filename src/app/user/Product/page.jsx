// src/app/Product/page.jsx
import Head from "next/head";
import Card from "../../../components/card/Card";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$29.99",
      description: "Description for Product 1",
      image: "/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$39.99",
      description: "Description for Product 2",
      image: "/product2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$39.99",
      description: "Description for Product 3",
      image: "/product3.jpg",
    },
    // Tambahin seperlu atau kalau nemu cara lain go ahead:D
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Product List</title>
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
