// pages/auth/Login.js
"use client";
import Head from "next/head";
import { useState } from "react";
import { login } from "@/app/api"; // Impor fungsi login dari api.ts

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
      const credentials = { email, password };
      const response = await login(credentials); // Gunakan fungsi login dari api.ts
      console.log("Response dari API:", response);

      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/Home"; // Redirect ke halaman Home setelah login berhasil
      }, 2000);
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(error.response?.data?.message || "Login failed");
      setMessage("");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="flex flex-row items-center bg-white shadow-2xl rounded-lg p-8 max-w-4xl w-full space-x-8">
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
            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="submit"
              >
                Login
              </button>
              <a href="/auth/Forgot" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="mt-8 text-gray-600 text-sm">
            Don't have an account?{" "}
            <a href="SignUp" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <button
        className="fixed bottom-4 left-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
        onClick={() => (window.location.href = "/auth/AdminLogin")}
      >
        🛠️
      </button>
    </div>
  );
}