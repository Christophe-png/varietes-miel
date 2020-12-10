import React from "react";
import "./Miel.css";

function Miel(props) {
  const { nom, image, couleur, bienfaits } = props;
  return (
    <div className="Miel">
      <h3>{nom}</h3>
      <img className="Miel-picture" src={image} alt="Nom du miel" />
      <p>{couleur}</p>
      <p>{bienfaits}</p>
    </div>
  );
}

export default Miel;
