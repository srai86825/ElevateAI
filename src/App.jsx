import React from "react";
import { Nav, Brand, CTA } from "./components";
import {
  Blog,
  Header,
  Footer,
  Features,
  WhatElevateAI,
  Possibility,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Nav />
        <Header />
      </div>
      <Brand />
      <WhatElevateAI />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
