import React, {useState, useEffect} from "react";
import Axios from "axios";



function Profile() {
    const [user, setUser] = useState({ //below is an object with Key:Values. useState are passing the values as an empty string "" for each Key
      email: "",
      username: "",
      password: "",
      city: "",
      title: "",
      summary: "",
      lastname: "",
      firstname: ""
    });

    const [updateStatus, setUpdateStatus] = useState("");
    const [deleteStatus, setDeleteStatus] = useState("");
    //these two will be used to provide a status update on whether the change/deletion of profile data was successfull.

   
    useEffect(() => {
        // Fetch user data from backend API
        Axios.get('http://localhost:3001/profiles', {
          withCredentials: true
        }).then((response) => {
          setUser(response.data);
        });
      }, []);


    const handleInputChange = (event) => { //this is tied to the onChange event in the return statement
        const {name, value} = event.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };

      const handleUpdate = (event) => {
        event.preventDefault();
        Axios.put("http://localhost:3001/update", {
            email: user.email,
            username: user.username,
            password: user.password,
            city: user.city,
            title: user.title,
            summary: user.summary,
            lastname: user.lastname,
            firstname: user.firstname
        }, {
            withCredentials: true
        }).then((response) => {
             setUpdateStatus(response.data.message);
        });
    };

    const handleDelete = () => {
        Axios.delete("http://localhost:3001/iduserprofiles", {
          withCredentials: true
        }).then((response) => {
          setDeleteStatus(response.data.message);
        });
      };
    
      return (
        <div className="profile">
          
            <form onSubmit={handleUpdate}>
            <label htmlFor="email">Email Address*</label>
            <input className="textInput" type="text" name="email" value={user.email} onChange={handleInputChange} placeholder="Enter your Email Address" required />
    
            <label htmlFor="username">Username*</label>
            <input className="textInput" type="username" name="username" value={user.username} onChange={handleInputChange} placeholder="Enter your Username" required />
    
            <label htmlFor="password">Password*</label>
            <input className="textInput" type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Enter your Password" required />

            <label htmlFor="title">Title</label>
            <input className="textInput" type="text" name="title" value={user.title} onChange={handleInputChange} placeholder="Enter your Title" />

            <label htmlFor="summary">Summary</label>
            <textarea className="textInput" name="summary" value={user.summary} onChange={handleInputChange} placeholder="Enter your Summary"></textarea>

            <label htmlFor="lastname">Last Name*</label>
            <input className="textInput" type="text" name="lastname" value={user.lastname} onChange={handleInputChange} placeholder="Enter your Last Name" required />

            <label htmlFor="firstname">First Name*</label>
            <input className="textInput" type="text" name="firstname" value={user.firstname} onChange={handleInputChange} placeholder="Enter your First Name" required />

                <button type="submit">Update</button>
                {updateStatus && <p>{updateStatus}</p>}

            </form>
                <button onClick={handleDelete}>Delete Account</button>
                {deleteStatus && <p>{deleteStatus}</p>}
        </div>
    );
}

export default Profile;