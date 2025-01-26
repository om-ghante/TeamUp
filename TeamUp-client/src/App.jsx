import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HeroSection from "./components/Hero";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardSection from "./components/Dashboard";
import Profile from "./components/Profile";
import Userlist from "./components/Userlist";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HeroSection />
              <WhyUs />
              <AboutUs />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/*" element={<DashboardSection />}>
          <Route path="user-list" element={<Userlist />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-xl text-red-500">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
