import React from "react";
import ShapesMask from "../ShapesMask/ShapesMask";

import "./hero.css";
import heroLogo from "../../Assets/Images/k-light-blue.png";

const Hero = (props) => {
  return (
    <section
      className="hero__wrapper page-width"
      data-height={props.headerHeight}
    >
      <div
        className="hero"
        style={{ height: "calc(100vh - " + props.headerHeight + "px)" }}
      >
        <ShapesMask></ShapesMask>
        <div className="hero_content">
          <h1 className="hero_heading">Kartar Singh</h1>
          <p className="hero_description">Interactive Frontend Developer</p>
          <a className="hero_button button">About me</a>
        </div>
        <figure className="hero__logo">
          <img src={heroLogo} className="object-fit-contain" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
