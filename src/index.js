import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

// // mui 사용하기
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography: {
    fontFamily: ["GmarketSansMedium"],
  },
  palette: {
    primary: {
      main: "#4a4a4a",
      contrastText: "#ffffff",
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App theme={theme} />
  </ThemeProvider>
);
