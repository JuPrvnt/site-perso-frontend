import Carousel from "../../components/Carousel/Carousel.jsx";
import carousel1 from "../../assets/carousel-ohmyfood.png";
import carousel2 from "../../assets/carousel-groupomania.png";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1>Mon portfolio.</h1>
      <Carousel>
        <a
          className="text-decoration-none"
          href="https://juprvnt.github.io/JustineProvent_3_02122021/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-carousel"
            src={carousel1}
            alt="carousel-ohmyfood"
          />
          <div className="livrables">
            <span>Livrable attendu :</span>
            <br />
            <p>
              Intégration des différentes maquettes, sans utilisation de
              framework. Mise en place des animations demandées.
            </p>
          </div>
        </a>
        <a
          className="text-decoration-none"
          href="https://justine-provent-7-16032022-front.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img-carousel" src={carousel2} alt="carousel-rs" />
          <div className="livrables">
            <span>Livrable attendu :</span>
            <br />
            <p>
              - Créer un réseau social d'entreprise (backend, frontend, bdd) à
              l'aide d'un framework (j'ai choisi de me spécialiser avec React)
            </p>
          </div>
        </a>
      </Carousel>
    </div>
  );
};

export default Portfolio;
