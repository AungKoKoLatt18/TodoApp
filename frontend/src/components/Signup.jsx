import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4001/user/signup",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      toast.success(data.message || "User registered successfully");
      localStorage.setItem("jwt", data.token);
      navigateTo("/login");
      setUserName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.errors || "User registration failed");
    }
  };

  return (
  <div className="flex h-screen items-center justify-center bg-gradient-to-br from-sky-500 to-gray-900">
    <div className="w-full max-w-md p-8 bg-sky-900 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Create an Account
      </h2>

      <form onSubmit={handleRegister}>
        {/* Username */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-white">
            Username
          </label>
          <input
            className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-white">
            Email
          </label>
          <input
            className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-white">
            Password
          </label>
          <input
            className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-sky-600 text-white hover:bg-sky-800 duration-300 rounded-lg font-semibold p-3 shadow-md"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-black">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-600 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  </div>
);
}

export default Signup;
