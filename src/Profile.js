/////////////NOTES////////////////////
//SEPERATE CARDS (MAIN CARD WITH IMG, NAME, CITY), (ABOUT), (WORK)/(RESUME)
//CURRENT CARD IS TOO WIDE, LOOK AT LINKEDIN - ITS MUCH MORE NARROW
//SHOULD EMTPY SPACES ON BOTH SIDE OF THE CARD BE UTILIZED? FINE EXAMPLE OF SITES WITH BLANK SPACES
//NEED AN ADIT PROFILE BUTTON
//NEED LOGIN/REGISTER LINKS TO DISPPEAR WHE NLOGGED IN
//project cards need to be smaller, with lickable links
//project area needs to be empty with option to upload project thumbnail with clickable link
//need seperate profile page for jsut viewing. the current one is for the logged in user

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

const { sessionStorage } = window;

function Profile(props) {
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [project1, setproject1] = useState("");
  const [project2, setproject2] = useState("");
  const [project3, setproject3] = useState("");
  const [project4, setproject4] = useState("");
  const [project5, setproject5] = useState("");
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
        setSummary(response.data.summary);
        setImage(response.data.imageFile);
        setproject1(response.data.project1);
        setproject2(response.data.project2);
        setproject3(response.data.project3);
        setproject4(response.data.project4);
        setproject5(response.data.project5);

      })
    }, []); 
    // pass an empty array as the second argument to useEffect to run it only once on mount
  


  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    Axios.defaults.headers.common["Authorization"] = null;
    navigate("/login");
  };


  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="" xl="12">
          <MDBCard>
            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#0009', height: '200px' }}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <MDBCardImage src={`http://localhost:3009/${image}`} alt="Profile" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                  Edit profile
                </MDBBtn>
              </div>
              <div className="ms-3" style={{ marginTop: '130px' }}>
                <MDBTypography tag="h5"> {firstName} {lastName}</MDBTypography>
                <MDBCardText>City: {city}</MDBCardText>
              </div>
            </div>
            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <MDBCardText className="mb-1 h5">253</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                </div>
                <div className="px-3">
                  <MDBCardText className="mb-1 h5">1026</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                </div>
                <div>
                  <MDBCardText className="mb-1 h5">478</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                </div>
              </div>
            </div>


            <MDBCardBody className="text-black p-4">
            <div className="row">
    <div className="col-md-9 mb-5">
      <p className="lead fw-normal mb-1">About</p>
      <div className="p-4" style={{ backgroundColor: '#0038' }}>
        <MDBCardText className="font-italic mb-1"> Summary {summary}</MDBCardText>
        <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
        <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
      </div>
    </div>

    <div className="col-md-3 d-flex flex-column">
      <h6 className="fw-bold mb-3">Links</h6>
      <ul className="list-unstyled mb-0">
        <li><a href="https://example.com" target="_blank">Official Website</a></li>
        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
      </ul>
    </div>
  </div>


              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
              </div>
              <MDBRow>

                <MDBCol className="mb-2">
                <MDBCardImage src={`http://localhost:3009/${project1}`} alt="Project1" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>

                <MDBCol className="mb-3">
                <MDBCardImage src={`http://localhost:3009/${project2}`} alt="Project2" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>

                <MDBCol className="mb-2">
                <MDBCardImage src={`http://localhost:3009/${project3}`} alt="Project3" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>
                <MDBCol className="mb-2">
                <MDBCardImage src={`http://localhost:3009/${project4}`} alt="Project4" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>
                <MDBCol className="mb-2">
                <MDBCardImage src={`http://localhost:3009/${project5}`} alt="Project5" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>

              </MDBRow>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <button onClick={handleLogout}>Logout</button>
  </div>

  
);
}

export default Profile;
