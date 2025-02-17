"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ManagePenyewaan() {
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWVsZWt0cm9uaWstZmluYWxwcm9qZWN0LmFyYW44Mjc2LnNpdGUvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3Mzk3NTIwOTcsImV4cCI6MTczOTc1NTY5NywibmJmIjoxNzM5NzUyMDk3LCJqdGkiOiJTUkhqNlVBeFZ1OHVMMnY4Iiwic3ViIjoiMjAiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwicmVmcmVzaCI6ZmFsc2V9.d5BO6sS2cgU2vkC6tDUeqf8LM38KANisVbnWDlqzfr4"; // Replace with your actual access token

  const [penyewaan, setPenyewaan] = useState([]);
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

  useEffect(() => {
    // Fetch initial penyewaan data from API
    const fetchPenyewaan = async () => {
      try {
        const response = await axios.get(
          "https://api-elektronik-finalproject.aran8276.site/api/penyewaan",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPenyewaan(response.data);
      } catch (error) {
        console.error("Error fetching penyewaan data:", error);
      }
    };

    fetchPenyewaan();
  }, [accessToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
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

    try {
      if (editId) {
        // Update penyewaan
        const response = await axios.put(
          `https://api-elektronik-finalproject.aran8276.site/api/penyewaan${editId}`,
          form,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const updatedPenyewaan = penyewaan.map((p) =>
          p.id === editId ? response.data : p
        );
        setPenyewaan(updatedPenyewaan);
        setMessage("Penyewaan updated successfully!");
      } else {
        // Create penyewaan
        const response = await axios.post(
          "https://api-elektronik-finalproject.aran8276.site/api/penyewaan",
          form,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPenyewaan([...penyewaan, response.data]);
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
    } catch (error) {
      console.error("Error saving penyewaan data:", error);
      setErrorMessage("Error saving penyewaan data.");
    }
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://api-elektronik-finalproject.aran8276.site/api/penyewaan/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const updatedPenyewaan = penyewaan.filter((p) => p.id !== id);
      setPenyewaan(updatedPenyewaan);
      setMessage("Penyewaan deleted successfully!");
    } catch (error) {
      console.error("Error deleting penyewaan data:", error);
      setErrorMessage("Error deleting penyewaan data.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gray-600 text-white p-6 rounded-lg shadow-lg mb-12 w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Manage Penyewaan</h1>
          <p className="text-xl">
            Welcome to the penyewaan management page. Here you can add, edit,
            and delete penyewaan data.
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
              Name
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="item"
            >
              Item
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="item"
              name="item"
              type="text"
              placeholder="Item"
              value={form.item}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tanggalSewa"
            >
              Tanggal Sewa
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="tanggalSewa"
              name="tanggalSewa"
              type="date"
              placeholder="Tanggal Sewa"
              value={form.tanggalSewa}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tanggalKembali"
            >
              Tanggal Kembali
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="tanggalKembali"
              name="tanggalKembali"
              type="date"
              placeholder="Tanggal Kembali"
              value={form.tanggalKembali}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="statusPembayaran"
            >
              Status Pembayaran
            </label>
            <select
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="statusPembayaran"
              name="statusPembayaran"
              value={form.statusPembayaran}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Lunas">Lunas</option>
              <option value="Belum Dibayar">Belum Dibayar</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="statusPengembalian"
            >
              Status Pengembalian
            </label>
            <select
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="statusPengembalian"
              name="statusPengembalian"
              value={form.statusPengembalian}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Kembali">Kembali</option>
              <option value="Belum Kembali">Belum Kembali</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="totalHarga"
            >
              Total Harga
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="totalHarga"
              name="totalHarga"
              type="number"
              placeholder="Total Harga"
              value={form.totalHarga}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="submit"
            >
              {editId ? "Update Penyewaan" : "Add Penyewaan"}
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {penyewaan.map((p) => (
            <div key={p.id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {p.name}
              </h2>
              <p className="text-gray-700">Item: {p.item}</p>
              <p className="text-gray-700">Tanggal Sewa: {p.tanggalSewa}</p>
              <p className="text-gray-700">
                Tanggal Kembali: {p.tanggalKembali}
              </p>
              <p className="text-gray-700">
                Status Pembayaran: {p.statusPembayaran}
              </p>
              <p className="text-gray-700">
                Status Pengembalian: {p.statusPengembalian}
              </p>
              <p className="text-gray-700">
                Total Harga: Rp {p.totalHarga.toLocaleString()}
              </p>
              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={() => handleEdit(p)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => handleDelete(p.id)}
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
