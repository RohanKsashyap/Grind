import React from 'react';
import '../css/logout.css'
import { useNavigate } from 'react-router-dom';

const LogoutForm = () => {
  // Handle the logout action
  
  const Navigate = useNavigate()

  const handleLogout = () => {
    // Remove the token from localStorage (or clear any session data)
    localStorage.removeItem("token");

    // Optionally, redirect the user after logout (e.g., back to the login page)
    Navigate("/")
  };

  return (
    <div className="logout-container">
      <div className="logout-form">
        <h2>Are you sure you want to log out?</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutForm;
