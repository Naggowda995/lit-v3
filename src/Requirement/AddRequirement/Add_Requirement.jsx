import React, { useState } from "react";
import "./Add_Requirement.css";
import { requirement } from "../../http-common";
 
 
const Add_Requirement = () => {
  const [selectedSector, setSelectedSector] = useState("IT");
  const [selectedITOption, setSelectedITOption] = useState("");
  const [selectedNon_ITOption, setSelectedNon_ITOption] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedActive, setSelectedActive] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [fullName, setFullName] = useState("");
  const [experience, setExperience] = useState("");
  const [clientName, setClientName] = useState("");
 
 
 
  const options1 = [
    { value: "IT", label: "IT" },
    { value: "Non IT", label: "Non IT" },
  ];
 
  const optionsIT = ["Python", "Java", "Informatica", "Splunk", "DevOps"];
 
  const optionsNon_IT = [
    "GIS",
    "Autocad",
    "ARC",
    "Fusion-X",
    "Microstations",
  ];
 
  const handleSectorChange = (event) => {
    const sectorValue = event.target.value;
    setSelectedSector(sectorValue);
  };
 
  const handleDropdownChange = (event) => {
    setSelectedITOption(event.target.value);
    setSelectedNon_ITOption(event.target.value);
  };
 
 
 
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
 
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
 
  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
  };
 
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
 
  const handleActiveChange = (activeStatus) => {
    setSelectedActive(activeStatus);
  };
 
  const handleAgreementChange = () => {
    setIsAgreed(!isAgreed);
  };
 
  const handleSubmit = async () => {
    try {
      const formData = {
        fullName,
        experience,
        clientName,
        selectedSector,
        selectedITOption,
        selectedNon_ITOption,
        selectedGender,
        selectedActive,
        isAgreed,
      };
 
      const setSuccessMessage = (message) => {
        // Handle the success message, e.g., display it to the user
      };
      const resetFormFields = () => {
        // Reset form fields here
        setSelectedSector("");
        setSelectedITOption("");
        setSelectedNon_ITOption("");
        setSelectedGender(null);
        setSelectedActive(null);
        setIsAgreed(false);
        setFullName("");
        setExperience("");
        setClientName("");
      };
 
      // Assuming you have setErrorMessage as part of your component state
      const setErrorMessage = () => {};
 
      const response = await requirement(formData, setSuccessMessage, resetFormFields, setErrorMessage);
 
      // Handle success
      // console.log("Server Response:", response);
      // Display success message
      setSuccessMessage("Form Submitted!");
      alert("Data Posted Successfully");
 
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
      // Display error message
      window.alert("Failed to submit form. Please try again.");
    }
  };
 
  const handleReset = () => {
    // Reset form fields here
    setSelectedSector("");
    setSelectedITOption("");
    setSelectedNon_ITOption("");
    setSelectedGender(null);
    setSelectedActive(null);
    setIsAgreed(false);
    setFullName("");
    setExperience("");
    setClientName("");
  };
 
  return (
    <div className="add-requirement-container">
      <h2>Add Requirement</h2>
      <table>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </td>
          </tr>
 
          <tr>
            <td>Experience</td>
            <td>
              <input
                type="text"
                name="experience"
                id="experience"
                value={experience}
                onChange={handleExperienceChange}
              />
            </td>
          </tr>
 
          <tr>
            <td>Client Name</td>
            <td>
              <input
                type="text"
                name="clientName"
                id="clientName"
                value={clientName}
                onChange={handleClientNameChange}
              />
            </td>
          </tr>
 
          <tr>
            <td>Sector</td>
            <td>
              <label htmlFor="dropdown1">Select</label> {"\t"}{"\t"}
              <select
                id="dropdown1"
                value={selectedSector}
                onChange={handleSectorChange}
              >
                {options1.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
 
          {selectedSector === "IT" && (
            <tr>
              <td>IT</td>
              <td>
                <label htmlFor="singleDropdown">Select an option:</label>
                <select
                  id="singleDropdown"
                  value={selectedITOption}
                  onChange={handleDropdownChange}
                >
                  {optionsIT.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          )}
 
          {selectedSector === "Non IT" && (
            <tr>
              <td>Non IT</td>
              <td>
                <label htmlFor="singleDropdown">Select an option:</label>
                <select
                  id="singleDropdown"
                  value={selectedNon_ITOption}
                  onChange={handleDropdownChange}
                >
                  {optionsNon_IT.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          )}
 
          <tr>
            <td>Gender</td>
            <td>
            <label className="Genderplaceing">
                <input className="radio"
                  type="radio"
                  value="Male"
                  checked={selectedGender === "Male"}
                  onChange={() => handleGenderChange("Male")}
                />
                Male
              </label>{"\t"}{"\t"}
              <label className="Genderplaceing">
                <input className="radio"
                  type="radio"
                  value="Female"
                  checked={selectedGender === "Female"}
                  onChange={() => handleGenderChange("Female")}
                />
                Female
              </label>
            </td>
          </tr>
 
          <tr>
            <td>Status</td>
            <td>
              <label className="Genderplaceing">
                <input className="radio"
                  type="radio"
                  value="Active"
                  checked={selectedActive === "Active"}
                  onChange={() => handleActiveChange("Active")}
                />
                Active
              </label>{"\t"}{"\t"}
              <label className="Genderplaceing">
                <input className="radio"
                  type="radio"
                  value="Non Active"
                  checked={selectedActive === "Non Active"}
                  onChange={() => handleActiveChange("Non Active")}
                />
                Non Active
              </label>
            </td>
          </tr>
 
        </tbody>
      </table>
 
      <div className="check1">
        <label>
          <input className="radio"
            type="checkbox"
            checked={isAgreed}
            onChange={handleAgreementChange}
          />
          I agree to the terms and conditions
        </label>
      </div>
 
      <div>
        <div>
          <button onClick={handleSubmit}>Submit</button>{"\t"}{"\t"}
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};
 
export default Add_Requirement;
 