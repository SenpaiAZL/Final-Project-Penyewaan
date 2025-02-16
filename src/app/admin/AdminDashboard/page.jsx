"use client";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manage Users */}
          <Link href="/admin/Users" passHref>
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
          <Link href="/admin/Products" passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Penyewaan
              </h2>
              <p className="text-gray-700">
                Add, edit, or remove products from the catalog.
              </p>
            </div>
          </Link>
          {/* View Orders */}
          <Link href="/admin/Orders" passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Kategori
              </h2>
              <p className="text-gray-700">Track and manage kategori</p>
            </div>
          </Link>
          {/* Manage Settings */}
          <Link href="/admin/Settings" passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Manage Settings
              </h2>
              <p className="text-gray-700">
                Configure system settings and preferences.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
