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
      <div data-aos="fade-right">
        <h2 className="title-green">Mon ambition : éco-développer.</h2>
        <div className="green-eco-content">
          <div className="green-block">
            <div className="green-title">Pourquoi ?</div> <br />
            <p className="green-text">
              <span>
                😵 Fun<span className="small-texte"> (pas si fun) </span>fact
              </span>{" "}
              : si internet était un pays, il serait le 3e plus gros
              consommateur d'énergie au monde après les États-Unis et la Chine ?
              Effrayant non ? <br />
              <br />
              Dans le monde dans lequel nous vivons, nous devons faire face à
              bien des challenges et certains nous touchent d'avantage. Pour ma
              part, c'est <span>l'écologie</span>.
              <br /> <br />
              Vous comprenez donc mon dilemme. Comment lier
              <span> écologie</span> et <span>technologie</span> ? Ce sont deux
              sujets qui finalement sont, en apparence, « incompatibles »,
              certains diraient même, « déconnectés ».
              <br />
              <br />
              Alors j'ai décidé d'être le « connecteur », de ces deux éléments
              qui font part intégrante de notre quotidien. <br />
            </p>
          </div>
          <div className="green-block">
            <div className="green-title">Comment ?</div> <br />
            <p className="green-text">
              En faisant en sorte de produire des sites web, applications,
              réseaux sociaux de manière responsable. Alors je n'aurai pas la
              prétention de connaître tous les trucs et astuces, mais j'apprends
              chaque jour pour m'améliorer ! <br /> <br />
              Diminuer les besoins en ressources lorsque nous développons aura
              un effet positif sur l’impact environnemental des sites web.
              <br /> <br />
              <span>Mais quel intérêt pour vous</span> ? Au-delà de participer à
              la préservation de notre environnement, cela vous permettra
              d'avoir des arguments supplémentaires. En précisant que vos outils
              sont éco-conçus, vous serez l'un des pionniers dans votre secteur
              à intégrer la programmation consciente dans vos activités. <br />
              <br />
            </p>
          </div>
        </div>
        <span className="center">
          🌿 Je serais ravies de vous aider à surfer sur le web, mais aussi sur
          la vague verte 🌿
        </span>
      </div>
    </div>
  );
};

export default Green;
