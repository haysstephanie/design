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
  WorkType,
  ProjectName,
  ProjectDescription,
  Headline,
  Skills,
  Award,
} from "../app.stitches";
import {
  ProjectWrapper,
  DetailsWrapper,
} from "../elements/ProjectSection/ProjectSection.stitches";
import { VisualWrapper } from "./Digital.stitches";
import { digitalInformationArray } from "../data/DigitalInformation";
import Navigation from "../elements/Navigation/Navigation";

const name = "Digital";
const description = "Web design and development. Coded with React";

const Digital = (props) => {
  const { liveSection, setLiveSection } = props;
  return (
    <div>
      <NavBar liveSection={liveSection} setLiveSection={setLiveSection} />
      <PageWrapper>
        <Header>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Header>
        {digitalInformationArray.map((story, i) => {
          return (
            <ProjectWrapper
              css={{
                paddingBottom: "100px",
                borderBottom:
                  i === digitalInformationArray.length - 1
                    ? "none"
                    : "0.5px solid black",
                "@sm": {
                  borderBottom: "none",
                  paddingBottom: "0",
                },
              }}
            >
              <OverviewWrapper>
                <DetailsWrapper>
                  <ProjectName css={{ marginBottom: "20px" }}>
                    <a
                      href={story.url}
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      {story.title}
                    </a>
                  </ProjectName>
                  <ProjectDescription css={{ marginBottom: "20px" }}>
                    {story.description}
                  </ProjectDescription>
                  {story.awards.length > 0 && (
                    <Award css={{ marginBottom: "20px" }}>
                      🏆 {story.awards}
                    </Award>
                  )}
                </DetailsWrapper>
                <VisualWrapper>
                  <video controls mute src={story.video.src} />
                </VisualWrapper>
              </OverviewWrapper>
            </ProjectWrapper>
          );
        })}
        <Navigation liveSection={liveSection} setLiveSection={setLiveSection} />
      </PageWrapper>
      <Copyright />
    </div>
  );
};

export default Digital;
