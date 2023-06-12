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



///////////////////////  CERTS  //////////////////////////////////////////
const [cert1, setCert1] = useState("");


const uploadCert1 = async (e) => {
  e.preventDefault();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  const formData = new FormData();

  formData.append("cert1", cert1);

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

  Axios.get(`http://localhost:3009/profile/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((response) => {
    console.log(response.data);
    setCert1(response.data.cert1); // Update the cert1 state with the received value
  })
  .catch((error) => {
    console.log(error);
  });
}, []);


const handleCert1FileChange = (e) => {
  const file = e.target.files[0];
  setCert1(file); // Update the cert1 state with the selected file
};

//////////////////////// CERT 2  ////////
const [cert2, setCert2] = useState("");


const uploadCert2 = async (e) => {
  e.preventDefault();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  const formData = new FormData();

  formData.append("cert2", cert2);

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

  Axios.get(`http://localhost:3009/profile/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((response) => {
    console.log(response.data);
    setCert2(response.data.cert2); // Update the cert1 state with the received value
  })
  .catch((error) => {
    console.log(error);
  });
}, []);


const handleCert2FileChange = (e) => {
  const file = e.target.files[0];
  setCert2(file); // Update the cert1 state with the selected file
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

<div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>

  <MDBCard style={{ maxWidth: '600px', maxHeight: '700px', boxShadow:'none', border:'transparent'}}>
    <MDBCardBody>    
      <MDBTypography variant="h5" className="text-center mb-0">
    Certification 1
      </MDBTypography>
    

    <div className="form-group" style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="">Project Title:</label>
        <input
        />
        <label htmlFor="">Description:</label>
        <input
        />
        <label htmlFor="">Project Link:</label>
        <input
        /></div>

      <form id="cert1" onSubmit={uploadCert1}>
        <MDBCol className="mb-2">
         
          <MDBCardImage
            src={`http://localhost:3009/${cert1}`}
            className="mt-4 mb-2 img-thumbnail"
            fluid
            style={{ width: '600px', zIndex: '1' }}
          />
        </MDBCol>





        <MDBBtn style={{ maxWidth: '200px', zIndex: '1' }}
          color="primary"
          className="mr-2"
          onClick={() => {
            document.getElementById("cert1input").click();
          }}
        >
          Edit
        </MDBBtn>

        <input
          type="file"
          id="cert1input"
          style={{ display: "none" }}
          onChange={handleCert1FileChange}
        />

        <MDBBtn
          type="submit"
          form="cert1"
          color="primary"
          className="mr-2"
        >
          Save
        </MDBBtn>
      </form>
    </MDBCardBody>
  </MDBCard>





  <MDBCard style={{ maxWidth: '600px', maxHeight: '700px', boxShadow:'none', border:'transparent'}}>
  <MDBCardBody>    
    <MDBTypography variant="h5" className="text-center mb-0">
    Certification 2
      </MDBTypography>
    <div className="form-group" style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="">Project Title:</label>
        <input
        />
        <label htmlFor="">Description:</label>
        <input
        />
        <label htmlFor="">Project Link:</label>
        <input
        /></div>
      <form id="cert2" onSubmit={uploadCert2}>
        <MDBCol className="mb-2">
         
          <MDBCardImage
            src={`http://localhost:3009/${cert2}`}
            className="mt-4 mb-2 img-thumbnail"
            fluid
            style={{ width: '600px', zIndex: '1' }}
          />
        </MDBCol>

        <MDBBtn style={{ maxWidth: '200px', zIndex: '1' }}
          color="primary"
          className="mr-2"
          onClick={() => {
            document.getElementById("cert2input").click();
          }}
        >
          Edit
        </MDBBtn>

        <input
          type="file"
          id="cert2input"
          style={{ display: "none" }}
          onChange={handleCert2FileChange}
        />

        <MDBBtn
          type="submit"
          form="cert2"
          color="primary"
          className="mr-2"
        >
          Save
        </MDBBtn>
    
      </form>
    
    </MDBCardBody>
  </MDBCard>

  </div>





</MDBContainer>   
        )



}

export default EditVideo;