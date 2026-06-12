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
import { PostWrapper } from "./Social.stitches";
import { socialInformationArray } from "../data/SocialInformation";
import Navigation from "../elements/Navigation/Navigation";

const name = "Social";
const description =
  "Carousels designed for The Washington Post's Instagram accounts";

const Social = (props) => {
  const { liveSection, setLiveSection } = props;
  return (
    <div>
      <NavBar liveSection={liveSection} setLiveSection={setLiveSection} />
      <PageWrapper>
        <Header>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Header>

        {socialInformationArray.map((post, i) => {
          return (
            <ProjectWrapper
              css={{
                paddingBottom: "100px",
                borderBottom:
                  i === socialInformationArray.length - 1
                    ? "none"
                    : "0.5px solid black",
                "@sm": {
                  borderBottom: "none",
                  paddingBottom: "0",
                },
              }}
            >
              {/* <OverviewWrapper> */}
              <DetailsWrapper>
                <ProjectName
                  css={{
                    marginBottom: "40px",
                    maxWidth: "75%",
                    "@sm": {
                      maxWidth: "100%",
                    },
                  }}
                >
                  <a href={post.url} target="_blank" style={{ color: "black" }}>
                    {post.title}
                  </a>
                </ProjectName>
                <ProjectDescription css={{ marginBottom: "20px" }}>
                  {post.description}
                </ProjectDescription>
                {post.awards.length > 0 && (
                  <Award css={{ marginBottom: "20px" }}>🏆 {post.awards}</Award>
                )}
              </DetailsWrapper>
              <PostWrapper>
                {post.images.map((art, i) => {
                  switch (art.type) {
                    case "video":
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
                        <img src={art.src} alt={art.alt} className={`image`} />
                      );
                  }
                })}
              </PostWrapper>
              {/* </OverviewWrapper> */}
            </ProjectWrapper>
          );
        })}
        <Navigation liveSection={liveSection} setLiveSection={setLiveSection} />
      </PageWrapper>
      <Copyright />
    </div>
  );
};

export default Social;
