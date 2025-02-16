"use client";
// src/app/Alat/page.jsx
import Head from "next/head";
import { useState } from "react";
import { Card } from "../../../components/card/Card";

export default function Alat() {
  const alat = [
    {
      id: 1,
      name: "Alat 1",
      price: "$29.99",
      description: "Description for Alat 1",
      image: "/alat1.jpg",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Alat 2",
      price: "$39.99",
      description: "Description for Alat 2",
      image: "/alat2.jpg",
      category: "Furniture",
    },
    {
      id: 3,
      name: "Alat 3",
      price: "$39.99",
      description: "Description for Alat 3",
      image: "/alat3.jpg",
      category: "Electronics",
    },
    // Add more alat as needed
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

  const filteredAlat = alat.filter((alat) => {
    return (
      (selectedCategory === "All" || alat.category === selectedCategory) &&
      alat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <Head>
        <title>Alat List</title>
      </Head>
      {/* Hero Section */}
      <section className="bg-gray-600 text-white p-6 rounded-lg shadow-lg mb-12 w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Our Alat</h1>
        <p className="text-xl">
          Browse through our extensive collection of alat.
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
            placeholder="Search alat..."
            className="border border-gray-300 rounded-md py-2 px-4 text-black"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlat.map((alat) => (
            <Card key={alat.id} alat={alat} />
          ))}
        </div>
      </div>
    </div>
  );
}
