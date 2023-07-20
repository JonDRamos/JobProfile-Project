

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

////////// SOCIAL MEDIA ICON UPLOADS /////////////
import tiktok from '../src/images/tiktok.png';
import youtube from '../src/images/youtube.png';
import twitter from '../src/images/twitter.png';
import facebook from '../src/images/facebook.png';
import instagram from '../src/images/instagram.png';
import portfoliowebsite from '../src/images/portfoliowebsite.png';


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

  const [videoFile, setvideoFile] = useState("");
  const [currentposition, setCurrentPosition] = useState("");
  const [currentemployer, setCurrentEmployer] = useState("");
  const [country, setCountry] = useState("");
  const [stateprovince, setStateProvince] = useState("");


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

        setvideoFile(response.data.videoFile);

        setCountry(response.data.country);
        setStateProvince(response.data.stateprovince);


        setCurrentPosition(response.data.current_position);
        setCurrentEmployer(response.data.current_employer);
          

      })
    }, []); 
    // pass an empty array as the second argument to useEffect to run it only once on mount
  

    ///////////////////////  DEGREE / CERTIFICACTION 1  //////////////////////////////////////////
    const [cert1, setCert1] = useState("");
    const [degree1, setDegree1] = useState("");
    const [link1, setLink1] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
  
    Axios.get(`http://localhost:3009/cert1/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response.data);
      setCert1(response.data.cert1); // Update the cert1 state with the received value
      setDegree1(response.data.certification1);
      setLink1(response.data.certification1link);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

///////////////////////  DEGREE / CERTIFICACTION 2  //////////////////////////////////////////
      const [cert2, setCert2] = useState("");
      const [degree2, setDegree2] = useState("");
      const [link2, setLink2] = useState("");

    useEffect(() => {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");
    
      Axios.get(`http://localhost:3009/cert2/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setCert2(response.data.cert2); // Update the cert1 state with the received value
        setDegree2(response.data.certification2);
        setLink2(response.data.certification2link);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);


  // Set up state to handle modal visibility
const [isModalOpen, setIsModalOpen] = useState(false);
const [isModalOpen1, setIsModalOpen1] = useState(false);
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
  const openModal1 = (image) => {
    setSelectedImage(image);
    setIsModalOpen1(true);
  };

  const openModal2 = (image) => {
    setSelectedImage(image);
    setIsModalOpen2(true);
  };
  
  // Function to handle closing the modal
  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

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


/////////////////////////    SKILLS .GET REQUEST  ///////////////////////////
    const [selectedValuesSkills, setselectedValuesSkills] = useState({ skills: [] });

    useEffect(() => {
      const token = sessionStorage.getItem('token');
      const userId = sessionStorage.getItem('userId');
  
      // Fetch the skills data and update the selectedValuesSkills
      Axios.get(`http://localhost:3009/skills/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          const skillsData = response.data;
          setselectedValuesSkills((prevselectedValuesSkills) => ({
            ...prevselectedValuesSkills,
            skills: skillsData,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  ///////////////////////////////////////// .GET PROFILE (SOCIAL MEDIA) /////////////////////////////////////////
  const [socialMediaEntries, setSocialMediaEntries] = useState([
    { media_type: '', text_value: '' },
    { media_type: '', text_value: '' },
    { media_type: '', text_value: '' },
    { media_type: 'PortfolioWebsite', text_value: '' },
  ]);



  const mediaTypeImages = {
    twitter: twitter,
    facebook: facebook,
    instagram: instagram,
    tiktok: tiktok,
    youtube: youtube,
    portfoliowebsite:portfoliowebsite
    
  };
  

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
  
    Axios.get(`http://localhost:3009/socialmedia/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        const socialMediaData = response.data;
        // Process the social media data as needed
        // For example, you can set it to a state variable
        setSocialMediaEntries(socialMediaData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  



/////////////////////////    TESTING .GET REQUEST  ///////////////////////////
const [selectedValuesTests, setselectedValuesTests] = useState({testingAccepted: []});

useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

Axios.get(`http://localhost:3009/testing/${userId}`, {
  headers: { Authorization: `Bearer ${token}` },
})
  .then((response) => {
    const testingData = response.data;
    setselectedValuesTests((prevselectedValuesTests) => ({
      ...prevselectedValuesTests,
      testingAccepted: testingData,
    }));
  })
  .catch((error) => {
    console.log(error);
  });
}, []);



/////////////////////////    EDUCATION .GET REQUEST  ///////////////////////////
const [schoolname, setSchoolName] = useState("");
const [schoolyear, setSchoolYear] = useState("");
const [schoolprogram, setSchoolProgram] = useState("");


useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  Axios.get(`http://localhost:3009/education/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },

  })
    .then((response) => {
      console.log(response.data);
 
      setSchoolName(response.data.schoolname);
      setSchoolYear(response.data.schoolyear);
      setSchoolProgram(response.data.schoolprogram);

    })
  }, []);

/////////////////////////    BOOTCAMP .GET REQUEST  ///////////////////////////
const [bootcampname, setBootCampName] = useState("");
const [bootcampprogram, setBootCampProgram] = useState("");
  const [bootcampyear, setBootCampYear] = useState("");


useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  Axios.get(`http://localhost:3009/bootcamp/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },

  })
    .then((response) => {
      console.log(response.data);
 
      setBootCampName(response.data.bootcampname);
      setBootCampProgram(response.data.bootcampprogram);
      setBootCampYear(response.data.bootcampyear);

    })
  }, []);

  const truncatedSummary = summary.length > 500 ? `${summary.substring(0, 500)}...` : summary;


 //////////////////////////////////Project 1///////////////////////////////// 

 
 const [project1title, setTitle_project1] = useState("");
 const [project1gitlink, setGitlink_project1] = useState("");
 const [project1demolink, setDemolink_project1] = useState("");
 const [project1description, setDescription_project1] = useState("");
 const [project1thumbnail, setThumbnail_project1] = useState("");
 const [selectedValuesSkills1, setSelectedValuesSkills1] = useState({ skills: [] });
 
 useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  Axios.get(`http://localhost:3009/project1API/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((response) => {
    console.log(response.data);
    setTitle_project1(response.data.project1title);
    setGitlink_project1(response.data.project1gitlink);
    setDemolink_project1(response.data.project1demolink);
    setDescription_project1(response.data.project1description);
    setThumbnail_project1(response.data.project1thumbnail);
  })
// these white variables are wahts connected to the backend, so should be the same name as the table column names.
  .catch((error) => {
    console.log(error);
  });
}, []);

useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  Axios.get(`http://localhost:3009/project1skills/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => {
      const skillsData = response.data;
      setSelectedValuesSkills1((prevselectedValuesSkills1) => ({
        ...prevselectedValuesSkills1,
        skills: skillsData,
      }));
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

}

export default Profile;
