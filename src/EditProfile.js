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
         });
  }, []);

  const handleEditProfile = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");


    const formData = new FormData();
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("city", city);
    formData.append("summary", summary);
    
    Axios.put(`http://localhost:3009/profile/${userId}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response.data);
        // navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <>
    <MDBContainer>
      <MDBRow className="justify-content-center mt-5">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBTypography variant="h3" className="text-center mb-5">
                Edit Profile
              </MDBTypography>
              <form id="edit" onSubmit={handleEditProfile}>
                <div className="form-group">
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
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                  <label htmlFor="summary">Summary: </label>
                  <input
                    type="text"
                    className="form-control"
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    required
                  />
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
