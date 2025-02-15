"use client";

import Head from "next/head";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://api-elektronik-finalproject.aran8276.site/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Simpan token ke localStorage
      localStorage.setItem("token", data.token);

      // Redirect ke halaman admin/dashboard
      window.location.href = "/admin";
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="flex flex-row items-center bg-white shadow-2xl rounded-lg p-8 max-w-4xl w-full space-x-8">
        <div className="flex-shrink-0">
          <img src="/user-logo.png" alt="User Logo" className="w-32 h-32 object-contain" />
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Login</h2>
          <form className="w-full" onSubmit={handleSubmit}>
            {errorMessage && <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
            <a href="SignUp" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
