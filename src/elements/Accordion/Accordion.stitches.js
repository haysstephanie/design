import { styled, globalStyles } from "../../stitches.config";

const AccordionWrapper = styled("div", {});

const Trigger = styled("button", {
  width: "100%",
  border: "none",
  // borderTop: "1px solid black",
  borderBottom: "1px solid black",
  backgroundColor: "white",
  padding: "8px 0 8px 0",
  fontFamily: "Roboto",
  fontWeight: 400,
  display: "flex",
  gap: "4px",
  "&:hover": {
    cursor: "pointer",
  },
});

const TriggerIcon = styled("div", {
  "& svg": {
    width: "1em",
    height: "1em",
  },
});

const ExpandedContent = styled("div", {
  display: "flex",
  borderBottom: "10px solid black",
  "& img": { width: "100%" },
});

const ExpandedText = styled("div", {
  width: "30%",
});

const ExpandedImages = styled("div", {
  width: "70%",
});

export {
  AccordionWrapper,
  Trigger,
  TriggerIcon,
  ExpandedContent,
  ExpandedText,
  ExpandedImages,
};
