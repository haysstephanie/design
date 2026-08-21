import { styled, globalStyles } from "./stitches.config";

const PageWrapper = styled("div", {
  maxWidth: "1080px",
  margin: "auto",
  paddingLeft: "16px",
  paddingRight: "16px",
});

const Header = styled("div", {
  // borderBottom: "1px solid black",
  marginBottom: "2rem",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const OverviewWrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  // flexDirection: "column",
  gap: "60px",
  "@sm": {
    flexDirection: "column",
    gap: "16px",
  },
});

const Name = styled("div", {
  fontFamily: "RobotoSerif",
  fontWeight: 900,
  fontStyle: "italic",
  fontSize: "70px",
  marginBottom: "10px",
  // lineHeight: "75px",
  "@sm": {
    fontSize: "55px",
  },
});

const Description = styled("div", {
  fontSize: "36px",
  fontFamily: "Roboto",
  fontWeight: 100,
  fontStyle: "normal",
  lineHeight: "48px",
  "@sm": {
    fontSize: "30px",
    lineHeight: "42px",
  },
});

const WorkType = styled("div", {
  fontFamily: "RobotoSerif",
  fontWeight: 900,
  fontSize: "20px",
  marginBottom: "60px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  backgroundColor: "#F0CD48",
  paddingTop: "4px",
  paddingBottom: "4px",
  paddingLeft: "8px",
});

const ProjectOrganization = styled("div", {
  fontFamily: "Roboto",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "20px",
  marginBottom: "16px",
  textTransform: "uppercase",
});

const ProjectName = styled("div", {
  fontFamily: "RobotoSerif",
  fontSize: "30px",
  lineHeight: "125%",
  fontWeight: 700,
  fontStyle: "italic",

  // marginBottom: "24px",
});

const ProjectDescription = styled("div", {
  fontFamily: "Roboto",
  fontWeight: 300,
  fontSize: "20px",
  lineHeight: "30px",
  // marginBottom: "24px",
});

const Headline = styled("div", {
  fontFamily: "Roboto",
  fontWeight: 300,
  fontSize: "16px",
  lineHeight: "20px",
  // marginBottom: "12px",
  color: "black",
  // textDecoration: "black underline",
  textDecoration: "none",
});

const Skills = styled("div", {
  fontFamily: "Roboto",
  fontWeight: 300,
  fontSize: "16px",
  // fontStyle: "italic",
  lineHeight: "20px",
  // marginBottom: "24px",
  // marginTop: "24px",
});

const Award = styled("div", {
  fontFamily: "Roboto",
  // fontStyle: "italic",
  fontWeight: 300,
  fontSize: "16px",
  lineHeight: "22px",
});

export {
  PageWrapper,
  Header,
  Name,
  OverviewWrapper,
  Description,
  WorkType,
  ProjectOrganization,
  ProjectName,
  ProjectDescription,
  Headline,
  Skills,
  Award,
};
