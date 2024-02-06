import React, { useState } from "react";

import "./Registration.css";

export default function Registration() {

  const [accordionState, setAccordionState] = useState({
    fullName: false,
    joiningInfo: false,
    documentChecklist: false,
    personalInfo: false,
    addressInfo: false,
    dependentInfo: false,
    emergencyContact1: false,
    emergencyContact2: false,
    educationDetails: false,
    experienceHistory: false,
    employeeNomination: false,
    bankDetails: false,
    acknowledgment: false,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    joiningInfo: {
      joiningDate: "",
      officeLocation: "",
      joiningTitle: "",
    },
    documentChecklist: {
      signedCopy: false,
      photographs: false,
      curriculumVitae: false,
      proofOfIdentity: false,
      birthCertificate: false,
      resignationLetter: false,
      payslip: false,
      educationCertificate: false,
      panCard: false,
    },
    personalInfo: {
      title: [],
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      gender: [],
      fatherName: "",
      motherName: "",
      maritalStatus: "",
      spouseName: "",
      identityMark: "",
      bloodGroup: "",
      allergies: "",
      passportNumber: "",
      panNumber: "",
      aadharNumber: "",
      pfAccountNumber: "",
      uan: "",
    },
    addressInfo: {
      presentAddress: "",
      permanentAddress: "",
      mobileNumber: "",
      personalEmail: "",
    },
    dependentInfo: {
      dependents: [
        { name: "", relationship: "", dateOfBirth: "" },
        { name: "", relationship: "", dateOfBirth: "" },
        // Add more dependents as needed
      ],
    },
    emergencyContact1: {
      name: "",
      relationship: "",
      landline: "",
      mobile: "",
    },
    emergencyContact2: {
      name: "",
      relationship: "",
      landline: "",
      mobile: "",
    },
    educationDetails: {
      degrees: [
        { degree: "", university: "", marks: "", passingYear: "" },
        { degree: "", university: "", marks: "", passingYear: "" },
        // Add more degrees as needed
      ],
    },
    experienceHistory: {
      experiences: [
        {
          company: "",
          designation: "",
          joiningDate: "",
          resigningDate: "",
          experienceYears: "",
          remarks: "",
        },
        // Add more experiences as needed
      ],
    },
    employeeNomination: {
      nomineeName: "",
      nomineeRelationship: "",
      nomineeAge: "",
      nomineeAddress: "",
      nomineePhoneNumber: "",
    },
    bankDetails: {
      bankName: "",
      bankAccountNumber: "",
      bankBranch: "",
      ifscCode: "",
    },
    acknowledgment: {
      name: "",
    },
  });

  const [experiences, setExperiences] = useState([]);
  const [name, setName] = useState('');
  const [dependentArray, setDependentArray] = useState([]);

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

  const handleSubmit = () => {
    // Perform actions with the form data, e.g., send it to a server
    console.log("Form data submitted:", formData);
  };

  const handleDocumentChecklistChange = (documentType) => {
    setFormData((prevData) => ({
      ...prevData,
      documentChecklist: {
        ...prevData.documentChecklist,
        [documentType]: !prevData.documentChecklist[documentType],
      },
    }));
  };




  const handlePersonalInfoChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [field]: value,
      },
    }));
  };


  const handleAddressInfoChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      addressInfo: {
        ...prevData.addressInfo,
        [field]: value,
      },
    }));
  };

  // Function to handle changes in the Dependent Information section
  const handleDependentInfoChange = (index, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      dependentInfo: {
        ...prevData.dependentInfo,
        dependents: prevData.dependentInfo.dependents.map((dependent, i) =>
          i === index ? { ...dependent, [field]: value } : dependent
        ),
      },
    }));
  };



  const handleEmergencyContact1Change = (field) => (e) => {
    handleInputChange("emergencyContact1", field, e.target.value);
  };

  // Function to handle changes in Emergency Contact 2
  const handleEmergencyContact2Change = (field) => (e) => {
    handleInputChange("emergencyContact2", field, e.target.value);
  };

  // Function to handle changes in Experience History
  const handleExperienceHistoryChange = (field, index, value) => {
    const experiences = [...formData.experienceHistory.experiences];
    experiences[index][field] = value;

    setFormData((prevData) => ({
      ...prevData,
      experienceHistory: {
        ...prevData.experienceHistory,
        experiences,
      },
    }));
  };




  const handleBankDetailsChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      bankDetails: {
        ...prevData.bankDetails,
        [field]: value,
      },
    }));
  };


  return (
    <div className="registration-form">
      <h2>Registration Form</h2>

      {/* Section 1: Full Name */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("fullName")}>
          {accordionState.fullName ? "1. Full Name (as per PAN Card) -" : "1. Full Name (as per PAN Card) +"}
        </h6>
        {accordionState.fullName && (
          <div>
            <input type="text" value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", "value", e.target.value)} />
          </div>
        )}
      </div>

      {/* Section 2: Joining Information */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("joiningInfo")}>
          {accordionState.joiningInfo ? "2. Joining Information -" : "2. Joining Information +"}
        </h6>
        {accordionState.joiningInfo && (
          <table>
            <tr>
              <td>Joining Date(DD/MM/YYYY):</td>
              <td>
                <input
                  type="text"
                  value={formData.joiningInfo.joiningDate}
                  onChange={(e) =>
                    handleInputChange(
                      "joiningInfo",
                      "joiningDate",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Joining Office/Location:</td>
              <td> <input
                type="text"
                value={formData.joiningInfo.joiningOffice}
                onChange={(e) =>
                  handleInputChange(
                    "joiningInfo",
                    "joiningOffice",
                    e.target.value
                  )
                }
              /></td>
            </tr>
            <tr>
              <td>Joining Title(Joining):</td>
              <td> <input
                type="text"
                value={formData.joiningInfo.joiningTitle}
                onChange={(e) =>
                  handleInputChange(
                    "joiningInfo",
                    "joiningTitle",
                    e.target.value
                  )
                }
              /></td>
            </tr>
          </table>
        )}
      </div>

      {/* Section 3: Checklist of Documents to be Submitted on Joining */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("documentChecklist")}>
          {accordionState.documentChecklist ? "3. Checklist of Documents to be Submitted on Joining -" : "3. Checklist of Documents to be Submitted on Joining +"}
        </h6>
        {accordionState.documentChecklist && (
          <table>
            <tr>
              <th>Document</th>
              <td>
                <b>Submitted</b>
              </td>
              <th>OFFICIAL USE ONLY</th>
            </tr>
            <tr>
              <td>Signed Copy of Apponinment Letter</td>
              <td> <input
                type="checkbox"
                checked={formData.documentChecklist.signedCopyOfAppointmentLetter}
                onChange={handleDocumentChecklistChange('signedCopyOfAppointmentLetter')}
              /></td>
              <td><input type="checkbox" name="" id="" /></td>
            </tr>
            <tr>
              <td>3 Self Photographs (Passport Sized, Colour)</td>
              <td><input type="checkbox" checked={formData.documentChecklist.SelfPhotographs}
                onChange={handleDocumentChecklistChange('SelfPhotographs')} /></td>
              <td><input type="checkbox" name="" id="" /></td>
            </tr>
            <tr>
              <td>Latest Curriculum Vitae</td>
              <td><input type="checkbox" checked={formData.documentChecklist.LatestCurricumlumVitae}
                onChange={handleDocumentChecklistChange('LatestCurricumlumVitae')} /></td>
              <td><input type="checkbox" name="" id="" /></td>
            </tr>
            <tr>
              <td>Proof of Identity</td>
              <td><input type="checkbox" checked={formData.documentChecklist.ProofOfIdentity}
                onChange={handleDocumentChecklistChange('ProofOfIdentity')} /></td>
              <td><input type="checkbox" name="" id="" /></td>
            </tr>
            <tr>
              <td>Date of Birth Certificate</td>
              <td><input type="checkbox" checked={formData.documentChecklist.DateofBirthCertificate}
                onChange={handleDocumentChecklistChange('DateofBirthCertificate')} /></td>
              <td><input type="checkbox" name="" id="" /></td>
            </tr>
            <tr>
              <td>Relieving/ Resignation Acceptance Letter</td>
              <td>
                <input
                  type="checkbox"
                  checked={formData.documentChecklist['Relieving / ResignationAcceptanceLetter']}
                  onChange={handleDocumentChecklistChange('Relieving / ResignationAcceptanceLetter')}
                />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Latest Payslip / Salary Certificate</td>
              <td>
                <input
                  type="checkbox"
                  checked={formData.documentChecklist['LatestPayslip / SalaryCertificate']}
                  onChange={handleDocumentChecklistChange('LatestPayslip / SalaryCertificate')}
                />
              </td>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Education Degree Certificate & Marksheet</td>
              <td>
                <input
                  type="checkbox"
                  checked={formData.personalInfo.EducationDegreeCertificateMarksheet}
                  onChange={handlePersonalInfoChange('EducationDegreeCertificateMarksheet')}
                />
              </td>
              <td><input type="checkbox" name="" id="" /></td>
            </tr>
            <tr>
              <td>PAN Card / Acknowledgement slip of Form 49</td>
              <td>
                <input
                  type="checkbox"
                  checked={formData.personalInfo.PANCardAcknowledgementslipofForm49}
                  onChange={handlePersonalInfoChange('PANCardAcknowledgementslipofForm49')}
                />
              </td>
              <td><input type="checkbox" name="" id="" /></td>
            </tr>
            <tr>
              Note:All photocopies to be self certified
            </tr>
          </table>
        )}
      </div>
      
      {/* Section 4: personal Information */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("personalInfo")}>
          {accordionState.personalInfo ? "4. Personal Information -" : "4. Personal Information +"}
        </h6>
        {accordionState.personalInfo && (
          <table>
            <tr>
              <td>Title:</td>
              <td>

                <input type="checkbox" name="" id="" />
                Ms {'\t'}
                <input type="checkbox" name="" id="" />
                Mr {'\t'}
                <input type="checkbox" name="" id="" />
                Mrs {'\t'}
                <input type="checkbox" name="" id="" />
                Dr  {'\t'}

              </td>
            </tr>
            <tr>
              <td>First Name:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.firstName}
                onChange={handlePersonalInfoChange("firstName")}
              /></td>
            </tr>
            <tr>
              <td>Middle Name:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.middleName}
                onChange={handlePersonalInfoChange("middleName")}
              /></td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.lastName}
                onChange={handlePersonalInfoChange("lastName")}
              /></td>
            </tr>
            <tr>
              <td>Date Of Birth(DD/MM/YYYY):</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.dateOfBirth}
                onChange={handlePersonalInfoChange("dateOfBirth")}
              /></td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td><input type="checkbox" name="" id="" />Male {'\t'}
                <input type="checkbox" name="" id="" />Female
              </td>
            </tr>
            <tr>
              <td>Father's Name:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.fatherName}
                onChange={handlePersonalInfoChange("fatherName")}
              /></td>
            </tr>
            <tr>
              <td>Mother's Name:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.motherName}
                onChange={handlePersonalInfoChange("motherName")}
              /></td>
            </tr>
            <tr>
              <td>Marital Status:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.maritalStatus}
                onChange={handlePersonalInfoChange("maritalStatus")}
              /></td>
            </tr>
            <tr>
              <td>Spouse's Name(if applicable):</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.spouseName}
                onChange={handlePersonalInfoChange("spouseName")}
              /></td>
            </tr>
            <tr>
              <td>Identity Mark:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.identityMark}
                onChange={handlePersonalInfoChange("identityMark")}
              /></td>
            </tr>
            <tr>
              <td>Blood Group:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.bloodGroup}
                onChange={handlePersonalInfoChange("bloodGroup")}
              /></td>
            </tr>
            <tr>
              <td>Any Other(Allergies):</td>
              <td> <input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.allergies}
                onChange={handlePersonalInfoChange("allergies")}
              /></td>
            </tr>
            <tr>
              <td>Passport NO:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.passportNumber}
                onChange={handlePersonalInfoChange("passportNumber")}
              /></td>
            </tr>
            <tr>
              <td>PAN No:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.panNumber}
                onChange={handlePersonalInfoChange("panNumber")}
              /></td>
            </tr>
            <tr>
              <td>Adhar No(if available):</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.adharNumber}
                onChange={handlePersonalInfoChange("adharNumber")}
              /></td>
            </tr>
            <tr>
              <td>PF Account No & UAN:</td>
              <td><input
                type="text"
                name=""
                id=""
                value={formData.personalInfo.pfAccountNumber}
                onChange={handlePersonalInfoChange("pfAccountNumber")}
              /></td>
            </tr>
          </table>
        )}
      </div>

      {/* Section 5: AddressInformation */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("addressInfo")}>
          {accordionState.addressInfo ? "5. Address Information -" : "5. Address Information +"}
        </h6>
        {accordionState.addressInfo && (
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Relationship</td>
                <td>Date Of Birth</td>
              </tr>
              {dependentArray.map((dependent, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name={`dependentName${index + 1}`}
                      id={`dependentName${index + 1}`}
                      value={dependent.name}
                      onChange={(e) => handleDependentInfoChange(index, "name", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name={`relationship${index + 1}`}
                      id={`relationship${index + 1}`}
                      value={dependent.relationship}
                      onChange={(e) => handleDependentInfoChange(index, "relationship", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name={`dob${index + 1}`}
                      id={`dob${index + 1}`}
                      value={dependent.dob}
                      onChange={(e) => handleDependentInfoChange(index, "dob", e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>


      {/* Section 7: Emergency Contact Information 1 */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("emergencyContact1")}>
          {accordionState.emergencyContact1 ? "7. Emergency Contact 1 -" : "7. Emergency Contact 1 +"}
        </h6>
        {accordionState.emergencyContact1 && (
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactName1"
                    id="emergencyContactName1"
                    value={formData.emergencyContact1.emergencyContactName1}
                    onChange={handleEmergencyContact1Change(
                      "emergencyContactName1"
                    )}
                  />
                </td>
              </tr>
              <tr>
                <td>Relationship:</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactRelationship1"
                    id="emergencyContactRelationship1"
                    value={
                      formData.emergencyContact1.emergencyContactRelationship1
                    }
                    onChange={handleEmergencyContact1Change(
                      "emergencyContactRelationship1"
                    )}
                  />
                </td>
              </tr>
              <tr>
                <td>Landline No (with STD Code):</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactLandline1"
                    id="emergencyContactLandline1"
                    value={
                      formData.emergencyContact1.emergencyContactLandline1
                    }
                    onChange={handleEmergencyContact1Change(
                      "emergencyContactLandline1"
                    )}
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile No:</td>
                <td>
                  <input
                    type="text"
                    name="emergencyContactMobile1"
                    id="emergencyContactMobile1"
                    value={
                      formData.emergencyContact1.emergencyContactMobile1
                    }
                    onChange={handleEmergencyContact1Change(
                      "emergencyContactMobile1"
                    )}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>


      {/* Section 9: EmergencyContact2 */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("emergencyContact2")}>
          {accordionState.emergencyContact2 ? "8. Emergency Contact 1 -" : "8. Emergency Contact 2 +"}
        </h6>
        {accordionState.emergencyContact2 && (
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td><input
                  type="text"
                  name="emergencyContactName2"
                  id="emergencyContactName2"
                  value={formData.emergencyContact2.emergencyContactName2}
                  onChange={handleEmergencyContact2Change(
                    "emergencyContactName2"
                  )}
                /></td>
              </tr>
              <tr>
                <td>Relationship:</td>
                <td><input
                  type="text"
                  name="emergencyContactRelationship2"
                  id="emergencyContactRelationship2"
                  value={
                    formData.emergencyContact2.emergencyContactRelationship2
                  }
                  onChange={handleEmergencyContact2Change(
                    "emergencyContactRelationship2"
                  )}
                /></td>
              </tr>
              <tr>
                <td>Landline No (with STD Code):</td>
                <td><input
                  type="text"
                  name="emergencyContactLandline2"
                  id="emergencyContactLandline2"
                  value={
                    formData.emergencyContact2.emergencyContactLandline2
                  }
                  onChange={handleEmergencyContact2Change(
                    "emergencyContactLandline2"
                  )}
                /></td>
              </tr>
              <tr>
                <td>Mobile No:</td>
                <td><input
                  type="text"
                  name="emergencyContactMobile2"
                  id="emergencyContactMobile2"
                  value={
                    formData.emergencyContact2.emergencyContactMobile2
                  }
                  onChange={handleEmergencyContact2Change(
                    "emergencyContactMobile2"
                  )}
                /></td>
              </tr>
            </tbody>
          </table>
        )}
      </div>


      {/* Section 9: Education Details */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("educationDetails")}>
          {accordionState.educationDetails ? "9. Education Details -" : "9. Education Details +"}
        </h6>
        {accordionState.educationDetails && (
          <table>
            <tbody>
              <tr>
                <td>Degree</td>
                <td>Name of Board/university</td>
                <td>Marks Obtained(%)</td>
                <td>Passing Year</td>
              </tr>
              {/* Add more rows as needed */}
              <tr>
                <td> <input
                  type="text"
                  name="degree1"
                  id="degree1"
                  value={formData.educationDetails.degree1}
                  onChange={(e) => handleInputChange("educationDetails", "degree1", e.target.value)}
                /></td>
                <td>  <input
                  type="text"
                  name="university1"
                  id="university1"
                  value={formData.educationDetails.university1}
                  onChange={(e) => handleInputChange("educationDetails", "university1", e.target.value)}
                /></td>
                <td> <input
                  type="text"
                  name="marks1"
                  id="marks1"
                  value={formData.educationDetails.marks1}
                  onChange={(e) => handleInputChange("educationDetails", "marks1", e.target.value)}
                /></td>
                <td> <input
                  type="text"
                  name="passingYear1"
                  id="passingYear1"
                  value={formData.educationDetails.passingYear1}
                  onChange={(e) => handleInputChange("educationDetails", "passingYear1", e.target.value)}
                /></td>
              </tr>
              <tr>
                <td><input
                  type="text"
                  name="degree2"
                  id="degree2"
                  value={formData.educationDetails.degree2}
                  onChange={(e) => handleInputChange("educationDetails", "degree2", e.target.value)}
                /></td>
                <td><input
                  type="text"
                  name="university2"
                  id="university2"
                  value={formData.educationDetails.university2}
                  onChange={(e) => handleInputChange("educationDetails", "university2", e.target.value)}
                /></td>
                <td><input
                  type="text"
                  name="marks2"
                  id="marks2"
                  value={formData.educationDetails.marks2}
                  onChange={(e) => handleInputChange("educationDetails", "marks2", e.target.value)}
                /></td>
                <td><input
                  type="text"
                  name="passingYear2"
                  id="passingYear2"
                  value={formData.educationDetails.passingYear2}
                  onChange={(e) => handleInputChange("educationDetails", "passingYear2", e.target.value)}
                /></td>
              </tr>
              <tr>
                <td> <input
                  type="text"
                  name="degree3"
                  id="degree3"
                  value={formData.educationDetails.degree3}
                  onChange={(e) => handleInputChange("educationDetails", "degree3", e.target.value)}
                /></td>
                <td> <input
                  type="text"
                  name="university3"
                  id="university3"
                  value={formData.educationDetails.university3}
                  onChange={(e) => handleInputChange("educationDetails", "university3", e.target.value)}
                /></td>
                <td> <input
                  type="text"
                  name="marks3"
                  id="marks3"
                  value={formData.educationDetails.marks1}
                  onChange={(e) => handleInputChange("educationDetails", "marks3", e.target.value)}
                /></td>
                <td><input
                  type="text"
                  name="passingYear3"
                  id="passingYear3"
                  value={formData.educationDetails.passingYear3}
                  onChange={(e) => handleInputChange("educationDetails", "passingYear3", e.target.value)}
                /></td>
              </tr>
              <tr>
                <td> <input
                  type="text"
                  name="degree4"
                  id="degree4"
                  value={formData.educationDetails.degree4}
                  onChange={(e) => handleInputChange("educationDetails", "degree4", e.target.value)}
                /></td>
                <td> <input
                  type="text"
                  name="university4"
                  id="university4"
                  value={formData.educationDetails.university4}
                  onChange={(e) => handleInputChange("educationDetails", "university4", e.target.value)}
                /></td>
                <td> <input
                  type="text"
                  name="marks4"
                  id="marks4"
                  value={formData.educationDetails.marks4}
                  onChange={(e) => handleInputChange("educationDetails", "marks4", e.target.value)}
                /></td>
                <td><input type="text" name="passingYear4" id="passingYear4" value={formData.educationDetails.passingYear4}
                  onChange={(e) => handleInputChange("educationDetails", "passingYear4", e.target.value)}
                /></td>
              </tr>
            </tbody>
          </table>
        )}
      </div>


      {/* Section 10 :  Experience History */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("experienceHistory")}>
          {accordionState.experienceHistory ? "10. Experience History -" : "10. Experience History +"}
        </h6>
        {accordionState.experienceHistory && (
          <table>
            <tbody>
              <tr>
                <td>Name of the Company</td>
                <td>Designation</td>
                <td>Date of Joining</td>
                <td>Date of Resigning</td>
                <td>Total years of Experience</td>
                <td>Remarks</td>
              </tr>
              {experiences && experiences.length > 0 ? (
                experiences.map((experience, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        name={`company${index + 1}`}
                        id={`company${index + 1}`}
                        value={experience.company}
                        onChange={(e) => handleExperienceHistoryChange('company', index, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name={`designation${index + 1}`}
                        id={`designation${index + 1}`}
                        value={experience.designation}
                        onChange={(e) => handleExperienceHistoryChange('designation', index, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name={`joiningDate${index + 1}`}
                        id={`joiningDate${index + 1}`}
                        value={experience.joiningDate}
                        onChange={(e) => handleExperienceHistoryChange('joiningDate', index, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name={`resigningDate${index + 1}`}
                        id={`resigningDate${index + 1}`}
                        value={experience.resigningDate}
                        onChange={(e) => handleExperienceHistoryChange('resigningDate', index, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name={`experienceYears${index + 1}`}
                        id={`experienceYears${index + 1}`}
                        value={experience.experienceYears}
                        onChange={(e) => handleExperienceHistoryChange('experienceYears', index, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name={`remarks${index + 1}`}
                        id={`remarks${index + 1}`}
                        value={experience.remarks}
                        onChange={(e) => handleExperienceHistoryChange('remarks', index, e.target.value)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No experiences available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Section 12: Bank Details (For Salary Remittance) */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("bankDetails")}>
          {accordionState.bankDetails ? "12. Bank Details -" : "12. Bank Details +"}
        </h6>
        {accordionState.bankDetails && (
          <table>
            <tbody>
              <tr>
                <td>Bank Name:</td>
                <td><input type="text" name="bankName" id="bankName" value={formData.bankDetails.bankName}
                  onChange={(e) => handleBankDetailsChange("bankName", e.target.value)} /></td>
              </tr>
              <tr>
                <td>Bank A/c No:</td>
                <td><input type="text" name="bankAccountNumber" id="bankAccountNumber" value={formData.bankDetails.bankAccountNumber}
                  onChange={(e) => handleBankDetailsChange("bankAccountNumber", e.target.value)} /></td>
              </tr>
              <tr>
                <td>Bank Branch:</td>
                <td> <input type="text" name="bankBranch" id="bankBranch" value={formData.bankDetails.bankBranch} onChange={(e) => handleBankDetailsChange("bankBranch", e.target.value)} /></td>
              </tr>
              <tr>
                <td>IFSC Code:</td>
                <td> <input type="text" name="ifscCode" id="ifscCode" value={formData.bankDetails.ifscCode} onChange={(e) => handleBankDetailsChange("ifscCode", e.target.value)} /></td>
              </tr>
            </tbody>
          </table>
        )}
      </div>


      {/* Continue the same pattern for other sections... */}

      {/* Section 12: Acknowledgment */}
      <div className="form-section">
        {/* <h3 onClick={() => toggleAccordion("acknowledgment")}>
          {accordionState.acknowledgment ? "ACKNOWLEDGMENT -" : "ACKNOWLEDGMENT +"}
        </h3> */}
        {/* {accordionState.acknowledgment && ( */}

        <h5>ACKNOWLEDGMENT</h5>
        <input type="text" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        <p>
          I {name} agree to the terms and conditions stated as above, and I hereby confirm that I will adhere to the policies of the company and discharge my duties to the satisfaction of the higher authorities.
        </p>

      </div>

      {/* )} */}
      <div className="d-flex justify-content-between">
        <span className="mt-5">Date:{"\t"}{"\t"}</span>{"\t"}{"\t"}{"\t"}
        <span className="mt-5">Employee Signature:</span>
      </div>

      <div className="d-flex justify-content-between">
        <button type="reset">Reset</button>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>


  );
}