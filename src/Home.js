import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import "./Home.css";
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";



function Home() {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(18);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchCityTerm, setSearchCityTerm] = useState("");
  const [searchNameTerm, setSearchNameTerm] = useState("");

  const [searchQuery, setSearchQuery] = useState('');




 function handleLoadMore() {
   setVisibleCards(prev => prev + 6);
  }
  useEffect(() => {
    axios.get('http://localhost:3009/profiles')
      .then(response => {
        const shuffledCards = response.data.sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
        
        
      })
      .catch(error => console.error(error));
  }, []);

 
  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setVisibleCards(prev => prev + 6);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);


  function handleSearch(event) {
    setSearchQuery(event.target.value.toLowerCase());
  }
  
  return (

<div className="homePage">


<div className="container-fluid p-0" style={{ overflowX: 'hidden', marginBottom: '-100px' }}>
  <div className="searchcontainer" style={{ height: '900px', display: 'flex', flexDirection: 'column', background: 'white' }}>
    <div className="row">
      <div className="col-md-12 text-center" style={{ fontWeight:'', lineHeight:'130px', letterSpacing:'0px', fontSize:'145px',marginBottom: '40px', color: 'black' }}>
        MORE THAN
        <br>
        </br> A CV
      </div>
    </div>
    {/* <div className="row">
      <div className="col-md-6">
        <div className="search-1">
          <i className="bx bx-search-alt"></i>
          <input
            type="text"
            placeholder="Search by name"
            value={searchNameTerm}
            onChange={(e) => setSearchNameTerm(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="search-2">
          <i className="bx bxs-map"></i>
          <input
            type="text"
            value={searchCityTerm}
            onChange={(e) => setSearchCityTerm(e.target.value)}
            style={{ width: "100%" }}
            placeholder="Enter city name"
          />
        </div>
      </div>
    </div> */}
  </div>
</div>


<br></br>
<br></br>


<div className="container-fluid p-5 " style={{ overflowX: 'hidden', background:'white' }}>
      <div className="row">
     
     
      {cards
   .filter((card) =>
   (card.firstname.toLowerCase().includes(searchNameTerm.toLowerCase()) ||
   card.lastname.toLowerCase().includes(searchNameTerm.toLowerCase())) &&
   card.city.toLowerCase().includes(searchCityTerm.toLowerCase())

  )
  .slice(0, visibleCards)
  .map((card, index) =>  (
    
          <div className= "col-sm-6 col-md-4 col-lg-3 my-2 card-no-radius"
          key={card.id}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          data-index={index}
          >



<Link to={`/PublicProfile/${card.id}`} key={card.id}>
<div className={`card ${hoveredCard === index ? 'd-none' : ''}`}>
  <div
    className="card border"
    style={{
      height: '245px',
      position: 'relative',
    }}
  >
    {card.project1 && (
      <div
        className="d-flex align-items-end justify-content-center"
        style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Card.Img
          variant="top"
          src={`http://localhost:3009/${card.imageFile}`}
          alt="Profile"
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
        />
        <div
          className="card-body text-left"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, .05))',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            color: 'white',
            margin:'0px',
            padding: '0px'
          }}
        >
          
          <div style={{ background:  'rgba(68, 70, 84, 0.4)', width: 'auto', height: 'auto', padding:'5px', borderRadius:'2px' }}>
          <Card.Title style={{ lineHeight: '1', fontSize:'17px' }}>{card.firstname} {card.lastname}, current title {card.title}    </Card.Title>
          {/* <Card.Text style={{ lineHeight: '.5' }}>{card.city}</Card.Text> */}
          <Card.Title style={{ lineHeight: '1', fontSize:'14px' }}>{card.city}, Country {card.country} </Card.Title>
          {/* <Card.Text style={{ lineHeight: '1' }}>{card.title} @ "Current Company"</Card.Text> */}
          </div>
        </div>
      </div>
    )}
  </div>
</div>








    {hoveredCard === index && (
      <div className="hover-card position-relative">
       <div className="card rounded-2" style={{ height: '245px', border: '2px solid lightgrey' }}>
        {/* {card.imageFile && (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              zIndex: -2,              
             }}
          >
            <Card.Img
              className="hover-image"
              variant="top"
              src={`http://localhost:3009/${card.imageFile}`}
              alt="Profile"
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
                pointerEvents: 'none',
              }}
            />
          </div>
        )} */}


        <div
          className="card-body text-center"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            position: 'absolute',
            color: 'white',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '0px',
            
          }}
        >


      
         
<div className="mt-4 mb-2" style={{ width: '100%', height: '100%' }}>
  <video
    id="videoElement"
    src={`http://localhost:3009/${card.videoFile}`}
    type="video/mp4"
    style={{ left: '0px', top: '0px', width: '100%', height: '100%', position: 'absolute' }}
    onMouseEnter={() => {
      const videoElement = document.getElementById('videoElement');
      if (videoElement) {
        videoElement.play();
      }
    }}
    onMouseLeave={() => {
      const videoElement = document.getElementById('videoElement');
      if (videoElement) {
        videoElement.pause();
      }
    }}
  ></video>
</div>
 </div>
</div>
 </div>
    )}


</Link>
          </div>
         
        ))}
      </div>

      {visibleCards < cards.length && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
    </div>
  );
}


export default Home;