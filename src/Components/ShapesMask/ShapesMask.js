import React from "react";

import "./ShapesMask.css";

import Atom from "../../Assets/Images/Shapes/atom.png";
import Butterflies from "../../Assets/Images/Shapes/butterflies.png";
import Circle from "../../Assets/Images/Shapes/circle.png";
import Codepen from "../../Assets/Images/Shapes/codepen.png";
import Coding from "../../Assets/Images/Shapes/coding.png";
import Line from "../../Assets/Images/Shapes/diagonal-line.png";
import Enso from "../../Assets/Images/Shapes/enso.png";
import HalfCircle from "../../Assets/Images/Shapes/half-circle.png";
import Hexagons from "../../Assets/Images/Shapes/hexagons.png";
import Right from "../../Assets/Images/Shapes/right.png";

const ShapesMask = () => {
  return (
    <div className="shape-mask__wrapper">
      <img src={Atom} className="shape shape-atom" />
      <img src={Butterflies} className="shape shape-butterflies" />
      <img src={Circle} className="shape shape-circle" />
      <img src={Codepen} className="shape shape-codepen" />
      <img src={Coding} className="shape shape-coding" />
      <img src={Line} className="shape shape-line" />
      <img src={Enso} className="shape shape-enso" />
      <img src={HalfCircle} className="shape shape-half-circle" />
      <img src={Hexagons} className="shape shape-hexagons" />
      <img src={Right} className="shape shape-right" />
    </div>
  );
};

export default ShapesMask;
