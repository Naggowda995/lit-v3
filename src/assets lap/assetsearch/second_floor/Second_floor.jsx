import React, { useState } from "react";
import "./Second_floor.css";

export default function Second_floorsearch() {
  const sectionData = {
    Chairs: ["Normal Chairs", "Wheel Chairs"],
    Remote: ["AC Remotes", "Fan Remotes"],
    Pedestals: ["Pedestal Data"],
    AirConditioners: ["AirConditioner Data"],
    OtherAssets: ["Laptops", "Mouses", "Chargers", "Bags"],
    Fans: ["Fan Data"],
    Dustbins: ["Dustbin Data"],
    Tables: ["Table Data"],
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Filter sections based on the search term
    const matchingSections = Object.keys(sectionData).filter(
      (section) =>
        section.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sectionData[section].some((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Set only the matching section as active
    setActiveSection(matchingSections.length > 0 ? matchingSections[0] : null);
  };

  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="search-page-container">
      <h2>2nd Floor Assets</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Chairs/Remote/Pedestals/AirConditioners/OtherAssets/Fans/Dustbins/Tables"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {activeSection && (
        <div className="form-section">
          <h6 onClick={() => setActiveSection(null)}>
            {activeSection} -
          </h6>
          <table>
            <tbody>
              {sectionData[activeSection].map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                  <td>
                    <input type="text" name={item} id={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}