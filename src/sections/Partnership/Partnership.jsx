import "./Partnership.scss";

const Partnership = () => {
  return (
    <div id="partnership">
      <h2>Notre collaboration.</h2>
      <div className="partnership-content">
        <div className="partnership-block">
          <p className="partnership-title">
            O1.<span className="title-size">Analyse</span>
          </p>
          <p className="partnership-text">
            Lors de notre premier échange, je vous poserai tout un panel de
            questions afin de comprendre votre activité et votre enjeu.
            J’analyserai ensuite votre besoin.
          </p>
        </div>
        <div className="partnership-block">
          <p className="partnership-title">
            O2.<span className="title-size">Développement</span>
          </p>
          <p className="partnership-text">
            Durant la période que nous aurons préalablement défini ensemble, je
            m’investirai à 100% dans la réalisation de votre projet afin de vous
            proposer le meilleur.
          </p>
        </div>
        <div className="partnership-block">
          <p className="partnership-title">
            O3.<span className="title-size">Suivi</span>
          </p>
          <p className="partnership-text">
            Une fois ma première proposition présentée, vous pourrez m’exprimer
            vos différents retours et modifications souhaitées. Lorsque je vous
            aurez remis la version finale, un forfait de maintenance pourra être
            établi en fonction de votre demande.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
