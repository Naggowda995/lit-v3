import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../http-common";
//import Forget_Password from "../Forget_Password/Forget_Password";
// import Hr from "../Hr_Home/Hr_Home";
export default function Login({ handleSignup }) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    // function signUp(e) {
    //     e.preventDefault();
    //     navigate("/signUp");
    // }


    async function login(e) {
        e.preventDefault();

        try {
            if (!emailRegex.test(email)) {
                alert("enter valid Email id")
            }
            else if (!PasswordRegex.test(password)) {
                alert("enter valid password");
            }
            else {
                const user = await loginUser({ email, password });
                console.log("get data", user);
                if (user === "Login failed") {
                    alert("Please Enter correct detail")
                }
                else if (user === "Login successful") {
                    alert("Login Successful");
                    setEmail('');
                    setPassword('');
                    navigate("/home");
                }
                else {
                    //   setEmail('');
                    //   setPassword('');
                    //   navigate("/home");
                    alert("user not found");
                }
            }
        }
        catch (error) {
            console.error('Login failed:', error.message);
        }

    }

    return (
        <div className="Login_page">
            <button className="Signup_btn" onClick={() => {
                handleSignup();
                navigate("/signUp");
            }}>SignUp</button>
            <h1 className="form_header">Login</h1>
            <form className="form" >
                <div className="email">
                    <input
                        className="user_value_email"
                        type="email"
                        placeholder="Enter email"
                        name="username"

                        value={email}
                        onChange={handleEmail}></input>
                    {/* <label className="domain">@littuss.com</label> */}
                </div><br />
                <input
                    className="user_value_password"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={handlePassword}></input><br />
                <p className="reset_password"><Link to="/Forget_Password"><b>Forget Password?</b></Link></p>
                <input
                    className="user_value"
                    type="submit"
                    value="Login"
                    onClick={login}></input>
            </form>
        </div>

    )
}
