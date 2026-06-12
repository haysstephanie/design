import { styled, globalStyles } from "../stitches.config";

const PrintSection = styled("div", {
  marginBottom: "100px",
  paddingBottom: "100px",

  "@sm": {
    borderBottom: "none",
  },
});

const PrintPageWrapper = styled("div", {
  display: "flex",
  gap: "35px",
  flexWrap: "wrap",
});

const SinglePage = styled("div", {
  flex: 1,
  minWidth: "20%",
  "& img": {
    width: "100%",
  },
  "@sm": {
    minWidth: "49%",
  },
});

const DoublePage = styled("div", {
  flex: 2,
  minWidth: "40%",
  "& img": {
    width: "100%",
  },
  "@sm": {
    minWidth: "100%",
  },
});

const SectionDescription = styled("div", {
  width: "100%",
  marginBottom: "60px",
  "@sm": {
    width: "100%",
  },
});

export {
  PrintSection,
  PrintPageWrapper,
  SinglePage,
  DoublePage,
  SectionDescription,
};
