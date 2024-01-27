import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import MyThemeProvider from "./theme/theme";
import { CssBaseline } from "@mui/material";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <React.StrictMode>
    <MyThemeProvider>
      <CssBaseline />
      <App />
    </MyThemeProvider>
  </React.StrictMode>
);
