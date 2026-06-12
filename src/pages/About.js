import React from "react";
import NavBar from "../elements/NavBar/NavBar";
import ProjectSection from "../elements/ProjectSection/ProjectSection";
import { styled } from "../stitches.config";
import Copyright from "../elements/Copyright/Copyright";
import {
  PageWrapper,
  Header,
  Name,
  OverviewWrapper,
  Description,
  ProjectName,
} from "../app.stitches";
import {
  ProjectWrapper,
  DetailsWrapper,
} from "../elements/ProjectSection/ProjectSection.stitches";
import {
  AboutHeader,
  AboutDescription,
  ProfilePhoto,
  AwardsWrapper,
  AwardTitle,
  AboutDownpageWrapper,
} from "./About.stitches";
import { aboutInformationArray } from "../data/AboutInformation";

const name = "Hi!";
// const description = "tktktktk";

const About = (props) => {
  const { liveSection, setLiveSection } = props;
  return (
    <div>
      <NavBar liveSection={liveSection} setLiveSection={setLiveSection} />
      <PageWrapper css={{ marginBottom: "100px" }}>
        <AboutHeader>
          <ProfilePhoto src={aboutInformationArray[0].source} />
          <div>
            <Name>{name}</Name>
            <Description>{aboutInformationArray[1].text}</Description>
            <AboutDescription>
              {aboutInformationArray[1].texttwo}
            </AboutDescription>
          </div>
        </AboutHeader>
        <AboutDownpageWrapper>
          <div>
            <ProjectName css={{ marginBottom: "20px" }}>
              {aboutInformationArray[2].type}
            </ProjectName>
            {aboutInformationArray[2].awards.map((award, i) => {
              return (
                <AwardsWrapper>
                  <AwardTitle>{award.title}</AwardTitle>
                  <div>{award.organization}</div>
                  <div>{award.year}</div>
                </AwardsWrapper>
              );
            })}
          </div>
          <div>
            <ProjectName css={{ marginBottom: "20px" }}>
              {aboutInformationArray[3].type}
            </ProjectName>
            {aboutInformationArray[3].programs.map((program, i) => {
              return (
                <AwardsWrapper>
                  <AwardTitle>{program.title}</AwardTitle>
                  <div>{program.organization}</div>
                  <div>{program.year}</div>
                </AwardsWrapper>
              );
            })}
            <ProjectName css={{ marginBottom: "20px", marginTop: "40px" }}>
              {aboutInformationArray[4].type}
            </ProjectName>
            {aboutInformationArray[4].programs.map((speaking, i) => {
              return (
                <AwardsWrapper>
                  <AwardTitle>{speaking.title}</AwardTitle>
                  <div>{speaking.organization}</div>
                  <div>{speaking.year}</div>
                </AwardsWrapper>
              );
            })}
          </div>
        </AboutDownpageWrapper>
      </PageWrapper>
      <Copyright />
    </div>
  );
};

export default About;
