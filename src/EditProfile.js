import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import Select from 'react-select';

////////// SOCIAL MEDIA ICON UPLOADS /////////////
import tiktok from '../src/images/tiktok.png';
import youtube from '../src/images/youtube.png';
import twitter from '../src/images/twitter.png';
import facebook from '../src/images/facebook.png';
import instagram from '../src/images/instagram.png';
import portfoliowebsite from '../src/images/portfoliowebsite.png';



////////// SKILLS & LANGUAGES ICON UPLOADS/////////////
import  anaconda  from '../src/images/skills & languages/anaconda.png';
import  androidstudio  from '../src/images/skills & languages/androidstudio.png';
import  angularjs  from '../src/images/skills & languages/angularjs.png';
import  ansible  from '../src/images/skills & languages/ansible.png';
import  apollo  from '../src/images/skills & languages/apollo.png';
import  balenaetcher  from '../src/images/skills & languages/balenaetcher.png';
import  c  from '../src/images/skills & languages/c.png';
import  cplusplus  from '../src/images/skills & languages/cplusplus.png';
import  clouddevelopment  from '../src/images/skills & languages/clouddevelopment.png';
import  codeblocks  from '../src/images/skills & languages/codeblocks.png';
import  csharp  from '../src/images/skills & languages/csharp.png';
import  css3  from '../src/images/skills & languages/css3.png';
import  drupal  from '../src/images/skills & languages/drupal.png';
import  fedora  from '../src/images/skills & languages/fedora.png';
import  flask  from '../src/images/skills & languages/flask.png';
import  flutter  from '../src/images/skills & languages/flutter.png';
import  forrst  from '../src/images/skills & languages/forrst.png';
import  gatsbyjs  from '../src/images/skills & languages/gatsbyjs.png';
import  graphql  from '../src/images/skills & languages/graphql.png';
import  html5  from '../src/images/skills & languages/html5.png';
import  icue  from '../src/images/skills & languages/icue.png';
import  intellijidea  from '../src/images/skills & languages/intellijidea.png';
import  javascript  from '../src/images/skills & languages/javascript.png';
import  jupyter  from '../src/images/skills & languages/jupyter.png';
import  linuxserver  from '../src/images/skills & languages/linuxserver.png';
import  mariadb  from '../src/images/skills & languages/mariadb.png';
import  microsoftvisio2019  from '../src/images/skills & languages/microsoftvisio2019.png';
import  opencv  from '../src/images/skills & languages/opencv.png';
import  php  from '../src/images/skills & languages/php.png';
import  prometheus  from '../src/images/skills & languages/prometheus.png';
import  pullrequest  from '../src/images/skills & languages/pullrequest.png';
import  rproject  from '../src/images/skills & languages/rproject.png';
import  ruby  from '../src/images/skills & languages/ruby.png';
import  sourcecode  from '../src/images/skills & languages/sourcecode.png';
import  spyder  from '../src/images/skills & languages/spyder.png';
import  spyderide5  from '../src/images/skills & languages/spyderide5.png';
import  swift  from '../src/images/skills & languages/swift.png';
import  swiftui  from '../src/images/skills & languages/swiftui.png';
import  terraform  from '../src/images/skills & languages/terraform.png';
import  typescript  from '../src/images/skills & languages/typescript.png';
import  undp  from '../src/images/skills & languages/undp.png';
import  visualstudio  from '../src/images/skills & languages/visualstudio.png';
import sourcetree from '../src/images/skills & languages/sourcetree.png';





const { sessionStorage } = window;

function EditProfile(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [summary, setSummary] = useState("");
  const [country, setCountry] = useState("");
  const [stateprovince, setStateProvince] = useState("");

  const [currentposition, setCurrentPosition] = useState("");
  const [currentemployer, setCurrentEmployer] = useState("");

  const [schoolname, setSchoolName] = useState("");
  const [schoolyear, setSchoolYear] = useState("");
  const [schoolprogram, setSchoolProgram] = useState("");

  const [bootcampname, setBootCampName] = useState("");
  const [bootcampprogram, setBootCampProgram] = useState("");
  const [bootcampyear, setBootCampYear] = useState("");

  const [selectedValuesSkills, setselectedValuesSkills] = useState({ skills: []});

  const [selectedValuesTests, setselectedValuesTests] = useState({testingAccepted: []}); 




  

  // const [socialMedia, setSocialMedia] = useState({ socialMedia: []}); 



  // const [databaseValues, setDatabaseValues] = useState(null); // Added state variable



 
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    Axios.get(`http://localhost:3009/profile/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log(response.data);
      setFirstName(response.data.firstname);
      setLastName(response.data.lastname);
      setCity(response.data.city);
      setSummary(response.data.summary);

      setCountry(response.data.country);
      setStateProvince(response.data.stateprovince);

      setCurrentPosition(response.data.current_position);
      setCurrentEmployer(response.data.current_employer);
         });
  }, []);



///////////////////////////////////////// .GET PROFILE (EDUCATION) /////////////////////////////////////////

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
  
    Axios.get(`http://localhost:3009/education/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log(response.data);
  
      setSchoolName(response.data.schoolname);
      setSchoolYear(response.data.schoolyear);
      setSchoolProgram(response.data.schoolprogram);
  
         });
  }, []);

  ///////////////////////////////////////// .GET PROFILE (BOOTCAMP) /////////////////////////////////////////

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
  
    Axios.get(`http://localhost:3009/bootcamp/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log(response.data);
  
      setBootCampName(response.data.bootcampname);
      setBootCampProgram(response.data.bootcampprogram);
      setBootCampYear(response.data.bootcampyear);
  
         });
  }, []);




///////////////////////////////////////// .GET PROFILE (SKILLS) /////////////////////////////////////////
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

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

  const skillIcons = {
    anaconda :  anaconda ,
    androidstudio :  androidstudio ,
    angularjs :  angularjs ,
    ansible :  ansible ,
    apollo :  apollo ,
    balenaetcher :  balenaetcher ,
    'c++' :  cplusplus ,
    clouddevelopment :  clouddevelopment ,
    codeblocks :  codeblocks ,
    cplusplus:  cplusplus,
    csharp :  csharp ,
    css3 :  css3 ,
    drupal :  drupal ,
    fedora :  fedora ,
    flask :  flask ,
    flutter :  flutter ,
    forrst :  forrst ,
    gatsbyjs :  gatsbyjs ,
    graphql :  graphql ,
    html5 :  html5 ,
    icue :  icue ,
    intellijidea :  intellijidea ,
    javascript :  javascript ,
    jupyter :  jupyter ,
    linuxserver :  linuxserver ,
    mariadb :  mariadb ,
    microsoftvisio2019 :  microsoftvisio2019 ,
    opencv :  opencv ,
    php :  php ,
    prometheus :  prometheus ,
    pullrequest :  pullrequest ,
    rproject :  rproject ,
    ruby :  ruby ,
    sourcecode :  sourcecode ,
    spyder :  spyder ,
    spyderide5 :  spyderide5 ,
    swift :  swift ,
    swiftui :  swiftui ,
    terraform :  terraform ,
    typescript :  typescript ,
    undp :  undp ,
    visualstudio :  visualstudio ,
    sourcetree: sourcetree
   
   
  };


  ///////////////////////////////////////// .GET PROFILE (TESTING) /////////////////////////////////////////
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

  
  ///////////////////////////////////// .GET PROFILE (SOCIAL) /////////////////////////////////////////
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

  const mediaTypeImages = {
    twitter: twitter,
    facebook: facebook,
    instagram: instagram,
    tiktok: tiktok,
    youtube: youtube,
    portfoliowebsite:portfoliowebsite
    
  };
  
  const [socialMediaEntries, setSocialMediaEntries] = useState([
    { media_type: '', text_value: '' },
    { media_type: '', text_value: '' },
    { media_type: '', text_value: '' },
    { media_type: 'PortfolioWebsite', text_value: '' },
  ]);
  
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEntries = [...socialMediaEntries];
    updatedEntries[index][name] = value;
    setSocialMediaEntries(updatedEntries);
  };
  

  
const handleEditProfile = (e) => {
  e.preventDefault();
  console.log("handleEditProfile called");
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");


    const formData = new FormData();

    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("city", city);
    formData.append("summary", summary);

    formData.append("country", country);
    formData.append("stateprovince", stateprovince);


    formData.append("currentemployer", currentemployer);
    formData.append("currentposition", currentposition);


    formData.append("bootcampname", bootcampname);
    formData.append("bootcampprogram", bootcampprogram);
    formData.append("bootcampyear", bootcampyear);


    formData.append("schoolname", schoolname);
    formData.append("schoolyear", schoolyear);
    formData.append("schoolprogram", schoolprogram);

    socialMediaEntries.forEach((entry, index) => {
      formData.append(`socialMediaEntries[${index}][media_type]`, entry.media_type);
      formData.append(`socialMediaEntries[${index}][text_value]`, entry.text_value);
    });

    // formData.append('textValue', textValue);

    selectedValuesSkills.skills.forEach((skill) => {
      formData.append("skills[]", skill);
    });

    selectedValuesTests.testingAccepted.forEach((tests) => {
      formData.append("testingAccepted[]", tests);
    });


    // directly sending the schoolData array as JSON in the schools field of the form data. //
    formData.append("schools", JSON.stringify(schoolData));

    
    
    Axios.put(`http://localhost:3009/profile/${userId}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response.data);
        // navigate("/profile");
      })
      .catch((error) => {
        console.log("error - value already exists");
      });
  };






  

  const handleCancel = () => {
    navigate("/profile");
  };








  ///////////////////////    EDUCATION    ///////////////////////////

  const [schoolData, setSchoolData] = useState([
    { name: '', program: '', year: '' },
  ]);
  const [showInputFields, setShowInputFields] = useState(false);


  const handleSchoolChange = (index, field, value) => {
    setSchoolData((prevSchoolData) => {
      const updatedSchoolData = [...prevSchoolData];
      const updatedSchool = { ...updatedSchoolData[index], [field]: value };
      updatedSchoolData[index] = updatedSchool;
      return updatedSchoolData;
    });
  };

  const handleAddSchool = () => {
    setSchoolData((prevSchoolData) => [
      ...prevSchoolData,
      { name: "", year: "", program: "" }
    ]);
    setShowInputFields(true);
  };

  const handleRemoveSchool = (index) => {
    const updatedSchoolData = [...schoolData];
    updatedSchoolData.splice(index, 1);
    setSchoolData(updatedSchoolData);
  };


  /////////////////////////////////////////////////////////////////

  return (
    <>
    <MDBContainer style={{}}>
      <MDBRow className="justify-content-center mt-5">
        <MDBCol md="">
          <MDBCard style={{border:'none'}}>
            <MDBCardBody>
            <MDBTypography variant="h3" className="text-center mb-5 mt-5" style={{borderBottom:'lightGrey solid 1px', padding:'10px'}}>
        Edit Profile Basics
      </MDBTypography>
             
              <form id="edit" onSubmit={handleEditProfile}>

                <div className="form-group" style={{display:'flex'}}>



<div style={{width:'650px', margin:'10px'}}>
<MDBCard  style={{margin:'5px', border:'none'}}>

<h5 style={{fontWeight:'bold'}}>Basic Info</h5>


                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />

                  <label htmlFor="stateprovince">State/Province/Territory:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stateprovince"
                    value={stateprovince}
                    onChange={(e) => setStateProvince(e.target.value)}
                    required
                  />


                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />


                  <label htmlFor="summary">About: </label>
                  <textarea
                    style={{ height: '150px' }}
                    type="text"
                    className="form-control"
                    id="summary"
                    value={summary}
                    onChange={(e) => {
                      if (e.target.value.length <= 500) {
                        setSummary(e.target.value);
                      }
                    }}
                    maxLength={500}
                    required
                  />
</MDBCard>

<MDBCard  style={{margin:'5px', border:'none'}}>

<h5 style={{fontWeight:'bold', marginTop:'20px'}}>Current Employment</h5>

                  <label htmlFor="currentposition"> Current Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="currentposition"
                    value={currentposition}
                    onChange={(e) => setCurrentPosition(e.target.value)}
                    
                  />
                  <label htmlFor="currentemployer">Current Employer</label>
                  <input
                    type="text"
                    className="form-control"
                    id="currentemployer"
                    value={currentemployer}
                    onChange={(e) => setCurrentEmployer(e.target.value)}
                    
                  />
                  <br></br>
 <h7>"upload resume here"</h7>
</MDBCard>

</div>

<div style={{width:'650px', margin:'10px'}}>

{/* /////////////////////// EDUCATION  RETURN ////////////////////////////// */}

<h5 style={{fontWeight:'bold', marginTop:'20px'}}>Education</h5>

                  <MDBCard  style={{margin:'5px', border:'none'}}>
                  <label htmlFor="schoolname">School Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="schoolname"
                    value={schoolname}
                    onChange={(e) => setSchoolName(e.target.value)}
                    
                  /> 

                  <label htmlFor="schoolprogram">School Program</label>
                  <input
                    type="text"
                    className="form-control"
                    id="schoolprogram"
                    value={schoolprogram}
                    onChange={(e) => setSchoolProgram(e.target.value)}
                    
                  /> 

                  <label htmlFor="schoolyear">Year of Completion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="schoolyear"
                    value={schoolyear}
                    onChange={(e) => setSchoolYear(e.target.value)}
                    
                  /> 
</MDBCard>


                  
{/* /////////////////////// BOOTCAMP RETURN ////////////////////////////// */}              

<h5 style={{fontWeight:'bold', marginTop:'20px'}}>BootCamp</h5>

                  <MDBCard  style={{margin:'5px', border:'none'}}>

                    
                  <label htmlFor="bootcampname">Bootcamp Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bootcampname"
                    value={bootcampname}
                    onChange={(e) => setBootCampName(e.target.value)}
                    
                  /> 

                  <label htmlFor="bootcampprogram">Bootcamp Program</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bootcampprogram"
                    value={bootcampprogram}
                    onChange={(e) => setBootCampProgram(e.target.value)}
                    
                  /> 

                  <label htmlFor="bootcampyear">Year of Completion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bootcampyear"
                    value={bootcampyear}
                    onChange={(e) => setBootCampYear(e.target.value)}
                    
                  /> 
</MDBCard>



{/* <MDBCard  style={{margin:'5px', border:'none'}}>
                  <label htmlFor="skilllang1"><h5 style={{fontWeight:'bold', marginTop:'20px'}}>Skills & Languages</h5></label>
                  <input
                    type="text"
                    className="form-control"
                    id="skilllang1"
                    value={skilllang1}
                    onChange={(e) => setSkilllang1(e.target.value)}
                    required
                  /> 
</MDBCard> */}


{/* /////////////////////// SKILLS   RETURN ////////////////////////////// */}

<div>
  <h5 style={{ fontWeight: 'bold', marginTop: '20px' }}>Skills</h5>
  <Select
    isMulti
    options={[

{ value:'anaconda', label:'anaconda'},
{ value:'androidstudio', label:'androidstudio'},
{ value:'angularjs', label:'angularjs'},
{ value:'ansible', label:'ansible'},
{ value:'apollo', label:'apollo'},
{ value:'balenaetcher', label:'balenaetcher'},
{ value:'c', label:'c'},
{ value:'clouddevelopment', label:'clouddevelopment'},
{ value:'codeblocks', label:'codeblocks'},
{ value:'c++', label:'c++'},
{ value:'csharp', label:'csharp'},
{ value:'css3', label:'css3'},
{ value:'drupal', label:'drupal'},
{ value:'fedora', label:'fedora'},
{ value:'flask', label:'flask'},
{ value:'flutter', label:'flutter'},
{ value:'forrst', label:'forrst'},
{ value:'gatsbyjs', label:'gatsbyjs'},
{ value:'graphql', label:'graphql'},
{ value:'html5', label:'html5'},
{ value:'icue', label:'icue'},
{ value:'intellijidea', label:'intellijidea'},
{ value:'javascript', label:'javascript'},
{ value:'jupyter', label:'jupyter'},
{ value:'linuxserver', label:'linuxserver'},
{ value:'mariadb', label:'mariadb'},
{ value:'microsoftvisio2019', label:'microsoftvisio2019'},
{ value:'opencv', label:'opencv'},
{ value:'php', label:'php'},
{ value:'prometheus', label:'prometheus'},
{ value:'pullrequest', label:'pullrequest'},
{ value:'rproject', label:'rproject'},
{ value:'ruby', label:'ruby'},
{ value:'sourcecode', label:'sourcecode'},
{ value:'spyder', label:'spyder'},
{ value:'spyderide5', label:'spyderide5'},
{ value:'swift', label:'swift'},
{ value:'swiftui', label:'swiftui'},
{ value:'terraform', label:'terraform'},
{ value:'typescript', label:'typescript'},
{ value:'undp', label:'undp'},
{ value:'visualstudio', label:'visualstudio'},
{ value:'sourcetree', label:'sourcetree'}      
    ]}
    onChange={(selectedOptions) => {
      const selectedSkills = selectedOptions ? selectedOptions.map(option => option.value) : [];
      setselectedValuesSkills(prevValues => ({
        ...prevValues,
        skills: selectedSkills
      }));
    }}
    value={selectedValuesSkills.skills ? selectedValuesSkills.skills.map(skill => ({ value: skill, label: skill })) : []}
    getOptionLabel={(option) => (
      <div>
        <img
          src={skillIcons[option.value]}
          alt={option.value}
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
        {option.label}
      </div>
    )}
    isOptionSelected={(option) => selectedValuesSkills.skills.includes(option.value)}
    isOptionDisabled={(option) => selectedValuesSkills.skills.includes(option.value)}
  />
</div>



{/* /////////////////////// SOCIAL MEDIA RETURN ////////////////////////////// */}


<h5 style={{ fontWeight: 'bold', marginTop: '20px' }}>Social Media Entries</h5>

{socialMediaEntries.map((entry, index) => (
  <div key={index}>
    <label htmlFor={`media_type_${index}`}>Social Media:</label>
    <input
      type="text"
      name="media_type"
      id={`media_type_${index}`}
      value={entry.media_type}
      placeholder="Enter social media platform here (e.g., Twitter, GitHub, Instagram, Facebook)"
      onChange={(e) => handleInputChange(index, e)}
    />

    <label htmlFor={`text_value_${index}`}>Profile Link:</label>
    <input
      type="text"
      name="text_value"
      id={`text_value_${index}`}
      value={entry.text_value}
      placeholder="Enter URL here"
      onChange={(e) => handleInputChange(index, e)}
    />

    {/* Display media type icon */}
    {entry.media_type && (
      Object.keys(mediaTypeImages).map((key) => {
        if (key.toLowerCase().trim() === entry.media_type.toLowerCase().trim()) {
          return (
            <a href={entry.text_value.startsWith('http') ? entry.text_value : `//${entry.text_value}`} target="_blank" rel="noopener noreferrer" key={key}>
              <img
                src={mediaTypeImages[key]}
                alt={entry.media_type}
                style={{ width: '20px', height: '20px' }}
              />
            </a>
          );
        }
        return null;
      })
    )}
  </div>
))}






</div>

</div>

                <MDBBtn type="submit" color="primary" className="mr-2" >
                  Save
                </MDBBtn>
                
                <MDBBtn onClick={handleCancel} color="danger">
                  Cancel
                </MDBBtn>
  
              </form>
            </MDBCardBody>
            </MDBCard>
            
        </MDBCol>
      </MDBRow>
      </MDBContainer>


</>


  );
}

export default EditProfile;