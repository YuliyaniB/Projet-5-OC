import React from "react";
import "./collapse.scss";
import arrowDown from "../../assets/arrow-down.png"

export default function Collapse() {
  return (
    <div className="collapse">
      <div className="collapse-title">
        <h2>Title</h2>
        <img src={arrowDown} alt="arrow" />
      </div>
      <div className="collapse-content">
        <span></span>
      </div>
    </div>
  );
}
