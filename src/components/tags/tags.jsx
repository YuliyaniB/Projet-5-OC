import React from "react";
import "./tags.scss";

export default function Tags({ content }) {
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
