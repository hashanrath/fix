import React, { useEffect, useState } from 'react';
import './tab.css';
import { Link, useLocation } from 'react-router-dom';

export default function Tab() {
  const [activeTab, setActiveTab] = useState('requests');
  const location = useLocation(); // This hook allows us to track the current path

  // Update the active tab based on the current URL path
  useEffect(() => {
    if (location.pathname === '/Request') {
      setActiveTab('requests');
    } else if (location.pathname === '/Ongoing') {
      setActiveTab('ongoing');
    } else if (location.pathname === '/Complete') {
      setActiveTab('completed');
    }
  }, [location]);

  return (
    <div>
      <div className="tabs">
        <Link to="/Request">
          <button
            className={`tab-button ${activeTab === 'requests' ? 'active' : ''}`}
          >
            Requests
          </button>
        </Link>
        <Link to="/Ongoing">
          <button
            className={`tab-button ${activeTab === 'ongoing' ? 'active' : ''}`}
          >
            Ongoing
          </button>
        </Link>
        <Link to="/Complete">
          <button
            className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
          >
            Completed
          </button>
        </Link>
      </div>

      <div id="requests" className={`tab-content ${activeTab === 'requests' ? 'active' : ''}`}></div>
      <div id="ongoing" className={`tab-content ${activeTab === 'ongoing' ? 'active' : ''}`}></div>
      <div id="completed" className={`tab-content ${activeTab === 'completed' ? 'active' : ''}`}></div>
    </div>
  );
}
