"use client"
import React from "react"
import ColourfulText from "../ui/colourful-text"
import { motion } from "motion/react"

export default function HeroSection() {
  return (
    <div 
      id="home-section"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black flex-col">
      <motion.img
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?cs=srgb&dl=pexels-fauxels-3184291.jpg&fm=jpg"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        The best <ColourfulText text="Team Mates" /> <br /> you will ever find
      </h1>
      <br />
      <button className="p-[3px] relative mt-5">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Get Started
        </div>
      </button>
    </div>
  )
}
