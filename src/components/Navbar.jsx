"use client";
// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Top Left: Home Link */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <p className="text-2xl font-bold text-gray-900">Voltify</p>
          </Link>
        </div>
        {/* Center: Home and Product Links */}
        <nav className="flex-grow flex justify-center">
          <Link href="/" passHref>
            <p className="text-gray-700 mx-4 hover:underline">Home</p>
          </Link>
          <Link href="/product" passHref>
            <p className="text-gray-700 mx-4 hover:underline">Product</p>
          </Link>
        </nav>
        {/* Right: Contact and User Icon */}
        <nav className="flex items-center">
          <Link href="/contact" passHref>
            <p className="text-gray-700 mx-4 hover:underline">Contact</p>
          </Link>
          <img
            src="/user.png"
            alt="User Logo"
            className="w-8 h-8 object-contain cursor-pointer"
          />
        </nav>
      </div>
    </header>
  );
}
