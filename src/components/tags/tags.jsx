import React from "react";
import "./tags.scss";

function Tags({content}) {
  return (
    <div className="tag-container">
      <ul className="tag-txt">
        {content.map((content, id) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;
