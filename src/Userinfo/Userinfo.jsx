import { useNavigate } from "react-router-dom";
import "./Userinfo.css";
import { useState, useEffect } from "react";

export default function Userinfo(){
    
        const [currentDateTime, setCurrentDateTime] = useState(new Date());
        const navigate= useNavigate();
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
          }, 60000); 

          return () => clearInterval(intervalId);
        }, []);
      
        const formattedDateTime = currentDateTime.toLocaleString(undefined, {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });

        function handlelogout(){
            navigate("/")
        }

    return(
        <div className="container">
            <div className="top">
                <img className="logoimg"src="logo512.png"></img>
                <p>Username</p>
                <p>Email</p>
            
                <p>date and time is {formattedDateTime}</p>
                <p>last logout date and time</p>
                <button onClick={handlelogout}>Logout</button>
            </div>
            
        </div>
    )
}