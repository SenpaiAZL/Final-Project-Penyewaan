"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";

export default function AdminSignup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Loading...");
    setErrorMessage("");

    // Validasi input
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      setMessage("");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setMessage("");
      return;
    }

    try {
      // Kirim data ke API
      const response = await axios.post(
        "https://api-elektronik-finalproject.aran8276.site/api/admin/register", // Ganti dengan endpoint register yang sesuai
        {
          username: formData.username,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", response.data);

      // Tampilkan pesan sukses
      setMessage("Registration successful! Redirecting to login...");

      // Redirect ke halaman login setelah pendaftaran berhasil
      setTimeout(() => {
        window.location.href = "/auth/AdminLogin";
      }, 2000);
    } catch (error) {
      console.error("Error from API:", error.response?.data || error.message);

      // Tampilkan pesan kesalahan dari API jika ada
      setErrorMessage(error.response?.data?.message || "Registration failed");
      setMessage("");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen py-12">
      <Head>
        <title>Admin Sign Up Page</title>
      </Head>
      <div className="flex flex-col items-center bg-white shadow-2xl rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Admin Sign Up</h2>

        {/* Pesan sukses */}
        {message && (
          <div className="mb-4 text-green-500 text-sm">{message}</div>
        )}

        {/* Pesan kesalahan */}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
        )}

        {/* Formulir Pendaftaran */}
        <form className="w-full" onSubmit={handleSubmit}>
          {/* Field Username */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Field Password */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Field Confirm Password */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Tombol Submit */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Link ke Halaman Login */}
        <p className="mt-6 text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/auth/AdminLogin" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}