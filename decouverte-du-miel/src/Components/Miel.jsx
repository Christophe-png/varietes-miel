import React from "react";
import "./Miel.css";

function Miel(props) {
  return (
    <div className="Miel">
      <h3>{props.nom}</h3>
      <img className="Miel-picture" src={props.image} alt="Nom du miel" />
      <p>{props.couleur}</p>
      <p>{props.bienfaits}</p>
    </div>
  );
}

export default Miel;
