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

import "./Profile.css";

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import { MDBModal, MDBModalBody, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit';


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
  const [cert1, setCert1] = useState("");
  const [cert2, setCert2] = useState("");
  const [videoFile, setvideoFile] = useState("");


  const [country, setCountry] = useState("");
    const [stateprovince, setStateProvince] = useState("");
      const [educationschool, setEducationSchool] = useState("");
        const [educationprogram, setEducationProgram] = useState("");
          const [educationyear, setEducationYear] = useState("");
            const [twitter, setTwitter] = useState("");
              const [facebook, setFacebook] = useState("");
                const [instagram, setInstagram] = useState("");
                  const [website, setWebsite] = useState("");
                    const [bootcampname, setBootCampName] = useState("");
                      const [bootcampprogram, setBootCampProgram] = useState("");
                        const [bootcampyear, setBootCampYear] = useState("");
                          const [skilllang1, setSkilllang1] = useState("");
                            const [skilllang2, setSkilllang2] = useState("");
                              const [skilllang3, setSkilllang3] = useState("");
                                const [skilllang4, setSkilllang4] = useState("");
                                  const [skilllang5, setSkilllang5] = useState("");
                                    const [skilllang6, setSkilllang6] = useState("");
                                      const [skilllang7, setSkilllang7] = useState("");
                                        const [skilllang8, setSkilllang8] = useState("");
                                          const [skilllang9, setSkilllang9] = useState("");
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
        setCert1(response.data.cert1);
        setCert2(response.data.cert2);
        setvideoFile(response.data.videoFile);

        setCountry(response.data.country);
        setStateProvince(response.data.stateprovince);
        setEducationSchool(response.data.educationschool);
        setEducationProgram(response.data.educationprogram);
        setEducationYear(response.data.educationyear);
        setTwitter(response.data.twitter);
        setFacebook(response.data.facebook);
        setInstagram(response.data.instagram);
        setWebsite(response.data.website);
        setBootCampName(response.data.bootcampname);
        setBootCampProgram(response.data.bootcampprogram);
        setBootCampYear(response.data.bootcampyear);
        setSkilllang1(response.data.skilllang1);
        setSkilllang2(response.data.skilllang2);
        setSkilllang3(response.data.skilllang3);
        setSkilllang4(response.data.skilllang4);
        setSkilllang5(response.data.skilllang5);
        setSkilllang6(response.data.skilllang6);
        setSkilllang7(response.data.skilllang7);
        setSkilllang8(response.data.skilllang8);
        setSkilllang9(response.data.skilllang9);


      })
    }, []); 
    // pass an empty array as the second argument to useEffect to run it only once on mount
  




  // Set up state to handle modal visibility
const [isModalOpen, setIsModalOpen] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [isModalOpen3, setIsModalOpen3] = useState(false);
const [selectedImage, setSelectedImage] = useState('');

// Function to handle opening the modal and setting the selected image
const openModal = (image) => {
  setSelectedImage(image);
  setIsModalOpen(true);
};

// Function to handle closing the modal
const closeModal = () => {
  setIsModalOpen(false);
};


  // Function to handle opening the modal and setting the selected image
  const openModal2 = (image) => {
    setSelectedImage(image);
    setIsModalOpen2(true);
  };
  
  // Function to handle closing the modal
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

    // Function to handle opening the modal and setting the selected image
    const openModal3 = (image) => {
      setSelectedImage(image);
      setIsModalOpen3(true);
    };
    
    // Function to handle closing the modal
    const closeModal3 = () => {
      setIsModalOpen3(false);
    };


  return (


<div>
  
<MDBContainer classname="banner" style={{marginTop:'20px',marginBottom:'', height:'40px', width: '100%', display:'flex', justifyContent:'space-between' }}>
<Nav.Link href="/EditVideo" className="editProfileButton" style={{alignSelf:'center'}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="darkblue" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</Nav.Link>
<Nav.Link href="/EditProfile" className="editProfileButton" style={{alignSelf:'center'}}>  
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</Nav.Link>
<Nav.Link href="/UploadProjects" className="editProfileButton" style={{alignSelf:'center'}}>  
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</Nav.Link>
</MDBContainer>



    <div className="gradient-custom-2 py-4" style={{ borderBottom: '1px solid lightgrey', backgroundColor: 'white', display:'flex', justifyContent: 'space-between'}}>

    <div className="porfoliioProjects">
 <MDBContainer className="py-1 h-100" style={{}}>
   <MDBCol className="mb-8" style={{ width: '600px', minHeight: '400px'}}>

   <MDBRow>
   <MDBCol className="mb-2" style={{ minWidth: '100%' }}>
          <div
            className="mt-1 mb-1 img-thumbnail"
            style={{ position: 'relative', width: '600px', height: '400px' }}
            onMouseEnter={() => {
              const videoElement = document.getElementById('videoElement');
              if (videoElement) {
                videoElement.style.display = 'block';
                videoElement.play();
              }
            }}
            onMouseLeave={() => {
              const videoElement = document.getElementById('videoElement');
              if (videoElement) {
                videoElement.style.display = 'none';
                videoElement.pause();
              }
            }}
          >
            <video
              id="videoElement"
              src={`http://localhost:3009/${videoFile}`}
              alt="Project1"
              style={{ display: 'none', width: '100%', height: '100%', objectFit: 'cover' }}
              loop
              muted>
            </video>

              <img
                className="profileImage"
                src={`http://localhost:3009/${image}`}
                alt="Project1"
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = 0;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = 1;
                }}
              />
          </div>
        </MDBCol>


        <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${cert1}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal2(cert1)}
  />
</MDBCol>

<MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${cert2}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal2(cert2)}
  />
</MDBCol>
     
<MDBModal tabIndex="-1" show={isModalOpen2} onHide={closeModal2}>
  <MDBModalDialog className="modal-dialog-centered">
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Cert Description * Cert Links</MDBModalTitle>
        <button type="button" className="btn-close" onClick={closeModal2}></button>
      </MDBModalHeader>
      <MDBModalBody>
        <img
          src={`http://localhost:3009/${selectedImage}`}
          alt="Selected Project"
          className="img-fluid"
        />
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>

             
           </MDBRow>
           

           </MDBCol>

 </MDBContainer>
 </div>




<div className="portfolioProjects2" style={{ height: '620px', overflowX: 'hidden' }}>
  <MDBContainer className="py-0" style={{ backgroundColor: 'transparent' }}>
    <MDBCol className="mb-0" style={{ width: '600px', minHeight: '200px', overflow: 'auto', overflowX: 'hidden' }}>
      <MDBRow style={{ display: 'block' }}>


      <MDBCard style={{background: "white", margin: "20px", border: '1px lightgrey solid', maxWidth:"580px"}}>
  <MDBCardBody>

              <div style={{ fontWeight:'bolder'}}>
              {firstName} {lastName}
              </div>  
              <div>
              {city}, {stateprovince}, {country}
              </div>
              Social Links -    
              {twitter}
              {facebook}
              {instagram}
              {website}

 
  </MDBCardBody> 
  </MDBCard>

  <MDBCard style={{background: "white", margin: "20px", border: '1px lightgrey solid', maxWidth:"580px"}}>
  <MDBCardBody>
              <div style={{ height: 'auto'}}>
              <div style={{ fontWeight:'bolder'}}>Description</div>
              <br></br>
              {summary}
              <br></br>
              </div>
              </MDBCardBody> 
  </MDBCard>

 
              <MDBCard style={{background: "white", margin: "20px", border: '1px lightgrey solid', maxWidth:"580px"}}>
  <MDBCardBody>
              <div>
              <div style={{ fontWeight:'bolder'}}> Skills & Languages</div>
              <br></br>
              {skilllang1}
             <br></br>
              </div>
              </MDBCardBody> 
  </MDBCard>
    
              <MDBCard style={{background: "white", margin: "20px", border: '1px lightgrey solid', maxWidth:"580px"}}>
  <MDBCardBody>
              <div>
              <div style={{ fontWeight:'bolder'}}> Accepted Testing</div>
              <br></br>
              {skilllang1}
             <br></br>
              </div>
              </MDBCardBody> 
  </MDBCard>



              </MDBRow>
             

              </MDBCol>

    </MDBContainer>
    </div>


    <div className="porfoliioProjects3">
    <MDBContainer className="py-0 h-100" style={{backgroundColor:'transparent' }}>
   
   <MDBCol className="mb-1" style={{ width: '600px', minHeight: '500px'}}>

           <MDBRow style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

          



 <div className="project1" style={{display:'flex', width:'650px'}}>

 <div>
<MDBCol className="mb-2" style={{ width:'300px' }}>
  <img
    src={`http://localhost:3009/${project1}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal(project1)}
  />
</MDBCol>
</div>

<div className="project1Description">
<MDBCol className="mb-2" style={{ width:'300px' }}>

<MDBCard style={{background: "none", margin: "0", border: 'none', maxWidth:"300px", maxHeight:"200px"}}>
  <MDBCardBody>

              <div style={{ fontWeight:'bolder'}}>
              Project Title
              </div>  
              <div>
              Description: sasdasdasdasda
              </div>
              <div>
              Stack Used 
              </div>
              <div style={{ fontWeight:'bolder'}}>
              Links
              </div>
              Live link
              <br></br>
              Git Link

 
  </MDBCardBody> 
  </MDBCard>

</MDBCol>

</div>

</div>

<MDBModal tabIndex="-1" show={isModalOpen} onHide={closeModal}>
  <MDBModalDialog className="modal-dialog-centered">
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Project Description * Github/Demo Links</MDBModalTitle>
        <button type="button" className="btn-close" onClick={closeModal}></button>
      </MDBModalHeader>
      <MDBModalBody>
        <img
          src={`http://localhost:3009/${selectedImage}`}
          alt="Selected Project"
          className="img-fluid"
        />
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>

       



        
<div className="project2" style={{display:'flex', width:'650px'}}>


  <div>
<MDBCol className="mb-2" style={{ width:'300px' }}>
  <img
    src={`http://localhost:3009/${project2}`}
    alt="Project2"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal2(project2)}
  />
</MDBCol>
</div>

<div className="project2Description">
<MDBCol className="mb-2" style={{ width:'300px' }}>

<MDBCard style={{background: "none", margin: "0", border: 'none', maxWidth:"300px", maxHeight:"200px"}}>
  <MDBCardBody>

              <div style={{ fontWeight:'bolder'}}>
              Project Title
              </div>  
              <div>
              Description: sasdasdasdasda
              </div>
              <div>
              Stack Used 
              </div>
              <div style={{ fontWeight:'bolder'}}>
              Links
              </div>
              Live link
              <br></br>
              Git Link

 
  </MDBCardBody> 
  </MDBCard>

</MDBCol>

</div>

</div>

<MDBModal tabIndex="-1" show={isModalOpen2} onHide={closeModal2}>
  <MDBModalDialog className="modal-dialog-centered">
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Project Description 2 * Github/Demo Links 2</MDBModalTitle>
        <button type="button" className="btn-close" onClick={closeModal2}></button>
      </MDBModalHeader>
      <MDBModalBody>
        <img
          src={`http://localhost:3009/${selectedImage}`}
          alt="Selected Project2"
          className="img-fluid"
        />
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>





<div className="project3" style={{display:'flex', width:'650px'}}>

  <div>
<MDBCol className="mb-2"  style={{ width:'300px' }}>
  <img
    src={`http://localhost:3009/${project3}`}
    alt="Project3"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal3(project3)}
  />
</MDBCol>
</div>


<div className="project3Description">
<MDBCol className="mb-2" style={{ width:'300px' }}>

<MDBCard style={{background: "none", margin: "0", border: 'none', maxWidth:"300px", maxHeight:"200px"}}>
  <MDBCardBody>

              <div style={{ fontWeight:'bolder'}}>
              Project Title
              </div>  
              <div>
              Description: sasdasdasdasda
              </div>
              <div>
              Stack Used 
              </div>
              <div style={{ fontWeight:'bolder'}}>
              Links
              </div>
              Live link
              <br></br>
              Git Link

 
  </MDBCardBody> 
  </MDBCard>

</MDBCol>

</div>

</div>

<MDBModal tabIndex="-1" show={isModalOpen3} onHide={closeModal3}>
  <MDBModalDialog className="modal-dialog-centered">
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Project Description 3 * Github/Demo Links 3</MDBModalTitle>
        <button type="button" className="btn-close" onClick={closeModal3}></button>
      </MDBModalHeader>
      <MDBModalBody>
        <img
          src={`http://localhost:3009/${selectedImage}`}
          alt="Selected Project3"
          className="img-fluid"
        />
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>


{/* <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${project4}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal(project4)}
  />
</MDBCol><MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${project5}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal(project5)}
  />
</MDBCol><MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${project1}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal(project1)}
  />
</MDBCol> */}
             
           </MDBRow>
         

           </MDBCol>




 </MDBContainer>
 </div>
   
  </div>
</div>


  
);
}

export default Profile;
