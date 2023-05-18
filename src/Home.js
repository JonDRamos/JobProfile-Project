import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import "./Home.css";
import { Carousel } from 'react-bootstrap';



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



    <div className="container">

<input type="text" value={searchCityTerm} onChange={e => setSearchCityTerm(e.target.value)} placeholder="Enter city name" />

<input
  type="text"
  placeholder="Search by name"
  value={searchNameTerm}
  onChange={(e) => setSearchNameTerm(e.target.value)}
/>



      <div className="row">
      {cards
   .filter((card) =>
   (card.firstname.toLowerCase().includes(searchNameTerm.toLowerCase()) ||
   card.lastname.toLowerCase().includes(searchNameTerm.toLowerCase())) &&
   card.city.toLowerCase().includes(searchCityTerm.toLowerCase())

  )
  .slice(0, visibleCards)
  .map((card, index) =>  (
          <div className= "col-sm-4 col-md-6 col-lg-4 col-xl-3 mb-3" 
          key={card.id}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          data-index={index}
          >



    <div className={`card ${hoveredCard === index ? 'd-none' : ''}`}>
    <div className="card border" style={{ height: '350px', position: "relative" }}>
            {card.project1 && (
              <div
              className="d-flex align-items-center justify-content-center"
              style={{
                height: '90%',
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
              </div>
            )}
              <div
              className="card-body text-center"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, .05))',
              }}
            >
            <Card.Title style={{ lineHeight: '1.5' }}>{card.firstname} {card.lastname}</Card.Title>
            <Card.Text style={{ lineHeight: '1' }}>{card.city}</Card.Text>
            <Card.Text style={{ lineHeight: '1' }}>{card.title}</Card.Text>
            
           </div>
            

            </div>
    </div>



    {hoveredCard === index && (
      <div className="hover-card position-relative">
                   <div className="card border" style={{ height: '350px' }}>
            {card.imageFile && (
              <div
              className="d-flex align-items-center justify-content-center mx-auto"
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
            )}
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
          justifyContent: 'flex-end',
          padding: '20px',
        }}
      >

<a href={`http://localhost:3009/Profile/:id`} target="_blank" rel="noopener noreferrer">

            <Card.Title style={{ lineHeight: '2',marginBottom: '60px'  }}>{card.firstname} {card.lastname}</Card.Title>
            
</a>
          

            <Carousel>
            <Carousel.Item>
            <a href={`${card.project1link}`} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100"
                src={`http://localhost:3009/${card.project1}`}
                alt="Project 1"
              /> </a>
            </Carousel.Item>

            <Carousel.Item>
            <a href={`${card.project2link}`} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100"
                src={`http://localhost:3009/${card.project2}`}
                alt="Project 2"
              /> </a>
            </Carousel.Item>

            <Carousel.Item>
            <a href={`${card.project3link}`} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100"
                src={`http://localhost:3009/${card.project3}`}
                alt="Project 3"
              /> </a>
            </Carousel.Item>

            <Carousel.Item>
            <a href={`${card.project4link}`} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100"
                src={`http://localhost:3009/${card.project4}`}
                alt="Project 4"
              /> </a>
            </Carousel.Item>

            
            <Carousel.Item>
            <a href={`${card.project5link}`} target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none' }} 
              >
              <img
                className="d-block w-100"
                src={`http://localhost:3009/${card.project5}`}
                alt="Project 5"
              /> </a>
            </Carousel.Item>
          </Carousel>            
           </div>
            

            </div>


      </div>
    )}



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
  );
}


export default Home;