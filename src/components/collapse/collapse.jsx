import React, { useState } from "react";
import "./collapse.scss";
import arrowDown from "../../assets/arrow-down.png";

export default function Collapse({ title, content }) {
  // Gérer l'état d'ouverture / fermeture du collapse
  const [open, setOpen] = useState(false);
  // Fonction pour inverser l'état d'ouverture/fermeture
  const toggle = () => {
    setOpen(!open); // Si ouvert, on ferme, si fermé, on ouvre
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggle}>
        <h2>{title}</h2>
        <img
          className={!open ? "arrow" : "arrow arrow--opened"}
          src={arrowDown}
          alt="arrow"
        />
      </div>
      <div className={`collapse-content ${open ? "open" : ""}`}> {/* Détermine la classe CSS à appliquer en fonction de l'état ouvert ou fermé du collapse*/}
        {Array.isArray(content) ? ( // Si "content" est un tableau
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li> // Chaque élément est rendu dans une balise <li>
            ))}
          </ul>
        ) : (
          <p>{content}</p> // Si ce n'est pas un tableau, on affiche simplement le texte
        )}
      </div>
    </div>
  );
}
