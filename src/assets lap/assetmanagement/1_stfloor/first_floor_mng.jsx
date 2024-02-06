import React, { useState } from "react";
import "./First_floor_mng.css";

export default function First_floor_mng() {
  const sectionData = {
    Remote: ["AC Remotes", "Fan Remotes"],
    Chairs: ["Normal Chairs", "Wheel Chairs"],
    Pedestels: ["Pedestels"],
    AirConditioners: ["AirConditioners"],
    OtherAsserts: ["Laptops", "Mouses", "Chargers", "Bags"],
    Fans: ["Fans"],
    Dustbins: ["Dustbins"],
    Tables: ["Tables"],
  };

  const [acRemoteCount, setAcRemoteCount] = useState(8);
  const [fanRemoteCount, setFanRemoteCount] = useState(12);
  const [normalChairsCount, setNormalChairsCount] = useState(0);
  const [wheelChairsCount, setWheelChairsCount] = useState(0);
  const [PedestelsCount, setPedestelsCount] = useState(0);
  const [AirConditionersCount, setAirConditionersCount] = useState(0);
  const [LaptopsCount, setLaptopsCount] = useState(0);
  const [MousesCount, setMousesCount] = useState(0);
  const [ChargersCount, setChargersCount] = useState(0);
  const [BagsCount, setBagsCount] = useState(0);
  const [FansCount, setFansCount] = useState(0);
  const [DustbinsCount, setDustbinsCount] = useState(0);
  const [TablesCount, setTablesCount] = useState(0);

  const [editMode, setEditMode] = useState(null);
  const [editedCount, setEditedCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showData, setShowData] = useState(false);

  const handleAddItem = (item) => {
    if (item === "AC Remotes") {
      setEditedCount(acRemoteCount);
    } else if (item === "Fan Remotes") {
      setEditedCount(fanRemoteCount);
    } else if (item === "Normal Chairs") {
      setEditedCount(normalChairsCount);
    } else if (item === "Wheel Chairs") {
      setEditedCount(wheelChairsCount);
    } else if (item === "Pedestels") {
      setEditedCount(PedestelsCount);
    } else if (item === "AirConditioners") {
      setEditedCount(AirConditionersCount);
    } else if (item === "Laptops") {
      setEditedCount(LaptopsCount);
    } else if (item === "Mouses") {
      setEditedCount(MousesCount);
    } else if (item === "Chargers") {
      setEditedCount(ChargersCount);
    } else if (item === "Bags") {
      setEditedCount(BagsCount);
    } else if (item === "Fans") {
      setEditedCount(FansCount);
    } else if (item === "Dustbins") {
      setEditedCount(DustbinsCount);
    } else if (item === "Tables") {
      setEditedCount(TablesCount);
    }
    setEditMode(item);
  };

  const handleSaveCount = (item) => {
    switch (item) {
      case "AC Remotes":
        setAcRemoteCount(editedCount);
        break;
      case "Fan Remotes":
        setFanRemoteCount(editedCount);
        break;
      case "Normal Chairs":
        setNormalChairsCount(editedCount);
        break;
      case "Wheel Chairs":
        setWheelChairsCount(editedCount);
        break;
      case "Pedestels":
        setPedestelsCount(editedCount);
        break;
      case "AirConditioners":
        setAirConditionersCount(editedCount);
        break;
      case "Laptops":
        setLaptopsCount(editedCount);
        break;
      case "Mouses":
        setMousesCount(editedCount);
        break;
      case "Chargers":
        setChargersCount(editedCount);
        break;
      case "Bags":
        setBagsCount(editedCount);
        break;
      case "Fans":
        setFansCount(editedCount);
        break;
      case "Dustbins":
        setDustbinsCount(editedCount);
        break;
      case "Tables":
        setTablesCount(editedCount);
        break;

      default:
        break;
    }
    setEditMode(null);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
  };

  const handleDeleteItem = (item) => {
    switch (item) {
      case "AC Remotes":
        setAcRemoteCount(0);
        break;
      case "Fan Remotes":
        setFanRemoteCount(0);
        break;
      case "Normal Chairs":
        setNormalChairsCount(0);
        break;
      case "Wheel Chairs":
        setWheelChairsCount(0);
        break;
      case "Pedestels":
        setPedestelsCount(0);
        break;
      case "AirConditioners":
        setAirConditionersCount(0);
        break;
      case "Laptops":
        setLaptopsCount(0);
        break;
      case "Mouses":
        setMousesCount(0);
        break;
      case "Chargers":
        setChargersCount(0);
        break;
      case "Bags":
        setBagsCount(0);
        break;
      case "Fans":
        setFansCount(0);
        break;
      case "Dustbins":
        setDustbinsCount(0);
        break;
      case "Tables":
        setTablesCount(0);
        break;
      default:
        break;
    }
    setEditMode(null);
  };

  const handleEditInputChange = (e) => {
    setEditedCount(parseInt(e.target.value, 10) || 0);
  };

  const handleSearch = () => {
    setShowData(true);
  };

  const filteredSections = Object.keys(sectionData).filter((section) =>
    section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page-container">
      <h2>1st Floor Assets Management</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by table name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {showData &&
        filteredSections.map((section, index) => (
          <div key={index} className="form-section">
            <h6>{section} </h6>
            <table>
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Count</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sectionData[section].map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>{item}</td>
                    <td>
                      {editMode === item ? (
                        <input
                          type="number"
                          value={editedCount}
                          onChange={handleEditInputChange}
                        />
                      ) : (
                        getCountForItem(item)
                      )}
                    </td>
                    <td>
                      {editMode === item ? (
                        <>
                          <button onClick={() => handleSaveCount(item)}>
                            Save
                          </button>
                          <button onClick={handleCancelEdit}>Cancel</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => handleAddItem(item)}>
                            Edit
                          </button>
                          <button onClick={() => handleDeleteItem(item)}>
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );

  function getCountForItem(item) {
    switch (item) {
      case "AC Remotes":
        return acRemoteCount;
      case "Fan Remotes":
        return fanRemoteCount;
      case "Normal Chairs":
        return normalChairsCount;
      case "Wheel Chairs":
        return wheelChairsCount;
      case "Pedestels":
        return PedestelsCount;
      case "AirConditioners":
        return AirConditionersCount;
      case "Laptops":
        return LaptopsCount;
      case "Mouses":
        return MousesCount;
      case "Chargers":
        return ChargersCount;
      case "Bags":
        return BagsCount;
      case "Fans":
        return FansCount;
      case "Dustbins":
        return DustbinsCount;
      case "Tables":
        return TablesCount;
      default:
        return 0;
    }
  }
}