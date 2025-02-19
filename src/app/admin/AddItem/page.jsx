"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaIdBadge,
  FaLaptop,
  FaMoneyCheckAlt,
  FaSortNumericUp,
  FaArrowLeft,
} from "react-icons/fa";

export default function AddItem() {
  const [form, setForm] = useState({
    id: "",
    idPenyewaan: "",
    alat: "",
    jumlah: "",
    subHarga: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Loading...");
    setErrorMessage("");

    if (
      !form.id ||
      !form.idPenyewaan ||
      !form.alat ||
      !form.jumlah ||
      !form.subHarga
    ) {
      setErrorMessage("Please fill in all fields.");
      setMessage("");
      return;
    }

    setMessage("Item added successfully!");

    setForm({
      id: "",
      idPenyewaan: "",
      alat: "",
      jumlah: "",
      subHarga: "",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold p-6 rounded-lg mb-12 w-full text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Add Item</h1>
          <p className="text-xl">
            Welcome to the item management page. Here you can add new items.
          </p>
        </section>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mb-6 bg-white p-6 rounded-lg shadow-md"
        >
          {message && (
            <div className="mb-4 text-green-500 text-sm">{message}</div>
          )}
          {errorMessage && (
            <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
          )}
          <div className="mb-4 flex items-center">
            <FaIdBadge className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="id"
              placeholder="ID"
              value={form.id}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaIdBadge className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="idPenyewaan"
              placeholder="ID Penyewaan"
              value={form.idPenyewaan}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaLaptop className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="alat"
              placeholder="Alat"
              value={form.alat}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaSortNumericUp className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="jumlah"
              placeholder="Jumlah"
              value={form.jumlah}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaMoneyCheckAlt className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="subHarga"
              placeholder="Sub Harga"
              value={form.subHarga}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Add Item
          </button>
        </form>
        <Link href="/admin/Penyewaan">
          <p className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4">
            <FaArrowLeft className="mr-2 inline" /> Back
          </p>
        </Link>
      </main>
    </div>
  );
}
