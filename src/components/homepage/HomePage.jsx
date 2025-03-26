import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <motion.h1
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Fitness Journey
        </motion.h1>
        <p className="hero-text">
          Join us to build strength, boost confidence, and achieve your fitness goals. Take the first step today!
        </p>
        <button className="hero-button">Get Started</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="about-cards">
          <div className="about-card">
            <h3>Expert Trainers</h3>
            <p>Learn from experienced trainers dedicated to helping you succeed.</p>
          </div>
          <div className="about-card">
            <h3>Modern Equipment</h3>
            <p>State-of-the-art gym facilities to enhance your workout experience.</p>
          </div>
          <div className="about-card">
            <h3>Friendly Community</h3>
            <p>Join a supportive community that motivates and inspires.</p>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="membership">
        <h2 className="section-title">Membership Plans</h2>
        <div className="plans">
          <div className="plan">
            <h3>Basic</h3>
            <p>$20/month - Access to all gym equipment</p>
          </div>
          <div className="plan highlight">
            <h3>Standard</h3>
            <p>$35/month - Includes group classes</p>
          </div>
          <div className="plan">
            <h3>Premium</h3>
            <p>$50/month - Personal training sessions included</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="image-one">
        <h2 className="image-title">Gallery</h2>s
        <div className="image-grid">
          <img src="https://t4.ftcdn.net/jpg/03/50/81/89/360_F_350818949_lJTfzSTDr79e9Kn55PUVZjN19ct20uGc.jpg" alt="Gym Equipment" className="gallery-image" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEyFHvuFMAc-knprFmaQcUBLgB4bTxJwL9Q&s" alt="Training Session" className="gallery-image" />
          <img src="https://img.freepik.com/premium-photo/man-working-out-weights-room-gym_926199-1950777.jpg" alt="Workout Area" className="gallery-image" />
          <img src="https://img.freepik.com/premium-photo/having-injury-back-pain-after-exercising-gym-health-care_114016-14736.jpg" alt="Cardio Machines" className="gallery-image" />
        </div>
      </section>
    
      {/* Trainer Profiles Section */}
      <section className="trainers">
        <h2 className="section-title">Meet Our Trainers</h2>
        <div className="trainer-cards">
          <div className="trainer-card">
            <img src="https://i.pinimg.com/474x/9e/25/1f/9e251fd3d93456289603d3d27f9649c3.jpg" alt="Trainer 1" className="trainer-image" />
            <h3>G pavan</h3>
            <p>Strength & Conditioning Expert</p>
          </div>
          <div className="trainer-card">
            <img src="https://rukminim3.flixcart.com/image/850/1000/k391w280/poster/h/j/e/large-lord-krishna-god-wall-poster-waterproof-vinyl-sticker-original-imafmfhsqbrghshh.jpeg?q=90&crop=false" alt="Trainer 2" className="trainer-image" />
            <h3>G shiva</h3>
            <p>Certified Yoga Instructor</p>
          </div>
          <div className="trainer-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUmxtbzo0B3_c8qrBcrmqNNjzjOis-2n4NQ&s" alt="Trainer 3" className="trainer-image" />
            <h3>Mike Johnson</h3>
            <p>Personal Trainer & Nutritionist</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Members Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Joining this gym was the best decision I've made! The trainers are amazing."</p>
            <h4>- Alex Carter</h4>
          </div>
          <div className="testimonial-card">
            <p>"Great atmosphere and top-notch equipment. I've achieved fantastic results!"</p>
            <h4>- Jessica Brown</h4>
          </div>
          <div className="testimonial-card">
            <p>"The community here is so supportive. I love every session!"</p>
            <h4>- David Miller</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Gym Center. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
