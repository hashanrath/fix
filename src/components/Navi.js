import React, { useState } from 'react';
import bell from '../images/bell.jpg';
import '../components/navi.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span>Dashboard</span>
      </div>
      <div className="navbar-right">
        <div className="notification-bell">
          <div className="bell-icon"><img src={bell} width={30} height={30} alt="notification bell" /> </div>
          <span className="notification-count">3</span>
        </div>
        <div className="profile" >
          <span className="profile-icon">&#128100;</span>
          <span>Admin</span>
          <span className="dropdown-arrow"onClick={toggleDropdown}>&#9662;</span>
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>Profile</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
