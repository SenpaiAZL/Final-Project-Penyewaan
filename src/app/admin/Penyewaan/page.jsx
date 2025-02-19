"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaLaptop,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaExchangeAlt,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";

export default function ManagePenyewaan() {
  // Initial dummy penyewaan data
  const [penyewaan, setPenyewaan] = useState([
    {
      id: 1,
      name: "John Doe",
      item: "Laptop",
      tanggalSewa: "2023-04-01",
      tanggalKembali: "2023-04-10",
      statusPembayaran: "Lunas",
      statusPengembalian: "Belum Kembali",
      totalHarga: 1000000,
    },
    {
      id: 2,
      name: "Jane Smith",
      item: "Projector",
      tanggalSewa: "2023-04-02",
      tanggalKembali: "2023-04-09",
      statusPembayaran: "Belum Dibayar",
      statusPengembalian: "Kembali",
      totalHarga: 500000,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    item: "",
    tanggalSewa: "",
    tanggalKembali: "",
    statusPembayaran: "",
    statusPengembalian: "",
    totalHarga: "",
  });
  const [editId, setEditId] = useState(null);
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
      !form.name ||
      !form.item ||
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

    if (editId) {
      // Update penyewaan
      const updatedPenyewaan = penyewaan.map((p) =>
        p.id === editId ? { ...p, ...form } : p
      );
      setPenyewaan(updatedPenyewaan);
      setMessage("Penyewaan updated successfully!");
    } else {
      // Create penyewaan
      const newPenyewaan = {
        id: penyewaan.length + 1,
        ...form,
      };
      setPenyewaan([...penyewaan, newPenyewaan]);
      setMessage("Penyewaan added successfully!");
    }

    setForm({
      name: "",
      item: "",
      tanggalSewa: "",
      tanggalKembali: "",
      statusPembayaran: "",
      statusPengembalian: "",
      totalHarga: "",
    });
    setEditId(null);
  };

  const handleEdit = (p) => {
    setForm({
      name: p.name,
      item: p.item,
      tanggalSewa: p.tanggalSewa,
      tanggalKembali: p.tanggalKembali,
      statusPembayaran: p.statusPembayaran,
      statusPengembalian: p.statusPengembalian,
      totalHarga: p.totalHarga,
    });
    setEditId(p.id);
  };

  const handleDelete = (id) => {
    const updatedPenyewaan = penyewaan.filter((p) => p.id !== id);
    setPenyewaan(updatedPenyewaan);
    setMessage("Penyewaan deleted successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 from-purple-600 to-blue-500 text-white font-bold p-6 rounded-lg mb-12 w-full text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Manage Penyewaan</h1>
          <p className="text-xl">
            Welcome to the penyewaan management page. Here you can add, edit,
            and delete penyewaan data.
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
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaLaptop className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="item"
              placeholder="Item"
              value={form.item}
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
            {editId ? "Update Penyewaan" : "Add Penyewaan"}
          </button>
        </form>

        {/* List Penyewaan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {penyewaan.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {p.name}
              </h2>
              <p className="text-gray-700">
                <FaLaptop className="inline mr-2 text-blue-500" /> Item:{" "}
                {p.item}
              </p>
              <p className="text-gray-700">
                <FaCalendarAlt className="inline mr-2 text-blue-500" /> Tanggal
                Sewa: {p.tanggalSewa}
              </p>
              <p className="text-gray-700">
                <FaCalendarAlt className="inline mr-2 text-blue-500" /> Tanggal
                Kembali: {p.tanggalKembali}
              </p>
              <p className="text-gray-700">
                <FaMoneyCheckAlt className="inline mr-2 text-blue-500" /> Status
                Pembayaran: {p.statusPembayaran}
              </p>
              <p className="text-gray-700">
                <FaExchangeAlt className="inline mr-2 text-blue-500" /> Status
                Pengembalian: {p.statusPengembalian}
              </p>
              <p className="text-gray-700">
                <FaMoneyCheckAlt className="inline mr-2 text-blue-500" /> Total
                Harga: Rp {p.totalHarga.toLocaleString()}
              </p>
              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={() => handleEdit(p)}
                >
                  <FaEdit className="mr-2 inline" /> Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => handleDelete(p.id)}
                >
                  <FaTrashAlt className="mr-2 inline" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
