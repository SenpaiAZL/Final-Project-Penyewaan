// components/Footer.js
import Link from "next/link";

export default function FooterView() {
  return (
    <footer className="bg-black mt-12">
      <div className="container mx-auto p-6 text-center text-white">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">Contact Us</h2>
          <p>Email: contact@voltify.com</p>
          <p>Phone: +64 (234) 567-8900</p>
          <p>Address: 123 Hellava, Malang, Indonesia</p>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
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
        <div className="flex justify-center space-x-4">
          <Link href="/terms" passHref>
            <p className="text-gray-400 hover:text-gray-200">
              Terms of Service
            </p>
          </Link>
          <Link href="/privacy" passHref>
            <p className="text-gray-400 hover:text-gray-200">Privacy Policy</p>
          </Link>
          <Link href="/about" passHref>
            <p className="text-gray-400 hover:text-gray-200">About Us</p>
          </Link>
        </div>
        <p className="mt-4">© 2025 Voltify. All rights reserved.</p>
      </div>
    </footer>
  );
}
