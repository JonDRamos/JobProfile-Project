import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBCard, MDBCol, MDBCardImage, MDBCardBody, MDBBtn, MDBInput,MDBTypography } from 'mdb-react-ui-kit';

const { sessionStorage } = window;


function UploadProjects() {

  
    const [project1name, setproject1name] = useState("");
    const [project1description, setproject1description] = useState("");
    const [project1link, setproject1link] = useState("");
    const [project1, setproject1] = useState("");
  
    const [project2name, setproject2name] = useState("");
    const [project2description, setproject2description] = useState("");
    const [project2link, setproject2link] = useState("");
    const [project2, setproject2] = useState("");

    const [project3name, setproject3name] = useState("");
    const [project3description, setproject3description] = useState("");
    const [project3link, setproject3link] = useState("");
    const [project3, setproject3] = useState("");

    const [project4name, setproject4name] = useState("");
    const [project4description, setproject4description] = useState("");
    const [project4link, setproject4link] = useState("");
    const [project4, setproject4] = useState("");

    const [project5name, setproject5name] = useState("");
    const [project5description, setproject5description] = useState("");
    const [project5link, setproject5link] = useState("");
    const [project5, setproject5] = useState("");
  
    
    // const navigate = useNavigate();

useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    Axios.get(`http://localhost:3009/profile/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log(response.data);

      setproject1name(response.data.project1name);
      setproject1description(response.data.project1description);
      setproject1link(response.data.project1link);
      setproject1(response.data.project1);

      setproject2name(response.data.project2name);
      setproject2description(response.data.project2description);
      setproject2link(response.data.project2link);
      setproject2(response.data.project2);

      setproject3name(response.data.project3name);
      setproject3description(response.data.project3description);
      setproject3link(response.data.project3link);
      setproject3(response.data.project3);

      setproject4name(response.data.project4name);
      setproject4description(response.data.project4description);
      setproject4link(response.data.project4link);
      setproject4(response.data.project4);
      
      setproject5name(response.data.project5name);
      setproject5description(response.data.project5description);
      setproject5link(response.data.project5link);
      setproject5(response.data.project5);
    });
  }, []);

  const handleuploadproject1 = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    const proj1 = new FormData();

    proj1.append("project1name", project1name);
    proj1.append("project1description", project1description);
    proj1.append("project1link", project1link);
    proj1.append("project1", project1);

    Axios.put(`http://localhost:3009/project1/${userId}`, proj1, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response.data);
        // navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });  }



    const handleuploadproject2 = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        const userId = sessionStorage.getItem("userId");
        const proj2 = new FormData();

        proj2.append("project2name", project2name);
        proj2.append("project2description", project2description);
        proj2.append("project2link", project2link);
        proj2.append("project2", project2);
    Axios.put(`http://localhost:3009/project2/${userId}`, proj2, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          // navigate("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    }



    const handleuploadproject3 = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        const userId = sessionStorage.getItem("userId");
        const proj3 = new FormData();
        proj3.append("project3name", project3name);
        proj3.append("project3description", project3description);
        proj3.append("project3link", project3link);
        proj3.append("project3", project3);
    Axios.put(`http://localhost:3009/project3/${userId}`, proj3, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          // navigate("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    }


    const handleuploadproject4 = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        const userId = sessionStorage.getItem("userId");
        const proj4 = new FormData();
        proj4.append("project4name", project4name);
        proj4.append("project4description", project4description);
        proj4.append("project4link", project4link);
        proj4.append("project4", project4);

    Axios.put(`http://localhost:3009/project4/${userId}`, proj4, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          // navigate("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    }


    const handleuploadproject5 = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        const userId = sessionStorage.getItem("userId");
        const proj5 = new FormData();
        proj5.append("project5name", project5name);
        proj5.append("project5description", project5description);
        proj5.append("project5link", project5link);
        proj5.append("project5", project5);

    Axios.put(`http://localhost:3009/project5/${userId}`, proj5, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          // navigate("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    }



  

  // const handleCancel = () => {
  //   navigate("/profile");
  // };

    


const handleImageFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setproject1(file);
    } else {
        const previousFile1 = project1;
        setproject1(previousFile1);
    }
};
const handleImageFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setproject2(file);
    } else {
        const previousFile2 = project2;
        setproject2(previousFile2);
      }
};
const handleImageFileChange3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setproject3(file);
    } else {
        const previousFile3 = project3;
        setproject3(previousFile3);
      }
};
const handleImageFileChange4 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setproject4(file);
    } else {
        const previousFile4 = project4;
        setproject4(previousFile4);
      }
};
const handleImageFileChange5 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setproject5(file);
    } else {
        const previousFile5 = project5;
        setproject5(previousFile5);
      }
};



useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  Axios.get(`http://localhost:3009/profile/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },

  })
    .then((response) => {
      console.log(response.data);
      setproject1(response.data.project1);
      setproject2(response.data.project2);
      setproject3(response.data.project3);
      setproject4(response.data.project4);
      setproject5(response.data.project5);

    })
  }, []); 


return (
  <MDBContainer>      
    <br />
    <br />
    <br />
    <MDBCard style={{ maxWidth: "1500px", margin: "0 auto" }}>
      <MDBTypography variant="h3" className="text-center mb-">
        Upload Projects
      </MDBTypography>
            
      <MDBCardBody className="justify-content-center mt-5" style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
       
       
      <MDBCard>
  <MDBCardBody>
    <form id="upload1" value="proj1" onSubmit={handleuploadproject1}>
      <div className="form-group">
        <label htmlFor="project1name">Project Title:</label>
        <input
          label="title"
          type="text"
          className="form-control"
          id="project1name"
          value={project1name}
          onChange={(e) => setproject1name(e.target.value)}
          required
        />
        <label htmlFor="project1description">Description:</label>
        <input
          label="title"
          type="text"
          className="form-control"
          id="project1description"
          value={project1description}
          onChange={(e) => setproject1description(e.target.value)}
          required
        />
        <label htmlFor="project1link">Project Link:</label>
        <input
          label="title"
          type="text"
          className="form-control"
          id="project1link"
          value={project1link}
          onChange={(e) => setproject1link(e.target.value)}
          required
        />

                <MDBCol className="mb-2">
                <MDBCardImage src={`http://localhost:3009/${project1}`} alt="Project1" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>

        {/* Add an edit button next to the image */}
        <MDBBtn
          color="primary"
          className="mr-2"
          onClick={() => {
            // Trigger the file input field when the edit button is clicked
            document.getElementById("fileInput1").click();
          }}
        >
          Edit
        </MDBBtn>

        {/* Add a hidden file input field */}
        <input
          type="file"
          id="fileInput1"
          style={{ display: "none" }}
          onChange={handleImageFileChange1}
        />
      </div>

      <MDBBtn
        type="submit"
        form="upload1"
        color="primary"
        className="mr-2"
        value="proj1"
      >
        Save
      </MDBBtn>
    </form>
  </MDBCardBody>
</MDBCard>



             
      <MDBCard>
  <MDBCardBody>
    <form id="upload2"  value="proj2" onSubmit={handleuploadproject2}>
      <div className="form-group">
        <label htmlFor="project2name">Project Title:</label>
        <input
          label="title"
          type="text"
          className="form-control"
          id="project2name"
          value={project2name}
          onChange={(e) => setproject2name(e.target.value)}
          required
        />
        <label htmlFor="project2description">Description:</label>
        <input
          label="title"
          type="text"
          className="form-control"
          id="project2description"
          value={project2description}
          onChange={(e) => setproject2description(e.target.value)}
          required
        />
        <label htmlFor="project2link">Project Link:</label>
        <input
          label="title"
          type="text"
          className="form-control"
          id="project2link"
          value={project2link}
          onChange={(e) => setproject2link(e.target.value)}
          required
        />

                <MDBCol className="mb-2">
                <MDBCardImage src={`http://localhost:3009/${project2}`} alt="Project1" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>

        {/* Add an edit button next to the image */}
        <MDBBtn
          color="primary"
          className="mr-2"
          onClick={() => {
            // Trigger the file input field when the edit button is clicked
            document.getElementById("fileInput2").click();
          }}
        >
          Edit
        </MDBBtn>

        {/* Add a hidden file input field */}
        <input
          type="file"
          id="fileInput2"
          style={{ display: "none" }}
          onChange={handleImageFileChange2}
        />
      </div>

      <MDBBtn
        type="submit"
        form="upload2"
        color="primary"
        className="mr-2"
        value="proj2"
      >
        Save
      </MDBBtn>
    </form>
  </MDBCardBody>
</MDBCard>




             
<MDBCard>
  <MDBCardBody>
    <form id="upload3" value="proj3" onSubmit={handleuploadproject3}>
      <div className="form-group">
        <label htmlFor="project3name">Project Title:</label>
        <input
          label="title"
          type="text"
          className="form-control"

          value={project2name}
          onChange={(e) => setproject3name(e.target.value)}
          required
        />
        <label htmlFor="project3description">Description:</label>
        <input
          label="title"
          type="text"
          className="form-control"
     
          value={project3description}
          onChange={(e) => setproject3description(e.target.value)}
          required
        />
        <label htmlFor="project3link">Project Link:</label>
        <input
          label="title"
          type="text"
          className="form-control"
          id="upload"
          value={project3link}
          onChange={(e) => setproject3link(e.target.value)}
          required
        />

<MDBCol className="mb-2">
                <MDBCardImage src={`http://localhost:3009/${project3}`} alt="Project1" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>

        {/* Add an edit button next to the image */}
        <MDBBtn
          color="primary"
          className="mr-2"
          onClick={() => {
            // Trigger the file input field when the edit button is clicked
            document.getElementById("fileInput3").click();
          }}
        >
          Edit
        </MDBBtn>

        {/* Add a hidden file input field */}
        <input
          type="file"
          id="fileInput3"
          style={{ display: "none" }}
          onChange={handleImageFileChange3}
        />
      </div>

      <MDBBtn
        type="submit"
        form="upload3"
        color="primary"
        className="mr-2"
        value="proj3"
      >
        Save
      </MDBBtn>
    </form>
  </MDBCardBody>
</MDBCard>



        <MDBCard>
          <MDBCardBody>
            <form id="upload4" onSubmit={handleuploadproject4}>
              <div className="form-group">
                <label htmlFor="project4name">Project Title:</label>
                <input
                  label="title"
                  type="text"
                  className="form-control"
                  id="upload"
                  defaultValue={project4name}
                  onChange={(e) => setproject4name(e.target.value)}
                  required
                />
                <label htmlFor="project4description">Description:</label>
                <input
                  label="title"
                  type="text"
                  className="form-control"
                  id="upload"
                  defaultValue={project4description}
                  onChange={(e) => setproject4description(e.target.value)}
                  required
                />
                <label htmlFor="project4link">Project Link:</label>
                <input
                  label="title"
                  type="text"
                  className="form-control"
                  id="upload"
                  defaultValue={project4link}
                  onChange={(e) => setproject4link(e.target.value)}
                  required
                />

<MDBCol className="mb-2">
                <MDBCardImage src={`http://localhost:3009/${project4}`} alt="Project4" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>

        {/* Add an edit button next to the image */}
        <MDBBtn
          color="primary"
          className="mr-2"
          onClick={() => {
            // Trigger the file input field when the edit button is clicked
            document.getElementById("fileInput4").click();
          }}
        >
          Edit
        </MDBBtn>

        {/* Add a hidden file input field */}
        <input
          type="file"
          id="fileInput4"
          style={{ display: "none" }}
          onChange={handleImageFileChange4}
        />
      </div>

      <MDBBtn
        type="submit"
        form="upload4"
        color="primary"
        className="mr-2"
        value="proj4"
      >
        Save
      </MDBBtn>
    </form>
  </MDBCardBody>
</MDBCard>

        <MDBCard>
          <MDBCardBody>
            <form id="upload5" onSubmit={handleuploadproject5}>
              <div className="form-group">
                <label htmlFor="project5name">Project Title:</label>
                <input
                  label="title"
                  type="text"
                  className="form-control"
                  id="upload"
                  defaultValue={project5name}
                  onChange={(e) => setproject5name(e.target.value)}
                  required
                />
                <label htmlFor="project5description">Description:</label>
                <input
                  label="title"
                  type="text"
                  className="form-control"
                  id="upload"
                  defaultValue={project5description}
                  onChange={(e) => setproject5description(e.target.value)}
                  required
                />
                <label htmlFor="project5link">Project Link:</label>
                <input
                  label="title"
                  type="text"
                  className="form-control"
                  id="upload"
                  defaultValue={project5link}
                  onChange={(e) => setproject5link(e.target.value)}
                  required
                />

                <MDBCol className="mb-2">
                <MDBCardImage src={`http://localhost:3009/${project5}`} alt="Project5" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </MDBCol>

        {/* Add an edit button next to the image */}
        <MDBBtn
          color="primary"
          className="mr-2"
          onClick={() => {
            // Trigger the file input field when the edit button is clicked
            document.getElementById("fileInput5").click();
          }}
        >
          Edit
        </MDBBtn>

        {/* Add a hidden file input field */}
        <input
          type="file"
          id="fileInput5"
          style={{ display: "none" }}
          onChange={handleImageFileChange5}
        />
      </div>

      <MDBBtn
        type="submit"
        form="upload5"
        color="primary"
        className="mr-2"
        value="proj5"
      >
        Save
      </MDBBtn>
    </form>
  </MDBCardBody>
</MDBCard>



      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
);

  }
    export default UploadProjects;

