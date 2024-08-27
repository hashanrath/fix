import React, { useState } from 'react';
import './client.css';
import Navi from '../components/Navi';
import Sidebar from '../components/Sidebar';

export default function Client() {
    const [clients, setClients] = useState([
        { name: 'John Doe', tpNumber: '123-456-789' },
        { name: 'Jane Smith', tpNumber: '987-654-321' },
        { name: 'Mike Johnson', tpNumber: '555-555-555' },
        { name: 'Emily Davis', tpNumber: '444-444-444' },
        { name: 'John Doe', tpNumber: '123-456-789' },
        { name: 'Jane Smith', tpNumber: '987-654-321' },
        { name: 'Mike Johnson', tpNumber: '555-555-555' },
        { name: 'Emily Davis', tpNumber: '444-444-444' },
        { name: 'John Doe', tpNumber: '123-456-789' },
    ]);
    const [searchTerm, setSearchTerm] = useState("");

    const totalClients = clients.length;

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.tpNumber.includes(searchTerm)
    );
  return (
    <div>
            <Navi/>
            <Sidebar/>
            <div className="total-clients-card">
                <div className="total-clients-number">{totalClients}</div>
                <div className="total-clients-text">Total Clients</div>
                <div className="total-clients-icon">&#128101;</div> {/* Users icon */}
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search Clients..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
            </div>

            <div className="clients-table-container">
                <h2 className="clientdetails">Clients Details</h2>
                <table className="clients-table">
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Tp Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredClients.map((client, index) => (
                            <tr key={index} className="client-row">
                                <td>{client.name}</td>
                                <td>{client.tpNumber}</td>
                                <td>
                                    <button className="action-button delete-button">
                                        &#128465; {/* Delete icon */}
                                    </button>
                                    <button className="action-button view-button">
                                        &#128187; {/* View icon */}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>

  );
}