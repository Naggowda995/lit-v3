import React, { useState } from 'react';
import './ITRegistration.css';
import { itrecruitment, itrecruitmentclient, itrecruitmentinterview, itrecruitmentscreening, itrecruitmentstatus } from '../../http-common';




export default function ITRegistration() {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [higherDegree, setHigherDegree] = useState("");
  const [passoutYear, setPassoutYear] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [university, setUniversity] = useState("");
  const [presentLocation, setPresentLocation] = useState("");
  const [referedBy, setReferedBy] = useState("");
  const [source, setSource] = useState("");
  const [recruitmentid, setRecruitmentid] = useState("");
  const [clientMobileNumber, setClientMobileNumber] = useState("");
  const [clientEmailId, setClientEmailId] = useState("");
  const [interviewScheduled, setInterviewScheduled] = useState("");
  const [l1, setL1] = useState("");
  const [l2, setL2] = useState("");
  const [l3, setL3] = useState("");
  const [hrRound, setHrRound] = useState("");
  const [technology, setTechnology] = useState("");
  const [ctcLpa, setCtcLpa] = useState("");
  const [experience, setExperience] = useState("");
  const [expectedCtc, setExpectedCtc] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [active, setActive] = useState("");
  const [inActive, setInActive] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      mobileNumber,
      emailId,
      higherDegree,
      passoutYear,
      collegeName,
      university,
      presentLocation,
      referedBy,
      source,
      technology,
      ctcLpa,
      experience,
      expectedCtc,
      currentLocation,
      jobType,
      interviewScheduled,
      l1,
      l2,
      l3,
      hrRound,
      active: false,
      inactive: false,
      clientMobileNumber,
      clientEmailId,
    };

    try {
      await itrecruitment(formData, setSuccessMessage, resetFormFields, setErrorMessage);
      await itrecruitmentclient(formData, setSuccessMessage, resetFormFields, setErrorMessage);
      await itrecruitmentinterview(formData, setSuccessMessage, resetFormFields, setErrorMessage);
      await itrecruitmentscreening(formData, setSuccessMessage, resetFormFields, setErrorMessage);
      await itrecruitmentstatus(formData, setSuccessMessage, resetFormFields, setErrorMessage);
    } catch (error) {
      setErrorMessage(
        error.response?.data.message ||
        "Failed to connect to the server. Please try again later."
      );
    }
  };
  

  const resetFormFields = () => {
    setName("");
    setMobileNumber("");
    setEmailId("");
    setHigherDegree("");
    setPassoutYear("");
    setCollegeName("");
    setUniversity("");
    setPresentLocation("");
    setReferedBy("");
    setSource("");
    setTechnology("");
    setCtcLpa("");
    setExperience("");
    setExpectedCtc("");
    setCurrentLocation("");
    setJobType("");
    setInterviewScheduled("");
    setL1("");
    setL2("");
    setL3("");
    setHrRound("");
    setActive("");
    setInActive("");
    setClientMobileNumber("");
    setClientEmailId("");
    
  };

 
  // const [formData, setFormData] = useState("");
 
  // const handleInputChange = (section, field, value) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [section]: {
  //       ...prevData[section],
  //       [field]: value,
  //     },
  //   }));
  // };
 
  return (
    <div className="Register-form">
      <h2>IT Recruitment Lap Registration</h2>

      {/* Section: Registration */}
      <div className="form-section">
        <form onSubmit={handleFormSubmit}>
          {/* ... (existing code for form inputs) */}
 
  <label htmlFor="name">Name</label>
  <input
    type="text"
    name="name"
    id="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />


<label htmlFor="mobileNumber">MobileNumber</label>
<input
   type="text"
   name="mobileNumber"
   id="mobileNumber"
   value={mobileNumber}
   onChange={(e) => setMobileNumber(e.target.value)}
 />


<label htmlFor="emailId">EmailId</label>
<input         
  type="text"
  name="emailId"
  id="emailId"
  value={emailId}
  onChange={(e) => setEmailId(e.target.value)}
/>


<label htmlFor="higherDegree">HigherDegree</label>
          <input
            type="text"
            name="higherDegree"
            id="higherDegree"
            value={higherDegree}
            onChange={(e) => setHigherDegree(e.target.value)}
          />

<label htmlFor="passoutYear">PassoutYear</label>
          <input
            type="text"
            name="passoutYear"
            id="passoutYear"
            value={passoutYear}
            onChange={(e) => setPassoutYear(e.target.value)}
          />
<label htmlFor="collegeName">CollegeName</label>
          <input
            type="text"
            name="collegeName"
            id="collegeName"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />
<label htmlFor="university">University</label>
          <input
            type="text"
            name="university"
            id="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
<label htmlFor="presentLocation">PresentLocation</label>
          <input
            type="text"
            name="presentLocation"
            id="presentLocation"
            value={presentLocation}
            onChange={(e) => setPresentLocation(e.target.value)}
          />
<label htmlFor="referedBy">ReferedBy</label>
          <input
            type="text"
            name="referedBy"
            id="referedBy"
            value={referedBy}
            onChange={(e) => setReferedBy(e.target.value)}
          />
<label htmlFor="source">Source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />


<label htmlFor="recruitmentid">Recruitmentid</label>
          <input
            type="text"
            name="recruitmentid"
            id="recruitmentid"
            value={recruitmentid}
            onChange={(e) => setRecruitmentid(e.target.value)}
          />

<label htmlFor="clientMobileNumber">ClientMobileNumber</label>
          <input
            type="text"
            name="clientMobileNumber"
            id="clientMobileNumber"
            value={clientMobileNumber}
            onChange={(e) => setClientMobileNumber(e.target.value)}
          />
<label htmlFor="clientEmailId">ClientEmailId</label>
          <input
            type="text"
            name="clientEmailId"
            id="clientEmailId"
            value={clientEmailId}
            onChange={(e) => setClientEmailId(e.target.value)}
          />
<label htmlFor="interviewScheduled">InterviewScheduled</label>
          <input
            type="text"
            name="interviewScheduled"
            id="interviewScheduled"
            value={interviewScheduled}
            onChange={(e) => setInterviewScheduled(e.target.value)}
          />


<label htmlFor="l1">L1</label>
          <input
            type="text"
            name="l1"
            id="l1"
            value={l1}
            onChange={(e) => setL1(e.target.value)}
          />


<label htmlFor="l2">L2</label>
          <input
            type="text"
            name="l2"
            id="l2"
            value={l2}
            onChange={(e) => setL2(e.target.value)}
          />

<label htmlFor="l3">L3</label>
          <input
            type="text"
            name="l3"
            id="l3"
            value={l3}
            onChange={(e) => setL3(e.target.value)}
          />

<label htmlFor="hrRound">HrRound</label>
          <input
            type="text"
            name="hrRound"
            id="hrRound"
            value={hrRound}
            onChange={(e) => setHrRound(e.target.value)}
          />

<label htmlFor="technology">Technology</label>
          <input
            type="text"
            name="technology"
            id="technology"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
          />


<label htmlFor="ctcLpa">CtcLpa</label>
          <input
            type="text"
            name="ctcLpa"
            id="ctcLpa"
            value={ctcLpa}
            onChange={(e) => setCtcLpa(e.target.value)}
          />

<label htmlFor="experience">Experience</label>
          <input
            type="text"
            name="experience"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

<label htmlFor="expectedCtc">ExpectedCtc</label>
          <input
            type="text"
            name="expectedCtc"
            id="expectedCtc"
            value={expectedCtc}
            onChange={(e) => setExpectedCtc(e.target.value)}
          />

<label htmlFor="currentLocation">CurrentLocation</label>
          <input
            type="text"
            name="currentLocation"
            id="currentLocation"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          />

<label htmlFor="jobType">JobType</label>
          <input
            type="text"
            name="jobType"
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />



<label htmlFor="jobType">JobType</label>
          <input
            type="text"
            name="jobType"
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />

<label htmlFor="active">Active</label>
          <input
            type="text"
            name="active"
            id="active"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          />


<label htmlFor="inActive">InActive</label>
          <input
            type="text"
            name="inActive"
            id="inActive"
            value={inActive}
            onChange={(e) => setInActive(e.target.value)}
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