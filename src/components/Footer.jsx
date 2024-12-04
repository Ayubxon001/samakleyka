import React from "react";
import { FaTelegramPlane, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Your Company</h2>
          <p className="text-sm mt-2">
            Making the web a better place, one line of code at a time.
          </p>
          <p className="mt-1">
            Phone:
            <a href="tel:+1234567890" className="hover:underline">
              +998 (33)966-66-26
            </a>
          </p>
          <p className="mt-1">
            Phone:
            <a href="tel:+1234567890" className="hover:underline">
              +998 (93)153-31-13
            </a>
          </p>
        </div>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a
            href="https://t.me/Rustamof_00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="https://www.instagram.com/samakleyka_uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61567276434573"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
