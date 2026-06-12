import { NavigationWrapper, NavigationItem } from "./Navigation.stitches";
import { Link } from "react-router-dom";

const NavigationOptions = [
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Print",
    link: "/print",
  },
  {
    name: "Digital",
    link: "/digital",
  },
  {
    name: "Art Direction",
    link: "/art-direction",
  },
];

const Navigation = (props) => {
  const { liveSection, setLiveSection } = props;
  const copyrightText = "©2026 Stephanie Hays.";

  const handleClick = (section) => {
    console.log(section);
    setLiveSection(section);
  };

  console.log(liveSection);

  return (
    <NavigationWrapper>
      {NavigationOptions.map((element, i) => {
        return (
          <Link
            to={`${element.link}`}
            onClick={() => {
              handleClick(element.name);
              console.log(element.name);
            }}
            style={{
              textDecoration: "none",
              // display: element.name === liveSection ? "none" : "block",
            }}
          >
            <NavigationItem
              css={{
                borderBottom:
                  i === NavigationOptions.length - 1
                    ? "none"
                    : "0.5px solid black",
                color: "black",
              }}
            >
              {element.name} <span style={{ fontStyle: "normal" }}>➻</span>
            </NavigationItem>
          </Link>
        );
      })}
    </NavigationWrapper>
  );
};

export default Navigation;
