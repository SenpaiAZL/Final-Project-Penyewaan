"use client";
// src/app/Alat/page.jsx
import Head from "next/head";
import { useState, useEffect } from "react";
import Card from "../../../components/card/Card";
import { fetchAlat } from "../../../app/api";

export default function Alat() {
  const [alat, setAlat] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAlat();
        setAlat(data.data); // Asumsikan data alat langsung tersedia di `data`
      } catch (error) {
        console.error("Failed to fetch alat:", error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAlat = alat?.filter((item) => {
    return (

      console.log((selectedCategory === "All" || item.category === selectedCategory) &&
      item.alat_nama.toLowerCase().includes(searchTerm.toLowerCase()))
      // (selectedCategory === "All" || item.category === selectedCategory) &&
      // item.alat_nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
console.log(alat)
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
            {["All", "Electronics", "Furniture"].map((category) => (
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
          {alat?.map((item) => (
            <Card key={item.alat_id} alat={item} />
          ))}
        </div>
      </div>
    </div>
  );
}