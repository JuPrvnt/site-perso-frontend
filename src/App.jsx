import React from "react";
import Home from "./sections/Home/Home.jsx";
import Who from "./sections/Who/Who.jsx";
import Portfolio from "./sections/Portfolio/Portfolio.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Home></Home>
      <Who></Who>
      <Portfolio></Portfolio>
    </div>
  );
};

export default App;
