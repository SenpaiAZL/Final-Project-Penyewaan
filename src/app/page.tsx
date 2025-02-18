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
      <div className="bg-white min-h-screen overflow-hidden relative">
        <Head>
          <title>Voltify - Home</title>
        </Head>
        <main className="p-0 relative">
          {/* Hero Section */}
          <section className="relative text-center py-20 flex flex-col justify-center items-center min-h-screen">
            {/* Content */}
            <div className="flex flex-col justify-center items-center z-10">
              {/* Floating Text (Moved Down) */}
              <motionText className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 animate-float mt-auto">
                Selamat Datang di{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Voltify
                </span>
              </motionText>

              {/* Button with Hover and Float Effect */}
              <a
                href="/user/Product"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 animate-bounce-slow"
              >
                Get Started
              </a>

              {/* Additional Content */}
              {/* <div className="mt-10">
                <h1 className="text-2xl text-gray-700 font-semibold animate-fade-in">
                  Homepage
                </h1>
              </div> */}
            </div>
          </section>

          {/* Background Particles with Movement */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 animate-particle-move-${
                  i % 3
                }`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              ></div>
            ))}
          </div>
        </main>
      </div>

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
    </div>
  );
}
