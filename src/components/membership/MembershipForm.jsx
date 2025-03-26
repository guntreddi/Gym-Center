// src/components/membership/MembershipForm.jsx
import React, { useState, useEffect } from "react";
import "./MembershipForm.css";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaDumbbell } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "Basic",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("membershipForm"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem("membershipForm", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const validateForm = () => {
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      toast.error("All fields are required!");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email address!");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be 10 digits!");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Membership Form Submitted Successfully!");
      console.log(formData);
      localStorage.removeItem("membershipForm");
      setFormData({
        name: "",
        email: "",
        phone: "",
        membershipType: "Basic",
      });
    }
  };

  return (
    <div className="membership-form">
      <h2>Join Our Gym Today!</h2>
      <ToastContainer />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <label>
          <FaUser /> Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />

        <label>
          <FaEnvelope /> Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        <label>
          <FaPhone /> Phone:
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
        />

        <label>
          <FaDumbbell /> Membership Type:
        </label>
        <select
          name="membershipType"
          value={formData.membershipType}
          onChange={handleChange}
        >
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>

        <button type="submit">Submit</button>
      </motion.form>
    </div>
  );
};

export default MembershipForm;
