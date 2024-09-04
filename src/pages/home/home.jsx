import React, {useEffect, useState} from "react";
import "./home.scss";
import ads from "../../ads.json";
import Banner from "../../components/banner/banner";
import BannerHome from "../../assets/banner-home-optimal.webp";
import { NavLink } from "react-router-dom";
import Card from "../../components/cards/card";
import ky from "ky";

// faire un fetch avec Ky pour préparer la future API

 function Home() {

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

export default Home;
