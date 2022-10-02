import Aos from "aos";
import ScrollReveal from "scrollreveal";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Skills.scss";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const sr = ScrollReveal();

  sr.reveal(".scrollreveal", {
    duration: 2000,
    reset: true,
  });

  return (
    <div id="skills">
      <div data-aos="fade-right">
        <h2>Mes compétences.</h2>
        <div className="skills-content">
          <div className="hard-skills">
            <h3>Hard skills</h3>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>HTML</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="ninetyfive scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>CSS (et SASS)</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="ninety scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>React.js</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="eighty scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Node.js</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="seventyfive scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>SQL (PostgreSQL)</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="seventy scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Gestion de projet agile</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="eighty scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>UX design</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="eightyfive scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Création graphique</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="eighty scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Référencement</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="seventy scrollreveal"></div>
              </div>
            </div>
          </div>
          <div className="soft-skills">
            <h3>Soft skills</h3>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Autonomie</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="ninety scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Organisation</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="hundred scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Adaptabilité</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="eighty scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Créativité</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="seventy scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Curiosité</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="ninety scrollreveal"></div>
              </div>
            </div>
            <h3>Langues</h3>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Français</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="ninetynine scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Anglais</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="eightyfive scrollreveal"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Espagnol</h4>
              </div>
              <div className="skills-progress-bar">
                <div className="seventy scrollreveal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
