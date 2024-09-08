import React from "react";
import "./about.scss";
import aboutList from "../../data/about.json"
import Banner from "../../components/banner/banner";
import BannerAbout from "../../assets/banner-about.png";
import Collapse from "../../components/collapse/collapse";

export default function About() {
  return (
    <main>
      <Banner image={BannerAbout} texte="" />
      <section className="about-collapse">
        {aboutList.map((item) => (
          <Collapse
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </section>
    </main>
  );
}
