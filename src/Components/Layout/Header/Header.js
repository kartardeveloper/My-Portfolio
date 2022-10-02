import { React } from "react";
import Nav from "./Nav";

import HeaderData from "./Header.json";
import "./header.css";

const Header = (props) => {
  return (
    <header className="site-header" ref={props.myRef}>
      <div className="page-width header-container">
        <figure className="site-logo__wrapper">
          <a className="site__link">
            <img
              src={HeaderData.logo}
              className="site-logo__light object-fit-contain"
            />
          </a>
        </figure>
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;
