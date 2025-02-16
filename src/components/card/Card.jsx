"use client";
import React from "react";

// Define your component without using prop types
function Card({ alat, onClick }) {
  return (
    <div
      className="group block p-6 max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={alat.image}
        alt={alat.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-500">
        {alat.name}
      </h3>
      <p className="text-gray-600">{alat.price}</p>
      <p className="text-gray-600 mt-2">{alat.description}</p>
    </div>
  );
}

export { Card };
