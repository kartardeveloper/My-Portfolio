import React from "react";

import "./ShapesMask.css";

import Shapes from "./ShapesMask.json";

const ShapesMask = () => {
  return (
    <div className="shape-mask__wrapper">
      {Shapes.map((shape) => {
        return (
          <img
            src={shape.imageSrc}
            className={`shape shape-${shape.title}`}
            key={shape.title}
          />
        );
      })}
    </div>
  );
};

export default ShapesMask;
