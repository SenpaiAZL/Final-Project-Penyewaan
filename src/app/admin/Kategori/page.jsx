"use client";
import { useState, useEffect } from "react";
import {
  fetchKategori,
  createKategori,
  updateKategori,
  deleteKategori,
} from "@/app/api"; // Impor fungsi API dari api.ts

export default function ManageKategori() {
  const [kategori, setKategori] = useState([]);
  const [form, setForm] = useState({ kategori_nama: "" });
  const [editId, setEditId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  // Fetch data kategori saat halaman dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchKategori(); // Ambil data dari API
        console.log("Fetched categories:", data); // Debugging data
        setKategori(data.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setErrorMessage("Failed to load categories.");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Loading...");
    setErrorMessage("");
    if (!form.kategori_nama) {
      setErrorMessage("Please fill in the category name.");
      setMessage("");
      return;
    }
    try {
      if (editId) {
        // Update kategori
        await updateKategori(editId, form); // Kirim PUT request ke API
        setMessage("Category updated successfully!");
      } else {
        // Create kategori
        await createKategori(form); // Kirim POST request ke API
        setMessage("Category added successfully!");
      }
      // Refresh data setelah operasi berhasil
      const updatedData = await fetchKategori();
      setKategori(updatedData.data);
      setForm({ kategori_nama: "" });
      setEditId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setMessage("");
    }
  };

  const handleEdit = (k) => {
    setForm({ kategori_nama: k.kategori_nama });
    setEditId(k.kategori_id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteKategori(id); // Kirim DELETE request ke API
      setMessage("Category deleted successfully!");
      // Refresh data setelah penghapusan
      const updatedData = await fetchKategori();
      setKategori(updatedData.data);
    } catch (error) {
      console.error("Error deleting category:", error);
      setErrorMessage(error.response?.data?.message || "Failed to delete category.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gray-600 text-white p-6 rounded-lg shadow-lg mb-12 w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Manage Kategori</h1>
          <p className="text-xl">
            Welcome to the kategori management page. Here you can add, edit, and
            delete kategori data.
          </p>
        </section>

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
              htmlFor="name"
            >
              Category Name
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="id"
              name="kategori_nama"
              type="text"
              placeholder="Category Name"
              value={form.kategori_nama}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="submit"
            >
              {editId ? "Update Category" : "Add Category"}
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kategori?.map((k) => (
            <div key={k.kategori_id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {k.kategori_nama}
              </h2>
              <p className="text-gray-700">ID: {k.kategori_id}</p> {/* Tampilkan kategori_id */}
              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={() => handleEdit(k)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => handleDelete(k.kategori_id)}
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
}