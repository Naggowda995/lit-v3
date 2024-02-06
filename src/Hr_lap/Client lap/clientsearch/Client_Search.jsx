import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ClassDataById } from '../../../http-common';
import "./Client_Search.css";
 
const Client_Search = () => {
  const [clientId, setClientId] = useState('');
  const [clientData, setClientData] = useState("");
  const [error, setError] = useState(null);
  let [searchResults, setSearchResults] = useState([])
 
  const handleInputChange = (e) => {
    setClientId(e.target.value);
  };
 
  const fetchData = async () => {
    try {
      setSearchResults([]);
      const response = await ClassDataById(clientId);
      const res1= response;
      setSearchResults((prevArray)=>[
        ...prevArray,
        res1
      ]);
      setError(null);
    } catch (error) {
      setError('Data not found');
      setClientData(null);
    }
  };
 
 
 
  return (
    <div className="search-page-container">
      <h1>Client Search</h1>
 
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
            <th>Date</th>
            <th>Client Name</th>
            <th>Contact Person</th>
            <th>Contact No</th>
            {/* Add more headers based on your clientData structure */}
          </tr>
        </thead>
        <tbody>
          {searchResults.map(item => {
            return(
            <tr key={clientId}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.clientName}</td>
              <td>{item.contactPerson}</td>
              <td>{item.contactNo}</td>
            </tr>
          )})}
        </tbody>
      </table>
 
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
 
export default Client_Search;
 