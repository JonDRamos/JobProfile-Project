import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

function PublicProfile() {
  const { userId } = useParams();


  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  // Add the remaining state variables...

  useEffect(() => {
    console.log(userId); // Log the userId value to verify it

    axios.get(`http://localhost:3009/pubprofile/${userId}`)
      .then((response) => {
       
        setUserFirstName(response.data.firstname);
        setUserLastName(response.data.lastname);
        console.log(response.data);
        // Update the remaining state variables with the received data...
      })
      .catch(error => console.error(error));
  }, [userId]);
  

  return (
    <MDBContainer className="py-0" style={{ backgroundColor: 'transparent' }}>
      <MDBCard style={{ background: "white", margin: "20px", border: '1px black solid', maxWidth: "580px" }}>
        <MDBCardBody>
        <div style={{ fontWeight: 'bolder' }}>
  {userFirstName} {userLastName}
</div>
          {/* Add the remaining JSX components that display the other state variables */}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default PublicProfile;
