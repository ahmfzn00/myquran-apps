import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import "./App.css";
import Home from "./pages/Home";
function App() {
  const theme = createTheme();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Home />
    </>
  );
}

export default App;
