import React, { useState } from "react";
import "./Client_Registration.css";
import { client } from "../../../http-common"; // Import the appropriate function
 
export default function Client_Registration() {
  const [clientId, setClientId] = useState("");
  const [date, setDate] = useState("");
  const [clientName, setClientName] = useState("");
  const [website, setWebsite] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [whoInvolved, setWhoInvolved] = useState("");
  const [remark, setRemark] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      clientId,
      date,
      clientName,
      website,
      contactPerson,
      contactNo,
      emailId,
      meetingTime,
      whoInvolved,
      remark,
      successMessage,
      errorMessage,
    };
 
    try {
      // Using the clientDetails function from http-common.js
      await client(
        formData,
        setSuccessMessage,
        resetFormFields,
        setErrorMessage
      );
    } catch (error) {
      setErrorMessage(
        error.response?.data.message ||
          "Failed to connect to the server. Please try again later."
      );
    }
  };
 
  const resetFormFields = () => {
    setClientId("");
    setDate("");
    setClientName("");
    setWebsite("");
    setContactPerson("");
    setContactNo("");
    setEmailId("");
    setMeetingTime("");
    setWhoInvolved("");
    setRemark("");
  };
 
  return (
    <div className="Register-form">
      <h3>Client Registration</h3>
 
      {/* Section: Registration */}
      <div className="form-section">
        <form onSubmit={handleFormSubmit}>
          {/* ... (existing code for form inputs) */}
 
          <label htmlFor="clientId">Client ID</label>
          <input
            type="text"
            name="clientId"
            id="clientId"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          />
 
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
 
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            name="clientName"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
           
          />
 
           <label htmlFor="website">Website</label>
           <input
             type="text"
             name="website"
             id="website"
             value={website}
             onChange={(e) => setWebsite(e.target.value)}
         />
 
           <label htmlFor="contactPerson">Contact Person</label>
           <input
             type="text"
             name="contactPerson"
             id="contactPerson"
             value={contactPerson}
             onChange={(e) => setContactPerson(e.target.value)}
           />
 
            <label htmlFor="contactNo">Contact No</label>
            <input
              type="number"
              name="contactNo"
              id="contactNo"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
 
              <label htmlFor="emailId">Email ID</label>
              <input
                type="text"
                name="emailId"
                id="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                />
 
              <label htmlFor="meetingTime">Meeting Time</label>
              <input
                type="time"
                name="meetingTime"
                id="meetingTime"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
               />
 
               <label htmlFor="whoInvolved">Who Involved</label>
               <input
                 type="text"
                 name="whoInvolved"
                 id="whoInvolved"
                 value={whoInvolved}
                 onChange={(e) => setWhoInvolved(e.target.value)}
               />
 
               <label htmlFor="remark">Remark</label>
               <input
                 type="text"
                 name="remark"
                 id="remark"
                 value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
 
          <button type="submit">Submit</button>
        </form>
      </div>
      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}