"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold">TeamUp</h2>
          <p className="text-sm text-gray-400">
            Empowering collaboration and success, one connection at a time.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            title="Links Not Connected"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            title="Links Not Connected"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            title="Links Not Connected"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            title="Links Not Connected"
          >
            Privacy Policy
          </a>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            aria-label="Facebook"
            title="Links Not Connected"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3v12a2 2 0 01-2 2h-3a2 2 0 01-2-2v-4H8v4a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2h3V5a2 2 0 012-2h3a2 2 0 012 2v4h4V4a2 2 0 012-2z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            aria-label="Twitter"
            title="Links Not Connected"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 2a9 9 0 01-2.9 1.11 4.52 4.52 0 00-7.86 3.1c0 .36.04.71.11 1.05A12.94 12.94 0 011 3.14a4.48 4.48 0 001.39 6 4.46 4.46 0 01-2-.55v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2 .08 4.53 4.53 0 004.23 3.14A9 9 0 011 19.54 12.93 12.93 0 007 21c8.29 0 12.81-6.86 12.81-12.81 0-.2 0-.39-.01-.58A9.18 9.18 0 0023 3z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
            aria-label="LinkedIn"
            title="Links Not Connected"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8a6 6 0 016 6v7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-7a2 2 0 00-2-2H8a2 2 0 00-2 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2v-7a6 6 0 016-6h4a6 6 0 016-6zm4 0a2 2 0 10-4 0 2 2 0 004 0z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-gray-400">
        © 2025 TeamUp. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
