import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://www.monmiel.fr/template/Logo_MonMiel3.jpg"
        alt="logo Mon Miel"
      />

      <Link className="nav-homepage" to="/">
        <h1 className="title">Les différents types de miel</h1>
      </Link>

      <ul>
        <li>
          <Link className="nav-les-miels" to="/miel">
            Les Miels et leurs plantes
          </Link>
        </li>
        <li>
          <Link className="nav-articles" to="/articles">
            Le miel : un parfait alicament !
          </Link>
        </li>
        <li>
          <Link className="nav-contact-form" to="/contact-form">
            Nous contacter
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
