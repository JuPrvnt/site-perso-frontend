import Justine from "../../assets/justine-profil.jpg";
import CV from "../../assets/CV_Justine_Provent.pdf";
import "./Who.scss";

const Who = () => {
  return (
    <div id="who">
      <h2>Qui suis-je ?</h2>
      <div className="who-content">
        <div className="who-media">
          Développeuse web <span>organisée</span>, <span>créative</span> et{" "}
          <span>rigoureuse</span> qui a à coeur de bien faire les choses, je
          m'appelle Justine et suis diplômée d'un Master 2 en Marketing et
          Stratégies Digitales ainsi que d'un diplôme de Développeuse Web. Mes
          études et formation m'ont permises de développer de multiples
          compétences :
          <div className="who-center">
            <div className="who-skills">
              <div className="who-skills-container">
                <div className="who-skills-title">
                  <h4>Référencement</h4>
                  <span>70%</span>
                </div>
                <div className="who-progress-bar">
                  <div className="who-percent premier"></div>
                </div>
              </div>
              <div className="who-skills-container">
                <div className="who-skills-title">
                  <h4>UX design</h4>
                  <span>70%</span>
                </div>
                <div className="who-progress-bar">
                  <div className="who-percent premier"></div>
                </div>
              </div>
              <div className="who-skills-container">
                <div className="who-skills-title">
                  <h4>Création graphique</h4>
                  <span>80%</span>
                </div>
                <div className="who-progress-bar">
                  <div className="who-percent deuxième"></div>
                </div>
              </div>
              <div className="who-skills-container">
                <div className="who-skills-title">
                  <h4>Gestion de projet agile</h4>
                  <span>70%</span>
                </div>
                <div className="who-progress-bar">
                  <div className="who-percent premier"></div>
                </div>
              </div>
              <div className="who-skills-container">
                <div className="who-skills-title">
                  <h4>HTML</h4>
                  <span>90%</span>
                </div>
                <div className="who-progress-bar">
                  <div className="who-percent troisième"></div>
                </div>
              </div>
              <div className="who-skills-container">
                <div className="who-skills-title">
                  <h4>CSS</h4>
                  <span>90%</span>
                </div>
                <div className="who-progress-bar">
                  <div className="who-percent troisième"></div>
                </div>
              </div>
              <div className="who-skills-container">
                <div className="who-skills-title">
                  <h4>React.js</h4>
                  <span>80%</span>
                </div>
                <div className="who-progress-bar">
                  <div className="who-percent deuxième"></div>
                </div>
              </div>
              <div className="who-skills-container">
                <div className="who-skills-title">
                  <h4>Node.js</h4>
                  <span>70%</span>
                </div>
                <div className="who-progress-bar">
                  <div className="who-percent premier"></div>
                </div>
              </div>
              <div className="who-skills-container">
                <div className="who-skills-title">
                  <h4>SQL</h4>
                  <span>70%</span>
                </div>
                <div className="who-progress-bar">
                  <div className="who-percent premier"></div>
                </div>
              </div>
            </div>
            <div className="who-picture">
              <img
                className="justine-profil"
                src={Justine}
                alt="justine-profil"
              ></img>
              <a
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
      <div className="center">
        <div>
          Grâce à mes deux casquettes, je pourrai répondre au plus près de votre
          besoin en vous proposant un projet unique.
        </div>
      </div>
    </div>
  );
};

export default Who;
