import { React } from "react";
import Logo from "../../../Assets/Images/k-dark-blue.png";
import Nav from "./Nav";
import "./header.css";

const Header = (props) => {
  return (
    <header className="site-header page-width" ref={props.myRef}>
      <figure className="site-logo__wrapper">
        <a className="site__link">
          <img src={Logo} className="site-logo__light object-fit-contain" />
        </a>
      </figure>
      <Nav></Nav>
    </header>
  );
};

export default Header;
