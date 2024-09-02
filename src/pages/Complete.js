import React, { useState } from 'react';
import './complete.css';
import Navi from '../components/Navi';
import Sidebar from '../components/Sidebar';

export default function Complete() {
    const [activeTab, setActiveTab] = useState('completed'); // Set initial active tab to 'completed'

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
  
    return (
      <div>
          <Navi/>
          <Sidebar/>
          <div className="tabs">
          <button className={`tab-button ${activeTab === 'requests' ? 'active' : ''}`} onClick={() => handleTabClick('requests')}>
            Requests
          </button>
          <button className={`tab-button ${activeTab === 'ongoing' ? 'active' : ''}`} onClick={() => handleTabClick('ongoing')}>
            Ongoing
          </button>
          <button className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => handleTabClick('completed')}>
            Completed
          </button>
       </div>
       <div className="notification-tab">
      <div className="notification-content">
        <span className="notification-number">12</span>
        <span className="notification-text">Completed Tasks</span>
      </div>
      <div className="notification-icon">
        <img src="https://img.icons8.com/ios-filled/50/000000/task-completed.png" alt="Completed Tasks Icon"/>
      </div>
    </div>
    <div className="notification-card">
  <div className="notification-info">
    <span className="request-id">Request 08</span>
    <span className="completion-date">Completed on 2024/08/02</span>
  </div>
  <button className="view-details-button">View Details</button>
</div>

      </div>
    );
}
