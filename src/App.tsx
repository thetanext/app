import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Typography, Box, Link, Fade } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="root">
        <Typography variant="h1" sx={{ letterSpacing: "10px" }}>
          SCAINE
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
