import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bell from '../images/bell.jpg';
import '../components/navi.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirmation(false);
    setIsLoading(true);
    setProgress(0);
    let progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          navigate('/');
          setIsLoading(false);
          return 100;
        }
        return Math.min(oldProgress + (100 / 30), 100); // 30 steps to complete in 3 seconds
      });
    }, 100); // 100ms interval, 30 steps for 3 seconds total
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <span>Dashboard</span>
        </div>
        <div className="navbar-right">
          <div className="notification-bell">
            <div className="bell-icon"><img src={bell} width={30} height={30} alt="notification bell" /></div>
            <span className="notification-count">3</span>
          </div>
          <div className="profile">
            <span className="profile-icon">&#128100;</span>
            <span>Admin</span>
            <span className="dropdown-arrow" onClick={toggleDropdown}>&#9662;</span>
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>Profile</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {showLogoutConfirmation && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <p>Are you sure you want to log out?</p>
            <button className="confirm-button" onClick={confirmLogout}>Yes</button>
            <button className="cancel-button" onClick={cancelLogout}>No</button>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-bar">
            <div className="loading-progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>Logging out...</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
