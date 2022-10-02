import React from "react";
import ShapesMask from "../ShapesMask/ShapesMask";

import "./hero.css";
import HeaderData from "../Layout/Header/Header.json";

const Hero = (props) => {
  return (
    <section className="hero__wrapper" data-height={props.headerHeight}>
      <ShapesMask></ShapesMask>
      <div className="page-width">
        <div
          className="hero"
          style={{ height: "calc(100vh - " + props.headerHeight + "px)" }}
        >
          <div className="hero_content">
            <h1 className="hero_heading">Kartar Singh</h1>
            <p className="hero_description">Interactive Frontend Developer</p>
            <a className="hero_button button contains-blue-arrow">About me</a>
          </div>
          <figure className="hero__logo">
            <img src={HeaderData.heroLogo} className="object-fit-contain" />
          </figure>
          <a href="#" className="go-to__link">
            Works <span className="go-to__arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
