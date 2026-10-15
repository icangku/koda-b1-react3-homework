import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl">
          Taburai
        </a>

        <div className="flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link
            to="/menu"
            className="text-gray-300 hover:text-white transition"
          >
            Menu
          </Link>
          <Link
            to="/contact-us"
            className="text-gray-300 hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
