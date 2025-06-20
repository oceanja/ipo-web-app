import React from "react";
import { Link } from "react-router-dom";
import { FaTh } from "react-icons/fa";
import pubLogo from "../assets/pubLogo.png"; // Replace with your path

const PublicNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
      {/* Left Section: Logo + Menu */}
      <div className="flex items-center gap-8">
        <img src={pubLogo} alt="Bluestock" className="h-6 w-auto" />

        <div className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
          <a href="#">PRODUCTS</a>
          <a href="#">PRICING</a>
          <a href="#">COMMUNITY</a>
          <a href="#">MEDIA ▾</a>
          <a href="#">SUPPORT ↗</a>
        </div>
      </div>

      {/* Right Section: Auth + Menu Icon */}
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-sm text-gray-600 hover:text-black">
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700"
        >
          Sign Up Now
        </Link>
        <FaTh className="text-black cursor-pointer" />
      </div>
    </nav>
  );
};

export default PublicNavbar;
