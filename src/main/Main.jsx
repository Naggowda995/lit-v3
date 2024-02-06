import Login from "../Login/Login.jsx";
import "./Main.css";
import SignUp from "../SignUp/SignUp.jsx"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Main(){
    const  [showLogin, setShowLogin] = useState(true);
    const navigate= useNavigate();

    const handleSignup=()=>{
        setShowLogin(false);
    };

    const handleLogin = () => {
        setShowLogin(true);
      };
return(
    <div className="Container">
        <div className="LeftContainer">
            <h1 className="LeftContainer_header">L-it Management</h1>
            <img className="logo" src="image/LIT.jpg" alt="Company_logo"/>
            <h2 className="Company_name">L-IT TRUELY SERVICES PVT LTD</h2>
        </div>
        <div className="RightContainer">
            {showLogin ? (
                <Login handleSignup={handleSignup}/>
            ):(
                <SignUp handleLogin={handleLogin}/>
            )}
        </div>
    </div>
)
}
