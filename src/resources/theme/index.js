import { extendTheme } from "@chakra-ui/react";
import "@fontsource/abril-fatface";
import "@fontsource/lato";

// 2. Extend the theme to include custom colors, fonts, etc

const colors = {
  brand: {
    primary: "#74B3AD",
    secondary: "#111628",
    accent: "#f9ba1a",
  },
};
const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};
const fonts = {
  heading: `"Abril Fatface", cursive`,
  body: `'Lato', sans-serif`,
};

export const theme = extendTheme({ colors, breakpoints, fonts });
