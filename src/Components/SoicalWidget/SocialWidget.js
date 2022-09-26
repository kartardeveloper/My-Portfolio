import React from "react";

import "./SocialWidget.css";

import LinkedIn from "../../Assets/Images/Social/linkedin.png";
import Twitter from "../../Assets/Images/Social/twitter.png";
import Github from "../../Assets/Images/Social/github.png";
import Codepen from "../../Assets/Images/Social/codepen.png";
import FrontendMentor from "../../Assets/Images/Social/frontend-mentor.png";
import Facebook from "../../Assets/Images/Social/facebook.png";
import Instagram from "../../Assets/Images/Social/instagram.png";

const SocialWidget = () => {
  return (
    <div className="social-widget__wrapper">
      <a
        href="https://www.linkedin.com/in/kartar-singh-557277228/"
        rel="noopener noreferrer"
        target="_blank"
        className="social-link"
      >
        <img
          src={LinkedIn}
          alt="Kartar Singh LinkedIn"
          className="object-fit-contain"
        />
      </a>
      <a
        href=""
        rel="noopener noreferrer"
        target="_blank"
        className="social-link"
      >
        <img
          src={Twitter}
          alt="Kartar Singh Twitter"
          className="object-fit-contain"
        />
      </a>
      <a
        href=""
        rel="noopener noreferrer"
        target="_blank"
        className="social-link"
      >
        <img
          src={Github}
          alt="Kartar Singh Github"
          className="object-fit-contain"
        />
      </a>
      <a
        href=""
        rel="noopener noreferrer"
        target="_blank"
        className="social-link"
      >
        <img
          src={Codepen}
          alt="Kartar Singh Codepen"
          className="object-fit-contain"
        />
      </a>
      <a
        href=""
        rel="noopener noreferrer"
        target="_blank"
        className="social-link"
      >
        <img
          src={FrontendMentor}
          alt="Kartar Singh FrontendMentor"
          className="object-fit-contain"
        />
      </a>
      <a
        href=""
        rel="noopener noreferrer"
        target="_blank"
        className="social-link"
      >
        <img
          src={Facebook}
          alt="Kartar Singh Facebook"
          className="object-fit-contain"
        />
      </a>
      <a
        href=""
        rel="noopener noreferrer"
        target="_blank"
        className="social-link"
      >
        <img
          src={Instagram}
          alt="Kartar Singh Instagram"
          className="object-fit-contain"
        />
      </a>
    </div>
  );
};

export default SocialWidget;
