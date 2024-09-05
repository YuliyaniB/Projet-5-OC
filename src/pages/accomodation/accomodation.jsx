import React from "react";
import { useParams } from "react-router-dom";
import "./accomodation.scss";
import ads from "../../ads.json";
import Carrousel  from "../../components/carrousel/carrousel";
import Tags from "../../components/tags/tags";
import Host from "../../components/host/host";
import Rating from "../../components/rating/rating";
import Collapse from "../../components/collapse/collapse";
//import ky from "ky";


function Accomodation() {

  

  const { accomodationId } = useParams();
  const accomodation = ads.find((i) => i.id === accomodationId);
  

  return (
    <main className="accomodation-page">
      <Carrousel images={accomodation.pictures}/>
      <section className="main-section">
        <div className="accomodation-info">
          <div className="accomodation-title">
            <h1>{accomodation.title}</h1>
            <h3>{accomodation.location}</h3>
          </div>
          <div className="tags">
            <Tags content={accomodation.tags} />
          </div>
        </div>
        <div className="host-info">
          <div className="host-rate">
            <Rating stars={accomodation.rating} />
          </div>
          <div className="host-profile">
            <Host
              name={accomodation.host.name}
              picture={accomodation.host.picture}
            />
          </div>
        </div>
      </section>
      <section className="accomodation-collapse">
        <Collapse title="Description" content={accomodation.description} />
        <Collapse title="Équipements" content={accomodation.equipments} />
      </section>
    </main>
  );
}

export default Accomodation;
