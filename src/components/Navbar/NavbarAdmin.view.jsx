"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavbarView() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogoClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 transition duration-300 z-50 relative overflow-visible">
      {/* Content */}
      <div className="container mx-auto flex justify-between items-center p-6 relative z-10">
        {/* Top Left: Home Link */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <p className="text-2xl font-bold text-gray-900 cursor-pointer">
              Admin Dashboard
            </p>
          </Link>
        </div>

        {/* Right: User Icon and Settings */}
        <nav className="relative flex items-center">
          <img
            src="/user.png"
            alt="User Logo"
            className="w-8 h-8 object-contain cursor-pointer rounded-full border-2 border-gray-300 hover:border-purple-400 transition-all duration-300"
            onClick={handleLogoClick}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
              <Link href="/user/Profile" passHref>
                <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-300">
                  Profile
                </p>
              </Link>
              <Link href="/user/Setting" passHref>
                <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-300">
                  Settings
                </p>
              </Link>
              <Link href="/auth/Login" passHref>
                <p className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-300">
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
