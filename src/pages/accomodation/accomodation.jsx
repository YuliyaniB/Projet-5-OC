import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./accomodation.scss";
import Carrousel from "../../components/carrousel/carrousel";
import Tags from "../../components/tags/tags";
import Host from "../../components/host/host";
import Rating from "../../components/rating/rating";
import Collapse from "../../components/collapse/collapse";

export default function Accomodation() {
  // Récupération de l'ID depuis les paramètres de l'URL
  const { accomodationId } = useParams();
  // État pour stocker les données de l'hébergement
  const [accomodation, setAccomodation] = useState(null);
  // État pour gérer les erreurs de fetch
  const [error, setError] = useState(null); 

  // Utilisation de useEffect pour récupérer les données 
  //via fetch afin de préparer les futurs appels API
  useEffect(() => {
    fetch("/accomodation.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau : " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // Trouve l'hébergement correspondant
        const foundAccomodation = data.find((i) => i.id === accomodationId);
        // Mise à jour de l'état avec les données trouvées
        setAccomodation(foundAccomodation); 
      })
      .catch((error) => {
        setError(error.message); // Gestion des erreurs
        console.error("Erreur lors du fetch:", error);
      });
  }, [accomodationId]); // Effectue le fetch à chaque fois que l'ID change

  if (error) {
    return <div>Erreur : {error}</div>; // Affiche une erreur si le fetch échoue
  }

  if (!accomodation) {
    // Affiche un message de chargement tant que les données ne sont pas prêtes
    return <div>Chargement...</div>; 
  }

  // Diviser le nom complet en prénom et nom
  const [firstName, lastName] = accomodation.host.name.split(' '); 

  return (
    <main className="accomodation-page">
      <Carrousel images={accomodation.pictures} />
      <section className="main-section">
        <div className="accomodation-info">
          <div className="accomodation-title">
            <h1>{accomodation.title}</h1>
            <h3>{accomodation.location}</h3>
          </div>
          <Tags content={accomodation.tags} />
        </div>
        <div className="host-info">
          <Rating stars={accomodation.rating} />
          <Host
            firstName={firstName}
            lastName={lastName}
            picture={accomodation.host.picture}
          />
        </div>
      </section>
      <section className="accomodation-collapse">
        <Collapse title="Description" content={accomodation.description} />
        <Collapse title="Équipements" content={accomodation.equipments} />
      </section>
    </main>
  );
}
