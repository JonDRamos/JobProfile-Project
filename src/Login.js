import React, {useState} from "react";
import Axios from "axios";



function Login(){
  //Step 10. Creating the state variables //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");





  const handleLogin = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3009/login', { username, password })
          .then(response => {
            console.log(response.data);//this displays the user info as an object in the console log
            setLoginStatus("LOGIN SUCCESSFUL");//will display this message if log in successful.
          })
          .catch(error => {
            console.error(error);
          });
          
        }

  //Step 11. Below is a copy/paste of a typical login/registration form. No need to reinvent the wheel!//
  return (
    <div className="loginForm">
       <form onSubmit={handleLogin}>
        <h4>Login Here</h4>


        <label>Username:
        <input type={username}  value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>

        <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <br />

        <button type="submit">Log in</button>
    
        <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
  
      </form>
    </div>
);
}

export default Login;