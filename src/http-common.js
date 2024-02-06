import axios from "axios";
 
const api = axios.create({
  baseURL: "http://localhost:3043",
  headers: {
    "Content-type": "application/json"
  }
});
 
export const createHr = async (hr) => {
  try {
    const response = await api.post('/littuss/hr/hrregister', hr);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
 
export const getUserByEmail = async (email) => {
  try {
    const response = await api.get(`/littuss/hr/hrregister/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
 
export const loginUser = async (credentials) => {
  try {
    console.log(credentials.email);
    const response = await api.post('/littuss/hr/hrlogin', credentials);
    console.log(response.data);
    // alert("User Login successful");
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
 
export const registerUser = async (hr) => {
  try {
    console.log("hi" + hr);
    const response = await api.post('/littuss/hr/hrregister', hr);
    console.log("end");
    alert("successfully registered");
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};
 
export const loginClient = async (credentials) => {
  try {
    const response = await api.post('/client', credentials);
    console.log(response.data);
    // You can handle the login response as needed
    alert("Client Login successful");
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;  
  }
};
 
export const vendorDetails = async (formData, setSuccessMessage, resetFormFields, setErrorMessage) => {
  try {
    const response = await axios.post(
      "http://localhost:3043/vendorDetails/save/vendorName",
      formData
    );
 
    if (response.status === 200) {
      setSuccessMessage("Data posted successfully!");
      resetFormFields();
    } else {
      setErrorMessage("Failed to post data. Please try again.");
    }
  } catch (error) {
    setErrorMessage(
      "Failed to connect to the server. Please try again later."
    );
  }
};
 
export const client = async (formData, setSuccessMessage, resetFormFields, setErrorMessage) => {
  try {
    const response = await axios.post(
      "http://localhost:3043/client/save",
      formData
    );
 
    if (response.status === 200) {
      setSuccessMessage("Data posted successfully!");
      resetFormFields();
    } else {
      setErrorMessage("Failed to post data. Please try again.");
    }
  } catch (error) {
    setErrorMessage(
      "Failed to connect to the server. Please try again later."
    );
  }
};
 
 


export const itrecruitment = async (formData) => {
  try {
    const response = await api.post("/itrecruitment/savecandidate", formData);

    if (response.status === 200) {
      console.log("Data posted successfully!");
      return response.data; // Return data if needed
    } else {
      throw new Error("Failed to post data. Please try again.");
    }
  } catch (error) {
    console.error("Error posting data:", error.message);
    throw error;
  }
};



export const requirement = async (formData, setSuccessMessage, resetFormFields, setErrorMessage) => {
  try {
    const response = await axios.post(
      "http://localhost:3043//requirement/savetechnology",
      formData
    );
    console.log("hi")
    if (response.status === 200) {
      console.log("hi1");
      setSuccessMessage("Data posted successfully!");
      resetFormFields();
    } else {
      setErrorMessage("Failed to post data. Please try again.");
    }
  } catch (error) {
    setErrorMessage(
      "Failed to connect to the server. Please try again later."
    );
  }
};
 

 
export const ClassDataById = async (id) => {
  try {
    const response = await api.get(`/client/get/${id}`
   
    );
     console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching client data:', error);
    throw error;
  }
};

export const AssetRegister  = async (formData, resetFormFields) => {
  try {
    const response = await api.post("/assets/register", formData);

    if (response.status === 200) {
      console.log("Data posted successfully!");
      return response.data; // Return data if needed
    } else {
      throw new Error("Failed to post data. Please try again.");
    }
  } catch (error) {
    console.error("Error posting data:", error.message);
    throw error;
  }
};
 
export const SecondAssetRegister  = async (formData, resetFormFields) => {
  try {
    const response = await api.post("/assets/floor", formData);

    if (response.status === 200) {
      console.log("Data posted successfully!");
      return response.data; // Return data if needed
    } else {
      throw new Error("Failed to post data. Please try again.");
    }
  } catch (error) {
    console.error("Error posting data:", error.message);
    throw error;
  }
};
 
 