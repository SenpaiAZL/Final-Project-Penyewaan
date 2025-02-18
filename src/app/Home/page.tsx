"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "@/components/card/Card";
import { fetchAlat } from "@/app/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchAlat();
        setProducts(data.data); // Asumsikan data alat ada di `data.data`
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to load featured products.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Voltify - Home</title>
      </Head>
      <main className="p-0">
        {/* Hero Section */}
        <section className="relative text-center">
          <img
            src="/Homepage.png"
            alt="Home Banner"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
            <h2 className="text-6xl font-bold text-white mb-4">
              Welcome to Voltify
            </h2>
            <p className="text-xl text-white mb-8">
              Your one-stop solution for all your needs.
            </p>
            <a
              href="/user/Product"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-center mb-6">
            Featured Products
          </h2>
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && (
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              swipeable={true}
              emulateTouch={true}
            >
              {products.map((product) => (
                <div key={product.alat_id} className="flex justify-center">
                  <Card alat={product} />
                </div>
              ))}
            </Carousel>
          )}
        </section>
      </main>
    </div>
  );
}