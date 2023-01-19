import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

// mui 사용하기
const root = ReactDOM.createRoot(document.getElementById("root"));
  // Create a theme instance.
  const theme = createTheme({
    typography: {
      fontFamily: ["GmarketSansMedium"]
    },
    palette: {
      primary: {
        main: "#ff8686",
        contrastText: "#ffffff"
      }
    }
  });
  root.render (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* css 노멀라이즈 */}
      <App />
    </ThemeProvider>
  );
