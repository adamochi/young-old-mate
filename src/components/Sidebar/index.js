import "./index.scss";
import LogoS from "../../assets/images/whiteleaf.png";
import LogoSubtitle from "../../assets/images/green.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouseChimneyWindow,
  faUserAstronaut,
  faEnvelopesBulk,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="greenbean" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHouseChimneyWindow} color="lightblue" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUserAstronaut} color="lightblue" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelopesBulk} color="lightblue" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faHammer} color="lightblue" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/young_old_mate/"
          >
            <FontAwesomeIcon icon={faInstagram} color="lightblue" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ben.morrissey.395"
          >
            <FontAwesomeIcon icon={faFacebookSquare} color="lightblue" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
