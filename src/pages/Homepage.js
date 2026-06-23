import React from "react";
import NavBar from "../elements/NavBar/NavBar";
import ProjectSection from "../elements/ProjectSection/ProjectSection";
import { styled } from "../stitches.config";
import Copyright from "../elements/Copyright/Copyright";
import Navigation from "../elements/Navigation/Navigation";
import {
  PageWrapper,
  Header,
  Name,
  Description,
  WorkType,
} from "../app.stitches";

const name = "Stephanie Hays";
const description =
  "is a Senior Designer at The Washington Post. Her skills include web development, UX design, art direction, social media design and print design.";

const typesOfWork = [
  "Projects",
  "Art Direction",
  "Print",
  "Photography",
  "Extras",
];

const Homepage = (props) => {
  const { liveSection, setLiveSection } = props;
  return (
    <div>
      <NavBar liveSection={liveSection} setLiveSection={setLiveSection} />
      <PageWrapper>
        <Header>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Header>

        {/* <WorkType>{typesOfWork[0]}</WorkType> */}
        <Navigation liveSection={liveSection} setLiveSection={setLiveSection} />
      </PageWrapper>
      <Copyright />
    </div>
  );
};

export default Homepage;
