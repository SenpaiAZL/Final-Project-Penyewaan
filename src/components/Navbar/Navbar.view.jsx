"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavbarView() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogoClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 transition duration-300 z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Top Left: Home Link */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <p className="text-2xl font-bold text-gray-900">Voltify</p>
          </Link>
        </div>
        {/* Center: Home, Product, and Contact Links */}
        <nav className="flex-grow flex justify-center">
          <Link href="/Home" passHref>
            <p className="text-gray-700 mx-4 hover:underline">Home</p>
          </Link>
          <Link href="/Product" passHref>
            <p className="text-gray-700 mx-4 hover:underline">Product</p>
          </Link>
          <Link href="/Contact" passHref>
            <p className="text-gray-700 mx-4 hover:underline">Contact</p>
          </Link>
        </nav>
        {/* Right: User Icon and Settings */}
        <nav className="relative flex items-center">
          <img
            src="/user.png"
            alt="User Logo"
            className="w-8 h-8 object-contain cursor-pointer"
            onClick={handleLogoClick}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
              <Link href="/Profile" passHref>
                <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Profile
                </p>
              </Link>
              <Link href="/Setting" passHref>
                <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Settings
                </p>
              </Link>
              <Link href="/logout" passHref>
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
