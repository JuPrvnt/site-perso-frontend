import { Link } from "react-router-dom";
import background from "../../assets/background.jpg";
import logo from "../../assets/logo-home.png";
import "./Legal.scss";

const Legal = () => {
  return (
    <div id="legal">
      <img className="background-legal" src={background} alt="background"></img>
      <Link to="/">
        <img className="logo" src={logo} alt="logo"></img>
      </Link>
      <div className="background-legal-white">
        <div>
          <h2>MENTIONS LÉGALES</h2>
          <p className="legal-content">
            Éditrice du site Justine Provent SIRET : 913 296 695 00012 Code APE
            : 6201Z 9 rue de la Croix 90100 Fêche-l’Église France
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
