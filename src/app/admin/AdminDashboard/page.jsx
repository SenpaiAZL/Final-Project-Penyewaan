"use client";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gray-600 text-white p-6 rounded-lg shadow-lg mb-12 w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome, Admin</h1>
          <p className="text-xl">
            Manage all aspects of your platform from here. Keep everything
            running smoothly and efficiently!
          </p>
        </section>
        {/* Menu Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manage Users */}
          <Link href="/admin/ManageCustomer" passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Manage Customer
              </h2>
              <p className="text-gray-700">
                View and manage all registered users.
              </p>
            </div>
          </Link>
          {/* Manage Products */}
          <Link href="/admin/Penyewaan" passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Penyewaan
              </h2>
              <p className="text-gray-700">
                Add, edit, or remove rent from the catalog.
              </p>
            </div>
          </Link>
          {/* View Orders */}
          <Link href="/admin/Kategori" passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Kategori
              </h2>
              <p className="text-gray-700">Track and manage kategori</p>
            </div>
          </Link>
          {/* Alat */}
          <Link href="/admin/Alat" passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Alat
              </h2>
              <p className="text-gray-700">Add, Edit, or remove alat</p>
            </div>
          </Link>
          {/* Manage Settings */}
          <Link href="/admin/" passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Manage Settings
              </h2>
              <p className="text-gray-700">
                Configure system settings and preferences.
              </p>
            </div>
          </Link>
                    {/* Manage Admin Settings */}
                    <Link href="/Profile" passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Admin Account center
              </h2>
              <p className="text-gray-700">
                Read every account registered as admin
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
