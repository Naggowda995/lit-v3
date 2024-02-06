import React, { useState } from "react";
import "./Internship_Register.css";
 
export default function Internship_Register() {
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
    InternNomination: false,
    bankDetails: false,
    acknowledgment: false,
  });
  const [name, setName] = useState('');
 
  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
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
            <input type="text" />
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
              <input type="text" name="" id="" />
            </td>
          </tr>
          <tr>    
            <td>Joining Office/Location:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Joining Title(Joining):</td>
            <td><input type="text" name="" id="" /></td>
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
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
        </tr>
        <tr>
            <td>3 Self Photographs (Passport Sized, Colour)</td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
        </tr>
        <tr>
            <td>Letest Curriculum Vitae</td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
        </tr>
        <tr>
            <td>Proof of Identity</td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
        </tr>
        <tr>
            <td>Date of Birth Certificate</td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
        </tr>
   
     
        <tr>
            <td>Education Degree Certificate & Marksheet</td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
        </tr>
        <tr>
            <td>PAN Card / Acknowledgement slip of Form 49</td>
            <td><input type="checkbox" name="" id="" /></td>
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
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Middle Name:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Last Name:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Date Of Birth(DD/MM/YYYY):</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td><input type="checkbox" name="" id="" />Male {'\t'}
            <input type="checkbox" name="" id="" />Female
            </td>
        </tr>
        <tr>
            <td>Father's Name:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Mother's Name:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Marital Status:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Spouse's Name(if applicable):</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Identity Mark:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Blood Group:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Any Other(Allergies):</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Passport NO:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>PAN No:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Adhar No(if available):</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>PF Account No & UAN:</td>
            <td><input type="text" name="" id="" /></td>
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
            <td>Present Address:</td>
            <td>
              <textarea name="presentAddress" id="presentAddress" rows="3" cols="30">
             
              </textarea>
            </td>
          </tr>
          <tr>
            <td>Permanent Address:</td>
            <td>
              <textarea name="permanentAddress" id="permanentAddress" rows="3" cols="30"></textarea>
            </td>
          </tr>
          <tr>
            <td>Mobile Number:</td>
            <td>
              <input type="text" name="mobileNumber" id="mobileNumber" />
            </td>
          </tr>
          <tr>
            <td>Personal Email ID:</td>
            <td>
              <input type="text" name="personalEmail" id="personalEmail" />
            </td>
          </tr>
        </tbody>
          </table>
        )}
      </div>
      {/* Section 6: Dependent Information */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("dependentInfo")}>
          {accordionState.dependentInfo ? "6. Dependent Information -" : "6. Dependent Information +"}
        </h6>
        {accordionState.dependentInfo && (
          <table>
            <tbody>
          <tr>
            <td>Name</td>
            <td>Relationship</td>
            <td>Date Of Birth</td>
          </tr>
          <tr>
            <td>
              <input type="text" name="dependentName1" id="dependentName1" />
            </td>
            <td>
              <input type="text" name="relationship1" id="relationship1" />
            </td>
            <td>
              <input type="text" name="dob1" id="dob1" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="dependentName2" id="dependentName2" />
            </td>
            <td>
              <input type="text" name="relationship2" id="relationship2" />
            </td>
            <td>
              <input type="text" name="dob2" id="dob2" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="dependentName3" id="dependentName3" />
            </td>
            <td>
              <input type="text" name="relationship3" id="relationship3" />
            </td>
            <td>
              <input type="text" name="dob3" id="dob3" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="dependentName4" id="dependentName4" />
            </td>
            <td>
              <input type="text" name="relationship4" id="relationship4" />
            </td>
            <td>
              <input type="text" name="dob4" id="dob4" />
            </td>
          </tr>
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
              <input type="text" name="emergencyContactName1" id="emergencyContactName1" />
            </td>
          </tr>
          <tr>
            <td>Relationship:</td>
            <td>
              <input type="text" name="emergencyContactRelationship1" id="emergencyContactRelationship1" />
            </td>
          </tr>
          <tr>
            <td>Landline No (with STD Code):</td>
            <td>
              <input type="text" name="emergencyContactLandline1" id="emergencyContactLandline1" />
            </td>
          </tr>
          <tr>
            <td>Mobile No:</td>
            <td>
              <input type="text" name="emergencyContactMobile1" id="emergencyContactMobile1" />
            </td>
          </tr>
        </tbody>
          </table>
        )}
      </div>
 
 
{/* Section 8: EmergencyContact2 */}
<div className="form-section">
        <h6 onClick={() => toggleAccordion("emergencyContact2")}>
          {accordionState.emergencyContact2 ? "8. Emergency Contact 1 -" : "8. Emergency Contact 2 +"}
        </h6>
        {accordionState.emergencyContact2 && (
          <table>
           <tbody>
          <tr>
            <td>Name:</td>
            <td><input type="text" name="emergencyContactName2" id="emergencyContactName2" /></td>
          </tr>
          <tr>
            <td>Relationship:</td>
            <td><input type="text" name="emergencyContactRelationship2" id="emergencyContactRelationship2" /></td>
          </tr>
          <tr>
            <td>Landline No (with STD Code):</td>
            <td><input type="text" name="emergencyContactLandline2" id="emergencyContactLandline2" /></td>
          </tr>
          <tr>
            <td>Mobile No:</td>
            <td><input type="text" name="emergencyContactMobile2" id="emergencyContactMobile2" /></td>
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
            <td><input type="text" name="degree1" id="degree1" /></td>
            <td><input type="text" name="university1" id="university1" /></td>
            <td><input type="text" name="marks1" id="marks1" /></td>
            <td><input type="text" name="passingYear1" id="passingYear1" /></td>
          </tr>
          <tr>
            <td><input type="text" name="degree2" id="degree2" /></td>
            <td><input type="text" name="university2" id="university2" /></td>
            <td><input type="text" name="marks2" id="marks2" /></td>
            <td><input type="text" name="passingYear2" id="passingYear2" /></td>
          </tr>
          <tr>
            <td><input type="text" name="degree2" id="degree2" /></td>
            <td><input type="text" name="university2" id="university2" /></td>
            <td><input type="text" name="marks2" id="marks2" /></td>
            <td><input type="text" name="passingYear2" id="passingYear2" /></td>
          </tr>
          <tr>
            <td><input type="text" name="degree2" id="degree2" /></td>
            <td><input type="text" name="university2" id="university2" /></td>
            <td><input type="text" name="marks2" id="marks2" /></td>
            <td><input type="text" name="passingYear2" id="passingYear2" /></td>
          </tr>
        </tbody>
          </table>
        )}
      </div>
 
 
 
 
 
{/* Section 11: Bank Details (For Salary Remittance) */}
<div className="form-section">
        <h6 onClick={() => toggleAccordion("bankDetails")}>
          {accordionState.bankDetails ? "10. Bank Details -" : "10. Bank Details +"}
        </h6>
        {accordionState.bankDetails&& (
          <table>
            <tbody>
          <tr>
            <td>Bank Name:</td>
            <td><input type="text" name="bankName" id="bankName" /></td>
          </tr>
          <tr>
            <td>Bank A/c No:</td>
            <td><input type="text" name="bankAccountNumber" id="bankAccountNumber" /></td>
          </tr>
          <tr>
            <td>Bank Branch:</td>
            <td><input type="text" name="bankBranch" id="bankBranch" /></td>
          </tr>
          <tr>
            <td>IFSC Code:</td>
            <td><input type="text" name="ifscCode" id="ifscCode" /></td>
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
  <input type="text" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
  <p>
    I {name} agree to the terms and conditions stated as above, and I hereby confirm that I will adhere to the policies of the company and discharge my duties to the satisfaction of the higher authorities.
  </p>
</div>
         
        {/* )} */}
        <div className="d-flex justify-content-between">
          <span className="mt-5">Date:{"\t"}{"\t"}</span>{"\t"}{"\t"}{"\t"}
          <span className="mt-5"> Signature:</span>
        </div>
      </div>
 
   
  );
}