"use client";

import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      console.log("Mengirim data ke API:", formData);
      const response = await axios.post(
        "https://api-elektronik-finalproject.aran8276.site/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );
      console.log("Response dari API:", response.data);

      toast.success("Registration successful! Redirecting to login...", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        window.location.href = "/auth/Login";
      }, 2500);
    } catch (error) {
      console.error("Error dari API:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Registration failed");
      toast.error(error.response?.data?.message || "Registration failed", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen py-12">
      <Head>
        <title>Sign Up Page</title>
      </Head>
      <ToastContainer />
      <div className="flex flex-col items-center bg-white shadow-2xl rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
        )}
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-6 text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/Login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
