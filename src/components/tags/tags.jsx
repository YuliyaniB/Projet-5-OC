import React from "react";
import "./tags.scss";

function Tags({content}) {
  return (
    <div className="tag-container">
      <p className="tag-txt">{content}</p>
    </div>
  );
}

export default Tags;
