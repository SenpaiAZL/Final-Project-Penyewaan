// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-black mt-12">
      <div className="container mx-auto p-6 text-center text-white">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">Contact Us</h2>
          <p>Email: contact@voltify.com</p>
          <p>Phone: +64 (234) 567-8900</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <img src="/twitter.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-4">© 2025 Voltify. All rights reserved.</p>
      </div>
    </footer>
  );
}
