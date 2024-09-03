import React, { useState } from 'react';
import "./message.css";

export default function Message() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    const handleSend = () => {
        const messageText = messageInput.trim();
        if (messageText !== '') {
            appendMessage(messageText, 'user');
            setMessageInput(''); // Clear input field
        }
    };

    const appendMessage = (text, sender) => {
        const newMessage = {
            text,
            sender,
            id: messages.length + 1, // Unique ID for each message
        };
        setMessages([...messages, newMessage]);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-body" id="chat-body">
                {messages.map((message) => (
                    <div key={message.id} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    id="message-input"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button id="send-button" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
}
