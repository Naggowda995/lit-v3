# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





















































//import Assets from "./Assets/Assets";
import Forget_Password from "./Forget_Password/Forget_Password";
import Home from "./Home/Home";
// import Empdetails from "./Hr management/employee/Empdetails";
import Hr from "./Hr_Home/Hr_Home";
import Client_Registration from "./Hr_lap/Client lap/Regestration/Client_Registration";
import Client_Management from "./Hr_lap/Client lap/clientmanagement/Client_Management";
import Client_Search from "./Hr_lap/Client lap/clientsearch/Client_Search";
import Vender_registration from "./Hr_lap/Vender lap/Registration/Vender_registration";
import Vendor_Search from "./Hr_lap/Vender lap/Search/Vendor_Search";
import Internship_Management from "./Internship_lap/Management_lap/Internship_Management";
import Internship_Search from "./Internship_lap/Search_lap/Internship_Search";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Userinfo from "./Userinfo/Userinfo";

import FirstFloor from "./assets lap/assetregistration/1stfloor/FirstFloor";
import SecondFloor from "./assets lap/assetregistration/2ndfloor/SecondndFloor";
import Registration from "./employee lap/register/Registration";
import ITSearch from "./it_lap/it_lap_Search/ITSearch";
import ITManagement from "./it_lap/it_lap_management/ITManagement";
import ITRegistration from "./it_lap/it_lap_registration/ITRegistration";
import Main from "./main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";


<!-- function App() {
  return (
    // <div className="App">
    //   <Main/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/signUp" element={<Main/>}/>
      <Route path="/home/*" element={<Hr/>}/>
      <Route path="/Forget_Password" element={<Forget_Password/>}/>
      {/* <Route path="/empdetails" element={<Empdetails/>}/> */}
      <Route path="/home/userinfo" element={<Userinfo/>}/>
      <Route path="/registration" element={<Registration/>}/>
     
      <Route path="/firstfloor" element={<FirstFloor/>}/>
      <Route path="/secondfloor" element={<SecondFloor/>}/>
      <Route path="/vendor_registration" element={<Vender_registration/>}/>
      <Route path="/home/hrlap/vendorlap/vendorregister" element={<Home/>}/>
      <Route path="/itlap" element={<ITRegistration/>}/>
      <Route path="/Client_Registration" element={<Client_Registration/>}/>
      <Route path="/search" element={<Vendor_Search/>}/>
      <Route path="/intern-search" element={<Internship_Search/>}/>
      <Route path="/intern-management" element={<Internship_Management/>}/>
      <Route path="/itsearch" element={<ITSearch/>}/>
      <Route path="/itmanagement" element={<ITManagement/>}/>
      <Route path="/client_search" element={<Client_Search/>}/>
      <Route path="/client_management" element={<Client_Management/>}/>

    </Routes>
    </BrowserRouter>
  );
}
export default App; -->
