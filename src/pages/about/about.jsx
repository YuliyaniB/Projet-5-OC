import React from "react";
import Banner from "../../components/banner/banner";
import BannerAbout from "../../assets/banner-about.png";
import Feature from "../../components/features/feature"

function About() {
  return (
    <main>
      <Banner image={BannerAbout} texte="" />
      <Feature texte="Fiabilité" />
      <Feature texte="Respect" />
      <Feature texte="Service" />
      <Feature texte="Sécurité" />
    </main>
  );
}

export default About;
