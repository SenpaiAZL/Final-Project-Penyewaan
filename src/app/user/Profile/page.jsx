// pages/profile.js
"use client";

import { useState } from "react";
import Head from "next/head";

export default function Profile() {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("/default-profile.png");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., update user information in the database)
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Profile - Voltify</title>
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            {/* Profile Picture */}
            <div className="mb-4 flex flex-col items-center">
              <img
                src={profilePicture}
                alt="Profile Picture"
                className="w-32 h-32 rounded-full mb-4"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="mb-2"
              />
            </div>
            {/* Username */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
