import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarHead from './NavbarHead';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Jobs from './Jobs';


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


                </Routes>
            </div>
        </Router>
    );
}


export default App;   