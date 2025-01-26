import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/register`, formData);
      if (response.data.token) {
        setSuccess("Registration successful! You can now log in.");
        navigate("/dashboard");
        setFormData({ fullName: "", email: "", password: "" });
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
        {success && <div className="text-green-500 text-sm mb-4 text-center">{success}</div>}

        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1 font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Register
        </button>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-400 hover:text-indigo-500">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
}
