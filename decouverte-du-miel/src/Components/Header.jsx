import React, { useState } from "react";
import "./Header.css";
//import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <img
        className="logo"
        src="https://www.monmiel.fr/template/Logo_MonMiel3.jpg"
        alt="logo Mon Miel"
      />

      <h1 className="title">Les différents types de miel</h1>

      <ul className={open ? "navLinks open" : "navLinks fermer"}>
        <li>tout les miels</li>
        <li>articles</li>
        <li>nous contacter</li>
      </ul>
      <i onClick={() => setOpen(!open)} className="menu burger"></i>
    </nav>
  );
}
export default Header;
