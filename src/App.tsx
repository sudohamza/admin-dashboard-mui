import React, { lazy, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { UIProvider } from "./context/ui";
import Main from "./Main";

const LazyLogin = lazy(() => import("./pages/Login"));
const App = () => {
  return (
    <>
      <Router>
        <UIProvider>
          <Routes>
            <Route Component={ProtectedRoutes}>
              <Route path="/*" Component={Main}></Route>
            </Route>
            <Route path="login" Component={LazyLogin} />
            <Route path="register" element={<Box>Register</Box>} />
          </Routes>
        </UIProvider>
      </Router>
    </>
  );
};

export default App;
