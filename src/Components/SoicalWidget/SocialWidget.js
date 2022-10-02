import React from "react";

import "./SocialWidget.css";

import SocialData from "./SocialWidget.json";

const SocialWidget = () => {
  return (
    <div className="social-widget__wrapper">
      <span className="social-widget__arrow-line"></span>
      {SocialData.map((data) => {
        return (
          <a
            href={data.url}
            rel="noopener noreferrer"
            target="_blank"
            className="social-link"
            key={data.altText}
          >
            <img
              src={data.imageSrc}
              alt={data.altText}
              className="object-fit-contain"
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialWidget;
