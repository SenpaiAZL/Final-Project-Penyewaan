"use client";
import React from "react";

export default function Card({ alat, onClick }) {
  return (
    <div
      className="group block p-6 max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* <img
        src={alat.image}
        alt={alat.alat_nama}
        className="w-full h-40 object-cover mb-4 rounded"
      /> */}
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-500">
        {alat.alat_nama}
      </h3>
      <p className="text-gray-600">{alat.alat_hargaperhari}</p>
      <p className="text-gray-600 mt-2">{alat.alat_stok}</p>
      <p className="text-gray-600 mt-2">{alat.alat_deskripsi}</p>
    </div>
  );
}
