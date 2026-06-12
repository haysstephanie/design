import React from "react";
import {
  SectionWrapper,
  ProjectWrapper,
  OverviewWrapper,
  DetailsWrapper,
  StoryList,
  ProjectImageWrapper,
  Circle,
  AwardsContainer,
} from "./ProjectSection.stitches";
import {
  ProjectName,
  ProjectDescription,
  Headline,
  Skills,
  Award,
} from "../../app.stitches";
import { projectInformationArray } from "../../data/ProjectInformation";
import Accordion from "../Accordion/Accordion";

function ProjectSection() {
  return (
    <SectionWrapper>
      {projectInformationArray.map((story, i) => {
        return (
          <ProjectWrapper
            css={{
              borderBottom:
                i === projectInformationArray.length - 1
                  ? "none"
                  : "1px solid black",
            }}
          >
            <OverviewWrapper>
              <DetailsWrapper>
                <ProjectName css={{ marginBottom: "25px" }}>
                  {story.link && (
                    <a
                      href={story.link}
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      {story.name}
                    </a>
                  )}
                  {!story.link && story.name}
                </ProjectName>
                <ProjectDescription css={{ marginBottom: "25px" }}>
                  {story.description}
                </ProjectDescription>

                <Skills css={{ marginBottom: "25px" }}>{story.skills}</Skills>

                {story.awards.length > 0 && (
                  <AwardsContainer css={{ marginBottom: "25px" }}>
                    {story.awards.map((award, i) => {
                      return (
                        <Award css={{ marginBottom: "5px" }}>
                          🏆 {award.award}
                        </Award>
                      );
                    })}
                  </AwardsContainer>
                )}
                {story.stories && story.stories.length > 0 && (
                  <StoryList css={{ marginBottom: "0px" }}>
                    {story.stories.map((headline, i) => {
                      return (
                        <div>
                          <Headline>
                            <a
                              href={headline.url}
                              target="_blank"
                              style={{ color: "black" }}
                            >
                              {headline.headline}
                            </a>
                            {i < story.stories.length - 1 && <Circle />}
                          </Headline>
                        </div>
                      );
                    })}
                  </StoryList>
                )}
              </DetailsWrapper>
              <ProjectImageWrapper>
                {story.visuals.map((visual, i) => {
                  switch (visual.type) {
                    case "video":
                      return (
                        <video
                          controls
                          muted
                          playsinline
                          webkit-playsinline
                          src={visual.source}
                          className="video"
                        />
                      );
                    case "image":
                      return (
                        <img
                          src={visual.source}
                          alt={visual.alt}
                          className={`image ${visual.pagetype}`}
                          type={visual.pagetype}
                        />
                      );
                    case "animation":
                      return (
                        <video
                          autoPlay
                          muted
                          loop
                          playsinline
                          webkit-playsinline
                          src={visual.source}
                          type={visual.pagetype}
                          className={`animation ${visual.pagetype}`}
                        />
                      );
                  }
                })}
              </ProjectImageWrapper>
            </OverviewWrapper>

            {/* <Accordion moreContent={story.moreContent} /> */}
          </ProjectWrapper>
        );
      })}
    </SectionWrapper>
  );
}

export default ProjectSection;
