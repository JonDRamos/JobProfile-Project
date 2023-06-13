//Needs edit/add profile pic
  //need to display profile pic
//time to make edit options more elaborate
 //social accounts, adding word/pdf docs/ resumes/ certs/ etc
 
//turn on/off profile attributes such as - profile views, show/dont show contacts etc



import React, { useState, useEffect } from "react";
import Axios from "axios";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBBtn, MDBTypography
 } from 'mdb-react-ui-kit';

const { sessionStorage } = window;

function EditProfile(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [summary, setSummary] = useState("");
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

  const [selectedValues, setSelectedValues] = useState({ skills: [] });
  const [databaseValues, setDatabaseValues] = useState(null); // Added state variable
  
  const navigate = useNavigate();
  

  {/* //////////////////////////////////////////     Axios.GET- All User Data ////////////////////////////////////////// */}  
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

      setDatabaseValues(response.data); // Update database values state

         });
  }, []);




{/* //////////////////////////////////////////     Axios.PUT - All User Data ////////////////////////////////////////// */}  
const handleEditProfile = (e) => {
  e.preventDefault();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");


  const formData = new FormData();
  formData.append("firstname", firstName);
  formData.append("lastname", lastName);
  formData.append("city", city);
  formData.append("summary", summary);

  formData.append("country", country);
  formData.append("stateprovince", stateprovince);
  formData.append("educationschool", educationschool);
  formData.append("educationprogram", educationprogram);
  formData.append("educationyear", educationyear);
  formData.append("twitter", twitter);
  formData.append("facebook", facebook);
  formData.append("instagram", instagram);
  formData.append("website", website);
  formData.append("bootcampname", bootcampname);
  formData.append("bootcampprogram", bootcampprogram);
  formData.append("bootcampyear", bootcampyear);

  selectedValues.skills.forEach((skill, index) => {
    formData.append(`skilllang${index + 1}`, skill);
  });
  
  Axios.put(`http://localhost:3009/profile/${userId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response.data);
      navigate("/profile");
    })
    .catch((error) => {
      console.log(error);
    });
};




{/* //////////////////////////////////////////     Axios - Skills & Languages    ////////////////////////////////////////// */}  
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    // Fetch the skills data and update the selectedValues
    Axios.get(`http://localhost:3009/skills/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        const skillsData = response.data;
        setSelectedValues((prevSelectedValues) => ({
          ...prevSelectedValues,
          skills: skillsData,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
{/* //////////////////////////////////////////     Axios - Social Media  ////////////////////////////////////////// */}  











  const handleCancel = () => {
    navigate("/profile");
  };


  // const handleSelection = (value) => {
  //   setSelectedValues((prevValues) => ({
  //     ...prevValues,
  //     skills: [value], // Clear previous values and set the newly selected value
  //   }));
  // };




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


{/* //////////////////////////////////////////Left Section  -  Basic Info + Current Employment////////////////////////////////////////// */}

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
                    style={{ height: '100px', resize: 'none'}}
                    type="text"
                    className="form-control"
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    required
                  />
</MDBCard>

<MDBCard  style={{margin:'5px', border:'none'}}>

<h5 style={{fontWeight:'bold', marginTop:'20px'}}>Current Employment</h5>

                  <label htmlFor="firstName"> Current Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <label htmlFor="lastName">Current Employer</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <br></br>
 <h7>"upload resume here"</h7>
</MDBCard>

</div>


{/* //////////////////////////////////////////Education Section////////////////////////////////////////// */}

<div style={{width:'650px', margin:'10px'}}>
<MDBCard  style={{margin:'5px', border:'none'}}>
<h5 style={{fontWeight:'bold'}}>Education</h5>
                  <label htmlFor="educationschool">School/Institution</label>
                  <input
                    type="text"
                    className="form-control"
                    id="educationschool"
                    value={educationschool}
                    onChange={(e) => setEducationSchool(e.target.value)}
                    required
                  />
                  <label htmlFor="educationprogram">Program</label>
                  <input
                    type="text"
                    className="form-control"
                    id="educationprogram"
                    value={educationprogram}
                    onChange={(e) => setEducationProgram(e.target.value)}
                    required
                  />
                  <label htmlFor="educationyear">Year of Completion</label>
                  <input
                    type="integer"
                    className="form-control"
                    id="educationyear"
                    value={educationyear}
                    onChange={(e) => setEducationYear(e.target.value)}
                    required
                  />
                  
                  </MDBCard>


{/* //////////////////////////////////////////Bootcamp Section////////////////////////////////////////// */}

<h5 style={{fontWeight:'bold', marginTop:'20px'}}>BootCamp</h5>

                  <MDBCard  style={{margin:'5px', border:'none'}}>
                  <label htmlFor="bootcampname">Bootcamp Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bootcampname"
                    value={bootcampname}
                    onChange={(e) => setBootCampName(e.target.value)}
                    required
                  /> 

                  <label htmlFor="bootcampprogram">Bootcamp Program</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bootcampprogram"
                    value={bootcampprogram}
                    onChange={(e) => setBootCampProgram(e.target.value)}
                    required
                  /> 

                  <label htmlFor="bootcampyear">Year of Completion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bootcampyear"
                    value={bootcampyear}
                    onChange={(e) => setBootCampYear(e.target.value)}
                    required
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

{/* //////////////////////////////////////////Social Media Section////////////////////////////////////////// */}

<h5 style={{fontWeight:'bold', marginTop:'20px'}}>Website & Social Media</h5>

<MDBCard  style={{margin:'5px', borderBottom:'none'}}>
                  <label htmlFor="twitter">Twitter</label>
                  <input
                    type="text"
                    className="form-control"
                    id="twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    required
                  /> 
                  <label htmlFor="facebook">Facebook</label>
                  <input
                    type="text"
                    className="form-control"
                    id="facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                    required
                  /> 
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    type="text"
                    className="form-control"
                    id="instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    required
                  /> 
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    className="form-control"
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    required
                  /> 
</MDBCard>

{/* //////////////////////////////////////////Skills Section////////////////////////////////////////// */}
<div>
                  <h2>Skills</h2>
                  <Select
                    isMulti
                    options={[
                      { value: "CSS", label: "CSS" },
                      { value: "HTML", label: "HTML" },
                      { value: "JavaScript", label: "JavaScript" },
                    ]}
                    onChange={(selectedOptions) => {
                      const selectedSkills = selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : [];
                      setSelectedValues((prevValues) => ({
                        ...prevValues,
                        skills: selectedSkills,
                      }));
                    }}
                    value={selectedValues.skills.map((skill) => ({
                      value: skill,
                      label: skill,
                    }))}
                  />



                </div>








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
