//Needs edit/add profile pic
  //need to display profile pic
//time to make edit options more elaborate
 //social accounts, adding word/pdf docs/ resumes/ certs/ etc
 
//turn on/off profile attributes such as - profile views, show/dont show contacts etc



import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

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
  // const [skilllang1, setSkilllang1] = useState("");
  // const [skilllang2, setSkilllang2] = useState("");
  // const [skilllang3, setSkilllang3] = useState("");
  // const [skilllang4, setSkilllang4] = useState("");
  // const [skilllang5, setSkilllang5] = useState("");
  // const [skilllang6, setSkilllang6] = useState("");
  // const [skilllang7, setSkilllang7] = useState("");
  // const [skilllang8, setSkilllang8] = useState("");
  // const [skilllang9, setSkilllang9] = useState("");
  const [selectedValues, setSelectedValues] = useState({ skills: [] });


 
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
      // setSkilllang1(response.data.skilllang1);
      // setSkilllang2(response.data.skilllang2);
      // setSkilllang3(response.data.skilllang3);
      // setSkilllang4(response.data.skilllang4);
      // setSkilllang5(response.data.skilllang5);
      // setSkilllang6(response.data.skilllang6);
      // setSkilllang7(response.data.skilllang7);
      // setSkilllang8(response.data.skilllang8);
      // setSkilllang9(response.data.skilllang9);
      
         });
  }, []);


  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   const userId = sessionStorage.getItem("userId");
  //   // ... code for fetching user profile data ...
  
  //   // Fetch the skills data and update the selectedValues
  //   Axios.get(`http://localhost:3009/skills/${userId}`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => {
  //       const skillsData = response.data;
  //       setSelectedValues((prevSelectedValues) => ({
  //         ...prevSelectedValues,
  //         skills: skillsData,
  //       }));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);



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
    // formData.append("skilllang1", skilllang1);
    // formData.append("skilllang2", skilllang2);
    // formData.append("skilllang3", skilllang3);
    // formData.append("skilllang4", skilllang4);
    // formData.append("skilllang5", skilllang5);
    // formData.append("skilllang6", skilllang6);
    // formData.append("skilllang7", skilllang7);
    // formData.append("skilllang8", skilllang8);
    // formData.append("skilllang9", skilllang9);
    selectedValues.skills.forEach((skill) => {
      formData.append("skills[]", skill);
    });

    
    Axios.put(`http://localhost:3009/profile/${userId}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response.data);
        // navigate("/profile");
      })
      .catch((error) => {
        console.log("error - value always exists");
      });
  };







  const handleCancel = () => {
    navigate("/profile");
  };


  const handleSelection = (value) => {
    if (value && !selectedValues.skills.includes(value)) {
      setSelectedValues({
        ...selectedValues,
        skills: [...selectedValues.skills, value]
      });
    }
  };

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

<div>
                  <h2>Skills</h2>
                  <select onChange={(e) => handleSelection(e.target.value)}>
                    <option value="">Select a skill</option>
                    <option value="CSS">CSS</option>
                    <option value="HTML">HTML</option>
                    <option value="JavaScript">JavaScript</option>
                  </select>

                  <div>
                    <h3>Selected Skills</h3>
                    <ul>
                      {selectedValues.skills.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
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
