import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const server_api = import.meta.env.VITE_SERVER_API;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    skills: [],
    languages: [],
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    // Handle checkbox inputs (skills and languages)
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: prevData[name].filter((item) => item !== value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${server_api}/api/register`, formData);
      if (response.data.token) {
        setSuccess("Registration successful! You can now log in.");
        navigate("/dashboard");
        setFormData({ fullName: "", email: "", password: "", skills: [], languages: [] });
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
        {success && <div className="text-green-500 text-sm mb-4 text-center">{success}</div>}

        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Skills</label>
          <div className="flex flex-col">
            <label>
              <input
                type="checkbox"
                name="skills"
                value="Web Developer"
                onChange={handleChange}
                checked={formData.skills.includes("Web Developer")}
                className="mr-2"
              />
              Web Developer
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="Frontend Developer"
                onChange={handleChange}
                checked={formData.skills.includes("Frontend Developer")}
                className="mr-2"
              />
              Frontend Developer
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="Backend Developer"
                onChange={handleChange}
                checked={formData.skills.includes("Backend Developer")}
                className="mr-2"
              />
              Backend Developer
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="Android Developer"
                onChange={handleChange}
                checked={formData.skills.includes("Android Developer")}
                className="mr-2"
              />
              Android Developer
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="UI/UX Designer"
                onChange={handleChange}
                checked={formData.skills.includes("UI/UX Designer")}
                className="mr-2"
              />
              UI/UX Designer
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Programming Languages</label>
          <div className="flex flex-col">
            <label>
              <input
                type="checkbox"
                name="languages"
                value="JavaScript"
                onChange={handleChange}
                checked={formData.languages.includes("JavaScript")}
                className="mr-2"
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                name="languages"
                value="Python"
                onChange={handleChange}
                checked={formData.languages.includes("Python")}
                className="mr-2"
              />
              Python
            </label>
            <label>
              <input
                type="checkbox"
                name="languages"
                value="Java"
                onChange={handleChange}
                checked={formData.languages.includes("Java")}
                className="mr-2"
              />
              Java
            </label>
            <label>
              <input
                type="checkbox"
                name="languages"
                value="C++"
                onChange={handleChange}
                checked={formData.languages.includes("C++")}
                className="mr-2"
              />
              C++
            </label>
            <label>
              <input
                type="checkbox"
                name="languages"
                value="Ruby"
                onChange={handleChange}
                checked={formData.languages.includes("Ruby")}
                className="mr-2"
              />
              Ruby
            </label>
          </div>
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
