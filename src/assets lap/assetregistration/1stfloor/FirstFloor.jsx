import React, { useState } from "react";
import "./1stFloor.css";
import { AssetRegister } from "../../../http-common";

export default function FirstFloor() {

  const [accordionState, setAccordionState] = useState({
    Chairs: {
      isOpen: false,
      normalChairs: "",
      wheelChairs: "",
    },
    Remote: {
      isOpen: false,
      acRemotes: "",
      fanRemotes: "",
    },
    Pedestals: {
      isOpen: false,
      pedestals: "", // add other fields as needed
    },
    AirConditioners: {
      isOpen: false,
      airConditioners: "", // add other fields as needed
    },
    OtherAssets: {
      isOpen: false,
      laptops: "",
      mouses: "",
      chargers: "",
      bags: "",
    },
    Fans: {
      isOpen: false,
      fans: "",
    },
    Dustbins: {
      isOpen: false,
      dustbins: "",
    },
    Tables: {
      isOpen: false,
      tables: "",
    },
  });


  

  const [successMessage, setSuccessMessage] = useState("");
  // const toggleAccordion = (section) => {
  //   setAccordionState((prevState) => ({
  //     ...prevState,
  //     [section]: !prevState[section],
  //   }));
  // };

  const handleReset = () => {
    setAccordionState({
      Chairs: {
        normalChairs: "",
        wheelChairs: "",
        isOpen: false,
      },
      Remote: {
        acRemotes: "",
        fanRemotes: "",
        isOpen: false,
      },
      Pedestals: {
        pedestals: "",
        isOpen: false,
      },
      AirConditioners: {
        airConditioners: "",
        isOpen: false,
      },
      OtherAssets: {
        laptops: "",
        mouses: "",
        chargers: "",
        bags: "",
        isOpen: false,
      },
      Fans: {
        fans: "",
        isOpen: false,
      },
      Dustbins: {
        dustbins: "",
        isOpen: false,
      },
      Tables: {
        tables: "",
        isOpen: false,
      },
    });
  };


  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        isOpen: !prevState[section].isOpen,
      },
    }));
  };

// section1: Chairs
const handleNormalChairsChange = (value) =>{
  setAccordionState((prevState) => ({
    ...prevState,
    Chairs:{
      ...prevState.Chairs,
      normalChairs:value,
    },
  }));
};
const handleWheelChairsChange = (value) => {
  setAccordionState((prevState) => ({
    ...prevState,
    Chairs:{
      ...prevState.Chairs,
      wheelChairs:value,
    },
}));
};
//section2: Remote
const handleACRemotesChange = (value)=> {
  setAccordionState((prevState) =>({
    ...prevState,
    Remote:{
      ...prevState.Remote,
      acRemotes:value,
    },
  }));
};
  const handleFanRemotesChange = (value) =>{
    setAccordionState((prevState)=> ({
      ...prevState,
      Remote:{
        ...prevState.Remote,
        fanRemotes:value,
      },
  }));
};
//section3: Pedestals
const handlePedestalsChange = (value)=> {
  setAccordionState((prevState) =>({
    ...prevState,
    Pedestals:{
      ...prevState.Pedestals,
      pedestals:value,
    },
  }));
};
//section4: AirConditioners
const handleAirConditionersChange = (value)=> {
  setAccordionState((prevState) =>({
    ...prevState,
    AirConditioners:{
      ...prevState.AirConditioners,
      airConditioners:value,
    },
  }));
};
// section5: OtherAssets
const handleLaptopsChange = (value) =>{
  setAccordionState((prevState) => ({
    ...prevState,
    OtherAssets:{
      ...prevState.OtherAssets,
      laptops:value,
    },
  }));
};
const handleMousesChange = (value) =>{
  setAccordionState((prevState) => ({
    ...prevState,
    OtherAssets:{
      ...prevState.OtherAssets,
      mouses:value,
    },
  }));
};
const handleChargersChange = (value) =>{
  setAccordionState((prevState) => ({
    ...prevState,
    OtherAssets:{
      ...prevState.OtherAssets,
      chargers:value,
    },
  }));
};
const handleBagsChange = (value) =>{
  setAccordionState((prevState) => ({
    ...prevState,
    OtherAssets:{
      ...prevState.OtherAssets,
      bags:value,
    },
  }));
};
//section3: Fans
const handleFansChange = (value)=> {
  setAccordionState((prevState) =>({
    ...prevState,
    Fans:{
      ...prevState.Fans,
      fans:value,
    },
  }));
};
const handleDustbinsChange = (value)=> {
  setAccordionState((prevState) =>({
    ...prevState,
    Dustbins:{
      ...prevState.Dustbins,
      dustbins:value,
    },
  }));
};
const handleTablesChange = (value)=> {
  setAccordionState((prevState) =>({
    ...prevState,
    Tables:{
      ...prevState.Tables,
      tables:value,
    },
  }));
};
const handleSubmit = async () => {
  try {
    // Extract data without nested properties
    const dataToSend = {
      ...accordionState.Chairs,
      ...accordionState.Remote,
      ...accordionState.Pedestals,
      ...accordionState.AirConditioners,
      ...accordionState.OtherAssets,
      ...accordionState.Fans,
      ...accordionState.Dustbins,
      ...accordionState.Tables,
    };

    // Send the extracted data to the server
    await AssetRegister(dataToSend);

    console.log(dataToSend);
    setSuccessMessage("Data posted successfully!");
    // Perform any additional actions after successful submission
  } catch (error) {
    console.error("Error submitting form data:", error.message);
    // Handle errors, display error messages, etc.
  }
};




  
  return (
    <div className="">
      <h2>1st Floor Assets</h2>
      {/* Section 1: chairs */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Chairs")}>
          {accordionState.Chairs.isOpen ? "1. Chairs  -" : "1. Chairs +"}
        </h6>
        {accordionState.Chairs.isOpen && (
          <table>
            <tr>
              <td>Normal Chairs</td>
              <td>
              <input
                  type="text"
                  value={accordionState.Chairs.normalChairs}
                  onChange={(e) => handleNormalChairsChange(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Wheel Chairs:</td>
              <td>
              <input
                  type="text"
                  value={accordionState.Chairs.wheelChairs}
                  onChange={(e) => handleWheelChairsChange(e.target.value)}
                />
              </td>
            </tr>
          </table>
        )}
      </div>

      {/* Section 2: Remote */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Remote")}>
          {accordionState.Remote.isOpen ? "2. Remotes  -" : "2. Remotes +"}
        </h6>
        {accordionState.Remote.isOpen && (
          <table>
            <tr>
              <td>AC Remotes:</td>
              <td>
              <input
                  type="text"
                  value={accordionState.Remote.acRemotes}
                  onChange={(e) => handleACRemotesChange(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Fan Remotes:</td>
              <td>
              <input
                  type="text"
                  value={accordionState.Remote.fanRemotes}
                  onChange={(e) => handleFanRemotesChange(e.target.value)}
                />
              </td>
            </tr>
          </table>
        )}
      </div>

      {/* Section 3: Pedestals */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Pedestals")}>
          {accordionState.Pedestals.isOpen ? "3. Pedestals -" : "3. Pedestals+"}
        </h6>
        {accordionState.Pedestals.isOpen && (
          <div>
            <input
              type="text"
              value={accordionState.Pedestals.Pedestals}
              onChange={(e) => handlePedestalsChange(e.target.value)}
            />
          </div>
        )}
      </div>
      {/* Section 4: AirConditioners */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("AirConditioners")}>
          {accordionState.AirConditioners.isOpen
            ? "4. AirConditioners -"
            : "4. AirConditioners+"}
        </h6>
        {accordionState.AirConditioners.isOpen && (
          <div>
            <input
              type="text"
              value={accordionState.AirConditioners.AirConditioners}
              onChange={(e) => handleAirConditionersChange(e.target.value)}
            />
          </div>
        )}
      </div>
      {/* Section 5: OtherAssets */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("OtherAssets")}>
          {accordionState.OtherAssets.isOpen
            ? "5. OtherAssets  -"
            : "5. OtherAssets +"}
        </h6>
        {accordionState.OtherAssets.isOpen && (
          <table>
            <tr>
              <td>Laptops</td>
              <td>
              <input
                  type="text"
                  value={accordionState.OtherAssets.laptops}
                  onChange={(e) => handleLaptopsChange(e.target.value)}
                />
              </td> 
            </tr>
            <tr>
              <td>Mouses:</td>
              <td>
              <input
                  type="text"
                  value={accordionState.OtherAssets.mouses}
                  onChange={(e) => handleMousesChange(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Chargers</td>
              <td>
              <input
                  type="text"
                  value={accordionState.OtherAssets.chargers}
                  onChange={(e) => handleChargersChange(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Bags</td>
              <td>
              <input
                  type="text"
                  value={accordionState.OtherAssets.bags}
                  onChange={(e) => handleBagsChange(e.target.value)}
                />
              </td>
            </tr>
          </table>
        )}
      </div>
      {/* Section 6: Fans */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Fans")}>
          {accordionState.Fans.isOpen ? "6. Fans -" : "6. Fans+"}
        </h6>
        {accordionState.Fans.isOpen && (
          <div>
            <input
              type="text"
              value={accordionState.Fans.Fans}
              onChange={(e) => handleFansChange(e.target.value)}
            />
          </div>
        )}
      </div>
      {/* Section 7: Dustbins */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Dustbins")}>
          {accordionState.Dustbins.isOpen ? "7. Dustbins -" : "7. Dustbins+"}
        </h6>
        {accordionState.Dustbins.isOpen && (
          <div>
             <input
              type="text"
              value={accordionState.Dustbins.Dustbins}
              onChange={(e) => handleDustbinsChange(e.target.value)}
            />
          </div>
        )}
      </div>
      {/* Section 8: Tables */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Tables")}>
          {accordionState.Tables.isOpen ? "8. Tables -" : "8. Tables+"}
        </h6>
        {accordionState.Tables.isOpen && (
          <div>
           <input
              type="text"
              value={accordionState.Tables.Tables}
              onChange={(e) => handleTablesChange(e.target.value)}
            />
          </div>
        )}
          
      </div>
      <div className="submit">
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubmit}>Submit</button>
      {successMessage && <div className="success-message">{successMessage}</div>}
      </div>

      </div>
      
    
  );
}
