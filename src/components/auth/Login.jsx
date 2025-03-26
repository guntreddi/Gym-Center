// src/components/auth/Login.jsx
import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ Login successful!");
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Login
      </motion.h2>
      <form onSubmit={handleLogin}>
        <motion.input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          whileFocus={{ scale: 1.05, borderColor: "#ff4d4d" }}
          whileHover={{ scale: 1.02 }}
        />
        <motion.input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          Login
        </motion.button>
      </form>
      {message && (
        <motion.p
          className={`login-message ${message.startsWith("✅") ? "success" : "error"}`}
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

export default Login;
