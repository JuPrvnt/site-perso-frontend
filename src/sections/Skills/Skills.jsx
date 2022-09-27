import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./Skills.scss";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
                <span className="font-light">95%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent ninetyfive"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>CSS (et SASS)</h4>
                <span className="font-light">90%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent ninety"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>React.js</h4>
                <span className="font-light">80%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent eighty"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Node.js</h4>
                <span className="font-light">75%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent seventyfive"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>SQL (PostgreSQL)</h4>
                <span className="font-light">70%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent seventy"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Gestion de projet agile</h4>
                <span className="font-light">80%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent eighty"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>UX design</h4>
                <span className="font-light">85%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent eightyfive"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Création graphique</h4>
                <span className="font-light">80%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent eighty"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Référencement</h4>
                <span className="font-light">70%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent seventy"></div>
              </div>
            </div>
          </div>
          <div className="soft-skills">
            <h3>Soft skills</h3>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Autonomie</h4>
                <span className="font-light">90%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent ninety"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Organisation</h4>
                <span className="font-light">100%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent hundred"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Adaptabilité</h4>
                <span className="font-light">80%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent eighty"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Créativité</h4>
                <span className="font-light">70%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent seventy"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Curiosité</h4>
                <span className="font-light">90%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent ninety"></div>
              </div>
            </div>
            <h3>Langues</h3>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Français</h4>
                <span className="font-light">99%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent ninetynine"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Anglais</h4>
                <span className="font-light">85%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent eightyfive"></div>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-bar">
                <h4>Espagnol</h4>
                <span className="font-light">70%</span>
              </div>
              <div className="skills-progress-bar">
                <div className="skills-percent seventy"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
