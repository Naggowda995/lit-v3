import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ClassDataById } from '../../../http-common';
import "./Client_Search.css";

const Client_Search = () => {
  const [clientId, setClientId] = useState('');
  const [clientData, setClientData] = useState("");
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  

  const handleInputChange = (e) => {
    setClientId(e.target.value);
  };

  const fetchData = async () => {
    try {
      setSearchResults([]);
      const response = await ClassDataById(clientId);
      const res1= response;
      console.log("hiiii",response);
      
      setSearchResults((prevArray) =>[
        ...prevArray,
        res1
          ]);
      // console.log(clientData);
      console.log(searchResults);
      setError(null);
    } catch (error) {
      setError('Data not found');
      setClientData(null);
    }
  };
  
  

  return (
    <div className="search-page-container1">
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
            <th>EmailId</th>
            <th>MeetingTime</th>
            <th>WhoInvolved</th>
            <th>Remark</th>



            {/* Add more headers based on your clientData structure */}
          </tr>
        </thead>
        <tbody>
          {searchResults.map(item => {
            return(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.clientName}</td>
              <td>{item.contactPerson}</td>
              <td>{item.contactNo}</td>
              <td>{item.emailId}</td>
              <td>{item.meetingTime}</td>
              <td>{item.whoInvolved}</td>
              <td>{item.remark}</td>
            </tr>
          )})}
        </tbody>
      </table>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Client_Search;