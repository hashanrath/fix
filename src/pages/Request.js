import React, { useState } from 'react';
import './request.css';
import Navi from '../components/Navi';
import Sidebar from '../components/Sidebar';

export default function Request() {
  const [activeTab, setActiveTab] = useState('requests');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const requests = [
    { id: 1, name: 'Request 01', title: '', category: '', location: '', description: '' },
    { id: 2, name: 'Request 02', title: '', category: '', location: '', description: '' },
    { id: 3, name: 'Request 03', title: '', category: '', location: '', description: '' },

  ];

  return (
    <div>
      <Navi />
      <Sidebar />
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

      <div className="search-bar">
        <input
          type="text"
          id="search"
          placeholder="Find Request"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button>🔍</button>
      </div>

      <div id="requests" className={`tab-content ${activeTab === 'requests' ? 'active' : ''}`}>
        {requests
          .filter((request) => request.name.toLowerCase().includes(searchQuery))
          .map((request) => (
            <div key={request.id} className="request-card">
              <h3>{request.name}</h3>
              <p>Title: {request.title}</p>
              <p>Category: {request.category}</p>
              <p>Location: {request.location}</p>
              <p>Description: {request.description}</p>
              <div className="actions">
                <button className="delete-button">🗑️</button>
                <button className="start-button">Start</button>
              </div>
            </div>
          ))}
      </div>

      {/* Ongoing and Completed sections would go here */}
    </div>
  );
}
