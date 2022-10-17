import Who from "../Who/Who.jsx";
import Skills from "../Skills/Skills.jsx";
import Green from "../Green/Green.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Menu from "../../components/Menu/Menu";
import background from "../../assets/background.webp";
import logo from "../../assets/logo-home.webp";
import TypeWriterEffect from "react-typewriter-effect";
import "./Home.scss";

const Home = () => {
  return (
    <div className="smooth-wrapper">
      <div id="home">
        <Menu></Menu>
        <img className="background" src={background} alt="background"></img>
        <a href="#home">
          <img className="logo" src={logo} alt="logo"></img>
        </a>
        <div className="text flex column absolute">
          <div className="name">Justine Provent</div>
          <h1>
            <TypeWriterEffect
              startDelay={1500}
              cursorColor="black"
              text="Développeuse Web Responsable"
              typeSpeed={100}
            />
          </h1>
        </div>
        <a href="#who" className="arrow">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 201.189 201.189"
          >
            <g>
              <path
                d="M102.246,201.189c-4.373,0-7.38-3.393-7.709-3.786l-60.3-72.869
				c-1.596-1.482-5.712-5.948-4.155-9.853c0.92-2.319,3.332-3.5,7.158-3.5h31.086V8.296c-0.154-0.97-0.276-3.189,1.267-5.186
				C71.182,1.049,73.901,0,77.67,0h47.781c3.382,0,5.336,1.281,6.378,2.355c1.958,2.015,1.99,4.456,1.976,4.921v101.743h28.491
				c1.757,0,7.115,0,8.75,3.962c1.707,4.137-2.434,8.704-3.74,10.003c-1.829,2.473-51.221,67.995-58.407,75.192
				C106.412,200.663,103.91,201.189,102.246,201.189z M35.683,117.064c0.437,0.927,1.589,2.434,2.759,3.55l60.515,73.087
				c0.39,0.451,1.832,1.721,3.289,1.721c0.848,0,1.686-0.433,2.577-1.317c6.907-6.918,57.634-74.211,58.153-74.898
				c1.478-1.525,2.656-3.35,2.706-4.069c-0.147,0.018-0.981-0.365-3.386-0.365h-34.25V7.19c-0.043-0.948-0.916-1.424-2.595-1.424
				H77.67c-2.065,0-3.16,0.433-3.5,0.845c-0.243,0.297-0.161,0.766-0.161,0.766l0.075,0.655v108.908H37.24
				C36.513,116.939,36.016,117.003,35.683,117.064z"
              />
            </g>
          </svg>
        </a>
      </div>
      <Who></Who>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Green></Green>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
