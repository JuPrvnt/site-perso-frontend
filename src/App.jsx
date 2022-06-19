import React from "react";
import Home from "./sections/Home/Home.jsx";
import Who from "./sections/Who/Who.jsx";
import Portfolio from "./sections/Portfolio/Portfolio.jsx";
import Services from "./sections/Services/Services.jsx";
import Partnership from "./sections/Partnership/Partnership.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Home></Home>
      <Who></Who>
      <Portfolio></Portfolio>
      <Services></Services>
      <Partnership></Partnership>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
