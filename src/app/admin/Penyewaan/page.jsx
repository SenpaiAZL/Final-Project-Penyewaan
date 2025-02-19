// "use client";
// import { useState, useEffect } from "react";
// import {
//   fetchPenyewaan,
//   createPenyewaan,
//   updatePenyewaan,
//   deletePenyewaan,
// } from "@/app/api";

// export default function ManagePenyewaan() {
//   const [penyewaan, setPenyewaan] = useState([]); // Default ke array kosong
//   const [loading, setLoading] = useState(true);
//   const [form, setForm] = useState({
//     name: "",
//     tanggalSewa: "",
//     tanggalKembali: "",
//     statusPembayaran: "",
//     statusPengembalian: "",
//     totalHarga: "",
//   });
//   const [editId, setEditId] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [message, setMessage] = useState("");

//   // Fetch data penyewaan saat komponen dimuat
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchPenyewaan();
//         console.log("Data fetched:", data); // ⬅️ Debugging

//         // Validasi apakah data adalah array
//         if (Array.isArray(data)) {
//           setPenyewaan(data);
//         } else if (data && typeof data === "object") {
//           // Jika data adalah objek tunggal, konversi ke array
//           setPenyewaan([data]);
//         } else {
//           console.error("API did not return valid data:", data);
//           setPenyewaan([]); // Tetapkan sebagai array kosong jika data tidak valid
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setErrorMessage("Failed to load penyewaan data.");
//       } finally {
//         setLoading(false); // Hentikan loading state
//       }
//     };
//     fetchData();
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("Processing...");
//     setErrorMessage("");

//     // Validasi form
//     if (
//       !form.name ||
//       !form.tanggalSewa ||
//       !form.tanggalKembali ||
//       !form.statusPembayaran ||
//       !form.statusPengembalian ||
//       !form.totalHarga
//     ) {
//       setErrorMessage("Please fill in all fields.");
//       setMessage("");
//       return;
//     }

//     try {
//       const dataToSend = {
//         penyewaan_pelanggan_id: form.name,
//         penyewaan_tglsewa: form.tanggalSewa,
//         penyewaan_tglkembali: form.tanggalKembali,
//         penyewaan_sttspembayaran: form.statusPembayaran,
//         penyewaan_sttskembali: form.statusPengembalian,
//         penyewaan_totalharga: Number(form.totalHarga),
//       };

//       if (editId) {
//         // Update data
//         await updatePenyewaan(editId, dataToSend);
//         setMessage("Penyewaan updated successfully!");
//       } else {
//         // Create data
//         await createPenyewaan(dataToSend);
//         setMessage("Penyewaan added successfully!");
//       }

//       // Reset form dan update data
//       setForm({
//         name: "",
//         tanggalSewa: "",
//         tanggalKembali: "",
//         statusPembayaran: "",
//         statusPengembalian: "",
//         totalHarga: "",
//       });
//       setEditId(null);

//       // Refetch data setelah submit
//       const updatedData = await fetchPenyewaan();
//       if (Array.isArray(updatedData)) {
//         setPenyewaan(updatedData);
//       } else if (updatedData && typeof updatedData === "object") {
//         setPenyewaan([updatedData]);
//       } else {
//         setPenyewaan([]);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setErrorMessage("An error occurred while processing your request.");
//       setMessage("");
//     }
//   };

//   // Handle edit
//   const handleEdit = (p) => {
//     setForm({
//       name: p.penyewaan_pelanggan_id,
//       tanggalSewa: p.penyewaan_tglsewa,
//       tanggalKembali: p.penyewaan_tglkembali,
//       statusPembayaran: p.penyewaan_sttspembayaran,
//       statusPengembalian: p.penyewaan_sttskembali,
//       totalHarga: p.penyewaan_totalharga,
//     });
//     setEditId(p.id);
//   };

//   // Handle delete
//   const handleDelete = async (id) => {
//     try {
//       await deletePenyewaan(id);

//       // Refetch data setelah delete
//       const updatedData = await fetchPenyewaan();
//       if (Array.isArray(updatedData)) {
//         setPenyewaan(updatedData);
//       } else if (updatedData && typeof updatedData === "object") {
//         setPenyewaan([updatedData]);
//       } else {
//         setPenyewaan([]);
//       }

//       setMessage("Penyewaan deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting penyewaan:", error);
//       setErrorMessage("An error occurred while deleting the penyewaan.");
//     }
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-4">Manage Penyewaan</h1>
//       <p className="text-gray-600 mb-4">
//         Welcome to the penyewaan management page. Here you can add, edit, and delete penyewaan data.
//       </p>
//       {message && <div className="text-green-600">{message}</div>}
//       {errorMessage && <div className="text-red-600">{errorMessage}</div>}

//       {/* Form Penyewaan */}
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Pelanggan ID"
//           className="border p-2 w-full"
//         />
//         <input
//           type="date"
//           name="tanggalSewa"
//           value={form.tanggalSewa}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <input
//           type="date"
//           name="tanggalKembali"
//           value={form.tanggalKembali}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <select
//           name="statusPembayaran"
//           value={form.statusPembayaran}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         >
//           <option value="">Select Status Pembayaran</option>
//           <option value="Lunas">Lunas</option>
//           <option value="Belum Dibayar">Belum Dibayar</option>
//         </select>
//         <select
//           name="statusPengembalian"
//           value={form.statusPengembalian}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         >
//           <option value="">Select Status Pengembalian</option>
//           <option value="Kembali">Kembali</option>
//           <option value="Belum Kembali">Belum Kembali</option>
//         </select>
//         <input
//           type="number"
//           name="totalHarga"
//           value={form.totalHarga}
//           onChange={handleChange}
//           placeholder="Total Harga"
//           className="border p-2 w-full"
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 w-full">
//           {editId ? "Update Penyewaan" : "Add Penyewaan"}
//         </button>
//       </form>

//       {/* Loading State */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul className="mt-5 space-y-3">
//           {penyewaan.length > 0 ? (
//             penyewaan?.map((p) => (
//               <li key={p.id} className="border p-3">
//                 <strong>ID Pelanggan: {p.penyewaan_pelanggan_id}</strong>
//                 <p>Tanggal Sewa: {p.penyewaan_tglsewa}</p>
//                 <p>Tanggal Kembali: {p.penyewaan_tglkembali}</p>
//                 <p>Status Pembayaran: {p.penyewaan_sttspembayaran}</p>
//                 <p>Status Pengembalian: {p.penyewaan_sttskembali}</p>
//                 <p>Total Harga: Rp {p.penyewaan_totalharga.toLocaleString()}</p>
//                 <button
//                   onClick={() => handleEdit(p)}
//                   className="bg-yellow-500 text-white p-2 mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(p.id)}
//                   className="bg-red-500 text-white p-2"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))
//           ) : (
//             <p>No data available.</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }