import React, {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBSelect
}
from 'mdb-react-ui-kit';



function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

    const handleImageFileChange = (event) => {
      setImageFile(event.target.files[0]);
    };
  
    const handleRegister = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("city", city);
      formData.append("title", title);
      formData.append("summary", summary);
      formData.append("lastname", lastname);
      formData.append("firstname", firstname);
      formData.append("imageFile", imageFile);
  

      try {
        navigate("/home");
        const response = await Axios.post(
          "http://localhost:3009/registration",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        if (response.data.message) {
          console.log(response.data.message);
        } else {
          console.log("ACCOUNT CREATED SUCCESSFULLY");
          
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <form onSubmit={handleRegister}>
        <MDBContainer fluid className='d-flex justify-content-center' style={{width:'853px', marginTop: '100px'}}>
    
          <MDBRow className=''>
            <MDBCol>
    
              <MDBCard className=''>
    
                <MDBRow className=''>
    
                  <MDBCol  className="" style={{height: '600px', display:
                'flex',  alignItems:'center'}}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded"  style={{maxHeight:'600px', position:'relative' }}/>
                  </MDBCol>
    
                  <MDBCol md='6'>    
                    <MDBCardBody className='text-black d-flex flex-column justify-content-center' style={{height: '600px'}}>
                      <h3 className="mb-5 text-uppercase fw-bold">Register</h3>
    
                      <MDBRow>    
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'  onChange={(e) => setFirstname(e.target.value)}/>
                        </MDBCol>
    
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' onChange={(e) => setLastname(e.target.value)} />
                        </MDBCol>    
                      </MDBRow>
    
   
                      <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' onChange={(e) => setPassword(e.target.value)} />
                      <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='form5' type='text' onChange={(e) => setUsername(e.target.value)} />
                      <MDBInput wrapperClass='mb-4' label='Email Address' size='lg' id='form6' type='text' onChange={(e) => setEmail(e.target.value)} />

    
    
    
    
                      <div className="d-flex justify-content-end pt-3">
                        <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                        <MDBBtn className='ms-2' color='warning' size='lg' type="submit">Register</MDBBtn>
                      </div>
                     
                    </MDBCardBody>
    
                  </MDBCol>
                </MDBRow>
    
              </MDBCard>
    
            </MDBCol>
          </MDBRow>
    
        </MDBContainer>
        </form>
      );
  }

export default Register;
    