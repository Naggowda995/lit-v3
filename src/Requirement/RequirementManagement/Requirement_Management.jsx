import React, { useState, useEffect } from 'react';
import './Requirement_Management.css';
import { Requirement, updateRequirement, deleteRequirement } from '../../http-common';

const Requirement_Management = () => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [editedValues, setEditedValues] = useState({ requirementid: '', fullName: '', experience: '', clientName: '', sector: '', technology: '', gender: '', status: '', termsConditions: '' });
  const [error, setError] = useState('');
  const [requirementId , setRequirementId] = useState("");
  const [requirementdata, setRequirementData] = useState("");


  const handleInputChange = (e) => {
    setRequirementId(e.target.value);
  }



  const fetchData = async () => {
    try {
      setSearchResults([]); // Clear previous search results
      const response = await Requirement(searchCriteria);
      console.log('Response data:', response); // Log response data
      
      // Check if response data exists and contains the required properties
      if (response && response.requirementid) {
        setSearchResults([response]); // Set search results if data is available
        setError('');
      } else {
        setError('No data found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
      setSearchResults([]); // Clear search results in case of error
    }
  };

  const handleUpdate = async (requirementId, formData) => {
    try {
      const response = await updateRequirement(requirementId, formData);
      if (response.success) {
        setSuccessMessage(response.message);
        fetchData();
        setError('');
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  
  const handleDelete = async (requirementId) => {
    try {
      const response = await deleteRequirement(requirementId);
      if (response.success) {
        setSuccessMessage(response.message);
        setError(null);
        setRequirementId("");
        setRequirementData("");
        setEditedValues({ requirementid: '', fullName: '', experience: '', clientName: '', sector: '', technology: '', gender: '', status: '', termsConditions: '' });
        fetchData();
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  

  const handleEdit = (requirementid) => {
    setEditMode(requirementid);
    const rowToEdit = searchResults.find((item) => item.requirementid === requirementid);
    setEditedValues({ ...rowToEdit });
  };
  
  

  const handleSave = async () => {
    try {
      await handleUpdate(editedValues.requirementid, editedValues); // Pass requirementId and editedValues
      setSuccessMessage("Data updated successfully!");
      setTimeout(() => {
        setSuccessMessage(""); // Reset success message after a timeout
      }, 3000); // Reset after 3 seconds
      setEditMode(null);
    } catch (error) {
      console.error('Error updating data:', error);
      setError('Failed to save changes');
    }
  };

  const handleCancelEdit = () => {
    setEditMode(null);
  };

  

  const handleEditInputChange = (e, field) => {
    setEditedValues({ ...editedValues, [field]: e.target.value });
  };

  return (
    <div className="search-page-container">
      <h1>Requirement ID Management</h1>

      <div className="search-bar-container">
        <div className="search-input-container">
          <input
            type="text"
            id="searchInput"
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
            placeholder="Search Requirement ID"
          />
          <button type="button" className="search-button" onClick={fetchData}>
            Search
          </button>
        </div>
      </div>

      <table className="result-table">
        <thead>
          <tr>
            <th>Requirement ID</th>
            <th>Full Name</th>
            <th>Experience</th>
            <th>Client Name</th>
            <th>Sector</th>
            <th>Technology</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Terms & Conditions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(item => (
            <tr key={item.requirementid}>
              <td>{editMode   ===  item.requirementid ? <input type="text" value={editedValues.requirementid} disabled /> : item.requirementId}</td>             
              <td>
                {editMode === item.requirementid ?
                  <input type="text" value={editedValues.fullName} onChange={(e) => handleEditInputChange(e, 'fullName')} />
                  : item.fullName
                }
              </td>
              <td>
                {editMode === item.requirementid ?
                  <input type="text" value={editedValues.experience} onChange={(e) => handleEditInputChange(e, 'experience')} />
                  : item.experience
                }
              </td>
              <td>
                {editMode === item.requirementid ?
                  <input type="text" value={editedValues.clientName} onChange={(e) => handleEditInputChange(e, 'clientName')} />
                  : item.clientName
                }
              </td>
              <td>
                {editMode === item.requirementid ?
                  <input type="text" value={editedValues.sector} onChange={(e) => handleEditInputChange(e, 'sector')} />
                  : item.sector
                }
              </td>
              <td>
                {editMode === item.requirementid ?
                  <input type="text" value={editedValues.technology} onChange={(e) => handleEditInputChange(e, 'technology')} />
                  : item.technology
                }
              </td>
              <td>
                {editMode === item.requirementid ?
                  <input type="text" value={editedValues.gender} onChange={(e) => handleEditInputChange(e, 'gender')} />
                  : item.gender
                }
              </td>
              <td>
                {editMode === item.requirementid ?
                  <input type="text" value={editedValues.status} onChange={(e) => handleEditInputChange(e, 'status')} />
                  : item.status
                }
              </td>
              <td>{item.termsConditions}</td>
              <td>
                {editMode === item.requirementid ?
                  <>
                    <button className="btn btn-success" onClick={handleSave}>Save</button>
                    <button className="btn btn-warning" onClick={handleCancelEdit}>Cancel</button>
                  </>
                  :
                  <>
                    <button className="btn btn-primary" onClick={() => handleEdit(item.requirementid)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.requirementid)}>Delete</button>
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

export default Requirement_Management;
