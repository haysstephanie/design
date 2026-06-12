import { styled, globalStyles } from "../stitches.config";

const AboutHeader = styled("div", {
  marginBottom: "2rem",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  //   flexDirection: "column",
  gap: "50px",
  justifyContent: "space-between",
  "@sm": {
    flexDirection: "column",
    height: "auto",
    marginBottom: "60px",
    marginTop: "60px",
  },
});

const AboutDescription = styled("div", {
  marginTop: "16px",
  fontSize: "16px",
  lineHeight: "140%",
  fontFamily: "Roboto",
  fontWeight: 300,
  fontStyle: "normal",
});

const ProfilePhoto = styled("img", {
  width: "30%",
  height: "auto",
  "@sm": {
    width: "75%",
  },
});

const AwardsWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "10px",
  fontFamily: "Roboto",
  fontWeight: 300,
  fontSize: "16px",
  lineHeight: "22px",
  marginBottom: "16px",
});

const AwardTitle = styled("div", {
  fontWeight: 700,
});

const AboutDownpageWrapper = styled("div", {
  display: "flex",
  marginBottom: "100px",
  paddingBottom: "50px",
  "@sm": {
    flexDirection: "column",
    gap: "40px",
  },
});

export {
  AboutHeader,
  AboutDescription,
  ProfilePhoto,
  AwardsWrapper,
  AwardTitle,
  AboutDownpageWrapper,
};
