import React from "react";
import "./host.scss";

export default function Host({name, picture}) {
  return (
    <div className="host-container">
      <h3 className="host-name">{name}</h3>
      <img src={picture} alt="Host" className="host-picture" />
    </div>
  );
}
