// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Voltify - Home</title>
      </Head>
      <main className="p-0">
        <section className="relative text-center">
          <img
            src="/Homepage.png"
            alt="Home Banner"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
            <h2 className="text-6xl font-bold text-white mb-4">
              Welcome to Voltify
            </h2>
            <p className="text-xl text-white mb-8">
              Your one-stop solution for all your needs.
            </p>
            <a
              href="/signup"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
  