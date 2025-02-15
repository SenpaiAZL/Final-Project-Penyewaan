// pages/contact.js
import Head from "next/head";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-700">Email</h3>
            <p className="text-gray-600">Contact@Voltify.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-700">Phone</h3>
            <p className="text-gray-600">+64 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-700">Address</h3>
            <p className="text-gray-600">
              123 hellava, Malang, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
