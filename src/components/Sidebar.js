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
                <li className="menu-item dashboard"> {/* Add dashboard class here */}
                    <Link to="/dashboard" className="menu-link">
                        <div className="menu-icon">&#128248;</div>
                        <span className="menu-text">Dashboard</span>
                        {isCollapsed && <span className="tooltip">Dashboard</span>}
                    </Link>
                </li>
                <li className="menu-item dashboard">
                    <Link to="/service" className="menu-link">
                        <div className="menu-icon">&#128736;</div>
                        <span className="menu-text">Service</span>
                        {isCollapsed && <span className="tooltip">Service</span>}
                    </Link>
                </li>
                <li className="menu-item dashboard">
                    <Link to="/client" className="menu-link">
                        <div className="menu-icon">&#128101;</div>
                        <span className="menu-text">Clients</span>
                        {isCollapsed && <span className="tooltip">Clients</span>}
                    </Link>
                </li>
                <li className="menu-item dashboard">
                    <Link to="/admin" className="menu-link">
                        <div className="menu-icon">&#9881;</div>
                        <span className="menu-text">Admin</span>
                        {isCollapsed && <span className="tooltip">Admin</span>}
                    </Link>
                </li>
                <li className="menu-item dashboard">
                    <Link to="/request" className="menu-link">
                        <div className="menu-icon">&#10067;</div>
                        <span className="menu-text">Request</span>
                        {isCollapsed && <span className="tooltip">Request</span>}
                    </Link>
                </li>
                <li className="menu-item dashboard">
                    <Link to="/message" className="menu-link">
                        <div className="menu-icon">&#9993;</div>
                        <span className="menu-text">Messages</span>
                        {isCollapsed && <span className="tooltip">Messages</span>}
                    </Link>
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
