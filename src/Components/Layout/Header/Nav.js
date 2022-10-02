import React from "react";

import HeaderData from "../Header/Header.json";

const Nav = () => {
  return (
    <nav className="site__navbar">
      <ul className="site-nav__list">
        {HeaderData.navItems.map((singleNavItem) => {
          return (
            <li className="site-nav__list-item" key={singleNavItem.id}>
              <a className="site-nav__list-item-link underlined__link">
                {singleNavItem.navItem}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
