import Section from "../../components/Section/Section.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
import carousel1 from "../../assets/carousel-1.png";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <div className="style-portfolio">
        <h1>Mes projets.</h1>
        <Carousel>
          <img className="img-carousel" src={carousel1} alt="carousel-1" />
          <img className="img-carousel" src={carousel1} alt="carousel-1" />
        </Carousel>
      </div>
    </Section>
  );
};

export default Portfolio;
