import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Sélection de l'élément HTML avec l'id "root" 
// où l'application React sera intégrée.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
