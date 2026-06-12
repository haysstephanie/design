import { styled, globalStyles } from "../stitches.config";

const AboutHeader = styled("div", {
  marginBottom: "2rem",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  //   flexDirection: "column",
  gap: "30px",
  justifyContent: "space-between",
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
});

export {
  AboutHeader,
  AboutDescription,
  ProfilePhoto,
  AwardsWrapper,
  AwardTitle,
  AboutDownpageWrapper,
};
