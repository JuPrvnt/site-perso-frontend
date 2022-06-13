import { useState } from "react";
import Section from "../../components/Section/Section.jsx";
import "./Menu.scss";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleClick = () => {
    setShowMenu(false);
  };

  window.addEventListener("mousemove", (e) => {
    setShowMenu(true);
  });

  return (
    <Section id="menu">
      {showMenu && (
        <label>
          <input className="checkbox" type="checkbox"></input>
          <span className="menu">
            <span className="hamburger"></span>
          </span>
          <ul className="white">
            <h3 className="menu-text">MENU</h3>
            <p>-</p>
            <li>
              <a className="link-menu" href="#home" onClick={handleClick}>
                Accueil
              </a>
            </li>
            <li>
              <a className="link-menu" href="#who" onClick={handleClick}>
                Qui suis-je ?
              </a>
            </li>
            <li>
              <a className="link-menu" href="#">
                Notre collaboration
              </a>
            </li>
            <li>
              <a className="link-menu" href="#">
                Mes services
              </a>
            </li>
            <li>
              <a className="link-menu" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="link-menu" href="#">
                Contact
              </a>
            </li>
            <p>-</p>
            <li>
              <a className="link-menu" href="#">
                Profil Malt
              </a>
            </li>
          </ul>
        </label>
      )}
    </Section>
  );
};

export default Menu;
