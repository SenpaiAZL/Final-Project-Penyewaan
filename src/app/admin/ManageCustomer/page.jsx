"use client";
import { useState } from "react";

export default function ManageCustomers() {
  // Initial dummy customer data
  const [customers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <main className="flex-grow container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gray-600 text-white p-6 rounded-lg shadow-lg mb-12 w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Registered Customers</h1>
          <p className="text-xl">
            Below is the list of all registered customers.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {customer.name}
              </h2>
              <p className="text-gray-700">{customer.email}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
