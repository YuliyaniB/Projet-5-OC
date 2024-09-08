import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo Kasa"></img>
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}


