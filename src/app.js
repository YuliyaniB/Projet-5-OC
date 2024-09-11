import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Accomodation from "./pages/accomodation/accomodation";
import Error from "./pages/error/error";

export default function App() {
  return (
    <Router>
      {" "}
      {/* Le composant Router enveloppe l'application pour permettre la navigation entre les routes. */}
      <Header />{" "}
      {/* Inclusion du Header qui sera visible sur toutes les pages. */}
      <Routes>
        {/* Route pour la page d'accueil qui s'affiche quand l'utilisateur visite "/". */}
        <Route path="/" element={<Home />} />
        {/* Route pour la page "À propos", affichée lorsque l'utilisateur visite "/about". */}
        <Route path="/about" element={<About />} />
        {/* Route pour afficher les détails d'un logement spécifique, avec un paramètre dynamique "accomodationId". */}
        <Route
          path="/accomodation/:accomodationId"
          element={<Accomodation />}
        />
        {/* Route de fallback pour toute URL non reconnue, menant à une page d'erreur. */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />{" "}
      {/* Inclusion du Footer, également visible sur toutes les pages. */}
    </Router>
  );
}
