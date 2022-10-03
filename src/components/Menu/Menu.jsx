import { useState } from "react";
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
    <div id="menu">
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
              <a className="link-menu" href="#skills" onClick={handleClick}>
                Mes compétences
              </a>
            </li>
            <li>
              <a className="link-menu" href="#portfolio" onClick={handleClick}>
                Portfolio
              </a>
            </li>
            <li>
              <a className="link-menu" href="#green" onClick={handleClick}>
                Éco-développer
              </a>
            </li>
            <li>
              <a className="link-menu" href="#contact" onClick={handleClick}>
                Contact
              </a>
            </li>
            <p>-</p>
            <li>
              <a
                className="link-menu"
                rel="noreferrer"
                target="_blank"
                href="https://www.malt.fr/"
              >
                Profil Malt
              </a>
            </li>
            <li>
              <a
                className="link-menu"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/justine-provent-developpeuse-web/"
              >
                Profil LinkedIn
              </a>
            </li>
            <p>-</p>
          </ul>
        </label>
      )}
    </div>
  );
};

export default Menu;
