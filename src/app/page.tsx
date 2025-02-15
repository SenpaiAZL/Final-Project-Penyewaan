// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Voltify - Home</title>
      </Head>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-6">
          <div className="flex items-center">
            <img
              src="/Voltify Logo.png"
              alt="Voltify Logo"
              className="w-12 h-auto mr-3"
            />
            <h1 className="text-2xl font-bold text-gray-900">Voltify</h1>
          </div>
          <nav>
            <a href="/" className="text-gray-700 mx-4 hover:underline">
              Home
            </a>
            <a href="SignUp" className="text-gray-700 mx-4 hover:underline">
              Sign Up
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Voltify
          </h2>
          <p className="text-gray-700 mb-8">
            Your one-stop solution for all your needs.
          </p>
          <img
            src="/home-banner.png"
            alt="Home Banner"
            className="w-full h-auto rounded-lg shadow-md mb-8"
          />
          <div className="flex justify-center">
            <a
              href="/signup"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow-md mt-12">
        <div className="container mx-auto p-6 text-center text-gray-700">
          <p>© 2025 Voltify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
