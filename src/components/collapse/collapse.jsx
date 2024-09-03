import React, { useState } from "react";
import "./collapse.scss";
import arrowDown from "../../assets/arrow-down.png";

export default function Collapse({title, content}) {
  //state (état, données)
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  // comportements

  // affichage ( render )
  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggle}>
        <h2>{title}</h2>
        <img src={arrowDown} alt="arrow" />
      </div>
      {open && <div className="collapse-content">{content}</div>}
    </div>
  );
}
