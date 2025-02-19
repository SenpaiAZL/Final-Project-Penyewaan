"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaExchangeAlt,
  FaArrowLeft,
} from "react-icons/fa";

export default function AddPenyewaan() {
  const [form, setForm] = useState({
    idPelanggan: "",
    tanggalSewa: "",
    tanggalKembali: "",
    statusPembayaran: "",
    statusPengembalian: "",
    totalHarga: "",
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
      !form.idPelanggan ||
      !form.tanggalSewa ||
      !form.tanggalKembali ||
      !form.statusPembayaran ||
      !form.statusPengembalian ||
      !form.totalHarga
    ) {
      setErrorMessage("Please fill in all fields.");
      setMessage("");
      return;
    }

    setMessage("Penyewaan added successfully!");

    setForm({
      idPelanggan: "",
      tanggalSewa: "",
      tanggalKembali: "",
      statusPembayaran: "",
      statusPengembalian: "",
      totalHarga: "",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold p-6 rounded-lg mb-12 w-full text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Add Penyewaan</h1>
          <p className="text-xl">
            Welcome to the penyewaan management page. Here you can add new
            penyewaan.
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
            <FaUser className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="idPelanggan"
              placeholder="ID Pelanggan"
              value={form.idPelanggan}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaCalendarAlt className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
              name="tanggalSewa"
              placeholder="Tanggal Sewa"
              value={form.tanggalSewa}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaCalendarAlt className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
              name="tanggalKembali"
              placeholder="Tanggal Kembali"
              value={form.tanggalKembali}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaMoneyCheckAlt className="mr-2 text-blue-500" />
            <select
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="statusPembayaran"
              value={form.statusPembayaran}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Lunas">Lunas</option>
              <option value="Belum Dibayar">Belum Dibayar</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <FaExchangeAlt className="mr-2 text-blue-500" />
            <select
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="statusPengembalian"
              value={form.statusPengembalian}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Kembali">Kembali</option>
              <option value="Belum Kembali">Belum Kembali</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <FaMoneyCheckAlt className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="totalHarga"
              placeholder="Total Harga"
              value={form.totalHarga}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Add Penyewaan
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
