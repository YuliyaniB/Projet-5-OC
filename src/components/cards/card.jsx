import React from "react";
import "./card.scss";

function Card({ id, image, titre }) {
  return (
    <article className="card" id={id}>
      <img src={image} alt="Card" />
      <p>{titre}</p>
    </article>
  );
}

export default Card;
