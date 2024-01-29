import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import SettingsDrawer from "./components/SettingsDrawer";
import LinearLoading from "./components/LinearLoading";

const styles = {
  main: {
    height: "100%",
    pl: { lg: "260px" },
    backgroundColor: "background.default",
  },
  contentContainer: {
    px: 5,
    py: 10,
  },
};

const Main = () => {
  return (
    <>
      <Suspense fallback={<LinearLoading />}>
        <Sidebar />
        <SettingsDrawer />
        <TopBar />
        <Box sx={styles.main}>
          <Box sx={styles.contentContainer}>
            <Routes>
              <Route path="/" element={<Box gap={4}></Box>} />
              <Route path="*" element={<Box>404 Page Not Found</Box>} />
            </Routes>
          </Box>
        </Box>
      </Suspense>
    </>
  );
};

export default Main;
