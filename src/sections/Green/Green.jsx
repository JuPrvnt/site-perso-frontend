import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./Green.scss";

const Green = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="green">
      <div data-aos="fade-right" className="green-eco-content">
        <h2 className="title-green">Mon ambition : éco-développer.</h2>
        <p>
          Aujourd'hui j'ai pour ambition d'« éco-développer ». Mais pourquoi ?
          Et de quoi s'agit-il ? <br />
          <br />
          <span>Funfact</span> : si internet était un pays, il serait le 3e plus
          gros consommateur d'énergie au monde après les États-Unis et la Chine
          ? Effrayant non ? 😵 <br />
          <br />
          Dans le monde dans lequel nous vivons, nous devons faire face à bien
          des challenges et certains nous touchent d'avantage. Pour ma part,
          c'est <span>l'écologie</span>. Vous comprenez donc mon dilemme.
          Comment lier <span>écologie</span> et <span>technologie</span> ? Ce
          sont deux sujets qui finalement sont, en apparence, « incompatibles »,
          certains diraient même, « déconnectés ».
          <br />
          <br />
          Alors j'ai décidé d'être le « connecteur », de ces deux éléments qui
          font part intégrante de notre quotidien. <br />
          <span>Comment</span> ? En faisant en sorte de produire des sites web,
          applications, réseaux sociaux de manière responsable. Alors je n'aurai
          pas la prétention de connaître tous les trucs et astuces, mais
          j'apprends chaque jour pour m'améliorer ! <br />
          <br />
          <span>Mais quel intérêt pour vous</span> ? Au-delà de participer à la
          préservation de notre environnement, cela vous permettra d'avoir des
          arguments supplémentaires. En précisant que vos outils sont
          éco-conçus, vous serez l'un des pionniers dans votre secteur à
          intégrer la programmation consciente dans vos activités. <br />
          <br />
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

export default Green;
