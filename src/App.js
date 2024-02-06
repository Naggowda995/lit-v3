import Hr from "./Hr_Home/Hr_Home";
import Main from "./main/Main";
import Forget_Password from "./Forget_Password/Forget_Password"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    // <div className="App">
    //   <Main/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signUp" element={<Main/>}/>
        <Route path="/home/*" element={<Hr />} />
        <Route path="/Forget_Password" element={<Forget_Password/>}/>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
