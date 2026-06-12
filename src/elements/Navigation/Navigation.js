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
  {
    name: "Social",
    link: "/about",
  },
];

const Navigation = (props) => {
  const { liveSection, setLiveSection } = props;
  const copyrightText = "©2026 Stephanie Hays.";

  const handleClick = (section) => {
    setLiveSection(section);
  };

  return (
    <NavigationWrapper>
      {NavigationOptions.map((element, i) => {
        return (
          <Link
            to={`${element.link}`}
            onClick={handleClick(element.name)}
            style={{
              textDecoration: "none",
            }}
          >
            <NavigationItem
              css={{
                borderBottom:
                  i === NavigationOptions.length - 1
                    ? "none"
                    : "0.5px solid black",
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
