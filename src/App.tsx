import React, { lazy, useEffect } from "react";
import { CombinedThemeContext, useMode } from "./context/theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { UIProvider } from "./context/ui";
const LazyMain = lazy(() => import("./Main"));
const App = () => {
  const [theme, themeControls] = useMode();

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CombinedThemeContext.Provider value={{ ...themeControls }}>
            <UIProvider>
              <CssBaseline />
              <Routes>
                <Route Component={ProtectedRoutes}>
                  <Route path="/*" Component={LazyMain}></Route>
                </Route>
                <Route path="/login" element={<Box>Login</Box>} />
                <Route path="/register" element={<Box>Register</Box>} />
              </Routes>
            </UIProvider>
          </CombinedThemeContext.Provider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
