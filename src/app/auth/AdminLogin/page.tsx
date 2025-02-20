"use client";
import React, { useState, FormEvent } from "react";
import Head from "next/head";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/AdminLogin.module.css"; // Import the external CSS file

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setMessage("Loading...");

    if (!username || !password) {
      setErrorMessage("Please fill in all fields.");
      setMessage("");
      return;
    }

    try {
      const response = await axios.post(
        "https://api-elektronik-finalproject.aran8276.site/api/admin/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", response.data);

      // Save token to localStorage
      localStorage.setItem("adminToken", response.data.token);

      // Display success notification using Toastify
      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        window.location.href = "/admin/AdminDashboard";
      }, 2000);
    } catch (err) {
      const error = err as {
        response?: { data?: { message?: string } };
        message: string;
      };
      console.error("Error from API:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Login failed");
      setMessage("");

      // Display error notification using Toastify
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${styles.background}`}
    >
      <Head>
        <title>Admin Login Page</title>
      </Head>

      {/* Toast Container for notifications */}
      <ToastContainer />

      <div className="flex flex-row items-center bg-white shadow-2xl rounded-lg p-8 max-w-4xl w-full space-x-8">
        <div className="flex-shrink-0">
          <img
            src="/user.png"
            alt="Admin Logo"
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Admin Login</h2>
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
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <a
              href="/auth/AdminRegister"
              className="text-blue-500 hover:underline"
            >
              Register as Admin
            </a>
          </p>
        </div>
      </div>
      <button
        className={`fixed ${styles.backButton}`}
        onClick={() => (window.location.href = "/auth/Login")}
      >
        🔙
      </button>
    </div>
  );
};

export default AdminLogin;
