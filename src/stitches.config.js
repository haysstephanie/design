// stitches.config.js
import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, config } =
  createStitches({
    theme: {
      colors: {
        primary: "blue",
        secondary: "gray",
      },
      fontSizes: {
        1: "12px",
        2: "14px",
      },
    },
    media: {
      sm: "(max-width: 639px)",
      md: "(min-width: 640px) and (max-width: 1023px)",
      lg: "(min-width: 1024px) and (max-width: 1279px)",
      xl: "(min-width: 1280px)",
    },
    utils: {
      m: (value) => ({ margin: value }),
      px: (value) => ({ paddingLeft: value, paddingRight: value }),
    },
  });

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "RobotoSerif",
      src: 'url("/fonts/RobotoSerif-Thin.ttf") format("truetype")',
      fontStyle: "normal",
      fontWeight: 100,
      fontDisplay: "swap",
    },
    {
      fontFamily: "RobotoSerif",
      src: 'url("/fonts/RobotoSerif-ThinItalic.ttf") format("truetype")',
      fontStyle: "italic",
      fontWeight: 100,
      fontDisplay: "swap",
    },
    {
      fontFamily: "RobotoSerif",
      src: 'url("/fonts/RobotoSerif-Medium.ttf") format("truetype")',
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
    },
    {
      fontFamily: "RobotoSerif",
      src: 'url("/fonts/RobotoSerif-MediumItalic.ttf") format("truetype")',
      fontStyle: "italic",
      fontWeight: 400,
      fontDisplay: "swap",
    },
    {
      fontFamily: "RobotoSerif",
      src: 'url("/fonts/RobotoSerif-Bold.ttf") format("truetype")',
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
    },
    {
      fontFamily: "RobotoSerif",
      src: 'url("/fonts/RobotoSerif-BoldItalic.ttf") format("truetype")',
      fontStyle: "italic",
      fontWeight: 700,
      fontDisplay: "swap",
    },
    {
      fontFamily: "RobotoSerif",
      src: 'url("/fonts/RobotoSerif-Black.ttf") format("truetype")',
      fontStyle: "normal",
      fontWeight: 900,
      fontDisplay: "swap",
    },
    {
      fontFamily: "RobotoSerif",
      src: 'url("/fonts/RobotoSerif-BlackItalic.ttf") format("truetype")',
      fontStyle: "italic",
      fontWeight: 900,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-Thin.ttf") format("truetype")',
      fontStyle: "normal",
      fontWeight: 100,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-ThinItalic.ttf") format("truetype")',
      fontStyle: "italic",
      fontWeight: 100,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-Light.ttf") format("truetype")',
      fontStyle: "normal",
      fontWeight: 300,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-LightItalic.ttf") format("truetype")',
      fontStyle: "italic",
      fontWeight: 300,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-Medium.ttf") format("truetype")',
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-MediumItalic.ttf") format("truetype")',
      fontStyle: "italic",
      fontWeight: 400,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-Bold.ttf") format("truetype")',
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-BoldItalic.ttf") format("truetype")',
      fontStyle: "italic",
      fontWeight: 700,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-Black.ttf") format("truetype")',
      fontStyle: "normal",
      fontWeight: 900,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Roboto",
      src: 'url("/fonts/Roboto-BlackItalic.ttf") format("truetype")',
      fontStyle: "italic",
      fontWeight: 900,
      fontDisplay: "swap",
    },
  ],
});
