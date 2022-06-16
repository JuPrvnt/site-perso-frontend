import Section from "../../components/Section/Section.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
import carousel1 from "../../assets/carousel-ohmyfood.png";
import carousel2 from "../../assets/carousel-groupomania.png";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <div className="style-portfolio">
        <h1>Mes projets.</h1>
        <Carousel>
          <a
            href="https://juprvnt.github.io/JustineProvent_3_02122021/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-carousel"
              src={carousel1}
              alt="carousel-ohmyfood"
            />
          </a>
          <a
            href="https://justine-provent-7-16032022-front.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-carousel" src={carousel2} alt="carousel-rs" />
          </a>
        </Carousel>
      </div>
    </Section>
  );
};

export default Portfolio;
