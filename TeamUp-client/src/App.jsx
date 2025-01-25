import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import HeroSection from './components/Hero'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
