// src/components/trainers/Trainers.jsx
import React from "react";
import "./Trainers.css";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const trainersData = [
  {
    name: "John Doe",
    specialty: "Strength Training",
    experience: "5 Years",
    img: "https://via.placeholder.com/150",
    bio: "Certified strength coach with expertise in building muscle and improving performance.",
    socials: {
      instagram: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Sarah Johnson",
    specialty: "Yoga & Flexibility",
    experience: "7 Years",
    img: "https://via.placeholder.com/150",
    bio: "Experienced yoga instructor helping clients achieve mental and physical balance.",
    socials: {
      instagram: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Mike Anderson",
    specialty: "Cardio & Weight Loss",
    experience: "4 Years",
    img: "https://via.placeholder.com/150",
    bio: "Dedicated to helping clients achieve their weight loss goals with effective cardio training.",
    socials: {
      instagram: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
];

const Trainers = () => {
  return (
    <div className="trainers">
      <h2>Meet Our Trainers</h2>
      <div className="trainer-cards">
        {trainersData.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <div className="card-front">
              <img src={trainer.img} alt={trainer.name} />
              <h3>{trainer.name}</h3>
              <p>Specialty: {trainer.specialty}</p>
              <p>Experience: {trainer.experience}</p>
            </div>
            <div className="card-back">
              <p className="bio">{trainer.bio}</p>
              <div className="social-icons">
                <a href={trainer.socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href={trainer.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href={trainer.socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
