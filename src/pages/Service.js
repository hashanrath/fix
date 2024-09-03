import React, { useState } from 'react';
import Navi from '../components/Navi';
import Sidebar from '../components/Sidebar';
import './service.css';

export default function Service() {

  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    { category: 'Plumbing', supervisor: 'John Doe' },
    { category: 'Electrical', supervisor: 'Jane Smith' },
    { category: 'Carpentry', supervisor: 'Jim Brown' },
    { category: 'Plumbing', supervisor: 'John Doe' },
    { category: 'Electrical', supervisor: 'Jane Smith' },
    { category: 'Carpentry', supervisor: 'Jim Brown' },
  ];

  const filteredServices = services.filter(service =>
    service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.supervisor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navi />
      <Sidebar />
        <div className="service-header">
          <h2>Construction Categories and Supervisors</h2>
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="service-list">
          {filteredServices.map((service, index) => (
            <div key={index} className="service-box-container">
              <button className="assign-button">Assign Project</button>
              <div className="service-box">
                <h3>{service.category}</h3>
                <p>Supervisor: {service.supervisor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
