import Justine from "../../assets/justine-profil.jpg";
import CV from "../../assets/CV_Justine_Provent.pdf";
import "./Who.scss";

const Who = () => {
  return (
    <div id="who">
      <h2>Qui suis-je ?</h2>
      <div className="who-content">
        <div className="who-media">
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
            <button className="button">Mon CV 🚀</button>
          </a>
        </div>
        <div className="who-text">
          <p>
            👋🏼 Bonjour, moi c'est Justine, j’ai 26 ans et je suis développeuse
            web. Je suis une personne <span>organisée</span>,{" "}
            <span>créative</span>, <span>rigoureuse</span> et{" "}
            <span>passionnée</span>. Durant l’ensemble de mes études et
            notamment mon master 2 marketing et stratégies digitales, j’ai
            développé de multiples compétences dans les domaines suivants :
          </p>
          <ul>
            <li>Référencement</li>
            <li>UX design</li>
            <li>Création graphique</li>
            <li>Gestion de projet agile</li>
          </ul>
          <p>
            Forte de mes expériences, de ma volonté d’apprendre et d’aller plus
            loin, j’ai ensuite suivi une formation diplomante web developer
            (OpenClassrooms). Grâce à mes deux casquettes, je pourrai répondre
            au plus près de votre besoin en vous proposant un projet unique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who;
