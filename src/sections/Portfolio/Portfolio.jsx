import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import ohmyfood from "../../assets/ohmyfood.png";
import groupomania from "../../assets/groupomania.png";
import memory from "../../assets/memory.png";
import apicountries from "../../assets/apicountries.png";
import "./Portfolio.scss";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="portfolio">
      <div data-aos="fade-right">
        <h2>
          Mon portfolio{" "}
          <span className="portfolio-text">
            <br />
            (qui n'attend que vos projets)
          </span>
          .
        </h2>
        <div className="portfolio-content">
          <div className="wrapper">
            <div className="single-card">
              <img className="front" src={ohmyfood} alt="ohmyfood"></img>
              <div className="back">
                <div className="content">
                  <a
                    className="portfolio-links"
                    href="https://juprvnt.github.io/JustineProvent_3_02122021/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>Réalisé avec HTML / CSS / SASS</h4>
                    <p className="portfolio-text-cards">
                      Intégration de maquettes. <br />
                      Mise en place d'animations.{" "}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="single-card">
              <img className="front" src={groupomania} alt="groupomania"></img>
              <div className="back">
                <div className="content">
                  <a
                    className="portfolio-links"
                    href="https://justine-provent-7-16032022-front.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>Réalisé avec React.js / Node.js / PostgreSQL.</h4>
                    <p className="portfolio-text-cards">
                      Création d’un réseau social d'entreprise.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="single-card">
              <img className="front" src={memory} alt="jeu memory"></img>
              <div className="back">
                <div className="content">
                  <a
                    className="portfolio-links"
                    href="https://juprvnt.github.io/jeu-memory-eco/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>Réalisé avec JavaScript.</h4>
                    <p className="portfolio-text-cards">
                      Création d’un jeu de cartes mémory.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="single-card">
              <img
                className="front"
                src={apicountries}
                alt="bibliothèque d'informations de tous les pays du monde"
              ></img>
              <div className="back">
                <div className="content">
                  <a
                    className="portfolio-links"
                    href="https://juprvnt.github.io/api-countries/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>Réalisé avec JavaScript Native.</h4>
                    <p className="portfolio-text-cards">
                      Connexion avec une API et affichage de données.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
