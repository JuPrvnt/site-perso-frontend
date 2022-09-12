import Who from "../Who/Who.jsx";
import Green from "../Green/Green.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Services from "../Services/Services.jsx";
import Partnership from "../Partnership/Partnership.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Menu from "../../components/Menu/Menu";
import background from "../../assets/background.jpg";
import logo from "../../assets/logo-home.png";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div id="home">
        <Menu></Menu>
        <img className="background" src={background} alt="background"></img>
        <a href="#home">
          <img className="logo" src={logo} alt="logo"></img>
        </a>
        <h1 className="text flex column absolute">
          <div className="name">Justine Provent</div>
          <div className="title">Développeuse responsable</div>
        </h1>
        <a href="#who" className="arrow">
          <svg
            className="arrow"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.035 512.035"
          >
            <path
              d="M386.431,238.821c-3.413-1.707-6.827-0.853-9.387,1.707L255.017,362.555L132.991,240.528
				c-2.56-2.56-5.973-3.413-9.387-1.707c-3.413,0.853-5.12,4.267-5.12,7.68v136.533c0,2.56,0.853,4.267,2.56,5.973l128,119.467
				c1.707,1.707,4.267,2.56,5.973,2.56s4.267-0.853,5.973-2.56l128-119.467c1.707-1.707,2.56-3.413,2.56-5.973V246.501
				C391.551,243.088,389.844,240.528,386.431,238.821z M374.484,379.621L255.017,491.408L135.551,379.621v-112.64l113.493,113.493
				c3.413,3.413,8.533,3.413,11.947,0l113.493-113.493V379.621z"
            />
            <path
              d="M386.431-0.112c-3.413-1.707-6.827-0.853-9.387,1.707L255.017,123.621L132.991,1.595c-2.56-2.56-5.973-3.413-9.387-1.707
				c-3.413,0.853-5.12,4.267-5.12,7.68v136.533c0,2.56,0.853,4.267,2.56,5.973l128,119.467c1.707,1.707,4.267,2.56,5.973,2.56
				s4.267-0.853,5.973-2.56l128-119.467c1.707-1.707,2.56-3.413,2.56-5.973V7.568C391.551,4.155,389.844,1.595,386.431-0.112z
				 M374.484,140.688L255.017,252.475L135.551,140.688V28.048l113.493,113.493c3.413,3.413,8.533,3.413,11.947,0L374.484,28.048
				V140.688z"
            />
          </svg>
        </a>
      </div>
      <Who></Who>
      <Green></Green>
      <Portfolio></Portfolio>
      <Services></Services>
      <Partnership></Partnership>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
