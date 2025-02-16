"use client";
import Head from "next/head";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from "@/components/card/Card";

export default function Home() {
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

  // Define the onClick function
  const handleCardClick = (alat: { id: number; name: string; price: string; description: string; image: string; category: string; }) => {
    console.log("Alat clicked:", alat);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Voltify - Home</title>
      </Head>
      <main className="p-0">
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
            Featured Alat
          </h2>
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
            {products.map((alat) => (
              <div key={alat.id} className="flex justify-center">
                <Card alat={alat} onClick={() => handleCardClick(alat)} />
              </div>
            ))}
          </Carousel>
        </section>
      </main>
    </div>
  );
}
