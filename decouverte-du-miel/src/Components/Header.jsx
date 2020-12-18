import React, { useState } from "react";
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
        <li>tout les miels</li>
        <li>articles</li>
        <li>nous contacter</li>
      </ul>
    </div>
  );
}
export default Header;
