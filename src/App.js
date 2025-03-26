import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import AboutUs from "./components/aboutus/AboutUs";
import Services from "./components/service/Services";
import ContactUs from "./components/contactus/ContactUs";
import PricingPlans from "./components/pricingplans/PricingPlans";
import Testimonials from "./components/testimonials/Testimonials";
import Gallery from "./components/gallery/Gallery";
import Trainers from "./components/trainers/Trainers";
import MembershipForm from "./components/membership/MembershipForm";
import Blog from "./components/blog/Blog";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Dashboard from './components/Dashboard';
import GymLocations from './components/GymLocations';

function App() {
  return (
    <div className="App">
      <Router>  
        <nav className="navbar">
          <a href="/" className="brand">🏋️ Fitness Hub</a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing Plans</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/trainers">Trainers</a></li>
            <li><a href="/membership">Join Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/locations">Gym Locations</a></li>

          </ul>
        </nav>

        <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/services" element={<Services />} />
  <Route path="/pricing" element={<PricingPlans />} />
  <Route path="/testimonials" element={<Testimonials />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/trainers" element={<Trainers />} />
  <Route path="/membership" element={<MembershipForm />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/locations" element={<GymLocations />} />  New Route
</Routes>

      </Router>
    </div>
  );
}

export default App;
