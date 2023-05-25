/////////////NOTES////////////////////
//SEPERATE CARDS (MAIN CARD WITH IMG, NAME, CITY), (ABOUT), (WORK)/(RESUME)
//CURRENT CARD IS TOO WIDE, LOOK AT LINKEDIN - ITS MUCH MORE NARROW
//SHOULD EMTPY SPACES ON BOTH SIDE OF THE CARD BE UTILIZED? FINE EXAMPLE OF SITES WITH BLANK SPACES
//NEED AN ADIT PROFILE BUTTON
//NEED LOGIN/REGISTER LINKS TO DISPPEAR WHE NLOGGED IN
//project cards need to be smaller, with lickable links
//project area needs to be empty with option to upload project thumbnail with clickable link
//- nearly done! need seperate profile page for jsut viewing. the current one is for the logged in user 
//related profiles at bottom of page in sperate card

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';

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

  
<div>
<MDBContainer classname="banner" style={{height:'200px', maxHeight: '200px', width: '100%'}}>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
  banner image here
</MDBContainer>


    <div className="gradient-custom-2 py-4" style={{ backgroundColor: 'white', display:'flex', justifyContent: 'space-between'}}>

    <div className="porfoliioProjects">
 <MDBContainer className="py-1 h-100" style={{}}>
   <MDBCol className="mb-8" style={{ width: '600px', minHeight: '400px'}}>

           <MDBRow>
           <MDBCol className="mb-2" style={{ minWidth: '100%' }}>
         <MDBCardImage src={`http://localhost:3009/${image}`} alt="Project1" className="mt-1 mb-1 img-thumbnail" fluid style={{ width: '600px', zIndex: '1' }} />
             </MDBCol>

             <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
             <MDBCardImage src={`http://localhost:3009/${project2}`} alt="Project2" className="mt-1 mb-1 img-thumbnail" fluid style={{ width: '300px', zIndex: '1' }} />
             </MDBCol>

             <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
               <MDBCardImage src={`http://localhost:3009/${project3}`} alt="Project3" className="mt-1 mb-1 img-thumbnail" fluid style={{ width: '300px', zIndex: '1' }} />
             </MDBCol>
     
             
           </MDBRow>
           

           </MDBCol>

 </MDBContainer>
 </div>




 <div className="porfoliioProjects2"> 
      <MDBContainer className="py-4 " style={{backgroundColor:'transparent' }}>
   
      <MDBCol className="mb-8" style={{ maxWidth: '500px', minHeight: '200px'}}>
    
              <MDBRow style={{ display: 'block' }}>

              <div style={{ fontWeight:'bolder'}}>
              {firstName} {lastName}
              </div>  
              <div>
              {city}, State, Country
              </div>
              <br></br>
              <div style={{ display: 'block', borderBottom: '1px solid lightgrey', maxWidth: '90%', marginLeft:'5%', marginRight:'5%'}}></div>
              <br></br>
              
              <div>
              Description
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere suscipit libero quis posuere. Suspendisse massa ligula, placerat et erat imperdiet, molestie feugiat magna. Quisque consequat vestibulum viverra. Nulla sagittis ultricies enim. Ut aliquam pretium sem, a pulvinar arcu efficitur sed.
              <br></br> Maecenas eget neque sit amet mauris cursus feugiat. Mauris suscipit porta turpis, id porttitor quam facilisis vitae. Nam mattis leo neque, ac euismod diam gravida ut. 
              <br></br>
              Nam id aliquet augue. Donec malesuada facilisis lectus sed suscipit. Ut eu odio vestibulum, vulputate mi quis, mattis quam.
              <br></br>
              </div>

              <br></br>
              <div style={{ display: 'block', borderBottom: '1px solid lightgrey', maxWidth: '90%', marginLeft:'5%', marginRight:'5%'}}></div>
              <br></br>
              <div>
              Skills & Languages
              <br></br>
              HMTL CSS JavaScript React REST API
              </div>
              <br></br>
              <div style={{ display: 'block', borderBottom: '1px solid lightgrey', maxWidth: '90%', marginLeft:'5%', marginRight:'5%'}}></div>
              <br></br>
              <div>
              Social Links
              <br></br>
              Linkedin twitter Instagram Facebook Website
              </div>
              <br></br>
              <div style={{ display: 'block', borderBottom: '1px solid lightgrey', maxWidth: '90%', marginLeft:'5%', marginRight:'5%'}}></div>


                
              </MDBRow>
             

              </MDBCol>

    </MDBContainer>
    </div>


    <div className="porfoliioProjects3">
    <MDBContainer className="py-0 h-100" style={{backgroundColor:'transparent' }}>
   
   <MDBCol className="mb-1" style={{ width: '600px', minHeight: '500px'}}>

           <MDBRow style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

           <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
         <MDBCardImage src={`http://localhost:3009/${project1}`} alt="Project1" className="mt-1 mb-1 img-thumbnail" fluid style={{ width: '300px', zIndex: '1' }} />
             </MDBCol>

             <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
             <MDBCardImage src={`http://localhost:3009/${project2}`} alt="Project2" className="mt-1 mb-1 img-thumbnail" fluid style={{ width: '300px', zIndex: '1' }} />
             </MDBCol>

             <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
               <MDBCardImage src={`http://localhost:3009/${project3}`} alt="Project3" className="mt-1 mb-1 img-thumbnail" fluid style={{ width: '300px', zIndex: '1' }} />
             </MDBCol>
             <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
             <MDBCardImage src={`http://localhost:3009/${project4}`} alt="Project4" className="mt-1 mb-1 img-thumbnail" fluid style={{ width: '300px', zIndex: '1' }} />
             </MDBCol>
             <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
             <MDBCardImage src={`http://localhost:3009/${project5}`} alt="Project5" className="mt-1 mb-1 img-thumbnail" fluid style={{ width: '300px', zIndex: '1' }} />
             </MDBCol>
             <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
             <MDBCardImage src={`http://localhost:3009/${project5}`} alt="Project5" className="mt-1 mb-1 img-thumbnail" fluid style={{ width: '300px', zIndex: '1' }} />
             </MDBCol>
             
           </MDBRow>
         

           </MDBCol>

 </MDBContainer>
 </div>
   
  </div>
  <div className="asdasd">  <button onClick={handleLogout}>Logout</button>  </div>
  <button><Nav.Link href="/EditProfile">Edit Profile</Nav.Link></button>
</div>


  
);
}

export default Profile;
