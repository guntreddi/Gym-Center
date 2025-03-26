// src/components/testimonials/Testimonials.jsx
import React from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "mahesh babu",
    feedback: "Joining this gym has been the best decision! I've achieved great results with the support of experienced trainers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBpd5MqRCKgPSJedo2J_zkoN88fq-1GXStZYudxtIDMYq2IlTZmGbmI34WlFEqFZ7PT8&usqp=CAU",
    rating: 5,
  },
  {
    name: "kalyan bubu",
    feedback: "Amazing environment, well-maintained equipment, and friendly staff. Highly recommended!",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201301/pawan-kalyan_660_010213011845.jpg?VersionId=KbS5SBc1WzZub73nKaOaVht2CxvyPNtl",
    rating: 4,
  },
  {
    name: "vijay",
    feedback: "The group classes are super fun, and I've met a lot of like-minded fitness enthusiasts!",
    image: "https://wallpapers.com/images/hd/confident-south-hero-movie-still-m3j1q6hp1d9pcfb2.jpg",
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
