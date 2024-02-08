import React, { Suspense, lazy, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { UIProvider } from "./context/ui";
import LinearLoading from "./components/LinearLoading";

let delay = 1000;

const LazyMain = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return import("./Main");
});
const LazyLogin = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return import("./pages/Login");
});
const LazyRegister = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return import("./pages/Register");
});
const App = () => {
  return (
    <>
      <Router>
        <UIProvider>
          <Suspense fallback={<LinearLoading />}>
            <Routes>
              <Route Component={ProtectedRoutes}>
                <Route path="/*" Component={LazyMain}></Route>
              </Route>
              <Route path="login" Component={LazyLogin} />
              <Route path="register" Component={LazyRegister} />
            </Routes>
          </Suspense>
        </UIProvider>
      </Router>
    </>
  );
};

export default App;
