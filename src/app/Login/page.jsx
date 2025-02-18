"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Import toast dari React Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS untuk styling

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setMessage("Loading...");
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      setMessage("");
      return;
    }
    try {
      const response = await axios.post(
        "https://api-elektronik-finalproject.aran8276.site/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Response dari API:", response?.data);

      // Simpan token ke localStorage
      localStorage.setItem("token", response?.data?.access_token);

      // Tampilkan notifikasi sukses menggunakan Toastify
      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000, // Notifikasi akan hilang setelah 2 detik
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setMessage("Login successful! Redirecting...");

      // Redirect ke halaman admin setelah sukses
      setTimeout(() => {
        window.location.href = "/Home"; // Ganti dengan halaman tujuan Anda
      }, 2000);
    } catch (error) {
      console.error("Error dari API:", error.response?.data || error.message);

      // Tampilkan notifikasi gagal menggunakan Toastify
      toast.error(error.response?.data?.message || "Login failed", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setErrorMessage(error.response?.data?.message || "Login failed");
      setMessage("");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-purple-400 opacity-50 animate-particle-move-${
              i % 3
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
      <Head>
        <title>Login Page</title>
      </Head>

      {/* Toast Container untuk menampilkan notifikasi */}
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-2xl w-full relative overflow-hidden">
        <div className="flex-shrink-0">
          <img
            src="/User.png"
            alt="User Logo"
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Login</h2>
          <form className="w-full" onSubmit={handleSubmit}>
            {message && (
              <div className="mb-4 text-green-500 text-sm">{message}</div>
            )}
            {errorMessage && (
              <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
            )}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-8 text-gray-600 text-sm">
            Don't have an account?{" "}
            <a href="/SignUp" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
