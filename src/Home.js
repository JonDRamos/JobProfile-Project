import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

function Home() {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(12);

 function handleLoadMore() {
   setVisibleCards(prev => prev + 6);
  }

  useEffect(() => {
    axios.get('http://localhost:3001/profiles')
      .then(response => setCards(response.data))
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


  return (
    <div className="container">
      <div className="row">
        {cards.slice(0, visibleCards).map(card => (
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={card.id}>
            <div className="card border" style={{ height: '300px' }}>
            <Card.Title>{card.firstname} {card.lastname}</Card.Title>
            <Card.Text>{card.title}</Card.Text>
            <Card.Title>{card.summary}</Card.Title>
            <Card.Text>{card.email}</Card.Text>
            </div>
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