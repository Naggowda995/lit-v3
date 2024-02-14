import React, { useState } from 'react';
import './ITSearch.css';
import { getitrecruitment } from '../../http-common';
 
const ITSearch = () => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
 
  const handleInputChange = (e) => {
    setSearchCriteria(e.target.value);
  };
 
  const fetchData = async () => {
    try {
      const response = await getitrecruitment(searchCriteria);
      const res1= response;
      console.log("hiii",response)
      setSearchResults((prevArray) =>[
        ...prevArray,
        res1
          ]);
         
      if (response && response.data) {
        setSearchResults(response.data); // Set new search results from the response data
        setError(''); // Clear any previous error messages
       
 
      } else {
        setSearchResults([]); // Clear search results if no data is returned
        setError('Data not found'); // Set error message
      }
      console.log(searchResults);
      setError(null);
    } catch (error) {
      setSearchResults([]); // Clear search results in case of error
      setError('Data not found'); // Set error message
    }
  };
 
  return (
    <div className="search-page-container">
      <h1>Data Search and Display</h1>
 
      <div className="search-bar-container">
        <label>Search by ID, Name, or Phone Number:</label>
        <input
          type="text"
          id="searchInput"
          value={searchCriteria}
          onChange={handleInputChange}
          placeholder="Enter ID, Name, or Phone Number"
        />
        <button onClick={fetchData}>Search</button>
      </div>
 
      <table className="result-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Email Id</th>
            <th>Higher Degree</th>
            <th>Passout Year</th>
            <th>College Name</th>
            <th>University</th>
            <th>Present Location</th>
            <th>Refered By</th>
            <th>Source</th>
            <th>Technology</th>
            <th>CTC LPA</th>
            <th>Experience</th>
            <th>Expected CTC</th>
            <th>Current Location</th>
            <th>Job Type</th>
            <th>Interview Schedule</th>
            <th>L1</th>
            <th>L2</th>
            <th>L3</th>
            <th>HR Round</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.itrecruitmentId}>
              <td>{item.itrecruitmentId}</td>
              <td>{item.name}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.emailId}</td>
              <td>{item.higherDegree}</td>
              <td>{item.passoutYear}</td>
              <td>{item.collegeName}</td>
              <td>{item.university}</td>
              <td>{item.presentLocation}</td>
              <td>{item.referedBy}</td>
              <td>{item.source}</td>
              <td>{item.technology}</td>
              <td>{item.ctcLpa}</td>
              <td>{item.experience}</td>
              <td>{item.expectedCtc}</td>
              <td>{item.currentLocation}</td>
              <td>{item.jobType}</td>
              <td>{item.interviewSchedule}</td>
              <td>{item.l1}</td>
              <td>{item.l2}</td>
              <td>{item.l3}</td>
              <td>{item.hrRound}</td>
              <td>{item.active ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
 
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
 
export default ITSearch;
 
