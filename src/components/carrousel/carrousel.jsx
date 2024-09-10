import React, { useState } from "react";
import "./carrousel.scss";
import leftArrow from "../../assets/Left-arrow.png";
import rightArrow from "../../assets/Right-arrow.png";

export default function Carrousel({ images }) {
  // Gestion de l'état pour suivre l'image actuellement affichée dans le carrousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="carousel">
      {/* On affiche le carrousel seulement s'il y a des images dans la liste */}
      {images.length > 0 && (
        <div className="carousel-inner">
          <button className="carousel-button prev" onClick={prevImage}>
            <img src={leftArrow} alt="Précédent" className="arrow-icon" />
          </button>
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Carrousel ${currentIndex + 1}`}
            className="carousel-image"
          />
          <button className="carousel-button next" onClick={nextImage}>
            <img src={rightArrow} alt="Suivant" className="arrow-icon" />
          </button>
        </div>
      )}
    </section>
  );
}
