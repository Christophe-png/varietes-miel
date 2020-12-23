import react from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //faToutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="social-container">
      <h3 className="social-follow">Réseaux sociaux</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <p className="copyright"> 2020 Découverte du Miel</p>
    </div>
  );
}

export default Footer;
