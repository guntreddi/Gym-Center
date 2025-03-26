// src/components/testimonials/Testimonials.jsx
import React from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "John Doe",
    feedback: "Joining this gym has been the best decision! I've achieved great results with the support of experienced trainers.",
    image: "https://via.placeholder.com/80",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback: "Amazing environment, well-maintained equipment, and friendly staff. Highly recommended!",
    image: "https://via.placeholder.com/80",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    feedback: "The group classes are super fun, and I've met a lot of like-minded fitness enthusiasts!",
    image: "https://via.placeholder.com/80",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Members Say</h2>
      <p>Your feedback drives us to provide the best experience!</p>
      <motion.div
        className="testimonials-container"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.feedback}"</p>
            <div className="rating">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
