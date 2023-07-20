import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBCard, MDBCol, MDBCardImage, MDBCardBody, MDBBtn, MDBInput,MDBTypography } from 'mdb-react-ui-kit';
import Select from 'react-select';



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




function UploadProjects() {
  
  const skillIcons = {
    anaconda :  anaconda ,
    androidstudio :  androidstudio ,
    angularjs :  angularjs ,
    ansible :  ansible ,
    apollo :  apollo ,
    balenaetcher :  balenaetcher ,
    'c': c,
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

///////////////////////  DEGREE / CERTIFICACTION 1 IMAGE UPLOAD  //////////////////////////////////////////
    const [project1title, setTitle_project1] = useState("");
    const [project1gitlink, setGitlink_project1] = useState("");
    const [project1demolink, setDemolink_project1] = useState("");
    const [project1description, setDescription_project1] = useState("");
    const [project1thumbnail, setThumbnail_project1] = useState("");
    const [selectedValuesSkills, setSelectedValuesSkills] = useState([]);

const uploadCert1 = async (e) => {
  e.preventDefault();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  const formData = new FormData();

  formData.append("project1title", project1title);
  formData.append("project1gitlink", project1gitlink);
  formData.append("project1demolink", project1demolink); 
  formData.append("project1description", project1description);
  formData.append("project1thumbnail", project1thumbnail);

  selectedValuesSkills.forEach((skill) => {
    formData.append("skills[]", skill);
  });

  Axios.put(`http://localhost:3009/project1API/${userId}`, formData, {
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

const fetchSkillsData = () => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  Axios.get(`http://localhost:3009/project1skills/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => {
      setSelectedValuesSkills(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

useEffect(() => {
  fetchSkillsData();
}, []);


const handleThumbnail1FileChange = (e) => {
  const file = e.target.files[0];
  setThumbnail_project1(file); // Update the cert1 state with the selected file
};
const handleTitle1Change = (e) => {
  setTitle_project1(e.target.value);
};
const handleGitlink1Change = (e) => {
  setGitlink_project1(e.target.value);
};
const handleDemolink1Change = (e) => {
  setDemolink_project1(e.target.value);
};
const handleDescription1Change = (e) => {
  setDescription_project1(e.target.value);
};



///////////////////////  DEGREE / CERTIFICACTION 2 IMAGE UPLOAD  //////////////////////////////////////////
const [project2title, setTitle_project2] = useState("");
const [project2gitlink, setGitlink_project2] = useState("");
const [project2demolink, setDemolink_project2] = useState("");
const [project2description, setDescription_project2] = useState("");
const [project2thumbnail, setThumbnail_project2] = useState("");
const [selectedValuesSkills2, setSelectedValuesSkills2] = useState([]);

const uploadCert2 = async (e) => {
e.preventDefault();
const token = sessionStorage.getItem("token");
const userId = sessionStorage.getItem("userId");
const formData = new FormData();

formData.append("project2title", project2title);
formData.append("project2gitlink", project2gitlink);
formData.append("project2demolink", project2demolink); 
formData.append("project2description", project2description);
formData.append("project2thumbnail", project2thumbnail);



selectedValuesSkills2.forEach((skill2) => {
formData.append("skills2[]", skill2);
});

Axios.put(`http://localhost:3009/project2API/${userId}`, formData, {
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

Axios.get(`http://localhost:3009/project2API/${userId}`, {
headers: { Authorization: `Bearer ${token}` },
})
.then((response) => {
console.log(response.data);
setTitle_project2(response.data.project2title);
setGitlink_project2(response.data.project2gitlink);
setDemolink_project2(response.data.project2demolink);
setDescription_project2(response.data.project2description);
setThumbnail_project2(response.data.project2thumbnail);
})
// these white variables are wahts connected to the backend, so should be the same name as the table column names.
.catch((error) => {
console.log(error);
});
}, []);

const fetchSkillsData2 = () => {
const token = sessionStorage.getItem("token");
const userId = sessionStorage.getItem("userId");

Axios.get(`http://localhost:3009/project2skills/${userId}`, {
headers: { Authorization: `Bearer ${token}` },
})
.then((response) => {
  setSelectedValuesSkills2(response.data);
})
.catch((error) => {
  console.log(error);
});
};

useEffect(() => {
fetchSkillsData2();
}, []);


const handleThumbnail2FileChange = (e) => {
const file = e.target.files[0];
setThumbnail_project2(file); // Update the cert1 state with the selected file
};
const handleTitle2Change = (e) => {
setTitle_project2(e.target.value);
};
const handleGitlink2Change = (e) => {
setGitlink_project2(e.target.value);
};
const handleDemolink2Change = (e) => {
setDemolink_project2(e.target.value);
};
const handleDescription2Change = (e) => {
setDescription_project2(e.target.value);
};




///////////////////////  DEGREE / CERTIFICACTION 3 IMAGE UPLOAD  //////////////////////////////////////////
const [project3title, setTitle_project3] = useState("");
const [project3gitlink, setGitlink_project3] = useState("");
const [project3demolink, setDemolink_project3] = useState("");
const [project3description, setDescription_project3] = useState("");
const [project3thumbnail, setThumbnail_project3] = useState("");
const [selectedValuesSkills3, setSelectedValuesSkills3] = useState([]);

const uploadCert3 = async (e) => {
e.preventDefault();
const token = sessionStorage.getItem("token");
const userId = sessionStorage.getItem("userId");
const formData = new FormData();

formData.append("project3title", project3title);
formData.append("project3gitlink", project3gitlink);
formData.append("project3demolink", project3demolink); 
formData.append("project3description", project3description);
formData.append("project3thumbnail", project3thumbnail);



selectedValuesSkills3.forEach((skill3) => {
formData.append("skills3[]", skill3);
});

Axios.put(`http://localhost:3009/project3API/${userId}`, formData, {
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

Axios.get(`http://localhost:3009/project3API/${userId}`, {
headers: { Authorization: `Bearer ${token}` },
})
.then((response) => {
console.log(response.data);
setTitle_project3(response.data.project3title);
setGitlink_project3(response.data.project3gitlink);
setDemolink_project3(response.data.project3demolink);
setDescription_project3(response.data.project3description);
setThumbnail_project3(response.data.project3thumbnail);
})
// these white variables are wahts connected to the backend, so should be the same name as the table column names.
.catch((error) => {
console.log(error);
});
}, []);

const fetchSkillsData3 = () => {
const token = sessionStorage.getItem("token");
const userId = sessionStorage.getItem("userId");

Axios.get(`http://localhost:3009/project3skills/${userId}`, {
headers: { Authorization: `Bearer ${token}` },
})
.then((response) => {
  setSelectedValuesSkills3(response.data);
})
.catch((error) => {
  console.log(error);
});
};

useEffect(() => {
fetchSkillsData3();
}, []);


const handleThumbnail3FileChange = (e) => {
const file = e.target.files[0];
setThumbnail_project3(file); // Update the cert1 state with the selected file
};
const handleTitle3Change = (e) => {
setTitle_project3(e.target.value);
};
const handleGitlink3Change = (e) => {
setGitlink_project3(e.target.value);
};
const handleDemolink3Change = (e) => {
setDemolink_project3(e.target.value);
};
const handleDescription3Change = (e) => {
setDescription_project3(e.target.value);
};



        return (

<MDBContainer style={{maxWidth: "1600px"}}>  

<MDBTypography variant="h3" className="text-center mb-5 mt-5" style={{borderBottom:'lightGrey solid 1px', padding:'10px'}}>
        PROJECTS
      </MDBTypography>


<div style={{display:'flex'}}>
{/* //////////////////////// PROJECT 1 ////////////////////////// */}

<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
  <MDBCard style={{ maxWidth: '600px', height: '700px', boxShadow: 'none', border: 'transparent' }}>
    <MDBCardBody>
      <MDBTypography variant="h5" className="text-center mb-0">
        Project 1
      </MDBTypography>

      
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>  
  <label htmlFor="project1title">PROJECT1 TITLE:</label>
  <input
    type="text"
    name="project1title"
    value={project1title}
    onChange={handleTitle1Change}
  />

  <label htmlFor="project1gitlink">PROJECT1 GIT-LINK:</label>
  <input
    type="text"
    name="project1gitlink"
    value={project1gitlink}
    onChange
    ={handleGitlink1Change}
  />

<label htmlFor="project1demolink">PROJECT1 DEMO-LINK:</label>
  <input
    type="text"
    name="project1demolink"
    value={project1demolink}
    onChange={handleDemolink1Change}
  />

<label htmlFor="project1description">PROJECT1 DESCRIPTION:</label>
  <input
    type="text"
    name="project1description"
    value={project1description}
    onChange={handleDescription1Change}
  />

</div>

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
  setSelectedValuesSkills(selectedSkills);
}}
value={(Array.isArray(selectedValuesSkills) ? selectedValuesSkills : []).map((skill) => ({ value: skill, label: skill }))}
getOptionLabel={(option) => (
  <div>
    {/* Skill icon */}
    <img
      src={skillIcons[option.value]}
      alt={option.value}
      style={{ width: '20px', height: '20px', marginRight: '5px' }}
    />
    {option.label}
  </div>
)}
isOptionSelected={(option) => (Array.isArray(selectedValuesSkills) ? selectedValuesSkills.some(skill => skill === option.value) : false)}
isOptionDisabled={(option) => (Array.isArray(selectedValuesSkills) ? selectedValuesSkills.some(skill => skill === option.value) : false)}
/>


</div>


<form id="cert1" onSubmit={uploadCert1}>
  <MDBCol className="mb-2">
    <MDBCardImage
      src={`http://localhost:3009/${project1thumbnail}`}
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
    onChange={handleThumbnail1FileChange}
  />

  <MDBBtn type="submit" color="primary" className="mr-2">
    Save
  </MDBBtn>
</form>
</MDBCardBody>
  </MDBCard>
</div>



{/* //////////////////////// PROJECT 2 ////////////////////////// */}

<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
  <MDBCard style={{ maxWidth: '600px', height: '700px', boxShadow: 'none', border: 'transparent' }}>
    <MDBCardBody>
      <MDBTypography variant="h5" className="text-center mb-0">
        Project 2
      </MDBTypography>

      
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>  
  <label htmlFor="project2title">PROJECT2 TITLE:</label>
  <input
    type="text"
    name="project2title"
    value={project2title}
    onChange={handleTitle2Change}
  />

  <label htmlFor="project2gitlink">PROJECT2 GIT-LINK:</label>
  <input
    type="text"
    name="project2gitlink"
    value={project2gitlink}
    onChange
    ={handleGitlink2Change}
  />

<label htmlFor="project2demolink">PROJECT2 DEMO-LINK:</label>
  <input
    type="text"
    name="project2demolink"
    value={project2demolink}
    onChange={handleDemolink2Change}
  />

<label htmlFor="project2description">PROJECT2 DESCRIPTION:</label>
  <input
    type="text"
    name="project2description"
    value={project2description}
    onChange={handleDescription2Change}
  />

</div>


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
  const selectedSkills2 = selectedOptions ? selectedOptions.map(option => option.value) : [];
  setSelectedValuesSkills2(selectedSkills2);
}}
value={(Array.isArray(selectedValuesSkills2) ? selectedValuesSkills2 : []).map((skill) => ({ value: skill, label: skill }))}
getOptionLabel={(option) => (
  <div>
    {/* Skill icon */}
    <img
      src={skillIcons[option.value]}
      alt={option.value}
      style={{ width: '20px', height: '20px', marginRight: '5px' }}
    />
    {option.label}
  </div>
)}
isOptionSelected={(option) => (Array.isArray(selectedValuesSkills2) ? selectedValuesSkills2.some(skill => skill === option.value) : false)}
isOptionDisabled={(option) => (Array.isArray(selectedValuesSkills2) ? selectedValuesSkills2.some(skill => skill === option.value) : false)}
/>


</div>


<form id="cert2" onSubmit={uploadCert2}>
  <MDBCol className="mb-2">
    <MDBCardImage
      src={`http://localhost:3009/${project2thumbnail}`}
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
    onChange={handleThumbnail2FileChange}
  />

  <MDBBtn type="submit" color="primary" className="mr-2">
    Save
  </MDBBtn>
</form>


</MDBCardBody>
  </MDBCard>
</div>





{/* //////////////////////// PROJECT 3 ////////////////////////// */}

<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
  <MDBCard style={{ maxWidth: '600px', height: '700px', boxShadow: 'none', border: 'transparent' }}>
    <MDBCardBody>
      <MDBTypography variant="h5" className="text-center mb-0">
        Project 3
      </MDBTypography>

      
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>  
  <label htmlFor="project3title">PROJECT3 TITLE:</label>
  <input
    type="text"
    name="project3title"
    value={project3title}
    onChange={handleTitle3Change}
  />

  <label htmlFor="project3gitlink">PROJECT3 GIT-LINK:</label>
  <input
    type="text"
    name="project3gitlink"
    value={project3gitlink}
    onChange
    ={handleGitlink3Change}
  />

<label htmlFor="project3demolink">PROJECT3 DEMO-LINK:</label>
  <input
    type="text"
    name="project3demolink"
    value={project3demolink}
    onChange={handleDemolink3Change}
  />

<label htmlFor="project3description">PROJECT3 DESCRIPTION:</label>
  <input
    type="text"
    name="project3description"
    value={project3description}
    onChange={handleDescription3Change}
  />

</div>


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
  const selectedSkills3 = selectedOptions ? selectedOptions.map(option => option.value) : [];
  setSelectedValuesSkills3(selectedSkills3);
}}
value={(Array.isArray(selectedValuesSkills3) ? selectedValuesSkills3 : []).map((skill) => ({ value: skill, label: skill }))}
getOptionLabel={(option) => (
  <div>
    {/* Skill icon */}
    <img
      src={skillIcons[option.value]}
      alt={option.value}
      style={{ width: '20px', height: '20px', marginRight: '5px' }}
    />
    {option.label}
  </div>
)}
isOptionSelected={(option) => (Array.isArray(selectedValuesSkills3) ? selectedValuesSkills3.some(skill => skill === option.value) : false)}
isOptionDisabled={(option) => (Array.isArray(selectedValuesSkills3) ? selectedValuesSkills3.some(skill => skill === option.value) : false)}
/>


</div>


<form id="cert3" onSubmit={uploadCert3}>
  <MDBCol className="mb-2">
    <MDBCardImage
      src={`http://localhost:3009/${project3thumbnail}`}
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
      document.getElementById('cert3input').click();
    }}
  >
    Edit
  </MDBBtn>

  <input
    type="file"
    id="cert3input"
    style={{ display: 'none' }}
    onChange={handleThumbnail3FileChange}
  />

  <MDBBtn type="submit" color="primary" className="mr-2">
    Save
  </MDBBtn>
</form>


</MDBCardBody>
  </MDBCard>
</div>




</div>


</MDBContainer>   
        
      );
    };


       
        





export default UploadProjects;