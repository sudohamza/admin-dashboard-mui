import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import SettingsDrawer from "./components/SettingsDrawer";
import LinearLoading from "./components/LinearLoading";
import { lazy } from "react";
import NotificationDrawer from "./components/NotificationDrawer";
let delay = 1000;
const LazyDashboard = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return import("./pages/Dashboard");
});
const styles = {
  main: {
    height: "100%",
    pl: { lg: "260px" },
    backgroundColor: "background.default",
  },
  contentContainer: {
    px: 2,
    py: 10,
  },
};

const Main = () => {
  return (
    <>
      <Suspense fallback={<LinearLoading />}>
        <NotificationDrawer />
        <Sidebar />
        <SettingsDrawer />
        <TopBar />
        <Box sx={styles.main}>
          <Box sx={styles.contentContainer}>
            <Routes>
              <Route path="/" Component={LazyDashboard} />
              <Route path="/commerce" Component={LazyDashboard} />

              <Route path="*" element={<Box>404 Page Not Found</Box>} />
            </Routes>
          </Box>
        </Box>
      </Suspense>
    </>
  );
};

export default Main;
