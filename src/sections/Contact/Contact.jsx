import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./Contact.scss";
import mail from "../../assets/gmail.webp";
import linkedin from "../../assets/linkedin.webp";
import malt from "../../assets/malt.webp";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="contact">
      <div data-aos="fade-right">
        <h2>Alors, on développe des projets ensemble ?</h2>
        <div className="text-contact">
          Contactez-moi dès aujourd’hui et discutons ensemble de votre projet.{" "}
          <br />
          Je suis disponible par mail et par téléphone. <br />
          Je serai ravie de vous rencontrez ! À bientôt.
        </div>
        <div className="contact-items">
          <a className="white-links" href="mailto:justine.provent90@mail.com">
            <div>
              {" "}
              <img className="icons" src={mail} alt="mail"></img>
            </div>
          </a>
          <a
            className="white-links"
            href="https://www.linkedin.com/in/justine-provent-developpeuse-web/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              {" "}
              <img className="icons" src={linkedin} alt="linkedin"></img>
            </div>
          </a>
          <a
            className="white-links"
            href="https://www.malt.fr/profile/justineprovent?overview=true"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              {" "}
              <img className="icons" src={malt} alt="malt"></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
