import React from "react";
import { useState } from "react";
import ads from "../../ads.json";
import Tags from "../../components/tags/tags";
import Collapse from "../../components/collapse/collapse";

function Accomodation() {
  //state (état, données)

  // comportements

  // affichage ( render )

  return (
    <div className="accomodation-page">
      <div className="tags">
        <Tags content="Salut" />
        <Tags content="Bye" />
        <Tags content="Yakalelo" />
      </div>
      <div className="accomodation-collapse">
        <Collapse />
        <Collapse />

      </div>
    </div>
  );
}

export default Accomodation;
