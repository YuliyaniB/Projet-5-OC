import React, { useState } from "react";
import "./collapse.scss";
import arrowDown from "../../assets/arrow-down.png";

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggle}>
        <h2>{title}</h2>
        <img
          className={!open ? "arrow" : "arrow arrow--opened"}
          src={arrowDown}
          alt="arrow"
        />
      </div>
      {open && <div className="collapse-content">{content}</div>}
    </div>
  );
}
