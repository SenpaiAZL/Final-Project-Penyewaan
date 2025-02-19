"use client";

import React, { useState, useEffect } from "react";
import {
  fetchAlat,
  createAlat,
  updateAlat,
  deleteAlat,
  fetchKategori,
} from "@/app/api"; // Impor fungsi API

const TambahAlat = () => {
  const [form, setForm] = useState({
    alat_nama: "",
    alat_deskripsi: "",
    alat_hargaperhari: "",
    alat_stok: "",
    alat_kategori_id: "",
  });
  const [alat, setAlat] = useState([]);
  const [kategori, setKategori] = useState([]); // Initialize kategori state
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch data alat saat halaman dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAlat();
        setAlat(data.data); // Pastikan struktur data sesuai dengan backend
        console.log("alat: ", data)
      } catch (error) {
        console.error("Failed to fetch alat:", error);
        setErrorMessage("Failed to load alat.");
      }
    };
    fetchData();
  }, []);

  // Fetch kategori saat halaman dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchKategori(); // Ambil data dari API
        console.log("Fetched categories:", data); // Debugging data
        setKategori(data.data); // Pastikan data memiliki properti .data
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setErrorMessage("Failed to load categories.");
      }
    };
    fetchData();
  }, []);

  // Handle perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Loading...");
    setErrorMessage("");

    try {
      if (editId) {
        // Update alat
        await updateAlat(editId, form);
        setMessage("Alat updated successfully!");
      } else {
        // Create alat
        await createAlat(form);
        setMessage("Alat added successfully!");
      }

      // Refresh data setelah operasi berhasil
      const updatedData = await fetchAlat();
      setAlat(updatedData.data);

      // Reset form
      setForm({
        alat_nama: "",
        alat_deskripsi: "",
        alat_hargaperhari: "",
        alat_stok: "",
        alat_kategori_id: "",
      });
      setEditId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setMessage("");
    }
  };

  const getKategoriNama = (kategoriId) => {
    const kategoriItem = kategori.find((k) => String(k.kategori_id) === String(kategoriId));
    return kategoriItem ? kategoriItem.kategori_nama : 'Kategori Tidak Ditemukan';
  };

  // Handle edit alat
  const handleEdit = (a) => {
    console.log("Editing alat:", a); // Debugging
    setEditId(a.alat_id); // Pastikan ini alat_id, bukan id
    setForm({
      alat_nama: a.alat_nama,
      alat_deskripsi: a.alat_deskripsi,
      alat_hargaperhari: a.alat_hargaperhari,
      alat_stok: a.alat_stok,
      alat_kategori_id: a.alat_kategori_id,
    });
  };

  // Handle delete alat
  const handleDelete = async (id) => {
    try {
      await deleteAlat(id);
      setMessage("Alat deleted successfully!");

      // Refresh data setelah penghapusan
      const updatedData = await fetchAlat();
      setAlat(updatedData.data);
    } catch (error) {
      console.error("Error deleting alat:", error);
      setErrorMessage(
        error.response?.data?.message || "Failed to delete alat."
      );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gray-600 text-white p-6 rounded-lg shadow-lg mb-12 w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Manage Alat</h1>
          <p className="text-xl">
            Welcome to the tambah alat page. Here you can add, edit, and delete
            alat data.
          </p>
        </section>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          {message && (
            <div className="mb-4 text-green-500 text-sm">{message}</div>
          )}
          {errorMessage && (
            <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama"
            >
              Nama
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="alat_nama"
              name="alat_nama"
              type="text"
              placeholder="Nama Alat"
              value={form.alat_nama}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="deskripsi"
            >
              Deskripsi
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="alat_deskripsi"
              name="alat_deskripsi"
              type="text"
              placeholder="Deskripsi Alat"
              value={form.alat_deskripsi}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="hargaPerhari"
            >
              Harga Perhari
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="alat_hargaperhari"
              name="alat_hargaperhari"
              type="number"
              placeholder="Harga Perhari"
              value={form.alat_hargaperhari}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="stok"
            >
              Stok
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="alat_stok"
              name="alat_stok"
              type="number"
              placeholder="Stok"
              value={form.alat_stok}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
          <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="kategori"
          >
           Pilih Kategori
          </label>
          <select
          className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="alat_kategori_id"
          name="alat_kategori_id"
          value={form.alat_kategori_id}
          onChange={handleChange}
          >
         <option value="">-- Pilih Kategori --</option>
         {kategori?.map((k) => (
         <option key={k.kategori_id} value={k.kategori_id}>
         {k.kategori_nama}
        </option>
        ))}
       </select>
       </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            {editId ? "Update Alat" : "Add Alat"}
          </button>
        </form>

        {/* List Alat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alat?.map((a) => (
            <div key={a.alat_id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {a.alat_nama}
              </h2>
              <p className="text-gray-700">Deskripsi: {a.alat_deskripsi}</p>
              <p className="text-gray-700">Harga Perhari: Rp {a.alat_hargaperhari.toLocaleString()}</p>
              <p className="text-gray-700">Stok: {a.alat_stok}</p>
              <p className="text-gray-700">Kategori: {getKategoriNama(a.alat_kategori_id)}</p>

              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={() => handleEdit(a)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => handleDelete(a.alat_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TambahAlat;