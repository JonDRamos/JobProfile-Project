import React, {useState} from "react";
import Axios from "axios";


function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
    const [city, setCity] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");


    const register = (e) => {
      e.preventDefault();
    Axios.post("http://localhost:3001/newuser", {
      email: email,
      username: username,
      password: password,
      city: city,
      title: title,
      summary: summary,
      lastname: lastname,
      firstname: firstname,      
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }

    return (
      <div className="regForm">
      <form>
        <h4>Register Here</h4>

        <label htmlFor="email">Email Address*</label>
        <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your Email Address" required />

        <label htmlFor="username">Username*</label>
        <input className="textInput" type="username" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required />
        <label htmlFor="password">Password*</label>

        <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />

        <input className="button" type="submit" onClick={register} value="Create an account" />
        <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>



        <label htmlFor="firstname">First Name*</label>
        <input className="textInput" type="text" name="firstname" onChange={(e) => {setFirstname(e.target.value)}} placeholder="First Name" required />
        <label htmlFor="lastname">Last Names*</label>
        <input className="textInput" type="text" name="lastname" onChange={(e) => {setLastname(e.target.value)}} placeholder="Last Name" required />
        <label htmlFor="summary">Summary*</label>
        <input className="textInput" type="text" name="summary" onChange={(e) => {setSummary(e.target.value)}} placeholder="Tell us about yourself" required />

        <label htmlFor="city">City*</label>
        <input className="textInput" type="text" name="city" onChange={(e) => {setCity(e.target.value)}} placeholder="Tell us about yourself" required />
        <label htmlFor="title">Title*</label>
        <input className="textInput" type="text" name="title" onChange={(e) => {setTitle(e.target.value)}} placeholder="Tell us about yourself" required />


      </form>
    </div>

);
}

export default Register;
    