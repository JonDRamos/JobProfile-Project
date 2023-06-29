import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBCard, MDBCol, MDBCardImage, MDBCardBody, MDBBtn, MDBInput,MDBTypography } from 'mdb-react-ui-kit';

const { sessionStorage } = window;


function EditVideo() {


    const [videoFile, setVideoFile] = useState("");



      const videoFileUpload = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        const userId = sessionStorage.getItem("userId");
        const video = new FormData();

    
        video.append("videoFile", videoFile);
    
        Axios.put(`http://localhost:3009/videoFile/${userId}`, video, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            console.log(response.data);
            // navigate("/profile");
          })
          .catch((error) => {
            console.log(error);
          });  }


          useEffect(() => {
            const token = sessionStorage.getItem("token");
            const userId = sessionStorage.getItem("userId");
        
            Axios.get(`http://localhost:3009/profile/${userId}`, {
              headers: { Authorization: `Bearer ${token}` },
            }).then((response) => {
              console.log(response.data);
    
              setVideoFile(response.data.videoFile);
            });
          }, [])
    


          const handleVideoFileChange = (event) => {
            const file = event.target.files[0];
            if (file) {
              setVideoFile(file);
            } else {
                const previousvideofile = videoFile;
                setVideoFile(previousvideofile);
            }
        };


///////////////////////Profile Picture//////////////////////////////////////////
const [imageFile, setImageFile] = useState("");

const changeProfilePic = async (e) => {
  e.preventDefault();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  const formData = new FormData();

  formData.append("imageFile", imageFile);

  Axios.put(`http://localhost:3009/imageFile/${userId}`, formData, {
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

useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  Axios.get(`http://localhost:3009/profile/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => {
    console.log(response.data);

    setImageFile(response.data.imageFile);
  });
}, []);

const handleImageFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    setImageFile(file);
  } else {
    const previousImageFile = imageFile;
    setImageFile(previousImageFile);
  }
};



///////////////////////  DEGREE / CERTIFICACTION 1 IMAGE UPLOAD  //////////////////////////////////////////
const [cert1, setCert1] = useState("");
const [degree1, setDegree1] = useState("");
const [link1, setLink1] = useState("");



const uploadCert1 = async (e) => {
  e.preventDefault();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  const formData = new FormData();

  formData.append("cert1", cert1);
  formData.append("degree1", degree1); // Add degree1 value to the formData
  formData.append("link1", link1); // Add link1 value to the formData


  Axios.put(`http://localhost:3009/cert1/${userId}`, formData, {
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


const handleCert1FileChange = (e) => {
  const file = e.target.files[0];
  setCert1(file); // Update the cert1 state with the selected file
};


const handleDegree1Change = (e) => {
  setDegree1(e.target.value);
};

const handleLink1Change = (e) => {
  setLink1(e.target.value);
};



///////////////////////  DEGREE / CERTIFICACTION 2 IMAGE UPLOAD  //////////////////////////////////////////
const [cert2, setCert2] = useState("");
const [degree2, setDegree2] = useState("");
const [link2, setLink2] = useState("");



const uploadCert2 = async (e) => {
  e.preventDefault();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  const formData = new FormData();

  formData.append("cert2", cert2);
  formData.append("degree2", degree2); // Add degree1 value to the formData
  formData.append("link2", link2); // Add link1 value to the formData


  Axios.put(`http://localhost:3009/cert2/${userId}`, formData, {
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


const handleCert2FileChange = (e) => {
  const file = e.target.files[0];
  setCert2(file); // Update the cert1 state with the selected file
};


const handleDegree2Change = (e) => {
  setDegree2(e.target.value);
};

const handleLink2Change = (e) => {
  setLink2(e.target.value);
};












        return (
<MDBContainer style={{maxWidth: "1600px"}}>   


<MDBTypography variant="h3" className="text-center mb-5 mt-5" style={{borderBottom:'lightGrey solid 1px', padding:'10px'}}>
        Profile Photo & Video & Certifications
      </MDBTypography>



  <div style={{display:'flex', justifyContent:'center', borderBottom:'lightGrey solid 1px', gapBottom:'20px'}}>
    
  <div>
<MDBCard style={{ maxWidth: '600px', boxShadow:'none', border:'transparent'}}>
    <MDBCardBody style={{boxShadow:'none'}}>
    <MDBTypography variant="h5" className="text-center mb-0">
    Profile Picture
      </MDBTypography>
      <form id="image1" onSubmit={changeProfilePic}>
        <MDBCol className="mb-2">
         
          <MDBCardImage
            src={`http://localhost:3009/${imageFile}`}
            className="mt-4 mb-2"
            fluid
            style={{ width: '600px', zIndex: '1' }}
          />
        </MDBCol>

        <MDBBtn
          color="primary"
          className="mr-2"
          onClick={() => {
            document.getElementById("imageInput").click();
          }}
        >
          Edit
        </MDBBtn>

        <input
          type="file"
          id="imageInput"
          style={{ display: "none" }}
          onChange={handleImageFileChange}
        />

        <MDBBtn
          type="submit"
          form="image1"
          color="primary"
          className="mr-2"
        >
          Save
        </MDBBtn>
      </form>
    </MDBCardBody>
  </MDBCard>
</div>


<div>
  <MDBCard style={{ maxWidth: '600px', boxShadow:'none', border:'transparent'}}>
  <MDBCardBody style={{ maxWidth: '600px'}}>
    <form id="video1" onSubmit={videoFileUpload}>
      <div className="form-group">
      <MDBTypography variant="h5" className="text-center mb-0">
    Profile Video
      </MDBTypography>
      {videoFile && (
      <div className="mt-4 mb-2" style={{ width: '100%' }}>
        <video controls style={{ width: '600px' }}>
          <source src={`http://localhost:3009/${videoFile}`} type="video/mp4" />
        </video>
      </div>
    )}
</div>
<div className = "buttons" style={{display: 'flex'}} >
        {/* Add an edit button next to the image */}
        <MDBBtn 
          color="primary"
          className="mr-2"
          onClick={() => {
            // Trigger the file input field when the edit button is clicked
            document.getElementById("videoInput").click();
          }}
        >
          Edit
        </MDBBtn>

        {/* Add a hidden file input field */}
        <input
          type="file"
          id="videoInput"
          style={{ display: "none" }}
          onChange={handleVideoFileChange}
        />
      

      <MDBBtn
        type="submit"
        form="video1"
        color="primary"
        className="mr-2"
        
      >
        Save
      </MDBBtn>
      </div>
    </form>
  </MDBCardBody>
</MDBCard>

</div>

</div>


{/* //////////////////////// CERTIFICATION 1 ////////////////////////// */}

<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
  <MDBCard style={{ maxWidth: '600px', height: '700px', boxShadow: 'none', border: 'transparent' }}>
    <MDBCardBody>
      <MDBTypography variant="h5" className="text-center mb-0">
        Certification 1
      </MDBTypography>

      
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
  <label htmlFor="degree1">Certification/Degree:</label>
  <input
    type="text"
    name="degree1"
    value={degree1}
    onChange={handleDegree1Change}
  />
  <label htmlFor="link1">Link:</label>
  <input
    type="text"
    name="link1"
    value={link1}
    onChange={handleLink1Change}
  />
</div>

<form id="cert1" onSubmit={uploadCert1}>
  <MDBCol className="mb-2">
    <MDBCardImage
      src={`http://localhost:3009/${cert1}`}
      className="mt-4 mb-2 img-thumbnail"
      fluid
      style={{ width: '600px', height: '400px', zIndex: '1' }}
    />
  </MDBCol>

  <MDBBtn
    style={{ maxWidth: '200px', zIndex: '1' }}
    color="primary"
    className="mr-2"
    onClick={() => {
      document.getElementById('cert1input').click();
    }}
  >
    Edit
  </MDBBtn>

  <input
    type="file"
    id="cert1input"
    style={{ display: 'none' }}
    onChange={handleCert1FileChange}
  />

  <MDBBtn type="submit" color="primary" className="mr-2">
    Save
  </MDBBtn>
</form>



    </MDBCardBody>
  </MDBCard>



  {/* //////////////////////// CERTIFICATION 2 ////////////////////////// */}


  <MDBCard style={{ maxWidth: '600px', height: '700px', boxShadow: 'none', border: 'transparent' }}>
    <MDBCardBody>
      <MDBTypography variant="h5" className="text-center mb-0">
        Certification 2
      </MDBTypography>

      
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
  <label htmlFor="degree2">Certification/Degree:</label>
  <input
    type="text"
    name="degree2"
    value={degree2}
    onChange={handleDegree2Change}
  />
  <label htmlFor="link2">Link:</label>
  <input
    type="text"
    name="link2"
    value={link2}
    onChange={handleLink2Change}
  />
</div>

<form id="cert2" onSubmit={uploadCert2}>
  <MDBCol className="mb-2">
    <MDBCardImage
      src={`http://localhost:3009/${cert2}`}
      className="mt-4 mb-2 img-thumbnail"
      fluid
      style={{ width: '600px', height: '400px', zIndex: '1' }}
    />
  </MDBCol>

  <MDBBtn
    style={{ maxWidth: '200px', zIndex: '1' }}
    color="primary"
    className="mr-2"
    onClick={() => {
      document.getElementById('cert2input').click();
    }}
  >
    Edit
  </MDBBtn>

  <input
    type="file"
    id="cert2input"
    style={{ display: 'none' }}
    onChange={handleCert2FileChange}
  />

  <MDBBtn type="submit" color="primary" className="mr-2">
    Save
  </MDBBtn>
</form>



    </MDBCardBody>
  </MDBCard>


  </div>





</MDBContainer>   
        
      );
    };


       
        





export default EditVideo;