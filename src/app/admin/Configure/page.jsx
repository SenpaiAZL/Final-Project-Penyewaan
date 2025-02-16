"use client";
import { useState } from "react";

export default function ManageConfiguration() {
  // Initial dummy configuration data
  const [config, setConfig] = useState({
    siteTitle: "My Website",
    siteDescription: "Welcome to My Website",
    contactEmail: "contact@mywebsite.com",
    itemsPerPage: 10,
  });

  const [form, setForm] = useState(config);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Loading...");
    setErrorMessage("");

    // Update configuration
    setConfig(form);
    setMessage("Configuration updated successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gray-600 text-white p-6 rounded-lg shadow-lg mb-12 w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Manage Configuration</h1>
          <p className="text-xl">
            Update the website's configuration settings below.
          </p>
        </section>
        <form onSubmit={handleSubmit} className="mb-6">
          {message && (
            <div className="mb-4 text-green-500 text-sm">{message}</div>
          )}
          {errorMessage && (
            <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="siteTitle"
            >
              Site Title
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="siteTitle"
              name="siteTitle"
              type="text"
              placeholder="Site Title"
              value={form.siteTitle}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="siteDescription"
            >
              Site Description
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="siteDescription"
              name="siteDescription"
              type="text"
              placeholder="Site Description"
              value={form.siteDescription}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contactEmail"
            >
              Contact Email
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="contactEmail"
              name="contactEmail"
              type="email"
              placeholder="Contact Email"
              value={form.contactEmail}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="itemsPerPage"
            >
              Items Per Page
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="itemsPerPage"
              name="itemsPerPage"
              type="number"
              placeholder="Items Per Page"
              value={form.itemsPerPage}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="submit"
            >
              Update Configuration
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
