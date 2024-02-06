import React, { useState } from "react";
import "./Vender_registration.css";
// import { SubmitVendorData } from "../../../SubmitVendorData";
import { vendorDetails } from "../../../http-common";
 
export default function Vender_registration() {
  const [vendorId, setVendorId] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [rateCard, setRateCard] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [payRoll, setPayRoll] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [technology, setTechnology] = useState("");
  const [years, setYears] = useState("");
  const [firstReviewed, setFirstReviewed] = useState("");
  const [secondReviewed, setSecondReviewed] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 
 
 
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
 
    const formData = new FormData();
    formData.append("vendorId", vendorId);
    formData.append("vendorName", vendorName);
    formData.append("rateCard", rateCard);
    formData.append("location", location);
    formData.append("jobType", jobType);
    formData.append("payRoll", payRoll);
    formData.append("candidateName", candidateName);
    formData.append("technology", technology);
    formData.append("years", years);
    formData.append("firstReviewed", firstReviewed);
    formData.append("secondReviewed", secondReviewed);
    formData.append("cvFormat", cvFile);
    try {
      // Using the vendorDetails function from http-common.js
      await vendorDetails(formData, setSuccessMessage, resetFormFields, setErrorMessage);
    } catch (error) {
      setErrorMessage(
        error.response?.data.message ||
          "Failed to connect to the server. Please try again later."
      );
    }
  };
   
 
 
  const resetFormFields = () => {
    setVendorId("");
    setVendorName("");
    setRateCard("");
    setLocation("");
    setJobType("");
    setPayRoll("");
    setCandidateName("");
    setTechnology("");
    setYears("");
    setFirstReviewed("");
    setSecondReviewed("");
    setCvFile("");
  };
 
  return (
    <div className="Register-form">
      <h4>Vendor Registration</h4>
 
      {/* Section: Registration */}
 
      <div className="form-section">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="vendorId">Vendor ID</label>
          <input
            type="text"
            name="vendorId"
            id="vendorId"
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
          />
 
          <label htmlFor="vendorName">Vendor Name</label>
          <input
            type="text"
            name="vendorName"
            id="vendorName"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
          />
 
          <label htmlFor="rateCard">Rate Card</label>
          <input
            type="text"
            name="rateCard"
            id="rateCard"
            value={rateCard}
            onChange={(e) => setRateCard(e.target.value)}
          />
 
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
 
          <label htmlFor="jobType">Job Type</label>
          <input
            type="text"
            name="jobType"
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />
 
          <label htmlFor="payRoll">Payroll</label>
          <input
            type="text"
            name="payRoll"
            id="payRoll"
            value={payRoll}
            onChange={(e) => setPayRoll(e.target.value)}
          />
 
          <label htmlFor="candidateName">Candidate Name</label>
          <input
            type="text"
            name="candidateName"
            id="candidateName"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
          />
 
          <label htmlFor="technology">Technology</label>
          <input
            type="text"
            name="technology"
            id="technology"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
          />
 
          <label htmlFor="years">Years</label>
          <input
            type="text"
            name="years"
            id="years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
 
          <label htmlFor="firstReviewed">First Reviewed</label>
          <input
            type="text"
            name="firstReviewed"
            id="firstReviewed"
            value={firstReviewed}
            onChange={(e) => setFirstReviewed(e.target.value)}
          />
 
          <label htmlFor="secondReviewed">Second Reviewed</label>
          <input
            type="text"
            name="secondReviewed"
            id="secondReviewed"
            value={secondReviewed}
            onChange={(e) => setSecondReviewed(e.target.value)}
          />
 
          <label htmlFor="cvFormat">CV Format</label>
          <input
            type="file"
            name="cvFormat"
            id="cvFormat"
            accept=".pdf, .doc, .docx"
            // value={cvFile}
            onChange={(e) => setCvFile(e.target.files[0])}
          />
 
          <br/>
 <button type="submit">Submit</button>
         
        </form>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}