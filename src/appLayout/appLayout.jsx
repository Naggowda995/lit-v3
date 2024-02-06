import Client_Management from "../Hr_lap/Client lap/clientmanagement/Client_Management";
import Vender_registration from "../Hr_lap/Vender lap/Registration/Vender_registration";
import { Routes, Route } from "react-router-dom";
import Userinfo from "../Userinfo/Userinfo";
import Vendor_Search from "../Hr_lap/Vender lap/Search/Vendor_Search";
import Management from "../Hr_lap/Vender lap/Management/Vender_management";
import Client_Registration from "../Hr_lap/Client lap/Regestration/Client_Registration";
import Client_Search from "../Hr_lap/Client lap/clientsearch/Client_Search";
import Internship_Register from "../Internship_lap/Register_lap/Internship_Register";
import Internship_Search from "../Internship_lap/Search_lap/Internship_Search";
import Internship_Management from "../Internship_lap/Management_lap/Internship_Management";
import Employee_Management from "../employee lap/management/employeeManagement";
import Employee_search from "../employee lap/search/Search";
import ITRegistration from "../it_lap/it_lap_registration/ITRegistration";
import ITSearch from "../it_lap/it_lap_Search/ITSearch";
import ITManagement from "../it_lap/it_lap_management/ITManagement";
import Add_Requirement from "../Requirement/AddRequirement/Add_Requirement";
import Requirement_Search from "../Requirement/RequirementSearch/Requirement_Search";
import Requirement_Management from "../Requirement/RequirementManagement/Requirement_Management";
import Registration from "../employee lap/register/Registration";
import FirstFloor from "../assets lap/assetregistration/1stfloor/FirstFloor";
import SecondFloor from "../assets lap/assetregistration/2ndfloor/SecondndFloor";
import First_floor_mng from "../assets lap/assetmanagement/1_stfloor/first_floor_mng";
import Second_floor_mng from "../assets lap/assetmanagement/2_ndfloor/Second_floor_mng";
import FirstFloorsearch from "../assets lap/assetsearch/first_floor/First_floor";
import Second_floorsearch from "../assets lap/assetsearch/second_floor/Second_floor";

function AppLayoutr() {
  return (
    <Routes>
      <Route path="Vender_registration" element={<Vender_registration />} />
      <Route path="Userinfo" element={<Userinfo/>}/>
      <Route path="Vender_Search" element={<Vendor_Search/>}/>
      <Route path="Management" element={<Management/>}/>
      <Route path="Client_Registration" element={<Client_Registration/>}/>
      <Route path="Client_Search" element={<Client_Search/>}/>
      <Route path="Client_Management" element={<Client_Management/>}/>
      <Route path="Internship_Register" element={<Internship_Register/>}/>
      <Route path="Internship_Search" element={<Internship_Search/>}/>
      <Route path="Internship_Management" element={<Internship_Management/>}/>
      <Route path="Employee_Management" element={<Employee_Management/>}/>
      <Route path="Employee_search" element={<Employee_search/>}/>
      <Route path="ITRegistration" element={<ITRegistration/>}/>
      <Route path="ITSearch" element={<ITSearch/>}/>
      <Route path="ITManagement" element={<ITManagement/>}/>
      <Route path="Add_Requirement" element={<Add_Requirement/>}/>
      <Route path="Requirement_Search" element={<Requirement_Search/>}/>
      <Route path="Requirement_Management" element={<Requirement_Management/>}/>
      <Route path="Registration" element={<Registration/>}/>
      <Route path="FirstFloor" element={<FirstFloor/>}/>
      <Route path="SecondFloor" element={<SecondFloor/>}/>
      <Route path="First_floor_mng" element={<First_floor_mng/>}/>
      <Route path="Second_floor_mng" element={<Second_floor_mng/>}/>
      <Route path="FirstFloorsearch" element={<FirstFloorsearch/>}/>
      <Route path="Second_floorsearch" element={<Second_floorsearch/>}/>
  
    </Routes>
  );
}

export default AppLayoutr;



   