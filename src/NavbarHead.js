import Axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

import "./NavBarHead.css";


function NavbarHead() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {
    // Check user login status
    const checkLoginStatus = () => {
      const loggedIn = sessionStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);




  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    Axios.defaults.headers.common["Authorization"] = null;
    navigate("/Home");
    window.location.reload();
  };


    return (



<Navbar bg="white" expand="lg" className="sticky-top">

  <Container fluid className="NavContainer" style={{height:'100px', display: 'flex', justifyContent: 'space-around'}}>

  <div className="NavLogo">
    <Navbar.Brand href="/Home" style={{ fontSize: '25px', fontFamily: 'TimesNewRoman', fontWeight: 'bold'}}>
   Tech Developer Network
   <br></br>
   Tech Developer Connect
   <br></br>
   Codopp
      </Navbar.Brand>
    </div> 


<div style={{color:"white"}}>
  tezsdkdsdkmzdzddfsddssasd
</div>
{/* the code above is currently use to take up space in the 1/3 column of the container. Will need to properly address this */}
 

 
   



    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <div className="NavLinks"   style={{ display:'flex', alignSelf: 'right'}}>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/Home" style={{fontSize:'22px', fontWeight:'bold'}}>Home</Nav.Link>

          {!isLoggedIn && ( //when logged out, the login and registration links will become available/displayed
                <>
                  <Nav.Link href="/Login">Login</Nav.Link>
                  <Nav.Link href="/Register">Register</Nav.Link>
                </>
                      )}
          <Nav.Link href="/Jobs"  style={{fontSize:'22px', fontWeight:'bold'}}>Jobs</Nav.Link>
    
          {isLoggedIn && (  //when logged in, a icon with drop down menues for profile, edit and logout appear.
                <NavDropdown
                  title={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                  }
                  id="profile-dropdown"
                >
                  <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/EditProfile">Edit Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          </div>
       
        
      </Container>
    </Navbar>

  
  );
}

export default NavbarHead;
