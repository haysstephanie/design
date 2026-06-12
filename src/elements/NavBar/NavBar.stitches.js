import { styled, globalStyles } from "../../stitches.config";

const NavBarWrapper = styled("div", {
  backgroundColor: "#F0CD48",
  width: "100%",
  paddingTop: "8px",
  paddingBottom: "8px",
  position: "fixed",
  top: "0",
  zIndex: "5",
});

const NavBarInner = styled("div", {
  maxWidth: "1080px",
  margin: "auto",
  display: "flex",
  gap: "32px",
  // justifyContent: "space-between",
  "@sm": {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
});

const NavBarItem = styled("div", {
  fontFamily: "Roboto",
  fontSize: "12px",
  fontWeight: 900,
  textTransform: "uppercase",
  color: "black",
  letterSpacing: "0.5px",
  textDecoration: "none",
});

export { NavBarWrapper, NavBarInner, NavBarItem };
