import React from "react";
import {
  PageWrapper,
  Header,
  Name,
  Description,
  WorkType,
  ProjectName,
  ProjectDescription,
  Headline,
  Skills,
  Award,
} from "../app.stitches";
import Copyright from "../elements/Copyright/Copyright";
import ProjectSection from "../elements/ProjectSection/ProjectSection";
import NavBar from "../elements/NavBar/NavBar";
import Navigation from "../elements/Navigation/Navigation";

const name = "Projects";
const description =
  "Long-term projects spanning multiple platforms and disciplines at The Washington Post";

const Projects = (props) => {
  const { liveSection, setLiveSection } = props;
  return (
    <div>
      <NavBar liveSection={liveSection} setLiveSection={setLiveSection} />
      <PageWrapper>
        <Header>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Header>
        <ProjectSection />
        <Navigation liveSection={liveSection} setLiveSection={setLiveSection} />
      </PageWrapper>
      <Copyright />
    </div>
  );
};

export default Projects;
