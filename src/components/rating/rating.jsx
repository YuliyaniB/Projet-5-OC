import React from "react";
import "./rating.scss";
import activeStar from "../../assets/star-active.png";
import inactiveStar from "../../assets/star-inactive.png";

export default function Rating({stars}) {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {array.map((arrayElement) =>
        stars >= arrayElement ? (
          <img key={arrayElement.toString()} src={activeStar} alt="Full star" />
        ) : (
          <img
            key={arrayElement.toString()}
            src={inactiveStar}
            alt="Empty star"
          />
        )
      )}
    </div>
  );
}

