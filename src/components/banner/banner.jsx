import React from "react";
import "./banner.scss"

export default function Banner({ image, texte }) {
  return (
    <section className="banner">
      <img src={image} alt="banner"></img>
      <div className="text">
        <h1>{texte}</h1>
      </div>
    </section>
  );
}

