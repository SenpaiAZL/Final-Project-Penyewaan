"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavbarAdminView() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogoClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 transition duration-300 z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Top Left: Admin Dashboard Link */}
        <div className="flex items-center">
          <Link href="/admin/AdminDashboard" passHref>
            <p className="text-2xl font-bold text-gray-900">Admin Dashboard</p>
          </Link>
        </div>
        {/* Right: Admin Icon and Settings */}
        <nav className="relative flex items-center">
          <img
            src="/user.png"
            alt="Admin Logo"
            className="w-8 h-8 object-contain cursor-pointer"
            onClick={handleLogoClick}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
              <Link href="/admin/Profile" passHref>
                <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Profile
                </p>
              </Link>
              <Link href="/admin/Settings" passHref>
                <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Settings
                </p>
              </Link>
              <Link href="/auth/Login" passHref>
                <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Logout
                </p>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
