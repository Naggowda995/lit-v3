import React, { useState } from 'react';
import { ClassDataById, updateClient, deleteClient } from '../../../http-common';
import "./Client_Management.css";

const Client_Management = () => {
  const [clientId, setClientId] = useState('');
  const [clientData, setClientData] = useState("");
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editedValues, setEditedValues] = useState({ id: null, clientName: '', contactNo: '', emailId: '' });
  


  const handleInputChange = (e) => {
    setClientId(e.target.value);
    fetchData();
  };

  const fetchData = async () => {
    try {
      setSearchResults([]);
      const response = await ClassDataById(clientId);
      console.log('Response from API:', response);
      setSearchResults([response]);
      setError(null);
    } catch (error) {
       console.error('Error fetching data:', error);  
      setError('Data not found');
      setSearchResults([]);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await updateClient(id, clientData);
      if (response.status === 200) {
        setError(null);
        setSuccessMessage("Data updated successfully!");
        setClientData(""); // Clear the clientData after successful update
        fetchData(); // Refetch data after update
      } else {
        setError('Failed to update data');
      }
    } catch (error) {
      setError('Failed to update data');
    }
  };

  const handleDelete = async (id) => {
    try {
      const { success, message } = await deleteClient(id);
      if (success) {
        setError(null);
        setSuccessMessage(message);
        setClientId(""); // Reset the client ID field
        setClientData(""); // Reset the client data field
        fetchData(); // Refetch data after deletion
      } else {
        setError(message);
      }
    } catch (error) {
      setError('Failed to delete data');
    }
  };

  const handleEdit = (id) => {
    setEditMode(id);
    const rowToEdit = searchResults.find((item) => item.id === id);
    setEditedValues({ ...rowToEdit });
  };

  const handleSave = () => {
    const updatedResults = searchResults.map((item) =>
      item.id === editedValues.id ? editedValues : item
    );
    setSearchResults(updatedResults);
    setEditMode(null);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
  };

  const handleEditInputChange = (e, field) => {
    setEditedValues({ ...editedValues, [field]: e.target.value });
  };

  return (
    <div className="search-page-container">
      <h1>Client Management</h1>

      <div className="search-bar-container">
        <div className="search-input-container">
          <input
            type="text"
            id="searchInput"
            value={clientId}
            onChange={handleInputChange}
            placeholder="Search by Client ID"
          />
          <button type="button" className="search-button" onClick={fetchData}>
            Search
          </button>
        </div>
      </div>

      <table className="result-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(item => (
            <tr key={item.id}>
              <td>{editMode === item.id ? <input type="text" value={editedValues.id} disabled /> : item.id}</td>
              <td>
                {editMode === item.id ?
                  <input type="text" value={editedValues.clientName} onChange={(e) => handleEditInputChange(e, 'clientName')} />
                  : item.name
                }
              </td>
              <td>
                {editMode === item.id ?
                  <input type="text" value={editedValues.contactNo} onChange={(e) => handleEditInputChange(e, 'contactNo')} />
                  : item.phone
                }
              </td>

              <td>
                {editMode === item.id ?
                  <input type="text" value={editedValues.emailId} onChange={(e) => handleEditInputChange(e, 'emailId')} />
                  : item.phone
                }
              </td>
              <td>
                {editMode === item.id ?
                  <>
                    <button className="btn btn-success" onClick={handleSave}>Save</button>
                    <button className="btn btn-warning" onClick={handleCancelEdit}>Cancel</button>
                  </>
                  :
                  <>
                    <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                  </>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Client_Management;
