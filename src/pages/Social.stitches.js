import { styled, globalStyles } from "../stitches.config";

const PostWrapper = styled("div", {
  maxWidth: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  "& video": {
    width: "18%",
  },
  "& img": {
    maxWidth: "18%",
  },

  "@sm": {
    maxWidth: "48%%",
    "& img": {
      maxWidth: "47%",
    },
  },
});

export { PostWrapper };
