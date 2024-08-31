import React, { useState } from 'react';
import './admin.css';
import Navi from '../components/Navi';
import Sidebar from '../components/Sidebar';

export default function Admin() {
    const [admins, setAdmins] = useState([
        { name: 'Alice Cooper', tpNumber: '123-456-789' },
        { name: 'Bob Marley', tpNumber: '987-654-321' },
        { name: 'Charlie Brown', tpNumber: '555-555-555' },
        { name: 'Diana Prince', tpNumber: '444-444-444' },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [adminToDelete, setAdminToDelete] = useState(null);

    const totalAdmins = admins.length;

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDeleteClick = (admin) => {
        setAdminToDelete(admin);
    };

    const confirmDelete = () => {
        if (adminToDelete) {
            const adminName = adminToDelete.name;
            setAdmins(admins.filter(admin => admin !== adminToDelete));
            setAdminToDelete(null);
            
            setTimeout(() => {
                alert(`${adminName} deleted successfully!`);
            }, 0);
        }
    };

    const cancelDelete = () => {
        setAdminToDelete(null);
    };

    const filteredAdmins = admins.filter(admin =>
        admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.tpNumber.includes(searchTerm)
    );

    return (
        <div>
            <Navi/>
            <Sidebar/>
            <div className="total-admins-card">
                <div className="total-admins-number">{totalAdmins}</div>
                <div className="total-admins-text">Total Admins</div>
                <div className="total-admins-icon">&#128101;</div> {/* Users icon */}
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search admin..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
                <h2 className="admindetails">Admin Details</h2> {/* Changed class name */}
            </div>

            <div className="admins-table-container">
                <table className="admins-table">
                    <thead>
                        <tr>
                            <th>Admin Name</th>
                            <th>Tp Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAdmins.map((admin, index) => (
                            <tr key={index} className="admin-row">
                                <td>{admin.name}</td>
                                <td>{admin.tpNumber}</td>
                                <td>
                                    <button
                                        className="action-button delete-button"
                                        onClick={() => handleDeleteClick(admin)}
                                    >
                                        &#128465; {/* Delete icon */}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {adminToDelete && (
                <div className="confirmation-modal">
                    <div className="modal-content">
                        <p>Are you sure you want to delete {adminToDelete.name}?</p>
                        <button className="confirm-button" onClick={confirmDelete}>Yes</button>
                        <button className="cancel-button" onClick={cancelDelete}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
}
