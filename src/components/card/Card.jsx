"use client";
import React from "react";

export default function Card({ product, onClick }) {
  return (
    <div
      className="group block p-6 max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-500">
        {product.name}
      </h3>
      <p className="text-gray-600">{product.price}</p>
      <p className="text-gray-600 mt-2">{product.description}</p>
    </div>
  );
}
