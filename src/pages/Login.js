import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/login.css";
import flogo from "../images/logo.jpg";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setProgress(0);
    let progressInterval = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress >= 100) {
                clearInterval(progressInterval);
                navigate("/dashboard");
                setIsLoading(false);
                return 100;
            }
            return Math.min(oldProgress + (100 / 50), 100); // 50 steps to complete in 5 seconds
        });
    }, 100); // 100ms interval, 50 steps for 5 seconds total
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
            Don't have an account? <a href="/register">REGISTER HERE</a>
          </p>
        </div>
      </div>
      {isLoading && (
        <div className="loading-overlay1">
          <div className="loading-bar1">
            <div className="loading-progress1" style={{ width: `${progress}%` }}></div>
          </div>
          <p>Login please wait!...</p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
