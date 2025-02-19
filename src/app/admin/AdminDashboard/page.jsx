"use client";
import Link from "next/link";
import {
  FaUsers,
  FaShoppingCart,
  FaList,
  FaToolbox,
  FaCog,
  FaUserShield,
} from "react-icons/fa"; // Import ikon

export default function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold p-6 rounded-lg mb-8 w-full text-center shadow-lg -mt-4">
          <h1 className="text-4xl font-bold mb-5">Our Alat</h1>
          <p className="text-xl">
            Browse through our extensive collection of alat.
          </p>
        </section>
        {/* Menu Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manage Users */}
          <Link href="/admin/ManageCustomer" legacyBehavior passHref>
            <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center bg-blue-100 text-blue-600 w-12 h-12 rounded-full mb-4 mx-auto">
                <FaUsers size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Manage Customer
              </h2>
              <p className="text-gray-700 text-center">
                View and manage all registered users.
              </p>
            </div>
          </Link>
          {/* Manage Products */}
          <Link href="/admin/Penyewaan" legacyBehavior passHref>
            <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-green-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center bg-green-100 text-green-600 w-12 h-12 rounded-full mb-4 mx-auto">
                <FaShoppingCart size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Penyewaan
              </h2>
              <p className="text-gray-700 text-center">
                Add, edit, or remove rent from the catalog.
              </p>
            </div>
          </Link>
          {/* View Orders */}
          <Link href="/admin/Kategori" legacyBehavior passHref>
            <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center bg-yellow-100 text-yellow-600 w-12 h-12 rounded-full mb-4 mx-auto">
                <FaList size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Kategori
              </h2>
              <p className="text-gray-700 text-center">
                Track and manage kategori.
              </p>
            </div>
          </Link>
          {/* Alat */}
          <Link href="/admin/Alat" legacyBehavior passHref>
            <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center bg-purple-100 text-purple-600 w-12 h-12 rounded-full mb-4 mx-auto">
                <FaToolbox size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Alat
              </h2>
              <p className="text-gray-700 text-center">
                Add, edit, or remove alat.
              </p>
            </div>
          </Link>
          {/* Manage Settings */}
          <Link href="/admin/Configure" legacyBehavior passHref>
            <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center bg-orange-100 text-orange-600 w-12 h-12 rounded-full mb-4 mx-auto">
                <FaCog size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Manage Settings
              </h2>
              <p className="text-gray-700 text-center">
                Configure system settings and preferences.
              </p>
            </div>
          </Link>
          {/* Manage Admin Settings */}
          <Link href="/user/Profile" legacyBehavior passHref>
            <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center bg-teal-100 text-teal-600 w-12 h-12 rounded-full mb-4 mx-auto">
                <FaUserShield size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Admin Account Center
              </h2>
              <p className="text-gray-700 text-center">
                Read every account registered as admin.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
