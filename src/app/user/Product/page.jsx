"use client";
// src/app/Product/page.jsx
import Head from "next/head";
import { useState } from "react";
import Card from "../../../components/card/Card";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$29.99",
      description: "Description for Product 1",
      image: "/product1.jpg",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$39.99",
      description: "Description for Product 2",
      image: "/product2.jpg",
      category: "Furniture",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$39.99",
      description: "Description for Product 3",
      image: "/product3.jpg",
      category: "Electronics",
    },
    // Add more products as needed
  ];

  const categories = ["All", "Electronics", "Furniture"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <Head>
        <title>Product List</title>
      </Head>
      {/* Hero Section */}
      <section className="bg-gray-600 text-white p-6 rounded-lg shadow-lg mb-12 w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-xl">
          Browse through our extensive collection of products.
        </p>
      </section>
      <div className="w-full max-w-3xl">
        <div className="mb-6 flex justify-between items-center">
          {/* Kategori Filter */}
          <select
            className="border border-gray-300 rounded-md py-2 px-4 text-black"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-md py-2 px-4 text-black"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
