import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect
import "../pages/adminregister.css"; // This will follow the login page's style
import flogo from "../images/logo.jpg"; // Use your logo here

function AdminRegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    location: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // To navigate to login page after registration

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePasswords = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!passwordMatch) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:3001/admin/register", {
        username: formData.username,
        password: formData.password,
        location: formData.location,
      });

      if (response.status === 201) {
        // Show alert message and navigate to login page after clicking "OK"
        setTimeout(() => {
          alert(`Registration successful! Welcome, ${formData.username}`);
          navigate("/"); // Navigate to admin login page after clicking "OK"
        }, 0); // Slight delay to ensure completion of registration process
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error || "Registration failed.");
      } else {
        setErrorMessage("Server is not responding. Please try again later.");
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="register-logo">
          <img src={flogo} width={150} height={150} alt="Company Logo" />
          <h2>Fix It Now</h2>
          <p>Building the future, restoring the past with precision and care...!</p>
        </div>
      </div>
      <div className="register-right">
        <h2>Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input
              type="text"
              name="username"
              placeholder="Enter admin username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              onKeyUp={validatePasswords}
              required
            />
          </div>
          <div className="input-container">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onKeyUp={validatePasswords}
              required
              style={{
                borderColor: passwordMatch ? "green" : "red",
              }}
            />
            {!passwordMatch && (
              <p className="password-error">Passwords do not match!</p>
            )}
          </div>
          <div className="input-container">
            <i className="fa fa-map-marker icon"></i>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-btn">
            Register Admin
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default AdminRegisterPage;
