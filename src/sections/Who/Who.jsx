import Justine from "../../assets/justine-profil.jpg";
import CV from "../../assets/CV_Justine_Provent.pdf";
import "./Who.scss";

const Who = () => {
  return (
    <div id="who">
      <h1>Qui suis-je ?</h1>
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
            Bonjour, je m'appelle Justine Provent,j’ai 26 ans et je suis
            développeuse web en freelance. Je suis une personne
            <span>organisée</span>, <span>créative</span>,
            <span>rigoureuse</span> et <span>passionnée</span>. Durant
            l’ensemble de mes études et notamment mon master 2 marketing et
            stratégies digitales, j’ai développé de multiples compétences dans
            les domaines suivants :
          </p>
          <ul>
            <li>référencement</li>
            <li>UX design</li>
            <li>création graphique</li>
            <li>gestion de projet agile</li>
          </ul>
          <p>
            Force de mes expériences et de ma volonté d’apprendre et d’aller
            plus loin, j’ai ensuite suivi une formation diplomante web developer
            (OpenClassrooms). Grâce à mes deux casquettes, je pourrai répondre
            au plus près de votre besoin en vous proposant un projet unique.
          </p>
        </div>
      </div>
      <div className="who-eco-content">
        <p className="title-who">
          Mon ambission : développer de manière responsable.
        </p>
        <p>
          Aujourd'hui je de me lance en freelance en tant que « JP -
          Développeuse responsable ». Le saviez-vous ? Si internet était un
          pays, il serait le 3ème plus gros consommateur d'énergie au monde
          après les US et la Chine. Dans le monde dans lequel nous vivons, nous
          devons faire face à bien des challenges et certains nous touchent
          d'avantage. Pour ma part, c'est l'écologie. Comprenez donc mon
          dilemme. Comment lier écologie et technologie ? Ce sont deux sujets
          qui finalement sont incompatibles, certains diraient même,
          déconnectés. J'ai donc décidé d'être le « connecteur », de ces deux
          éléments qui font part intégrante de notre quotidien. Comment ? En
          faisant en sorte de produire des sites web, applications, réseaux
          sociaux de manière responsable, en allégeant le poids de ces outils
          sur les serveurs par exemple. Quel intérêt pour mes clients ? Au-delà
          de participer à la préservation de notre environnement, cela permettra
          d'avoir des billes supplémentaires dans son argumentaire de vente. En
          précisant que vos outils sont éco-conçus, vous serez l'un des
          pionniers dans votre secteur à intégrer la programmation consciente
          dans vos activités. Dans une Europe qui demande de plus en plus de
          transparence aux entreprises dans leur devoir de vigilance (Due
          Diligence), il faut être irréprochable sur tous les aspects. C'est
          cette même Europe qui à lever en février dernier 110 millions d'euros
          pour des projets environnementaux, il y a donc un enjeu écologique
          mais aussi économique. Je serai donc heureuse de vous aider à surfer
          sur le web, mais aussi sur la vague verte.
        </p>
      </div>
    </div>
  );
};

export default Who;
