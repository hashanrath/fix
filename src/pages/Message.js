import React, { useState } from 'react';
import Navi from '../components/Navi';
import Sidebar from '../components/Sidebar';
import './message.css';

export default function Message() {
  const [searchTerm, setSearchTerm] = useState('');

  const messages = [
    { id: 1, icon: "👩‍🦰", text: "I need Hammer...!", time: "07:00", date: "1" },
    { id: 2, icon: "🎧", text: "Thank you", time: "18:00", date: "11" },
    { id: 3, icon: "👨", text: "code number 00125", time: "01:00", date: "7" },
    { id: 4, icon: "👩", text: "yeah", time: "20:00", date: "5" },
    { id: 5, icon: "👦", text: "hello...!", time: "08:00", date: "18" }
  ];

  const filteredMessages = messages.filter(message =>
    message.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navi />
      <Sidebar />
      <div className="message-content">
        <div className="unread-messages">
          <div className="unread-count">
            <span>14</span>
            <p>Unread Messages</p>
          </div>
        </div>
        <div className="message-search">
          <input 
            type="text" 
            placeholder="Search Messages..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="message-list">
          {filteredMessages.map(message => (
            <div key={message.id} className="message-item">
              <div className="message-icon">{message.icon}</div>
              <div className="message-text">{message.text}</div>
              <div className="message-status">✔️</div>
              <div className="message-time">{message.time}</div>
              <div className="message-date">{message.date}</div>
              <div className="message-actions">
                <button className="view-button">👁️</button>
                <button className="delete-button">❌</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
