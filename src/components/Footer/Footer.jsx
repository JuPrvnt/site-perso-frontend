import Section from "../../components/Section/Section.jsx";
import passion from "../../assets/passion.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <Section id="footer">
      <div className="style-footer">
        <div className="links-footer">
          <a>Qui suis-je ?</a> - <a>Mon portfolio</a> - <a>Vos besoins</a> -
          <a> Notre collaboration</a> - <a>Contact</a>
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
          © 2022 Justine Provent – <a>Mentions légales</a>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
