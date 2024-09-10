import React, { useState, useEffect } from "react";
import "./rating.scss";
import activeStar from "../../assets/star-active.png";
import inactiveStar from "../../assets/star-inactive.png";

export default function Rating({ stars }) {
  const [rating, setRating] = useState(stars); // Initialisation de l'état avec la valeur des 'stars'
  const array = [1, 2, 3, 4, 5];

  // Utilisation de useEffect pour mettre à jour l'état si les 'stars' changent
  useEffect(() => {
    setRating(stars);
  }, [stars]);

  return (
    <div className="rating">
      {array.map((arrayElement) =>
        rating >= arrayElement ? (
          <img key={arrayElement.toString()} src={activeStar} alt="Full star" />
        ) : (
          <img key={arrayElement.toString()} src={inactiveStar} alt="Empty star" />
        )
      )}
    </div>
  );
}

