import React, {useState, useEffect} from "react";
import Axios from "axios";

// / useEffect

function Profile() {
  const [username, setUsername] = useState(null);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSumfmary] = useState("");
  const [email, setEmail] = useState("");



    useEffect(() => {
      const fetchUser = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await Axios.get("profileauth", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUsername(response.data);
          setFirstName(response.data.name);
          setCity(response.data.city);
          setTitle(response.data.title);
          setUsername(response.data);
          setLastName(response.data.name);
          setCity(response.data.city);
          setTitle(response.data.title);
        } catch (error) {
          console.error(error);

          
        }
      };
      fetchUser();
    }, []);

    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("token");
        const response = await Axios.put(
          "/api/profile",
          { username, city, title },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUsername(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (!username) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>Welcome, {username}!</h1>
  <form onSubmit={handleUpdate}>
    <label>Name:</label>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <label>City:</label>
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
    <label>Title:</label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <button type="submit">Update</button>
  </form>
</div>
  )}


export default Profile;