import react from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="social-container">
      <h3 className="social-follow">Réseaux sociaux</h3>
      <div className="social-icons">
        <a href="https://www.youtube.com" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
