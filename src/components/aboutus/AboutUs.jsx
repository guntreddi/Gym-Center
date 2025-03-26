import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Intro Section */}
      <motion.section 
        className="intro"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Our Gym</h1>
        <p>
          Welcome to our gym, where your fitness journey matters! We are committed to helping you achieve your goals and transform your lifestyle.
        </p>
      </motion.section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <motion.div
          className="mission"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Mission</h2>
          <p>To inspire, motivate, and guide our members to reach their full potential through personalized training and a supportive community.</p>
        </motion.div>
        
        <motion.div
          className="vision"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Vision</h2>
          <p>To create a healthier and stronger community where everyone feels empowered and confident.</p>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Achievements
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <li>🏆 Certified Personal Trainers with over 10 years of experience.</li>
          <li>🏋️‍♂️ State-of-the-art facilities recognized in the fitness industry.</li>
          <li>💪 Hundreds of successful transformations and testimonials.</li>
        </motion.ul>
      </section>
    </div>
  );
};

export default AboutUs;
