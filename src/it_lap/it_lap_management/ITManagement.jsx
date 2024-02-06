import React, { useState } from 'react';
import './ITManagement.css';

const ITManagement = () => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedValues, setEditedValues] = useState({ id: null, name: '', phone: '' });

  const handleInputChange = (e) => {
    setSearchCriteria(e.target.value);
  };

  const handleSearch = () => {
    // Call your API to fetch data based on criteria
    // For demonstration purposes, using static data
    const data = [
      { id: 1, name: 'Suneel', phone: '123457890' },
      { id: 2, name: 'Pavan', phone: '9879803210' },
      { id: 3, name: 'Suneel', phone: '9876543210' },
      { id: 4, name: 'Nagendra', phone: '9871233210' },
      { id: 5, name: 'Teja', phone: '9876543210' },
      { id: 6, name: 'Thirumala', phone: '9873453210' },
      // Add more data as needed
    ];

    // Filter data based on the provided criteria
    const filteredData = data.filter(
      (item) =>
        (!searchCriteria ||
          item.id.toString().includes(searchCriteria) ||
          item.name.toLowerCase().includes(searchCriteria.toLowerCase()) ||
          item.phone.includes(searchCriteria))
    );

    setSearchResults(filteredData);
  };

  const handleDelete = (id) => {
    // Delete the row with the corresponding ID
    const updatedResults = searchResults.filter((item) => item.id !== id);
    setSearchResults(updatedResults);
    setEditMode(null);
  };

  const handleEdit = (id) => {
    // Set the row into edit mode
    setEditMode(id);

    // Find the row data and set it to editedValues
    const rowToEdit = searchResults.find((item) => item.id === id);
    setEditedValues({ ...rowToEdit });
  };

  const handleSave = () => {
    // Save the edited values
    const updatedResults = searchResults.map((item) =>
      item.id === editedValues.id ? editedValues : item
    );

    setSearchResults(updatedResults);
    setEditMode(null);
  };

  const handleCancelEdit = () => {
    // Cancel editing and exit edit mode
    setEditMode(null);
  };

  const handleEditInputChange = (e, field) => {
    // Update the edited values as the user types
    setEditedValues({ ...editedValues, [field]: e.target.value });
  };

  return (
    <div className="search-page-container">
      <h1>Data Search and Display</h1>

      <div className="search-bar-container">
        <label>Search by ID, Name, or Phone Number:</label>
        <input
          type="text"
          value={searchCriteria}
          onChange={handleInputChange}
          placeholder="Enter ID, Name, or Phone Number"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <table className="result-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{editMode === item.id ? <input type="text" value={editedValues.id} disabled /> : item.id}</td>
              <td>
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={editedValues.name}
                    onChange={(e) => handleEditInputChange(e, 'name')}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={editedValues.phone}
                    onChange={(e) => handleEditInputChange(e, 'phone')}
                  />
                ) : (
                  item.phone
                )}
              </td>
              <td>
                {editMode === item.id ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>{"\t"}{"\t"}{"\t"}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ITManagement;

