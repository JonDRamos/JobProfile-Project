import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarHead from './NavbarHead';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Jobs from './Jobs';
import Profile from './Profile';
import EditProfile from './EditProfile';
import UploadProjects from './UploadProjects';
import EditVideo from './EditVideo';
import { useState} from 'react';
import PublicProfile from "./PublicProfile";


import './App.css';



function App() {


    return (

               
        <Router>
            <div className="App">
                <NavbarHead />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="Register" element={<Register/>} />
                    <Route path="Jobs" element={<Jobs/>} />
                    <Route path="Profile" element={<Profile/>} />
                    <Route path="EditProfile" element={<EditProfile/>} />
                    <Route path="UploadProjects" element={<UploadProjects/>} />
                    <Route path="EditVideo" element=
                    {<EditVideo/>} />
                    <Route path="/PublicProfile/:userId" element={<PublicProfile/>} />



                </Routes>

                
            </div>
        </Router>
    );
}


export default App;   