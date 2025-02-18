// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-purple-400 opacity-50 animate-particle-move-${i % 3}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto p-6 text-center text-white relative z-10">
        {/* Contact Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300">Email: contact@voltify.com</p>
          <p className="text-gray-300">Phone: +64 (234) 567-8900</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white hover:text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white hover:text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white hover:text-pink-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a5 5 0 00-5 5v3H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2h-2v-3a5 5 0 00-5-5zm0 9a3 3 0 110-6 3 3 0 010 6zm6 5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white hover:text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14a2 2 0 00-2 2v19a2 2 0 002 2h14a2 2 0 002-2v-19a2 2 0 00-2-2zm-2 17h-10v-6.5a3.5 3.5 0 117 0v6.5h3v-9a1 1 0 00-1-1h-2v-1a2 2 0 012-2h3a2 2 0 012 2v1a2 2 0 01-2 2h-2a1 1 0 00-1 1v9z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © 2025 Voltify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}