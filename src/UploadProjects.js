import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBCard, MDBCol, MDBCardImage, MDBCardBody, MDBBtn, MDBInput,MDBTypography } from 'mdb-react-ui-kit';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

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





function UploadProjects(props) {

/////////SKILLS & LANGUAGES USED IN PROJECT////////////////////
const [stack_project1, setstack_project1] = useState({ skills2: []});


///////////////////////  Project 1   //////////////////////////////////////////
const [title_project1, settitle_project1] = useState("");

const [gitlink_project1, setgitlink_project1 ] = useState("");
const [demolink_project1, setdemolink_project1 ] = useState("");
const [description_project1, setdescription_project1 ] = useState("");
// const [isfullstack_project1, setisfullstack_project1 ] = useState("");
const [thumbnail_project1, setthumbnail_project1 ] = useState("");

const navigate = useNavigate();




const uploadproject1 = async (e) => {
  e.preventDefault();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  const formData = new FormData();


  formData.append("title_project1",title_project1 );
  // formData.append("stack_project1", stack_project1);
  formData.append("gitlink_project1", gitlink_project1);
  formData.append("demolink_project1", demolink_project1);
  formData.append("description_project1", description_project1);
  // formData.append("isfullstack_project1", isfullstack_project1);
  formData.append("thumbnail_project1", thumbnail_project1);

  // stack_project1.skills.forEach((skill) => {
  //   formData.append("skills[]", skill);
  // });

  Axios.put(`http://localhost:3009/project1/${userId}`, formData, {
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




const uploadprojectskills = async (e) => {
  e.preventDefault();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  const formData = new FormData();
  stack_project1.skills2.forEach((skills2) => {
    formData.append("skills2[]", skills2);
  });

  console.log("Skills data:", stack_project1.skills2); 

  Axios.put(`http://localhost:3009/project1skills/${userId}`, formData, {
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



  Axios.get(`http://localhost:3009/project1/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((response) => {
    settitle_project1(response.data.title_project1);
    // setstack_project1(response.data.stack_project1);
    setgitlink_project1(response.data.gitlink_project1);
    setdemolink_project1(response.data.demolink_project1);
    setdescription_project1(response.data.description_project1);
    // setisfullstack_project1(response.data.isfullstack_project1);
    setthumbnail_project1(response.data.thumbnail_project1);
  })
  .catch((error) => {
    console.log(error);
  });
}, []);


const handlethumbnail_project1FileChange = (e) => {
  const file = e.target.files[0];
  setthumbnail_project1(file); // Update the cert1 state with the selected file
};


// const handletitle_project1Change = (e) => {
//   settitle_project1(e.target.value);
// };

// const handlestack_project1Change = (e) => {
//   setstack_project1(e.target.value);
// };

// const handlegitlink_project1Change = (e) => {
//   setgitlink_project1(e.target.value);
// };

// const handledemolink_project1Change = (e) => {
//   setdemolink_project1(e.target.value);
// };

// const handledescription_project1Change = (e) => {
//   setdescription_project1(e.target.value);
// };

// const handleisfullstack_project1Change = (e) => {
//   setisfullstack_project1(e.target.value);
// };






/////////////////////////////////////// .GET PROFILE (SKILLS) /////////////////////////////////////////
// useEffect(() => {
//   const token = sessionStorage.getItem("token");
//   const userId = sessionStorage.getItem("userId");

//   Axios.get(`http://localhost:3009/project1skills/${userId}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   })
//     .then((response) => {
//       const skillsData = response.data.skills2 || []; // Check if skillsData exists in the response and default to an empty array if it doesn't
//       setstack_project1((prevValues) => ({
//         ...prevValues,
//         skills2: skillsData,
//       }));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);

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










  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


return (
  <MDBContainer>   
<MDBCard style={{ maxWidth: '600px', height: '700px', boxShadow: 'none', border: 'transparent' }}>
    <MDBCardBody>
      <MDBTypography variant="h5" className="text-center mb-0">
        Project 1
      </MDBTypography>

      <form id="project1" onSubmit={uploadproject1}>
      
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>

  <label htmlFor="degree1">Title:</label>
  <input
    type="text"
    name="title_project1"
    value={title_project1}
    onChange={(e) => settitle_project1(e.target.value)}
    required
  />

   {/* <label htmlFor="degree1">Stack Used:</label>
  <input
    type="text"
    name="handletitle_project1Change"
    value={handletitle_project1Change}
    onChange={handletitle_project1Change}
  /> */}

   <label htmlFor="degree1">GitLink</label>
  <input
    type="text"
    name="gitlink_project1"
    value={gitlink_project1}
    onChange={(e) => setgitlink_project1(e.target.value)}
    required
  />
  
   <label htmlFor="degree1">Live/Demo Link</label>
  <input
    type="text"
    name="demolink_project1"
    value={demolink_project1}
    onChange={(e) => setdemolink_project1(e.target.value)}
    required
  />


  
   <label htmlFor="degree1">Description:</label>
  <input
    type="text"
    name="description_project1"
    value={description_project1}
    onChange={(e) => setdescription_project1(e.target.value)}
    required
  />

   {/* <label htmlFor="degree1">Is this a fullstack project (ie. frontend + backend + database):</label>
  <input
    type="text"
    name="handleisfullstack_project1Change"
    value={handleisfullstack_project1Change}
    onChange={handleisfullstack_project1Change}
  /> */}



{/* /////////////////////// SKILLS   RETURN ////////////////////////////// */}
<div>
  <h5 style={{ fontWeight: 'bold', marginTop: '20px' }}>Skills</h5>
  <Select
    isMulti
    options={[
      { value: 'anaconda', label: 'anaconda' },
      { value: 'androidstudio', label: 'androidstudio' },
      { value: 'angularjs', label: 'angularjs' },
      { value: 'ansible', label: 'ansible' },
      { value: 'apollo', label: 'apollo' },
      { value: 'balenaetcher', label: 'balenaetcher' },
      { value: 'c', label: 'c' },
      { value: 'clouddevelopment', label: 'clouddevelopment' },
      { value: 'codeblocks', label: 'codeblocks' },
      { value: 'c++', label: 'c++' },
      { value: 'csharp', label: 'csharp' },
      { value: 'css3', label: 'css3' },
      { value: 'drupal', label: 'drupal' },
      { value: 'fedora', label: 'fedora' },
      { value: 'flask', label: 'flask' },
      { value: 'flutter', label: 'flutter' },
      { value: 'forrst', label: 'forrst' },
      { value: 'gatsbyjs', label: 'gatsbyjs' },
      { value: 'graphql', label: 'graphql' },
      { value: 'html5', label: 'html5' },
      { value: 'icue', label: 'icue' },
      { value: 'intellijidea', label: 'intellijidea' },
      { value: 'javascript', label: 'javascript' },
      { value: 'jupyter', label: 'jupyter' },
      { value: 'linuxserver', label: 'linuxserver' },
      { value: 'mariadb', label: 'mariadb' },
      { value: 'microsoftvisio2019', label: 'microsoftvisio2019' },
      { value: 'opencv', label: 'opencv' },
      { value: 'php', label: 'php' },
      { value: 'prometheus', label: 'prometheus' },
      { value: 'pullrequest', label: 'pullrequest' },
      { value: 'rproject', label: 'rproject' },
      { value: 'ruby', label: 'ruby' },
      { value: 'sourcecode', label: 'sourcecode' },
      { value: 'spyder', label: 'spyder' },
      { value: 'spyderide5', label: 'spyderide5' },
      { value: 'swift', label: 'swift' },
      { value: 'swiftui', label: 'swiftui' },
      { value: 'terraform', label: 'terraform' },
      { value: 'typescript', label: 'typescript' },
      { value: 'undp', label: 'undp' },
      { value: 'visualstudio', label: 'visualstudio' },
      { value: 'sourcetree', label: 'sourcetree' }
    ]}
    onChange={(selectedOptions) => {
      const stack = selectedOptions ? selectedOptions.map(option => option.value) : [];
      setstack_project1(prevValues => ({
        ...prevValues,
        skills2: stack
      }));
    }}
    value={stack_project1.skills2 ? stack_project1.skills2.map(skills2 => ({ value: skills2, label: skills2 })) : []}
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
    isOptionSelected={(option) => stack_project1.skills2.includes(option.value)}
    isOptionDisabled={(option) => stack_project1.skills2.includes(option.value)}
  />
</div>

<MDBBtn type="submit" color="primary" className="mr-2" onClick={uploadprojectskills}>
  Save Skills
</MDBBtn>


</div>







  <MDBCol className="mb-2">
    <MDBCardImage
      src={`http://localhost:3009/${thumbnail_project1}`}
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
      document.getElementById('project1input').click();
    }}
  >
    Edit
  </MDBBtn>

  <input
    type="file"
    id="project1input"
    style={{ display: 'none' }}
    onChange={handlethumbnail_project1FileChange}
  />

  <MDBBtn type="submit" color="primary" className="mr-2">
    Save
  </MDBBtn>
</form>



    </MDBCardBody>
  </MDBCard>
  </MDBContainer>   
);



};
 
    export default UploadProjects;







