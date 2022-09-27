import { Link } from "react-router-dom";
import passion from "../../assets/passion.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="style-footer">
        <div className="links-footer">
          <a className="white-links" href="#home">
            Accueil
          </a>{" "}
          -{" "}
          <a className="white-links" href="#who">
            Qui suis-je ?
          </a>{" "}
          -
          <a className="white-links" href="#skills">
            {" "}
            Mes compétences
          </a>{" "}
          -
          <a className="white-links" href="#portfolio">
            {" "}
            Mon portfolio
          </a>{" "}
          -
          <a className="white-links" href="#green">
            {" "}
            Mon ambition
          </a>{" "}
          -{" "}
          <a className="white-links" href="#contact">
            Contact
          </a>
        </div>
        <div className="signature">
          <img
            className="passion-fruit"
            src={passion}
            alt="passion-fruit"
          ></img>
          Réalisé avec passion par Justine Provent.
          <img
            className="passion-fruit"
            src={passion}
            alt="passion-fruit"
          ></img>
        </div>
        <div className="legal">
          © 2022 Justine Provent –{" "}
          <Link to="/legal" target="_blank" className="white">
            Mentions légales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
