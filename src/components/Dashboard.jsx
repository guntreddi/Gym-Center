// src/components/dashboard/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // You can include your auth logic here
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h2>Welcome to Your Dashboard! 🎉</h2>
        <p>Access exclusive features and manage your profile here.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
