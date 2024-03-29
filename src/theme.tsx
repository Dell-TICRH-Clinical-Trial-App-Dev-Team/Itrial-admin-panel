import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    // TODO: These values need to be adjusted to color swatch in figma
    background: {
      default: "#F4F7F9",
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
    h1: {
      fontSize: "48px",
      color: "#2C698D",
    },
    h5: {
      color: "#2C698D",
      fontSize: "20px",
      fontWeight: 500,
    },
    h6: {
      color: "#2C698D",
      fontSize: "16px",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "12px",
      color: "#525169",
    },
    subtitle2: {
      fontSize: "12px",
      color: "#2C698D",
      fontWeight: 700,
    },
  },
});

export default theme;
