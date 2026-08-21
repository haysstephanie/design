import React from "react";
import NavBar from "../elements/NavBar/NavBar";
import ProjectSection from "../elements/ProjectSection/ProjectSection";
import Copyright from "../elements/Copyright/Copyright";
import { styled } from "../stitches.config";
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
  ProjectOrganization,
} from "../app.stitches";
import {
  ProjectWrapper,
  DetailsWrapper,
  AwardsContainer,
} from "../elements/ProjectSection/ProjectSection.stitches";
import { IllustratorName, IllustrationWrapper } from "./Illustration.stitches";
import { illustrationInformationArray } from "../data/IllustrationInformation";
import Navigation from "../elements/Navigation/Navigation";

const name = "Illustration";
const description =
  "Illustrations for The Washington Post, The Seattle Times and the Sacramento Business Journal";

const Illustration = (props) => {
  const { liveSection, setLiveSection } = props;
  return (
    <div>
      <NavBar liveSection={liveSection} setLiveSection={setLiveSection} />
      <PageWrapper>
        <Header>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Header>
        {illustrationInformationArray.map((illustration, i) => {
          return (
            <ProjectWrapper
              css={{
                paddingBottom: "100px",
                borderBottom:
                  i === illustrationInformationArray.length - 1
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
                  <ProjectOrganization css={{}}>
                    {illustration.organization}
                  </ProjectOrganization>
                  <ProjectName css={{ marginBottom: "20px" }}>
                    {illustration.link && (
                      <a
                        href={illustration.link}
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        {illustration.title}
                      </a>
                    )}
                    {!illustration.link && illustration.title}
                  </ProjectName>
                  <ProjectDescription css={{ marginBottom: "20px" }}>
                    {illustration.description}
                  </ProjectDescription>
                  {illustration.awards !== "" && (
                    <Award css={{ marginBottom: "15px" }}>
                      🏆 {illustration.awards}
                    </Award>
                  )}

                  {illustration.stories &&
                    illustration.stories.map((story, i) => {
                      return (
                        <a href={story.link} target="_blank">
                          {" "}
                          <Headline css={{ marginBottom: "10px" }}>
                            {story.headline}
                          </Headline>
                        </a>
                      );
                    })}
                </DetailsWrapper>
                <IllustrationWrapper>
                  {illustration.illustrations.map((art, i) => {
                    switch (art.type) {
                      case "video":
                        console.log(art.source);
                        return (
                          <video
                            autoPlay
                            muted
                            loop
                            src={art.source}
                            className={`video ${art.size}`}
                          />
                        );
                      case "image":
                        return (
                          <img
                            src={art.source}
                            alt={art.alt}
                            className={`image ${art.size}`}
                          />
                        );
                    }
                  })}
                </IllustrationWrapper>
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

export default Illustration;
