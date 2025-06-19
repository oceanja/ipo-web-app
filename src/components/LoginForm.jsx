import React, { useState } from "react";
import { Link } from "react-router-dom";  // <- import Link
import logo from '../assets/logo (1).png';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 bg-white p-8 shadow-lg rounded-lg"
      >
        {/* 👇 Heading with logo on the left */}
        <div className="flex items-center justify-center space-x-1 mb-4">
          <img src={logo} alt="Logo" className="h-5 w-8" />
          <h1 className="text-3xl font-bold text-[#1A1A1A]">
            <span className="text-black">BLUESTOCK</span>
          </h1>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="flex justify-between items-center">
            <input
              type="password"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Replace <a> with Link or button */}
            <Link
              to="/forgot-password"
              className="text-xs text-indigo-500 ml-2 mt-1 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* reCAPTCHA placeholder */}
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

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label className="text-sm">Keep me signed in</label>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
        >
          Login
        </button>

        <div className="text-center text-sm text-gray-400">or sign in with</div>

        <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
