"use client"
import React, { useState } from "react"
import Logo from "../assets/teamwork-blue.png"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className=" p-4 bg-black text-white flex items-center justify-between">
      <div className="flex items-center gap-3 space-x-2  ml-2 md:ml-5 lg:ml-10">
        <img
          src={Logo}
          alt="Logo"
          className="h-10 w-10"
        />
        <span className="font-bold text-xl">TeamUp</span>
      </div>

      <div className="hidden md:flex space-x-6 text-lg mr-2 md:mr-10 lg:mr-10">
        <NavLink to="#" className="hover:text-indigo-500 transition duration-200">Home</NavLink>
        <NavLink to="#" className="hover:text-indigo-500 transition duration-200">Why TeamUp?</NavLink>
        <NavLink to="#" className="hover:text-indigo-500 transition duration-200">About Us</NavLink>
        <NavLink to="#" className="hover:text-indigo-500 transition duration-200">Contact Us</NavLink>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        style={{ zIndex: 999 }} 
      >
        <NavLink
          to="#"
          className="text-white text-xl"
          onClick={toggleMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="#"
          className="text-white text-xl"
          onClick={toggleMobileMenu}
        >
          Why TeamUp?
        </NavLink>
        <NavLink
          to="#"
          className="text-white text-xl"
          onClick={toggleMobileMenu}
        >
          About Us
        </NavLink>
        <NavLink
          to="#"
          className="text-white text-xl"
          onClick={toggleMobileMenu}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  )
}
