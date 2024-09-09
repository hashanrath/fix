import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import Axios
import "../pages/login.css";
import flogo from "../images/logo.jpg";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");  // For showing errors
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    setErrorMessage(""); // Clear previous errors

    try {
      // Send login credentials to the backend using Axios
      const response = await axios.post("http://localhost:3001/admin/get", {
        username,
        password,
      });

      // If login is successful and JWT is received
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Save the token
        setIsLoading(true); // Start loading spinner for successful login

        setTimeout(() => {
          // Navigate to dashboard after showing success alert
          if (window.confirm(`Login successful! Welcome, ${username}. Click OK to proceed to the dashboard.`)) {
            navigate("/dashboard");
          }
          setIsLoading(false);
        }, 2000); // Simulate delay before redirect
      }
    } catch (error) {
      setIsLoading(false);  // Ensure loading stops in case of an error
      if (error.response && error.response.data) {
        alert(error.response.data.error || "Login failed! Invalid credentials.");
        setErrorMessage(error.response.data.error || "Login failed!");
      } else {
        alert("Server is not responding. Please try again later.");
        setErrorMessage("Server is not responding. Please try again later.");
      }
    }
  };

  const handleRegisterClick = () => {
    setIsLoading(true); // Show spinner when "REGISTER HERE" is clicked

    // Simulate delay before redirecting
    setTimeout(() => {
      setIsLoading(false);
      navigate("/register");  // Redirect to the registration page after 2 seconds
    }, 2000); // 2-second delay for spinner
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-left">
          <div className="login-logo">
            <img src={flogo} width={30} height={30} alt="Company Logo" />
            <h2>Fix It Now</h2>
            <p>Building the future, restoring the past with precision and care...!</p>
          </div>
        </div>
        <div className="login-right">
          <h2>Admin Log in</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input type="text" placeholder="Username" name="username" required />
            </div>
            <div className="input-container">
              <i className="fa fa-lock icon"></i>
              <input type="password" placeholder="Password" name="password" required />
            </div>
            <div className="remember-me">
              <input type="checkbox" name="remember" />
              <label>Remember Me!</label>
            </div>
            <button type="submit" className="login-btn">Log In</button>
          </form>
          <p>
            Don't have an account?{" "}
            <span 
              className="register-link" 
              onClick={handleRegisterClick} 
              style={{ color: "#fda085", cursor: "pointer" }}
            >
              REGISTER HERE
            </span>
          </p>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
      {isLoading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading, please wait...</p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
