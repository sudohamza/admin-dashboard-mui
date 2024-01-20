import React from "react";
import { CombinedThemeContext, useMode } from "./context/theme";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Main from "./Main";
import { UIProvider } from "./context/ui";

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
                  <Route path="/*" Component={Main}></Route>
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
