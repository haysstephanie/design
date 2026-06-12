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
  const { liveSection, setLiveSection } = props;

  const handleClick = (section) => {
    setLiveSection(section);
  };

  return (
    <NavBarWrapper>
      <NavBarInner>
        {NavBarOptions.map((element, i) => {
          return (
            <Link
              to={`${element.link}`}
              onClick={handleClick(element.name)}
              style={{ textDecoration: "none" }}
            >
              <NavBarItem>{element.name}</NavBarItem>
            </Link>
          );
        })}
      </NavBarInner>
    </NavBarWrapper>
  );
};

export default NavBar;
