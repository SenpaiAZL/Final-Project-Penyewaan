// src/components/ProductDetailModal.jsx
"use client";
import React from "react";

export default function ProductDetailModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full mb-4" />
        <p className="mb-2">{product.description}</p>
        <p className="text-lg font-semibold mb-4">{product.price}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
