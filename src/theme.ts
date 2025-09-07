import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#69939D", // Lighter shade of primary color
      main: "#537780", // Main primary color
      dark: "#3F5A61", // Darker shade of primary color
      contrastText: "#FFFFFF", // Text color for contrast
    },
    secondary: {
      main: "#FEACC6", // Brand secondary color
    },
    success: {
      main: "#8AA2C8", // Custom success color
    },
    error: {
      main: "#FFB9CF", // Custom error color
    },
    warning: {
      main: "#FFC2D6", // Custom warning color
    },
    info: {
      main: "#69939D", // Custom info color
    },
  },

  typography: {
    h1: {
      fontFamily: "'Oxanium', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Doto', sans-serif",
      fontWeight: 800,
    },
  },
});