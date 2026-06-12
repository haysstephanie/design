import { styled, globalStyles } from "../stitches.config";

const VisualWrapper = styled("div", {
  maxWidth: "70%",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  "& video": {
    width: "100%",
    border: "1px solid black",
    borderRadius: "8px",
  },
  "& .main": {
    flex: 5,
    minWidth: "100%",
  },
  "& .spot": {
    flex: 1,
    minWidth: "20%",
  },
  "@sm": {
    maxWidth: "100%",
  },
});

export { VisualWrapper };
