import "./Services.scss";

const Services = () => {
  return (
    <div id="services">
      <h2>Vos besoins.</h2>
      <div className="block-services">
        <div className="services">
          <p>
            Je créée vos maquettes (à l’aide de l’outil Figma) selon vos envies
            et vos besoins, jusqu’à obtenir exactement ce que vous souhaitez !
          </p>
          <p className="price-services">À partir de 69,99€</p>
        </div>
        <div className="services">
          <p>J’intègre vos maquettes avec HMTL5, CSS3 et React.js.</p>
          <p className="price-services">À partir de 89,99€</p>
        </div>
        <div className="services">
          <p>
            Je développe votre site en prenant en compte : L’eco-conception Le
            référencement naturel Le responsive design
          </p>
          <p className="price-services">À partir de 499,99€</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
