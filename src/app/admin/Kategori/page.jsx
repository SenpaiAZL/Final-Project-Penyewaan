"use client";
import { useState } from "react";

export default function ManageKategori() {
  // Initial dummy kategori data
  const [kategori, setKategori] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Furniture" },
  ]);

  const [form, setForm] = useState({ name: "" });
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

    if (!form.name) {
      setErrorMessage("Please fill in the category name.");
      setMessage("");
      return;
    }

    if (editId) {
      // Update kategori
      const updatedKategori = kategori.map((k) =>
        k.id === editId ? { ...k, ...form } : k
      );
      setKategori(updatedKategori);
      setMessage("Category updated successfully!");
    } else {
      // Create kategori
      const newKategori = {
        id: kategori.length + 1,
        ...form,
      };
      setKategori([...kategori, newKategori]);
      setMessage("Category added successfully!");
    }

    setForm({ name: "" });
    setEditId(null);
  };

  const handleEdit = (k) => {
    setForm({ name: k.name });
    setEditId(k.id);
  };

  const handleDelete = (id) => {
    const updatedKategori = kategori.filter((k) => k.id !== id);
    setKategori(updatedKategori);
    setMessage("Category deleted successfully!");
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
              id="name"
              name="name"
              type="text"
              placeholder="Category Name"
              value={form.name}
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
          {kategori.map((k) => (
            <div key={k.id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {k.name}
              </h2>
              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={() => handleEdit(k)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => handleDelete(k.id)}
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
