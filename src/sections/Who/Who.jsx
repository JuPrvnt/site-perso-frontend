import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Justine from "../../assets/justine-profil.webp";
import CV from "../../assets/CV_Justine_Provent.pdf";
import Diplôme from "../../assets/Diplome web dev.pdf";
import "./Who.scss";

const Who = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="who">
      <div data-aos="fade-right">
        <h2>Qui suis-je ?</h2>
        <div className="who-content">
          <div className="who-media">
            Développeuse web <span>organisée</span>, <span>créative</span> et{" "}
            <span>rigoureuse</span> qui a à coeur de bien faire les choses, je
            m'appelle Justine et suis diplômée d'un master 2 en marketing et
            stratégies digitales ainsi que d'un{" "}
            <a
              href={Diplôme}
              alt="Diplôme web développeuse"
              target="_blank"
              rel="noreferrer"
            >
              diplôme de développeuse web
            </a>
            . <br />
            Mes études et formation m'ont permises de développer de multiples
            compétences. <br />
            Grâce à mes deux casquettes, je pourrai répondre au plus près de
            votre besoin en vous proposant un projet unique.
          </div>
          <div className="who-picture">
            <img
              className="justine-profil"
              src={Justine}
              alt="justine-profil"
            ></img>
            <a
              className="center"
              href={CV}
              alt="CV_Justine_Provent"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Voir mon CV 🚀</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
