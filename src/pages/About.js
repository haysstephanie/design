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
  ProjectDescription,
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
import Navigation from "../elements/Navigation/Navigation";

const name = "Hi, I'm Stephanie!";
// const description = "tktktktk";

const About = (props) => {
  return (
    <div>
      <NavBar />
      <PageWrapper css={{ marginBottom: "100px" }}>
        <AboutHeader>
          <ProfilePhoto src={aboutInformationArray[0].source} />
          <div>
            <Name>{name}</Name>
            {/* <Description>{aboutInformationArray[1].text}</Description> */}
            <ProjectDescription>
              {aboutInformationArray[1].texttwo}
            </ProjectDescription>
            <AboutDescription>
              <a
                href="/projects/about/Hays_Resume_2026.pdf"
                target="_blank"
                style={{ color: "black" }}
              >
                Resume
              </a>{" "}
              •{" "}
              <a
                href={`mailto:stephanie.n.hays@gmail.com`}
                target="_blank"
                style={{ color: "black" }}
              >
                Email
              </a>{" "}
              •{" "}
              <a
                href="https://www.linkedin.com/in/stephanie-hays/?skipRedirect=true"
                target="_blank"
                style={{ color: "black" }}
              >
                LinkedIn
              </a>
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
        <Navigation />
      </PageWrapper>
      <Copyright />
    </div>
  );
};

export default About;
