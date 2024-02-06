// import Empdetails from "../Hr management/employee/Empdetails"
import { useState } from "react"
import "../Hr_Home/Hr_Home.css"
import Navbar from "../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"
//import Vender_registration from "../Hr_lap/Vender lap/Registration/Vender_registration";
import AppLayoutr from "../appLayout/appLayout"

export default function Hr() {
    // const [VendorRegister, setVendorRegister] = useState(false);

    return (
        <div className="home">
            <Navbar/>
            <div className="Home_partition">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="home_screen">
                    <AppLayoutr/>
                </div>
            </div>
        </div>
    )
}