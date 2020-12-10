import React from "react";
import "./Miel.css";

function Miel() {
  return (
    <div className="Miel">
      <h3>Miel d'Acacia</h3>
      <img
        className="Miel-picture"
        src="https://s2.semencesdupuy.com/12572-medium_default/acacia-dealbata.jpg"
        alt="Nom du miel"
      />
      <p>couleur : trés clair, blond</p>
      <p>
        bienfaits: "régulateur intestinal, recommandé pour les jeunes enfants"
      </p>
    </div>
  );
}

export default Miel;
