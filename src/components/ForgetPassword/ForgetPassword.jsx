import React, { useState } from "react";
import Image from "../../assets/forget-password.png";

const ForgetPasword = () => {
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
        <div className="hidden md:flex md:flex-1 items-center justify-center">
          <img
            src={Image}
            alt="Sign In Illustration"
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>
        <div className="flex-1 p-6 sm:p-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Welcome to Kuber
          </h2>
          <p className="text-center mb-8 text-gray-600">
            Need an account?{" "}
            <a href="/signup" className="text-blue-500">
              Sign Up
            </a>
          </p>
          <div className="flex justify-center flex-wrap  mb-4 space-x-2">
            <button className="px-4 py-2 m-4 rounded-full border border-blue-500 text-blue-500">
              Admin
            </button>
            <button className="px-4 py-2 m-4 rounded-full border border-red-500 text-red-500">
              Employee
            </button>
            <button className="px-4 py-2 m-4 rounded-full border border-purple-500 text-purple-500">
              Client
            </button>
          </div>
          <form>
            <div className="relative mb-4">
              <label
                className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 ${
                  usernameFocused || username ? "text-xs -top-2" : "text-base"
                }`}
              >
                Username*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pt-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder=""
                value={username}
                onFocus={() => setUsernameFocused(true)}
                onBlur={() => setUsernameFocused(false)}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 ${
                  passwordFocused || password ? "text-xs -top-2" : "text-base"
                }`}
              >
                Password*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pt-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder=""
                value={password}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center flex-wrap justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="/forget-password" className="text-blue-500">
                Forgot Password?
              </a>
            </div>
            <div className="mb-4 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
            {/* <div className="flex items-center justify-center mt-4">
              <span className="text-gray-600">OR</span>
            </div>
            <div className="flex items-center justify-center mt-4 space-x-4">
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-google"></i>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-linkedin"></i>
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasword;
