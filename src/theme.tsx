import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    // TODO: These values need to be adjusted to color swatch in figma
    background: {
      default: "#F4F7F9"
    },
    primary: {
      main: "#2C698D",
      light: "#D5E1E8",
    },
    success: {
      main: "#219653",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
