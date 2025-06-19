import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo (1).png';

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm space-y-4 bg-white p-8 shadow-lg rounded-lg"
      >
        {/* 🔷 Logo and Title */}
        <div className="flex items-center justify-center space-x-1 mb-4">
          <img src={logo} alt="Logo" className="h-5 w-8" />
          <h1 className="text-2xl font-bold text-[#1A1A1A]">
            <span className="text-black">BLUESTOCK</span>
          </h1>
        </div>

        <h2 className="text-center text-xl font-bold">Create an account</h2>

        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Shrutika Shinde"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="hello@bluestock.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Terms and reCAPTCHA */}
        <p className="text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="text-indigo-500 underline">
            terms of service
          </Link>.
        </p>

        <div className="border border-gray-300 rounded p-2 flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked readOnly />
            <span>I'm not a robot</span>
          </label>
          <img
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            alt="reCAPTCHA"
            className="h-5"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
        >
          Sign up
        </button>

        <div className="text-center text-sm text-gray-400">or sign up with</div>

        {/* Google Signup */}
        <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        {/* Link to Login */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Sign in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
