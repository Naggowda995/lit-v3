import React, { useState } from "react";
import { Requirement } from "../../http-common";
import "./Requirement_Search.css";

const Requirement_Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [requirementData, setRequirementData] = useState("");
  const [error, setError] = useState(null);
  const [requirementid, setRequirementid] = useState("");

  const handleInputChange = (e) => {
    setRequirementid(e.target.value);
  };

  const fetchData = async () => {
    try {
      setSearchResults([]);
      const response = await Requirement(requirementid);
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
      setRequirementData(null);
    }
  };

  

  return (
    <div className="search-page-container1">
      <h1>Requirement Search</h1>
      <div className="search-bar-container">
        <div className="search-input-container">
          <input
            type="text"
            id="searchInput"
            value={requirementid}
            onChange={handleInputChange}
            placeholder="Search by Requirement ID"
          />
          <button
            type="button"
            className="search-button"
            onClick={fetchData}
          >
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
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.requirementid}>
              <td>{item.requirementid}</td>
              
              <td>{item.fullName}</td>
              <td>{item.experience}</td>
              <td>{item.clientName}</td>
              <td>{item.sector}</td>
              <td>{item.technology}</td>
              <td>{item.gender}</td>
              <td>{item.status}</td>
              <td>{item.termsConditions}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Requirement_Search;
