import React, { useEffect, useState } from "react";
import "./home.scss";
import Banner from "../../components/banner/banner";
import BannerHome from "../../assets/banner-home-optimal.webp";
import { NavLink } from "react-router-dom";
import Card from "../../components/cards/card";

export default function Home() {
  const [ads, setAds] = useState([]); // État pour stocker les données

  // Utilisation de useEffect pour faire un fetch
  useEffect(() => {
    fetch("/ads.json") // Mettre le bon chemin vers ton fichier JSON
      .then((response) => response.json()) // Conversion en JSON
      .then((data) => setAds(data)) // Mise à jour de l'état avec les données récupérées
      .catch((error) => console.error("Erreur lors du fetch:", error));
  }, []); // Le tableau vide [] signifie que cet effet ne s'exécutera qu'une seule fois au montage du composant

  return (
    <main className="home-page">
      <Banner image={BannerHome} texte="Chez vous, partout et ailleurs." />
      <section className="gallery">
        {ads.map((accomodation) => (
          <NavLink key={accomodation.id} to={"/ads/" + accomodation.id + "/#"}>
            <Card
              key={accomodation.id}
              id={accomodation.id}
              image={accomodation.cover}
              titre={accomodation.title}
            />
          </NavLink>
        ))}
      </section>
    </main>
  );
}
