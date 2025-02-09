import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const server_api = import.meta.env.VITE_SERVER_API;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${server_api}/api/login`, {
        email,
        password,
      });

      if (response.data.token) {
        setSuccessMessage("Login successful!");
        navigate("/dashboard");
        localStorage.setItem("authToken", response.data.token);
      } else {
        setErrorMessage(response.data.message || "Invalid credentials.");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>

        {errorMessage && (
          <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="bg-green-500 text-white p-2 rounded mb-4 text-center">{successMessage}</div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded mt-4 focus:outline-none"
          >
            Login
          </button>
            <p className="text-sm text-gray-400 mt-4 text-center">
              Don't have an account?{" "}
              <a href="/register" className="text-indigo-400 hover:text-indigo-500">
                Register here
              </a>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
