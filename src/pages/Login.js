import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/login.css";
import flogo from "../images/logo.jpg";

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
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
  );
}

export default LoginPage;
