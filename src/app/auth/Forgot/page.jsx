// pages/forgot-password.js
"use client";

import Head from "next/head";
import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setMessage("Loading...");

    if (!email) {
      setErrorMessage("Please enter your email address.");
      setMessage("");
      return;
    }

    try {
      // Simulate an API call to request a password reset
      const response = await axios.post(
        "https://api-elektronik-finalproject.aran8276.site/api/auth/forgot-password",
        {
          email,
        }
      );

      console.log("Response dari API:", response.data);

      setMessage("Password reset link sent! Please check your email.");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Failed to send reset link"
      );
      setMessage("");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <Head>
        <title>Forgot Password</title>
      </Head>
      <div className="flex flex-col items-center bg-white shadow-2xl rounded-lg p-8 max-w-md w-full space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Forgot Password</h2>
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
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="submit"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
