"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";

export default function DisplayData() {
  const [penyewaanData, setPenyewaanData] = useState([]);
  const [itemData, setItemData] = useState([]);

  // Fetch data for Penyewaan (you can replace this with your actual data fetching logic)
  useEffect(() => {
    // Example data for Penyewaan
    const penyewaan = [
      {
        idPelanggan: "1",
        tanggalSewa: "2025-01-01",
        tanggalKembali: "2025-01-10",
        statusPembayaran: "Lunas",
        statusPengembalian: "Kembali",
        totalHarga: "100000",
      },
      {
        idPelanggan: "2",
        tanggalSewa: "2025-01-05",
        tanggalKembali: "2025-01-15",
        statusPembayaran: "Belum Dibayar",
        statusPengembalian: "Belum Kembali",
        totalHarga: "200000",
      },
    ];
    setPenyewaanData(penyewaan);
  }, []);

  // Fetch data for Item (you can replace this with your actual data fetching logic)
  useEffect(() => {
    // Example data for Item
    const items = [
      {
        id: "1",
        idPenyewaan: "101",
        alat: "Laptop",
        jumlah: "2",
        subHarga: "200000",
      },
      {
        id: "2",
        idPenyewaan: "102",
        alat: "Camera",
        jumlah: "1",
        subHarga: "150000",
      },
    ];
    setItemData(items);
  }, []);

  // Edit function
  const handleEdit = (id, type) => {
    if (type === "penyewaan") {
      const itemToEdit = penyewaanData.find((data) => data.idPelanggan === id);
      console.log("Editing Penyewaan Item: ", itemToEdit);
      // Implement your edit logic here
    } else if (type === "item") {
      const itemToEdit = itemData.find((data) => data.id === id);
      console.log("Editing Item: ", itemToEdit);
      // Implement your edit logic here
    }
  };

  // Delete function
  const handleDelete = (id, type) => {
    if (type === "penyewaan") {
      const updatedPenyewaanData = penyewaanData.filter(
        (data) => data.idPelanggan !== id
      );
      setPenyewaanData(updatedPenyewaanData);
      console.log("Deleted Penyewaan Item with ID: ", id);
    } else if (type === "item") {
      const updatedItemData = itemData.filter((data) => data.id !== id);
      setItemData(updatedItemData);
      console.log("Deleted Item with ID: ", id);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold p-6 rounded-lg mb-12 w-full text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Display Data</h1>
        </section>

        {/* Display Penyewaan Data Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Penyewaan Data
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2">ID Pelanggan</th>
                  <th className="py-2">Tanggal Sewa</th>
                  <th className="py-2">Tanggal Kembali</th>
                  <th className="py-2">Status Pembayaran</th>
                  <th className="py-2">Status Pengembalian</th>
                  <th className="py-2">Total Harga</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {penyewaanData.map((data, index) => (
                  <tr key={index}>
                    <td className="py-2">{data.idPelanggan}</td>
                    <td className="py-2">{data.tanggalSewa}</td>
                    <td className="py-2">{data.tanggalKembali}</td>
                    <td className="py-2">{data.statusPembayaran}</td>
                    <td className="py-2">{data.statusPengembalian}</td>
                    <td className="py-2">{data.totalHarga}</td>
                    <td className="py-2 flex justify-around">
                      <button
                        onClick={() => handleEdit(data.idPelanggan, "penyewaan")}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(data.idPelanggan, "penyewaan")}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Display Item Data Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Item Data</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2">ID</th>
                  <th className="py-2">ID Penyewaan</th>
                  <th className="py-2">Alat</th>
                  <th className="py-2">Jumlah</th>
                  <th className="py-2">Sub Harga</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {itemData.map((data, index) => (
                  <tr key={index}>
                    <td className="py-2">{data.id}</td>
                    <td className="py-2">{data.idPenyewaan}</td>
                    <td className="py-2">{data.alat}</td>
                    <td className="py-2">{data.jumlah}</td>
                    <td className="py-2">{data.subHarga}</td>
                    <td className="py-2 flex justify-around">
                      <button
                        onClick={() => handleEdit(data.id, "item")}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(data.id, "item")}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Link href="/admin/Penyewaan">
          <p className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4">
            <FaArrowLeft className="mr-2 inline" /> Back
          </p>
        </Link>
      </main>
    </div>
  );
}
