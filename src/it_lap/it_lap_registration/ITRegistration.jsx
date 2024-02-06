import React, { useState } from "react";
import "./ITRegistration.css";
import {
  itrecruitment,
} from "../../http-common";

export default function ITRegistration() {
  // const [name, setName] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [emailId, setEmailId] = useState("");
  // const [higherDegree, setHigherDegree] = useState("");
  // const [passoutYear, setPassoutYear] = useState("");
  // const [collegeName, setCollegeName] = useState("");
  // const [university, setUniversity] = useState("");
  // const [presentLocation, setPresentLocation] = useState("");
  // const [referedBy, setReferedBy] = useState("");
  // const [source, setSource] = useState("");
  // const [interviewScheduled, setInterviewScheduled] = useState("");
  // const [l1, setL1] = useState("");
  // const [l2, setL2] = useState("");
  // const [l3, setL3] = useState("");
  // const [hrRound, setHrRound] = useState("");
  // const [technology, setTechnology] = useState("");
  // const [ctcLpa, setCtcLpa] = useState("");
  // const [experience, setExperience] = useState("");
  // const [expectedCtc, setExpectedCtc] = useState("");
  // const [currentLocation, setCurrentLocation] = useState("");
  // const [jobType, setJobType] = useState("");
  // const [active, setActive] = useState("");
  // const [inActive, setInActive] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");


  const [formData, setFormData] = useState({
    candidateinfo: {
      name: "",
      mobileNumber: "",
      emailId: "",
      higherDegree: "",
      passoutYear: "",
      collegeName: "",
      university: "",
      presentLocation: "",
      referedBy: "",
      source: "",
    },
    screeningDetails: {
      technology: "",
      ctcLpa: "",
      experience: "",
      expectedCtc: "",
      currentLocation: "",
      jobType: "",
    },
    interviewdetails: {
      interviewSchedule: "",
      l1: "",
      l2: "",
      l3: "",
      hrRound: "",
    },
    status: {
      active: false,
      inactive: false,
    },
    clientsidedetails: {
      clientMobileNumber: "",
      clientEmailId: "",
    },
  });

  const [accordionState, setAccordionState] = useState({
    candidateinfo: false,
    screeningDetails: false,
    interviewdetails: false,
    status: false,
    clientsidedetails: false,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleCheckboxChange = (section, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: !prevData[section][field],
      },
    }));
  };

  const handleReset = () => {
    setFormData({
      candidateinfo: {
        name: "",
        mobileNumber: "",
        emailId: "",
        higherDegree: "",
        passoutYear: "",
        collegeName: "",
        university: "",
        presentLocation: "",
        referedBy: "",
        source: "",
      },
      screeningDetails: {
        technology: "",
        ctcLpa: "",
        experience: "",
        expectedCtc: "",
        currentLocation: "",
        jobType: "",
      },
      interviewdetails: {
        interviewSchedule: "",
        l1: "",
        l2: "",
        l3: "",
        hrRound: "",
      },
      status: {
        active: false,
        inactive: false,
      },
      clientsidedetails: {
        clientMobileNumber: "",
        clientEmailId: "",
      },
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("Form submitted:", formData);

    try {
      await itrecruitment(formData.candidateinfo);
      

      setSuccessMessage("Form submitted successfully!");
      handleReset(); // Reset form after successful submission
    } catch (error) {
      setErrorMessage(
        error.response?.data.message ||
        "Failed to connect to the server. Please try again later."
      );
    }
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

      <div className="form-section">
        <form >
          <h4 onClick={() => toggleAccordion("candidateinfo")}>
            {accordionState.candidateinfo
              ? "Candidate Details -"
              : "Candidate Details +"}
          </h4>
          {accordionState.candidateinfo && (
            <table>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.candidateinfo.name}
                    onChange={(e) => handleInputChange('candidateinfo', 'name', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile Number:</td>
                <td>
                <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              value={formData.candidateinfo.mobileNumber}
              onChange={(e) => handleInputChange('candidateinfo', 'mobileNumber', e.target.value)}
            />
                </td>
              </tr>
              <tr>
                <td>Email Id:</td>
                <td>
                <input
              type="text"
              name="emailId"
              id="emailId"
              value={formData.candidateinfo.emailId}
              onChange={(e) => handleInputChange('candidateinfo', 'emailId', e.target.value)}
            />
                </td>
              </tr>
              <tr>
                <td>Higher Degree:</td>
                <td>
                <input
              type="text"
              name="higherDegree"
              id="higherDegree"
              value={formData.candidateinfo.higherDegree}
              onChange={(e) => handleInputChange('candidateinfo', 'higherDegree', e.target.value)}
            />
                </td>
              </tr>
              <tr>
                <td>Passout Year:</td>
                <td>
                <input
              type="text"
              name="passoutYear"
              id="passoutYear"
              value={formData.candidateinfo.passoutYear}
              onChange={(e) => handleInputChange('candidateinfo', 'passoutYear', e.target.value)}
            />
                </td>
              </tr>

              <tr>
                <td>College Name:</td>
                <td>
                <input
              type="text"
              name="collegeName"
              id="collegeName"
              value={formData.candidateinfo.collegeName}
              onChange={(e) => handleInputChange('candidateinfo', 'collegeName', e.target.value)}
            />
                </td>
              </tr>

              <tr>
                <td>University:</td>
                <td>
                <input
              type="text"
              name="university"
              id="university"
              value={formData.candidateinfo.university}
              onChange={(e) => handleInputChange('candidateinfo', 'university', e.target.value)}
            />
                </td>
              </tr>

              <tr>
                <td>Present Location</td>
                <td>
                <input
              type="text"
              name="presentLocation"
              id="presentLocation"
              value={formData.candidateinfo.presentLocation}
              onChange={(e) => handleInputChange('candidateinfo', 'presentLocation', e.target.value)}
            />
                </td>
              </tr>

              <tr>
                
                <td>ReferedBy</td>
                <td>
                <input
              type="text"
              name="referedBy"
              id="referedBy"
              value={formData.candidateinfo.referedBy}
              onChange={(e) => handleInputChange('candidateinfo', 'referedBy', e.target.value)}
            />
                </td>
              </tr>

              <tr>
                <td>Source</td>
                <td>
                <input
              type="text"
              name="source"
              id="source"
              value={formData.candidateinfo.source}
              onChange={(e) => handleInputChange('candidateinfo', 'source', e.target.value)}
            />
                </td>
              </tr>
              {/* ... (other candidate details fields) */}
            </table>
          )}
        </form>
      </div>

      {/* Section: 2 */}

      <div className="form-section">
        <form onSubmit={handleFormSubmit}>
          <h4 onClick={() => toggleAccordion("screeningDetails")}>
            {accordionState.screeningDetails
              ? "Screening Details -"
              : "Screening Details +"}
          </h4>
          {accordionState.screeningDetails && (
            <table>
              <tr>
                <td>Technology:</td>
                <td>
                <input
                    type="text"
                    name="technology"
                    id="technology"
                    value={formData.screeningDetails.technology}
                    onChange={(e) => handleInputChange('screeningDetails', 'technology', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>C.T.C LPA:</td>
                <td>
                <input
                    type="text"
                    name="ctcLpa"
                    id="ctcLpa"
                    value={formData.screeningDetails.ctcLpa}
                    onChange={(e) => handleInputChange('screeningDetails', 'ctcLpa', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Experience:</td>
                <td>
                <input
                    type="text"
                    name="experience"
                    id="experience"
                    value={formData.screeningDetails.experience}
                    onChange={(e) => handleInputChange('screeningDetails', 'experience', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Expected CTC:</td>
                <td>
                <input
                    type="text"
                    name="expectedCtc"
                    id="expectedCtc"
                    value={formData.screeningDetails.expectedCtc}
                    onChange={(e) => handleInputChange('screeningDetails', 'expectedCtc', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Current Location:</td>
                <td>
                <input
                    type="text"
                    name="currentLocation"
                    id="currentLocation"
                    value={formData.screeningDetails.currentLocation}
                    onChange={(e) => handleInputChange('screeningDetails', 'currentLocation', e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>Job Type:</td>
                <td>
                <input
                    type="text"
                    name="jobType"
                    id="jobType"
                    value={formData.screeningDetails.jobType}
                    onChange={(e) => handleInputChange('screeningDetails', 'jobType', e.target.value)}
                  />
                </td>
              </tr>
              {/* ... (other candidate details fields) */}
            </table>
          )}
        </form>
      </div>

      {/* section 3 */}

      <div className="form-section">
        <form onSubmit={handleFormSubmit}>
          <h4 onClick={() => toggleAccordion("interviewdetails")}>
            {accordionState.interviewdetails
              ? "Interview Details -"
              : "Interview Details +"}
          </h4>
          {accordionState.interviewdetails && (
            <table>
              <tr>
                <td>Interview Schedule:</td>
                <td>
                <input
                    type="text"
                    name="interviewschedule"
                    id="interviewschedule"
                    value={formData.interviewdetails.interviewSchedule}
                    onChange={(e) => handleInputChange('interviewdetails', 'interviewSchedule', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>L1:</td>
                <td>
                <input
                    type="text"
                    name="l1"
                    id="l1"
                    value={formData.interviewdetails.l1}
                    onChange={(e) => handleInputChange('interviewdetails', 'l1', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>L2:</td>
                <td>
                <input
                    type="text"
                    name="l2"
                    id="l2"
                    value={formData.interviewdetails.l2}
                    onChange={(e) => handleInputChange('interviewdetails', 'l2', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>L2:</td>
                <td>
                <input
                    type="text"
                    name="l3"
                    id="l3"
                    value={formData.interviewdetails.l3}
                    onChange={(e) => handleInputChange('interviewdetails', 'l3', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>HR Round:</td>
                <td>
                <input
                    type="text"
                    name="hrround"
                    id="hrround"
                    value={formData.interviewdetails.hrRound}
                    onChange={(e) => handleInputChange('interviewdetails', 'hrRound', e.target.value)}
                  />
                </td>
              </tr>

              {/* ... (other candidate details fields) */}
            </table>
          )}
        </form>
      </div>

      {/* section 4 */}

      <div className="form-section">
        <form onSubmit={handleFormSubmit}>
          <h4 onClick={() => toggleAccordion("status")}>
            {accordionState.status ? "Status -" : "Status +"}
          </h4>
          {accordionState.status && (
            <table>
              <tr>
                <td>Active:</td>
                <td>
                <input
                    type="radio"
                    name="active"
                    id="active"
                    checked={formData.status.active}
                    onChange={() => handleCheckboxChange('status', 'active')}
                  />
                </td>
              </tr>
              <tr>
                <td>In Active</td>
                <td>
                <input
                    type="radio"
                    name="inActive"
                    id="inActive"
                    checked={formData.status.inactive}
                    onChange={() => handleCheckboxChange('status', 'inactive')}
                  />
                </td>
              </tr>
              {/* ... (other candidate details fields) */}
            </table>
          )}
        </form>
      </div>

      {/* section 5 */}

      <div className="form-section">
        <form onSubmit={handleFormSubmit}>
          <h4 onClick={() => toggleAccordion("clientsidedetails")}>
            {accordionState.clientsidedetails
              ? "Client Side Details -"
              : "Client silde Details +"}
          </h4>
          {accordionState.clientsidedetails && (
            <table>
              <tr>
                <td>Mobile Number:</td>
                <td>
                <input
                    type="text"
                    name="clientMobileNumber"
                    id="clientMobileNumber"
                    value={formData.clientsidedetails.clientMobileNumber}
                    onChange={(e) => handleInputChange('clientsidedetails', 'clientMobileNumber', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Email Id:</td>
                <td>
                  <input
                    type="text"
                    name="clientEmailId"
                    id="clientEmailId"
                    value={formData.clientsidedetails.clientEmailId}
                    onChange={(e) => handleInputChange('clientsidedetails', 'clientEmailId', e.target.value)}
                  />
                </td>
              </tr>

              {/* ... (other candidate details fields) */}
            </table>
          )}
        </form>
      </div>
      
      <button  type="submit" onClick={handleFormSubmit}>Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}