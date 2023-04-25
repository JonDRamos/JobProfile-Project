  import React, { useState, useEffect } from "react";
  import Axios from "axios";
  import { useNavigate } from "react-router-dom";

  const { sessionStorage } = window;

  function Profile() {
    const [city, setCity] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");
      Axios.get(`http://localhost:3009/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          setCity(response.data.city);
          setFirstName(response.data.firstname);
          setLastName(response.data.lastname);
        })
        .catch((error) => console.error(error));
    }, []);
    
    const handleLogout = () => {
      sessionStorage.removeItem("isLoggedIn");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userId");
      Axios.defaults.headers.common["Authorization"] = null;
      navigate("/login");
      
    };

    return (
      <div>
        <h1>Welcome to your profile!</h1>
        <p>City: {city}</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  export default Profile;
