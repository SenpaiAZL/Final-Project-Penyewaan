"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  createPenyewaan,
  fetchUsers,
  fetchPenyewaan,
  updatePenyewaan,
  deletePenyewaan,
} from "@/app/api";

export default function AddPenyewaan() {
  const [form, setForm] = useState({
    idPelanggan: "",
    tanggalSewa: "",
    tanggalKembali: "",
    statusPembayaran: "",
    statusPengembalian: "",
    totalHarga: "",
  });
  const [customers, setCustomers] = useState([]);
  const [penyewaanList, setPenyewaanList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [editData, setEditData] = useState(null);

  // Fetch data pelanggan
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        if (data && Array.isArray(data.data)) {
          setCustomers(data.data);
        } else {
          console.error("API did not return an array:", data);
          setCustomers([]);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
        setCustomers([]);
      }
    };
    fetchData();
  }, []);

  // Fetch data penyewaan
  useEffect(() => {
    const fetchPenyewaanData = async () => {
      try {
        const response = await fetchPenyewaan();
        if (response && response.data && Array.isArray(response.data)) {
          console.log("data: ", response.data);
          setPenyewaanList(response.data);
        } else if (Array.isArray(response)) {
          setPenyewaanList(response);
        } else {
          console.error("API did not return an array:", response);
          setPenyewaanList([]);
        }
      } catch (error) {
        console.error("Error fetching penyewaan:", error);
        setPenyewaanList([]);
      }
    };
    fetchPenyewaanData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Loading...");
    setErrorMessage("");
    if (
      !form.idPelanggan ||
      !form.tanggalSewa ||
      !form.tanggalKembali ||
      !form.statusPembayaran ||
      !form.statusPengembalian ||
      !form.totalHarga ||
      isNaN(Number(form.idPelanggan)) ||
      isNaN(Number(form.totalHarga))
    ) {
      setErrorMessage("Please fill in all fields correctly.");
      setMessage("");
      return;
    }

    try {
      if (editData) {
        try {
          const response = await updatePenyewaan(editData.penyewaan_id, {
            penyewaan_pelanggan_id: Number(form.idPelanggan),
            penyewaan_tglsewa: form.tanggalSewa,
            penyewaan_tglkembali: form.tanggalKembali,
            penyewaan_sttspembayaran: form.statusPembayaran,
            penyewaan_sttskembali: form.statusPengembalian,
            penyewaan_totalharga: Number(form.totalHarga),
          });
          console.log("Update success:", response);
          setMessage("Penyewaan updated successfully!");
        } catch (error) {
          console.error("Error updating:", error.response?.data || error);
          setErrorMessage(
            error.response?.data?.message || "An error occurred."
          );
        }
      } else {
        await createPenyewaan({
          penyewaan_pelanggan_id: Number(form.idPelanggan),
          penyewaan_tglsewa: form.tanggalSewa,
          penyewaan_tglkembali: form.tanggalKembali,
          penyewaan_sttspembayaran: form.statusPembayaran,
          penyewaan_sttskembali: form.statusPengembalian,
          penyewaan_totalharga: Number(form.totalHarga),
        });
        setMessage("Penyewaan added successfully!");
      }

      setForm({
        idPelanggan: "",
        tanggalSewa: "",
        tanggalKembali: "",
        statusPembayaran: "",
        statusPengembalian: "",
        totalHarga: "",
      });
      setEditData(null);

      const updatedPenyewaan = await fetchPenyewaan();
      setPenyewaanList(updatedPenyewaan.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setMessage("");
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = penyewaanList.find((data) => data.penyewaan_id === id);
    setEditData(itemToEdit);
    setForm({
      idPelanggan: itemToEdit.penyewaan_pelanggan_id.toString(),
      tanggalSewa: itemToEdit.penyewaan_tglsewa,
      tanggalKembali: itemToEdit.penyewaan_tglkembali,
      statusPembayaran: itemToEdit.penyewaan_sttspembayaran,
      statusPengembalian: itemToEdit.penyewaan_sttskembali,
      totalHarga: itemToEdit.penyewaan_totalharga.toString(),
    });
  };

  const handleDelete = async (id) => {
    try {
      await deletePenyewaan(id);
      const updatedPenyewaanList = penyewaanList.filter(
        (data) => data.penyewaan_id !== id
      );
      setPenyewaanList(updatedPenyewaanList);
      setMessage("Penyewaan deleted successfully!");
    } catch (error) {
      console.error("Error deleting penyewaan:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Add Penyewaan</h1>
        <p className="text-lg">
          Welcome to the penyewaan management page. Here you can add new
          penyewaan.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-6"
      >
        {message && (
          <div className="bg-green-500 text-white p-3 rounded mb-4">
            {message}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Pilih ID Pelanggan
          </label>
          <select
            name="idPelanggan"
            value={form.idPelanggan}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Pelanggan --</option>
            {Array.isArray(customers) &&
              customers.map((customer) => (
                <option
                  key={customer.pelanggan_id}
                  value={customer.pelanggan_id}
                >
                  {customer.pelanggan_id} - {customer.pelanggan_nama}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Tanggal Sewa
          </label>
          <input
            type="date"
            name="tanggalSewa"
            value={form.tanggalSewa}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Tanggal Kembali
          </label>
          <input
            type="date"
            name="tanggalKembali"
            value={form.tanggalKembali}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Status Pembayaran
          </label>
          <select
            name="statusPembayaran"
            value={form.statusPembayaran}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Status --</option>
            <option value="Lunas">Lunas</option>
            <option value="Belum Dibayar">Belum Dibayar</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Status Pengembalian
          </label>
          <select
            name="statusPengembalian"
            value={form.statusPengembalian}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Status --</option>
            <option value="Sudah Kembali">Sudah Kembali</option>
            <option value="Belum Kembali">Belum Kembali</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Total Harga
          </label>
          <input
            type="number"
            name="totalHarga"
            value={form.totalHarga}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {editData ? "Update" : "Add"} Penyewaan
        </button>
      </form>

      {/* Back Button */}
      <Link href="/admin/Penyewaan">
        <button className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
          Back
        </button>
      </Link>

      {/* Daftar Penyewaan */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Daftar Penyewaan</h2>
        {penyewaanList.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">ID Pelanggan</th>
                  <th className="p-3 text-left">ID Penyewaan</th>
                  <th className="p-3 text-left">Tanggal Sewa</th>
                  <th className="p-3 text-left">Tanggal Kembali</th>
                  <th className="p-3 text-left">Status Pembayaran</th>
                  <th className="p-3 text-left">Status Pengembalian</th>
                  <th className="p-3 text-left">Total Harga</th>
                  <th className="p-3 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {penyewaanList.map((penyewaan) => (
                  <tr key={penyewaan.penyewaan_id} className="border-b">
                    <td className="p-3">{penyewaan.penyewaan_pelanggan_id}</td>
                    <td className="p-3">{penyewaan.penyewaan_id}</td>
                    <td className="p-3">
                      {new Date(
                        penyewaan.penyewaan_tglsewa
                      ).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      {new Date(
                        penyewaan.penyewaan_tglkembali
                      ).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      {penyewaan.penyewaan_sttspembayaran}
                    </td>
                    <td className="p-3">{penyewaan.penyewaan_sttskembali}</td>
                    <td className="p-3">
                      Rp {penyewaan.penyewaan_totalharga.toLocaleString()}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleEdit(penyewaan.penyewaan_id)}
                        className="text-blue-500 hover:text-blue-700 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(penyewaan.penyewaan_id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">Tidak ada data penyewaan.</p>
        )}
      </div>
    </div>
  );
}
