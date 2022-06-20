import { Link } from "react-router-dom";
import passion from "../../assets/passion.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="style-footer">
        <div className="links-footer">
          <a href="#who">Qui suis-je ?</a> -
          <a href="#portfolio"> Mon portfolio</a> -
          <a href="#services"> Vos besoins</a> -
          <a href="#partnership"> Notre collaboration</a> -{" "}
          <a href="#contact">Contact</a>
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
          © 2022 Justine Provent – <Link to="/legal">Mentions légales</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
