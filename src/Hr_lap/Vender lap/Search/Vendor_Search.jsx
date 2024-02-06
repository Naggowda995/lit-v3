import React, { useState } from 'react';
import './Vendor_Search.css'; // Assuming you have a CSS file for styling
 
const Vendor_Search = () => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 
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
 
  return (
    <div className="search-page-container">
      <h1>Search</h1>
 
      <div className="search-bar-container">
       
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
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Vendor_Search;