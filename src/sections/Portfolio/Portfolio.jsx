import ohmyfood from "../../assets/logo-ohmyfood.png";
import groupomania from "../../assets/logo-groupomania.png";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2>Mon portfolio.</h2>
      <div className="portfolio-content">
        <div className="portfolio-cards">
          <img
            className="portfolio-logo"
            src={ohmyfood}
            alt="logo-ohmyfood"
          ></img>
          <p className="portfolio-text">
            Intégration des différentes maquettes, sans utilisation de
            framework. Mise en place des animations demandées.
          </p>
          <a
            className="text-decoration-none"
            href="https://juprvnt.github.io/JustineProvent_3_02122021/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio-button">C'est par ici</div>
          </a>
        </div>
        <div className="portfolio-cards">
          <img
            className="portfolio-logo"
            src={groupomania}
            alt="logo-groupomania"
          ></img>
          <p className="portfolio-text">
            Création d’un réseau social d'entreprise (backend, frontend, bdd) à
            l'aide d'un framework (React.js)
          </p>
          <a
            className="text-decoration-none"
            href="https://justine-provent-7-16032022-front.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio-button">Le résultat</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
