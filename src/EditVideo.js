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




        return (
<MDBContainer style={{justifyContent: 'center',  display: 'flex' }}>   

<MDBCard style={{ maxWidth: '600px'}}>
  <MDBCardBody style={{ maxWidth: '600px'}}>
    <form id="video1" onSubmit={videoFileUpload}>
      <div className="form-group">
       Profile Video
      {videoFile && (
      <div className="mt-4 mb-2" style={{ width: '100%' }}>
        <video controls style={{ width: '100%' }}>
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





<MDBCard style={{ maxWidth: '600px' }}>
    <MDBCardBody>
    Profile Picture
      <form id="image1" onSubmit={changeProfilePic}>
        <MDBCol className="mb-2">
         
          <MDBCardImage
            src={`http://localhost:3009/${imageFile}`}
            className="mt-4 mb-2 img-thumbnail"
            fluid
            style={{ width: '475px', zIndex: '1' }}
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



</MDBContainer>   
        )



}

export default EditVideo;