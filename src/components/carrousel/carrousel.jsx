import React, { useState } from "react";
import "./carrousel.scss";
import leftArrow from "../../assets/Left-arrow.png";
import rightArrow from "../../assets/Right-arrow.png";

export default function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="carousel">
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
