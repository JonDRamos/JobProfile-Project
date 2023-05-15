import React from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHead() {
    return (

        <Navbar bg="light" expand="lg" >
          <Container className="NavContainer">
            <div className="NavLogo">
            <Navbar.Brand href="/Home">InTwelv</Navbar.Brand>
            </div>        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="NavLinks">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/Register">Register</Nav.Link>
                <Nav.Link href="/Jobs">Jobs</Nav.Link>
                <Nav.Link href="/Profile">Profile</Nav.Link>
                <Nav.Link href="/EditProfile">Edit Profile</Nav.Link>
                <Nav.Link href="/UploadProjects">Upload Projects</Nav.Link>
  
              </Nav>
            </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      );
    }

export default NavbarHead;
