import Section from "../../components/Section/Section.jsx";
import "./Who.scss";

const Who = () => {
  return (
    <Section id="who">
      <div className="style-who">
        <h1>Qui suis-je ?</h1>
        <p>
          Je m’appelle Justine, j’ai 26 ans et je suis développeuse web en
          freelance. Je suis une personne <span>organisée</span>,{" "}
          <span>créative</span>, <span>rigoureuse</span> et{" "}
          <span>passionnée</span>. Durant l’ensemble de mes études et notamment
          mon master 2 marketing et stratégies digitales, j’ai développé de
          multiples compétences dans les domaines suivants :
        </p>
        <ul>
          <li>référencement</li>
          <li>UX design</li>
          <li>création graphique</li>
          <li>gestion de projet agile</li>
        </ul>
        <p>
          Force de mes expériences et de ma volonté d’apprendre et d’aller plus
          loin, j’ai ensuite suivi une formation diplomante web developer
          (OpenClassrooms).
        </p>
        <p>
          Grâce à mes deux casquettes, je pourrai répondre au plus près de votre
          besoin en vous proposant un projet unique.
        </p>
      </div>
    </Section>
  );
};

export default Who;
