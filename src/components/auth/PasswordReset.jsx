// src/components/auth/ForgotPassword.jsx
import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { motion } from "framer-motion";
import "./PasswordReset.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset link sent to your email.");
      setIsError(false);
      setEmail("");
    } catch (error) {
      setMessage("❌ Error: " + error.message);
      setIsError(true);
    }
  };

  return (
    <motion.div
      className="forgot-password"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Forgot Password
      </motion.h2>

      <form onSubmit={handleReset}>
        <motion.input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          whileFocus={{ scale: 1.05, borderColor: "#ff4d4d" }}
          whileHover={{ scale: 1.02 }}
        />

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#ff4d4d",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Reset Password
        </motion.button>
      </form>

      {message && (
        <motion.p
          className={`reset-message ${isError ? "error" : "success"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ForgotPassword;
