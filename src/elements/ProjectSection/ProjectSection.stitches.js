import { styled, globalStyles } from "../../stitches.config";

const SectionWrapper = styled("div", {
  // border: "1px solid #F0CD48",
  width: "100%",
  height: "100%",
});

const ProjectWrapper = styled("div", {
  paddingBottom: "100px",
  marginBottom: "100px",
});

const OverviewWrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  marginBottom: "20px",
});

const DetailsWrapper = styled("div", {
  // order: 2,
  width: "100%",
});

const StoryList = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "7px",
  rowGap: "5px",
  "@sm": {
    flexDirection: "column",
  },
});

const AwardsContainer = styled("div", {});

const ProjectImageWrapper = styled("div", {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "60px",
  justifyContent: "center",
  alignItems: "flex-start",

  "& .video": {
    width: "75%",
    height: "auto",
    border: "1px solid black",
    borderRadius: "8px",
  },
  "& img": {
    width: "31%",
    height: "auto",
    "&.single": {
      width: "31%",
    },
    "&.double": {
      width: "60%",
    },
    "&.mobile": {
      width: "25%",
      border: "1px solid black",
      borderRadius: "8px",
    },
  },
  "& .animation": {
    width: "48%",
    "&.single": {
      width: "31%",
    },
    "&.double": {
      width: "60%",
    },
  },

  "@sm": {
    "& .video": {
      width: "100%",
    },
    "& img": {
      width: "75%",
      "&.single": {
        width: "75%",
      },
      "&.double": {
        width: "100%",
      },
    },
    "& .animation": {
      width: "75%",
    },
  },
});

const Circle = styled("div", {
  width: "6px",
  height: "6px",
  backgroundColor: "black",
  borderRadius: "50%",
  display: "inline-block",
  marginLeft: "7px",
  "@sm": {
    display: "none",
  },
});

export {
  SectionWrapper,
  ProjectWrapper,
  OverviewWrapper,
  DetailsWrapper,
  StoryList,
  AwardsContainer,
  ProjectImageWrapper,
  Circle,
};
