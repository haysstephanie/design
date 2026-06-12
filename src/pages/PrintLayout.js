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
import {
  PrintSection,
  PrintPageWrapper,
  SinglePage,
  DoublePage,
  SectionDescription,
} from "./PrintLayout.stitches";
import NavBar from "../elements/NavBar/NavBar";
import Copyright from "../elements/Copyright/Copyright";
import { printInformationArray } from "../data/PrintInformation";
import Navigation from "../elements/Navigation/Navigation";

const name = "Print layout";
const description =
  "Print design for The Washington Post, The Seattle Times and the Sacramento Business Journal";

console.log(printInformationArray);

const PrintLayout = (props) => {
  const { liveSection, setLiveSection } = props;
  return (
    <div>
      <NavBar liveSection={liveSection} setLiveSection={setLiveSection} />
      <PageWrapper>
        <Header>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Header>
        {printInformationArray.map((element, i) => {
          return (
            <PrintSection
              css={{
                borderBottom:
                  i === printInformationArray.length - 1
                    ? "none"
                    : "0.5px solid black",
              }}
            >
              <SectionDescription>
                <ProjectName css={{ marginBottom: "15px" }}>
                  {element.title}
                </ProjectName>
                <ProjectDescription css={{ marginBottom: "15px" }}>
                  {element.description}
                </ProjectDescription>
                {element.awards !== "" && (
                  <Award css={{ marginBottom: "15px" }}>
                    🏆 {element.awards}
                  </Award>
                )}
              </SectionDescription>
              <PrintPageWrapper>
                {element.pages.map((page, i) => {
                  console.log(page.awards);
                  switch (page.type) {
                    case "single": {
                      return (
                        <SinglePage>
                          <a href={page.pdfLink} target="_blank">
                            <img src={page.imageLink} />
                          </a>
                          {page.awards !== "" && (
                            <Award css={{ marginTop: "15px" }}>
                              🏆 {page.awards}
                            </Award>
                          )}

                          {page.description && (
                            <Award css={{ marginTop: "15px" }}>
                              {page.description}
                            </Award>
                          )}
                        </SinglePage>
                      );
                    }
                    case "double": {
                      return (
                        <DoublePage>
                          <a href={page.pdfLink} target="_blank">
                            <img src={page.imageLink} />
                          </a>
                          {page.awards !== "" && (
                            <Award css={{ marginTop: "8px" }}>
                              🏆 {page.awards}
                            </Award>
                          )}
                        </DoublePage>
                      );
                    }
                  }
                })}
              </PrintPageWrapper>
            </PrintSection>
          );
        })}
        <Navigation liveSection={liveSection} setLiveSection={setLiveSection} />
      </PageWrapper>
      <Copyright />
    </div>
  );
};

export default PrintLayout;
