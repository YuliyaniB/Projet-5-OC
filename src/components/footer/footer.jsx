import React from "react";
import logo from "../../assets/logo-footer.png";
import "./footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo Kasa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

