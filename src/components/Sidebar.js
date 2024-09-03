import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import flogo from "../images/logo.jpg";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleNavigation = (path) => {
        setIsLoading(true);
        setTimeout(() => {
            navigate(path);
            setIsLoading(false);
        }, 1000); 
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
            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                </div>
            )}
            <ul className="menu-items">
                <li className="menu-item dashboard" onClick={() => handleNavigation('/dashboard')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#128248;</div>
                        <span className="menu-text">Dashboard</span>
                        {isCollapsed && <span className="tooltip">Dashboard</span>}
                    </div>
                </li>
                <li className="menu-item dashboard" onClick={() => handleNavigation('/service')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#128736;</div>
                        <span className="menu-text">Service</span>
                        {isCollapsed && <span className="tooltip">Service</span>}
                    </div>
                </li>
                <li className="menu-item dashboard" onClick={() => handleNavigation('/client')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#128101;</div>
                        <span className="menu-text">Clients</span>
                        {isCollapsed && <span className="tooltip">Clients</span>}
                    </div>
                </li>
                <li className="menu-item dashboard" onClick={() => handleNavigation('/admin')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#9881;</div>
                        <span className="menu-text">Admin</span>
                        {isCollapsed && <span className="tooltip">Admin</span>}
                    </div>
                </li>
                <li className="menu-item dashboard" onClick={() => handleNavigation('/request')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#10067;</div>
                        <span className="menu-text">Request</span>
                        {isCollapsed && <span className="tooltip">Request</span>}
                    </div>
                </li>
                <li className="menu-item dashboard" onClick={() => handleNavigation('/message')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#9993;</div>
                        <span className="menu-text">Messages</span>
                        {isCollapsed && <span className="tooltip">Messages</span>}
                    </div>
                </li>
            </ul>
            <div className="footer-icon">
                &#128101; &#9881;
            </div>
            <div className="menu-icon1" onClick={toggleSidebar}>
                &#9776;
            </div>
        </div>
    );
}

export default Sidebar;
