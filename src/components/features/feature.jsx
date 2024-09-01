import React from "react";
import arrowUp from "../../assets/arrow-up.png"

function Feature({ texte }) {
  return (
    <section>
      <h2>{texte}</h2>
      <img src={arrowUp} alt="Arrow" />
    </section>
  );
}

export default Feature;
