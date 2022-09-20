import React from "react";
import Home from "./sections/Home/Home.jsx";
import Legal from "./sections/Legal/Legal.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="section-loading-spinner">
        <div className="spinner"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </div>
  );
};

export default App;
