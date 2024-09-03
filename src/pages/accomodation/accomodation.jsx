import React from "react";
import { useParams } from "react-router-dom";
import "./accomodation.scss";
import ads from "../../ads.json";
import Tags from "../../components/tags/tags";
import Host from "../../components/host/host"
import Rating from "../../components/rating/rating";
import Collapse from "../../components/collapse/collapse";

function Accomodation() {
  //state (état, données)
  const { accomodationId } = useParams();
  const accomodation = ads.find((i) => i.id === accomodationId);
  // comportements

  // affichage ( render )

  return (
    <main className="accomodation-page">
      <section className="carroussel"></section>
      <div className="tags">
        <Tags content={accomodation.tags} />
      </div>
      <div className="host-container">
        < Host name={accomodation.host.name} picture={accomodation.host.picture}/>
      </div>
      <div className="host-rate">
        < Rating stars={accomodation.rating}/>
      </div>

      <div className="accomodation-collapse">
        <Collapse title="Description" content={accomodation.description} />
        <Collapse title="Équipements" content={accomodation.equipments} />
      </div>
    </main>
  );
}

export default Accomodation;
