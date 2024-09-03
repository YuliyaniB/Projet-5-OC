import React from "react";
import { useParams } from "react-router-dom";
import "./accomodation.scss";
import ads from "../../ads.json";
import Tags from "../../components/tags/tags";
import Collapse from "../../components/collapse/collapse";

function Accomodation() {
  //state (état, données)
  const { accomodationId } = useParams()
  const accomodation = ads.find((i) => i.id === accomodationId)
  // comportements

  // affichage ( render )

  return (
    <div className="accomodation-page">
      <div className="tags">
        <Tags content={accomodation.tags} />
        
      </div>

      
        <div className="accomodation-collapse">
          <Collapse title="Description" content={accomodation.description} />
          <Collapse title="Équipements" content={accomodation.equipments} />
        </div>
      
    </div>
  );
}

export default Accomodation;
