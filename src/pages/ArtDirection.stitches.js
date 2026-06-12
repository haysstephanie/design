import { styled, globalStyles } from "../stitches.config";

const IllustratorName = styled("div", {
  fontFamily: "Roboto",
  fontWeight: 300,
  fontSize: "16px",
  lineHeight: "22px",
  "& a": {
    color: "black",
    textDecoration: "none",
  },
});

const IllustrationWrapper = styled("div", {
  maxWidth: "70%",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  "& video": {
    width: "100%",
  },
  "& .main": {
    flex: 5,
    minWidth: "100%",
  },
  "& .spot": {
    flex: 1,
    minWidth: "20%",
  },
  "@sm": {
    maxWidth: "100%",
    "& .spot": {
      flex: 1,
      minWidth: "45%",
    },
  },
});

export { IllustratorName, IllustrationWrapper };
