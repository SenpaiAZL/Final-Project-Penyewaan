"use client";
import { useState, useEffect } from "react";
import { fetchUsers, createUser, updateUser, deleteUser } from "@/app/api";

export default function ManageCustomers() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({
    pelanggan_nama: "",
    pelanggan_email: "",
    pelanggan_alamat: "",
    pelanggan_notelp: "",
  });
  const [editId, setEditId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  // Fetch customer data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        console.log("Fetched customers:", data); // Debugging data
        setCustomers(data.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setErrorMessage("Failed to fetch customers. Please try again.");
      }
    };
    fetchData();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Loading...");
    setErrorMessage("");
    try {
      if (editId) {
        // Update customer
        await updateUser(editId, form);
        setMessage("Pelanggan berhasil diperbarui!");
        // Update local state
        setCustomers((prevCustomers) =>
          prevCustomers.map((customer) =>
            customer.pelanggan_id === editId
              ? { ...customer, ...form }
              : customer
          )
        );
      } else {
        // Create customer
        const newCustomer = await createUser(form);
        setMessage("Pelanggan berhasil ditambahkan!");
        // Update local state
        setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
      }
      // Reset form
      setForm({
        pelanggan_nama: "",
        pelanggan_email: "",
        pelanggan_alamat: "",
        pelanggan_notelp: "",
      });
      setEditId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.response?.data?.message || "Terjadi kesalahan.");
      setMessage("");
    }
  };

  // Handle edit customer
  const handleEdit = (customer) => {
    setEditId(customer.pelanggan_id);
    setForm({
      pelanggan_nama: customer.pelanggan_nama,
      pelanggan_email: customer.pelanggan_email,
      pelanggan_alamat: customer.pelanggan_alamat,
      pelanggan_notelp: customer.pelanggan_notelp,
    });
    setMessage("");
    setErrorMessage("");
  };

  // Handle delete customer
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setMessage("Pelanggan berhasil dihapus!");
      // Update local state
      setCustomers((prevCustomers) =>
        prevCustomers.filter((customer) => customer.pelanggan_id !== id)
      );
    } catch (error) {
      console.error("Error deleting customer:", error);
      setErrorMessage(
        error.response?.data?.message || "Gagal menghapus pelanggan."
      );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gray-600 text-white p-6 rounded-lg shadow-lg mb-12 w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Daftar Pelanggan</h1>
          <p className="text-xl">Berikut adalah daftar semua pelanggan.</p>
        </section>
        {errorMessage && (
          <div className="bg-red-500 text-white p-4 mb-4 rounded">
            {errorMessage}
          </div>
        )}
        {message && (
          <div className="bg-green-500 text-white p-4 mb-4 rounded">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pelanggan_nama"
            >
              Nama Pelanggan
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="pelanggan_nama"
              name="pelanggan_nama"
              type="text"
              placeholder="Nama Pelanggan"
              value={form.pelanggan_nama}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pelanggan_email"
            >
              Email
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="pelanggan_email"
              name="pelanggan_email"
              type="email"
              placeholder="Email"
              value={form.pelanggan_email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pelanggan_alamat"
            >
              Alamat
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="pelanggan_alamat"
              name="pelanggan_alamat"
              type="text"
              placeholder="Alamat"
              value={form.pelanggan_alamat}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pelanggan_notelp"
            >
              Nomor Telepon
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="pelanggan_notelp"
              name="pelanggan_notelp"
              type="text"
              placeholder="Nomor Telepon"
              value={form.pelanggan_notelp}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            {editId ? "Update Pelanggan" : "Tambah Pelanggan"}
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers?.map((customer) => (
            <div
              key={`${customer.pelanggan_id}-${customer.pelanggan_email}`} // Ensure unique key
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {customer.pelanggan_nama}
              </h2>
              <p className="text-gray-700">Email: {customer.pelanggan_email}</p>
              <p className="text-gray-700">
                Alamat: {customer.pelanggan_alamat}
              </p>
              <p className="text-gray-700">
                No. Telepon: {customer.pelanggan_notelp}
              </p>
              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={() => handleEdit(customer)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => handleDelete(customer.pelanggan_id)}
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