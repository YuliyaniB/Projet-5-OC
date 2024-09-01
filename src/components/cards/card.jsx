import React from "react";
import "../../styles/card.scss";

function Card({ id, image, titre }) {
  return (
    <section className="card" id={id}>
      <img src={image} alt="Card" />
      <div className="shadow"></div>
      <p>{titre}</p>
    </section>
  );
}

export default Card;
