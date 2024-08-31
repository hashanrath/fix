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
        { name: 'Mike Johnson', tpNumber: '555-555-555' },
        { name: 'Emily Davis', tpNumber: '444-444-444' },
        { name: 'John Doe', tpNumber: '123-456-789' },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [clientToDelete, setClientToDelete] = useState(null);

    const totalClients = clients.length;

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDeleteClick = (client) => {
        setClientToDelete(client);
    };

    const confirmDelete = () => {
        if (clientToDelete) {
            const clientName = clientToDelete.name;
            setClients(clients.filter(client => client !== clientToDelete));
            setClientToDelete(null);
            
            setTimeout(() => {
                alert(`${clientName} deleted successfully!`);
            }, 0); // Ensures the modal is closed before showing the alert
        }
    };

    const cancelDelete = () => {
        setClientToDelete(null);
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
                    placeholder="Search client..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
                  <h2 className="clientdetails">Clients Details</h2> {/* Moved to this position */}
            </div>

          

            <div className="clients-table-container">
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
                                    <button
                                        className="action-button delete-button"
                                        onClick={() => handleDeleteClick(client)}
                                    >
                                        &#128465; {/* Delete icon */}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {clientToDelete && (
                <div className="confirmation-modal">
                    <div className="modal-content">
                        <p>Are you sure you want to delete {clientToDelete.name}?</p>
                        <button className="confirm-button" onClick={confirmDelete}>Yes</button>
                        <button className="cancel-button" onClick={cancelDelete}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
}
