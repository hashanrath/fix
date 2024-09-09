import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './sidebar.css';
import flogo from "../images/logo.jpg";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('/dashboard');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleNavigation = (path) => {
        setActiveMenuItem(path); // Immediately set the active menu item
        setIsLoading(true);
        setTimeout(() => {
            navigate(path);
            setIsLoading(false);
        }, 1000); 
    };

    // Update the activeMenuItem based on the current route after navigation
    useEffect(() => {
        setActiveMenuItem(location.pathname); // Update the active menu item when route changes
    }, [location]);

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
                <li className={`menu-item dashboard ${activeMenuItem === '/dashboard' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#128248;</div>
                        <span className="menu-text">Dashboard</span>
                        {isCollapsed && <span className="tooltip">Dashboard</span>}
                    </div>
                </li>
                <li className={`menu-item service ${activeMenuItem === '/service' ? 'active' : ''}`} onClick={() => handleNavigation('/service')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#128736;</div>
                        <span className="menu-text">Service</span>
                        {isCollapsed && <span className="tooltip">Service</span>}
                    </div>
                </li>
                <li className={`menu-item clients ${activeMenuItem === '/client' ? 'active' : ''}`} onClick={() => handleNavigation('/client')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#128101;</div>
                        <span className="menu-text">Clients</span>
                        {isCollapsed && <span className="tooltip">Clients</span>}
                    </div>
                </li>
                <li className={`menu-item admin ${activeMenuItem === '/admin' ? 'active' : ''}`} onClick={() => handleNavigation('/admin')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#9881;</div>
                        <span className="menu-text">Admin</span>
                        {isCollapsed && <span className="tooltip">Admin</span>}
                    </div>
                </li>
                <li className={`menu-item request ${activeMenuItem === '/request' ? 'active' : ''}`} onClick={() => handleNavigation('/request')}>
                    <div className="menu-link">
                        <div className="menu-icon">&#10067;</div>
                        <span className="menu-text">Request</span>
                        {isCollapsed && <span className="tooltip">Request</span>}
                    </div>
                </li>
                <li className={`menu-item messages ${activeMenuItem === '/message' ? 'active' : ''}`} onClick={() => handleNavigation('/message')}>
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
