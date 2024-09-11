import React from "react";
import "./host.scss";

export default function Host({ firstName, lastName, picture }) {
  return (
    <div className="host-container">
      <div className="host-name">
        <p className="host-first-name">{firstName}</p>
        <p className="host-last-name">{lastName}</p>
      </div>
      <img src={picture} alt="Host" className="host-picture" />
    </div>
  );
}
