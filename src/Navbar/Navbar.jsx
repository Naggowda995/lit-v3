import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Userinfo from "../Userinfo/Userinfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";


export default function MyNavbar() {
  const [userinfo, setuserinfo]=useState(false)
  const navigate = useNavigate();
  
  function handleHrLap() {
    navigate("/home");
  }

  // function handleFresherManagement() {
  //   navigate("/fresher-management");
  // }

  // function handleExperienceManagement() {
  //   navigate("/experience-management");
  // }
  function handleSearch() {
    navigate("/search");
  }
  function handleEmployee() {
    // Handle navigation or other actions for the "Employee" dropdown
  }
  function handleRegistration() {
    navigate("/registration");
  }

  function handleVendor_registration() {
    navigate("/vendor_registration");
  }

  function handleVendor_Search() {
    navigate("/vendor_search");
  }

  function handleClient_Registration() {
    navigate("/Client_Registration");
  }

  function handleClient_Search() {
    navigate("/client_search");
  }

  function handleClient_Management(){
    navigate("/client_management")
  }

  function handleFinance() {
    // Handle navigation or other actions for the "Finance" dropdown
  }

  function handleInternSearch(){
    navigate("/intern-search");
  }

  function handleInternManagement(){
    navigate("/intern-management");
  }

  function handleFirstFloor() {
    navigate("/firstfloor");

  }
  function handleSecondFloor() {
    navigate("/secondfloor");
  }

  function handleitlap() {
    navigate("/itlap");
  }

  function handleITSearch(){
    navigate("/itsearch");
  }
   
  function handleITManagement(){
    navigate("/itmanagement")
  }
  // const [VendorRegister, setVendorRegister]= useState(false);
  // const redirectToHomePage = () => {
  //   history.push("/home"); // Replace "/" with the path of your home page
  // };

function handleuserinfo(){
  if(userinfo == true){
    setuserinfo(false);
    navigate("/home");
  }
  else{
    setuserinfo(true);
    navigate("/home/Userinfo");
  }
}

  return (
    <>
      <Navbar expand="lg">
        {/* <Navbar.Brand style={{padding: 0,}} onClick={handleHrLap}>
          <img src="image/LIT.jpg" alt="logo" className="img" />
        </Navbar.Brand> */}
        <img src="image/LIT.jpg" alt="logo" className="img" onClick={handleHrLap}/>
        
        
          <Nav className="me-auto">
            <NavDropdown title="HR Lap" id="hr-lap-dropdown">
              <NavDropdown
                title="Vender Lap"
                id="vender-lap-dropdown"
                class="btn-group dropend"
              >
                <NavDropdown.Item ><Link to="/home/Vender_registration">Registration</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to="/home/Vender_Search">Search</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to="/home/Management">Management</Link></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown
                title="Client Lap"
                id="client-lap-dropdown"
                class="btn-group dropend"
              >
               <NavDropdown.Item><Link to="/home/Client_Registration">Regestration</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to="/home/Client_Search">Search</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  ><Link to="/home/Client_Management">Management</Link></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown
                title="Internship Lap"
                id="internship-lap-dropdown"
                class="btn-group dropend"
              >
                <NavDropdown.Item ><Link to="/home/Internship_Register">Registration</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to="/home/Internship_Search">Search</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to="/home/Internship_Management">Management</Link></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

            </NavDropdown>

            <NavDropdown title="Employee Lap" id="employee-lap-dropdown">
              <NavDropdown.Item >
                <Link to="/home/Registration">Registration</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/home/Employee_search">Search</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/home/Employee_Management">Management</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Finance Lap" id="finance-lap-dropdown">
              <NavDropdown.Item href="#">Invoice Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Invoice Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Invoice Management</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Asset Lap" id="asset-lap-dropdown">
              <NavDropdown
                title="Asset Registration"
                id="asset-registration-dropdown"
                class="btn-group dropend"
              >
                <NavDropdown.Item >
                 <Link to="/home/FirstFloor"> 1st Floor Assets</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  <Link to="/home/SecondFloor">2nd Floor Assets</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown
                title="Asset Search"
                id="asset-search-dropdown"
                class="btn-group dropend"
              >
                <NavDropdown.Item>
                <Link to="/home/FirstFloorsearch">1st Floor Assets</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                <Link to="/home/Second_floorsearch">2nd Floor Assets</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown
                title="Asset management"
                id="asset-management-dropdown"
                class="btn-group dropend"
              >
                <NavDropdown.Item >
                  <Link to="/home/First_floor_mng">1st Floor Assets</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  <Link to="/home/Second_floor_mng">2nd Floor Assets</Link>
                </NavDropdown.Item>
              </NavDropdown>
 
              
            </NavDropdown>

            <NavDropdown title="CO-W Lap" id="co-w-lap-dropdown">
              <NavDropdown.Item href="#">Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Management</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown
              title="IT Recruitment Lap"
              id="IT-Recruitment-lap-dropdown"
            >
              <NavDropdown.Item><Link to="/home/ITRegistration">Registration</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/home/ITSearch">Search</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/home/ITManagement">Management</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Requirement" id="Requirement_dropdown">
              <NavDropdown.Item ><Link to= "/home/Add_Requirement">Add Requirement</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/home/Requirement_Search">Search</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/home/Requirement_Management">Management</Link></NavDropdown.Item>
            </NavDropdown>

          </Nav>
        
        <div className="userInfo" onClick={handleuserinfo}>
          {/* <Link to={"/home/Userinfo"}> */}
          <FaUserCircle className="user_icon"/>
          {/* </Link> */}
        </div>
      </Navbar>
    </>
  );
}

