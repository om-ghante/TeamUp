import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import HeroSection from './components/Hero'
import WhyUs from './components/WhyUs'
import AboutUs from './components/aboutus'

function App() {
  return (
    <Router>
      <NavBar />
      <HeroSection /> 
      <WhyUs />
      <AboutUs />
    </Router>
  )
}

export default App
