// src/components/pricingplans/PricingPlans.jsx
import React from "react";
import "./PricingPlans.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCrown, FaStar } from "react-icons/fa";

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$29/month",
      features: ["Access to Gym", "Free Consultation", "Group Classes"],
      icon: <FaCheckCircle />,
    },
    {
      name: "Standard Plan",
      price: "$49/month",
      features: ["All Basic Plan Features", "Personal Trainer", "Diet Plan"],
      icon: <FaStar />,
    },
    {
      name: "Premium Plan",
      price: "$79/month",
      features: ["All Standard Plan Features", "Advanced Training", "VIP Support"],
      icon: <FaCrown />,
    },
  ];

  const handleSelectPlan = (planName) => {
    toast.success(`You selected the ${planName}! 🎉`);
  };

  return (
    <div className="pricing-plans">
      <ToastContainer />
      <h2>Our Pricing Plans</h2>
      <div className="plan-cards">
        {plans.map((plan, index) => (
          <motion.div
            className="plan-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="plan-icon">{plan.icon}</div>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx} title={`Includes: ${feature}`}>
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => handleSelectPlan(plan.name)}>Join Now</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
