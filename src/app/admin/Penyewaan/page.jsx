"use client";
import Link from "next/link";
import { FaPlus, FaEye } from "react-icons/fa"; // Import icons

export default function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold p-6 rounded-lg mb-8 w-full text-center shadow-lg -mt-4">
          <h1 className="text-4xl font-bold mb-5">Admin Dashboard</h1>
          <p className="text-xl">Manage your penyewaan and items from here.</p>
        </section>
        {/* Menu Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add Penyewaan */}
          <Link href="/admin/AddPenyewaan" legacyBehavior passHref>
            <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-green-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center bg-green-100 text-green-600 w-12 h-12 rounded-full mb-4 mx-auto">
                <FaPlus size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Add Penyewaan
              </h2>
              <p className="text-gray-700 text-center">
                Create new penyewaan entries.
              </p>
            </div>
          </Link>

          {/* Add Item */}
          <Link href="/admin/AddItem" legacyBehavior passHref>
            <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center bg-blue-100 text-blue-600 w-12 h-12 rounded-full mb-4 mx-auto">
                <FaPlus size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Add Item
              </h2>
              <p className="text-gray-700 text-center">
                Create new items for your catalog.
              </p>
            </div>
          </Link>

          {/* Display */}
          <Link href="/admin/DisplayData" legacyBehavior passHref>
            <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center bg-yellow-100 text-yellow-600 w-12 h-12 rounded-full mb-4 mx-auto">
                <FaEye size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Display Data
              </h2>
              <p className="text-gray-700 text-center">
                View all uploaded data.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
