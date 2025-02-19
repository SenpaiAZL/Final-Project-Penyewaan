"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  createPenyewaanDetail,
  fetchPenyewaanDetail,
} from "@/app/api"; // Import fungsi API
import {
  FaIdBadge,
  FaLaptop,
  FaMoneyCheckAlt,
  FaSortNumericUp,
  FaArrowLeft,
} from "react-icons/fa";

export default function AddItem() {
  const [form, setForm] = useState({
    penyewaan_detail_penyewaan_id: "",
    penyewaan_detail_alat_id: "",
    penyewaan_detail_jumlah: "",
    penyewaan_detail_subharga: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [penyewaanList, setPenyewaanList] = useState([]); // State untuk menyimpan data penyewaan_detail

  // Fetch data penyewaan_detail saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPenyewaanDetail();
          setPenyewaanList(data.data);
      
      } catch (error) {
        console.error("Error fetching penyewaan_detail:", error);
        setPenyewaanList([]);
        const data = await fetchPenyewaanDetail();
  
        setPenyewaanList(data.data);
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

    // Validasi input
    if (
      !form.penyewaan_detail_penyewaan_id ||
      !form.penyewaan_detail_alat_id ||
      !form.penyewaan_detail_jumlah ||
      !form.penyewaan_detail_subharga
    ) {
      setErrorMessage("Please fill in all fields.");
      setMessage("");
      return;
    }

    try {
      // Kirim data ke API
      await createPenyewaanDetail({
        penyewaan_detail_penyewaan_id: Number(form.penyewaan_detail_penyewaan_id),
        penyewaan_detail_alat_id: Number(form.penyewaan_detail_alat_id),
        penyewaan_detail_jumlah: Number(form.penyewaan_detail_jumlah),
        penyewaan_detail_subharga: Number(form.penyewaan_detail_subharga),
      });

      // Berhasil menambahkan item
      setMessage("Item added successfully!");

      // Reset form
      setForm({
        penyewaan_detail_penyewaan_id: "",
        penyewaan_detail_alat_id: "",
        penyewaan_detail_jumlah: "",
        penyewaan_detail_subharga: "",
      });

      // Muat ulang data penyewaan_detail
      const updatedData = await fetchPenyewaanDetail();
      setPenyewaanList(updatedData.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setMessage("");
    }
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
        <form onSubmit={handleSubmit} className="mb-6 bg-white p-6 rounded-lg shadow-md">
          {message && (
            <div className="mb-4 text-green-500 text-sm">{message}</div>
          )}
          {errorMessage && (
            <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
          )}

          {/* ID Penyewaan */}
          <div className="mb-4 flex items-center">
            <FaIdBadge className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="penyewaan_detail_penyewaan_id"
              placeholder="ID Penyewaan"
              value={form.penyewaan_detail_penyewaan_id}
              onChange={handleChange}
            />
          </div>

          {/* ID Alat */}
          <div className="mb-4 flex items-center">
            <FaLaptop className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="penyewaan_detail_alat_id"
              placeholder="ID Alat"
              value={form.penyewaan_detail_alat_id}
              onChange={handleChange}
            />
          </div>

          {/* Jumlah */}
          <div className="mb-4 flex items-center">
            <FaSortNumericUp className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="penyewaan_detail_jumlah"
              placeholder="Jumlah"
              value={form.penyewaan_detail_jumlah}
              onChange={handleChange}
            />
          </div>

          {/* Sub Harga */}
          <div className="mb-4 flex items-center">
            <FaMoneyCheckAlt className="mr-2 text-blue-500" />
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="penyewaan_detail_subharga"
              placeholder="Sub Harga"
              value={form.penyewaan_detail_subharga}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Add Item
          </button>
        </form>

        {/* Daftar Penyewaan Detail */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Daftar Penyewaan</h2>
          {penyewaanList.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 text-left">ID Penyewaan</th>
                    <th className="p-3 text-left">ID Alat</th>
                    <th className="p-3 text-left">Jumlah</th>
                    <th className="p-3 text-left">Sub Harga</th>
                    <th className="p-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {penyewaanList.map((item) => (
                    <tr key={item.penyewaan_detail_id} className="border-b">
                      <td className="p-3">{item.penyewaan_detail_penyewaan_id}</td>
                      <td className="p-3">{item.penyewaan_detail_alat_id}</td>
                      <td className="p-3">{item.penyewaan_detail_jumlah}</td>
                      <td className="p-3">
                        Rp {item.penyewaan_detail_subharga.toLocaleString()}
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => handleEdit(item.penyewaan_detail_id)}
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.penyewaan_detail_id)}
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
            <p>Tidak ada data penyewaan_detail.</p>
          )}
        </div>

        {/* Back Button */}
        <Link href="/admin/Penyewaan">
          <p className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4">
            <FaArrowLeft className="mr-2 inline" /> Back
          </p>
        </Link>
      </main>
    </div>
  );
}

// Fungsi untuk handle edit (dummy)
const handleEdit = (id) => {
  console.log("Edit item with ID:", id);
};

// Fungsi untuk handle delete (dummy)
const handleDelete = (id) => {
  console.log("Delete item with ID:", id);
};