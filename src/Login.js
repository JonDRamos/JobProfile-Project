import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const { sessionStorage } = window;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3009/login", { username, password })
      .then((response) => {
        console.log(response.data);
        const { token } = response.data;
        sessionStorage.setItem("token", token);

        // decode the token to get the userId
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.userId;
        sessionStorage.setItem("userId", userId);

        sessionStorage.setItem("isLoggedIn", true);
        navigate("/profile");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
