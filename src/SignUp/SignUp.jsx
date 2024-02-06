import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import { registerUser} from "../http-common";


export default function SignUp({ handleLogin }) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexPhone = /^[6-9]\d{9}$/;
  const regexName = /^[a-zA-Z]+$/;


  const navigate = useNavigate();

//   const [input, setInput] = useState({
//     First_name: "",
//     Last_name: "",
//     Email: "",
//     Password: "",
//     Mobile_Number: "",
//     gender:"",
//   })

  const [firstname, setfirstName] = useState('');             //firstname
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

//   const handleInputChange = (e) => {
//     e.preventDefault();
//     console.log(e)
//     const { name, value } = e.target;
//     setInput((prevData) => {
//       return { ...prevData, [name]: value };
//     });
//   };


  const handleFirstNameChange = (event) => {
    setfirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  // function SignUp(e) {
  //   e.preventDefault(e);

  //   //APi call

  //   // const existingData = JSON.parse(localStorage.getItem('User_Registration_Data')) || [];  //get existing data
  //   // const dataArray = Array.isArray(existingData) ? existingData : [];
  //   // const newData = [...dataArray, input];     //add new data
  //   // const jsonData = JSON.stringify(newData);     // convert in json

  //   // console.log(jsonData);

  //   if ((!firstname && !lastname && !email && !mobile && !password)) {
  //     return alert("Please Enter all fields");
  //   }
  //   else if (!regexName.test(firstname)) {
  //     return alert("Please enter valid First_Name");
  //   }
  //   else if (!regexName.test(lastname)) {
  //     return alert("Please enter valid Last_Name");
  //   }
  //   else if (!regexEmail.test(email)) {
  //     return alert("Please enter valid email");
  //   }
  //   else if (!regexPassword.test(password)) {
  //     return alert("Please enter valid Password(password must include atleast 1 capital 1 small 1 special symbol and 1 numerical character)");
  //   }
  //   else if (!regexPhone.test(mobile)) {
  //     return alert("Please enter valid Mobile no.");
  //   }
    
  //   // localStorage.setItem('User_Registration_Data', jsonData); //Store in local
  //   // alert('User Registration Successful');


  //   // localStorage.setItem(input, JSON.stringify(input));
  //   navigate("/login");
  // }
  // function Login(e){
  //   e.preventDefault(e);
  //     navigate("/");
  // }

  // function handleGender(value){
  //     setSelectGender(value)
  // }

  // function handleRole(value){
  //   setSelectRole(value)
  // }



  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      // Call API function to register
      // const emaildata= await getUserByEmail({email});
      // console.log(emaildata);

      if ((!firstname && !lastname && !email && !mobile && !password)) {
        return alert("Please Enter all fields");
      }
      else if (!regexName.test(firstname)) {
        return alert("Please enter valid First_Name");
      }
      else if (!regexName.test(lastname)) {
        return alert("Please enter valid Last_Name");
      }
      else if (!regexEmail.test(email)) {
        return alert("Please enter valid email");
      }
      else if (!regexPassword.test(password)) {
        return alert("Please enter valid Password(password must include atleast 1 capital 1 small 1 special symbol and 1 numerical character)");
      }
      else if (!regexPhone.test(mobile)) {
        return alert("Please enter valid Mobile no.");
      }
      // else if(email== emaildata){
      //   return alert("This Email is already Registered.")
      // }
    else{  
      console.log(firstname, lastname, email, mobile, password);
      const user = await registerUser({ firstname, lastname, email, mobile, password });
      console.log(user);

      setfirstName('');
      setLastName('');
      setEmail('');
      setMobile('');
      setPassword('');

      handleLogin();
    }
    } catch (error) {
        console.error('Registration failed:', error.message);
        // Handle registration failure, show error message, etc.
      }
    };
 

  return (
    <div className="Login_page">
      {/* <h1 className="register">Sign Up</h1> */}

      <form className="sign_up_form">
        <h1 className="register">Sign Up</h1>
        <input
          className="inpt"
            type="text"
            value={firstname}
            onChange={handleFirstNameChange}
            placeholder="Enter your name..."
            required
        />

        <input
          className="inpt"
          type="text"
          value={lastname}
          onChange={handleLastNameChange}
          placeholder="Enter your lastname..."
          required
        />
        <input
          className="inpt"
          type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email..."
            required
        />
        <input
          className="inpt"
          type="text"
          value={mobile}
          onChange={handleMobileChange}
          placeholder="Enter your number..."
          required
        />
        <input
          className="inpt"
          type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password..."
            required
        />


      {/* Gender */}
            {/* <div className="inpt">
              <label><b>Gender</b></label>:
              <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleInputChange}
                  checked={input.gender === 'Male'}
                  
              />
              <label>Male</label>
              <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleInputChange}
                  checked={input.gender === 'Female'}
                  
              />
              <label>Female</label>
            </div> */}



        <div className="signup_form_button">
          <button className="btn" onClick={handleRegister}>SignUp</button>
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      </form>



    </div>
  )
}

        
            /* <div className="inpt">
            <label><b>Role</b></label>:
            <input 
                type="checkbox" 
                value="Super Admin"
                checked={selectRole === 'Super Admin'}
                onChange={() => handleRole('Super Admin')}/>SuperAdmin
            <input 
                type="checkbox"
                value="HR"
                checked={selectRole === 'HR'}
                onChange={() => handleRole('HR')}/>HR
            <input 
                type="checkbox"  
                value="Employee"
                checked={selectRole === 'Employee'}
                onChange={() => handleRole('Employee')}/>Employee
            </div> */