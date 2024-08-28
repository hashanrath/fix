import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; 
import flogo from "../images/logo.jpg";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className='navi'>
                {!isCollapsed && (
                    <div className="login-logo">
                        <img src={flogo} alt="Company Logo" />
                    </div>
                )}
            </div>
            <ul className="menu-items">
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#128248;</div> {/* Dashboard icon */}
                    {!isCollapsed && <Link to="/dashboard" className="menu-text" >Dashboard</Link>}
                </li>
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#128101;</div> {/* Clients icon */}
                    {!isCollapsed && <Link to="/client" className="menu-text">Clients</Link>}
                </li>
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#10067;</div> {/* Request icon */}
                    {!isCollapsed && <Link to="/request" className="menu-text">Request</Link>}
                </li>
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#9993;</div> {/* Messages icon */}
                    {!isCollapsed && <Link to="/message" className="menu-text">Messages</Link>}
                </li>
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#128295;</div> {/* Products icon */}
                    {!isCollapsed && <Link to="/product" className="menu-text">Products</Link>}
                </li>
            </ul>
            <div className="footer-icon">
                &#128101; &#9881; {/* Footer icon */}
            </div>
            <div className="menu-icon1" onClick={toggleSidebar}>
                &#9776; {/* Hamburger menu icon */}
            </div>
        </div>
    );
}

export default Sidebar;
