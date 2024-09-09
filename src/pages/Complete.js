import React from 'react';
import './complete.css';
import Navi from '../components/Navi';
import Sidebar from '../components/Sidebar';
import Tab from '../components/Tab';

export default function Complete() {
    
    return (
      <div>
          <Navi/>
          <Sidebar/>
          <Tab/>
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
