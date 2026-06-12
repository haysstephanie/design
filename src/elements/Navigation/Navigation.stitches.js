import { styled, globalStyles } from "../../stitches.config";

const NavigationWrapper = styled("div", {
  width: "100%",
  paddingBottom: "48px",
});

const NavigationItem = styled("div", {
  fontFamily: "RobotoSerif",
  fontWeight: 900,
  fontSize: "30px",
  fontStyle: "italic",
  marginBottom: "16px",
  paddingBottom: "16px",
  color: "black",
});

export { NavigationWrapper, NavigationItem };
