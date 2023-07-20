import React from "react";
import { Card } from "react-bootstrap";

function UserItem({ card, index, hoveredCard, setHoveredCard, setSelectedUserId }) {
  const handleMouseEnter = () => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleClick = () => {
    setSelectedUserId(card.id);
  };

  return (
    <div
      className={`col-sm-6 col-md-4 col-lg-3 my-2 card-no-radius ${
        hoveredCard === index ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            {card.firstName} {card.lastName}
          </div>
          <div className="card-text">{card.city}</div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
