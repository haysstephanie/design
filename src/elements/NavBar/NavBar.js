import React from "react";
import { Link } from "react-router-dom";
import { NavBarWrapper, NavBarInner, NavBarItem } from "./NavBar.stitches";

const NavBarOptions = [
  {
    name: "home",
    link: "/",
  },

  {
    name: "about",
    link: "/about",
  },
];

const NavBar = (props) => {
  return (
    <NavBarWrapper>
      <NavBarInner>
        {NavBarOptions.map((element, i) => {
          return (
            <Link to={`${element.link}`} style={{ textDecoration: "none" }}>
              <NavBarItem>{element.name}</NavBarItem>
            </Link>
          );
        })}
      </NavBarInner>
    </NavBarWrapper>
  );
};

export default NavBar;
