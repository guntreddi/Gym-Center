// src/components/services/Services.jsx
import React from "react";
import "./Services.css";
import { FaDumbbell, FaUsers, FaLeaf, FaAppleAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Personal Training",
      description:
        "Customized training sessions with certified personal trainers to meet your specific needs.",
      icon: <FaDumbbell />,
    },
    {
      title: "Group Classes",
      description:
        "Join dynamic group classes that keep you motivated and energized.",
      icon: <FaUsers />,
    },
    {
      title: "Yoga & Meditation",
      description:
        "Relax, rejuvenate, and strengthen your mind-body connection with our yoga sessions.",
      icon: <FaLeaf />,
    },
    {
      title: "Nutritional Guidance",
      description: "Receive expert nutritional advice to complement your fitness regime.",
      icon: <FaAppleAlt />,
    },
  ];

  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>Explore a variety of fitness programs tailored to suit all levels of experience and goals.</p>

      <div className="service-cards">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            title={service.description}
          >
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
