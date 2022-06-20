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
      <div className="who-eco-content">
        <p className="title-who">
          Mon ambission : développer de manière responsable.
        </p>
        <p>
          Aujourd'hui je me suis lancée en freelance en tant que « Développeuse
          responsable ». Mais pourquoi ? Et de quoi s'agit-il ? <br />
          <span>Est-ce que vous saviez que</span> : si internet était un pays,
          il serait le 3e plus gros consommateur d'énergie au monde après les
          États-Unis et la Chine ? Effrayant non ? 😵 <br />
          Dans le monde dans lequel nous vivons, nous devons faire face à bien
          des challenges et certains nous touchent d'avantage. Pour ma part,
          c'est <span>l'écologie</span>. Vous comprenez donc mon dilemme.
          Comment lier <span>écologie</span> et <span>technologie</span> ? Ce
          sont deux sujets qui finalement sont, en apparence, « incompatibles »,
          certains diraient même, « déconnectés ».
          <br />
          Alors j'ai décidé d'être le « connecteur », de ces deux éléments qui
          font part intégrante de notre quotidien. <br />
          <span>Comment</span> ? En faisant en sorte de produire des sites web,
          applications, réseaux sociaux de manière responsable. <br />
          <span>Mais quel intérêt pour vous</span> ? Au-delà de participer à la
          préservation de notre environnement, cela vous permettra d'avoir des
          arguments supplémentaires. En précisant que vos outils sont
          éco-conçus, vous serez l'un des pionniers dans votre secteur à
          intégrer la programmation consciente dans vos activités. <br />
          Dans une Europe qui demande de plus en plus de transparence aux
          entreprises dans leur devoir de vigilance (Due Diligence), il faut
          être irréprochable sur tous les aspects. C'est cette même Europe qui à
          lever en février dernier 110 millions d'euros pour des projets
          environnementaux. Il y a donc un enjeu <span>écologique</span> mais
          aussi <span>économique</span>. <br />
          <span className="center">
            🌿 Je serais ravies de vous aider à surfer sur le web, mais aussi
            sur la vague verte 🌿
          </span>
        </p>
      </div>
    </div>
  );
};

export default Who;
