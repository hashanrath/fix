import React from 'react';
import './request.css';
import Navi from '../components/Navi';
import Sidebar from '../components/Sidebar';
import Tab from '../components/Tab';

export default function Request() {
  const requests = [
    { id: 1, name: 'Request 01', title: 'Request 01 Title', category: 'Category A', location: 'Location A', description: 'Description for Request 01' },
  ];

  return (
    <div>
      <Navi/>
      <Sidebar/>
      <Tab/>
      <div className="request-list">
        {requests.map((request) => (
          <div key={request.id} className="request-card">
            <h3>{request.name}</h3>
            <p>Title: {request.title}</p>
            <p>Category: {request.category}</p>
            <p>Location: {request.location}</p>
            <p>Description: {request.description}</p>
            <div className="actions">
              <button className="delete-button">Delete</button>
              <button className="start-button">Start</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
