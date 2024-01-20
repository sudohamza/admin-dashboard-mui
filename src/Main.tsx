import React, { useContext } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import SettingsDrawer from "./components/SettingsDrawer";

const styles = {
  main: {
    pl: { lg: "260px" },
  },
  contentContainer: {
    px: 5,
    pt: 10,
  },
};

const Main = () => {
  return (
    <>
      <Sidebar />
      <SettingsDrawer />
      <TopBar />
      <Box sx={styles.main}>
        <Box sx={styles.contentContainer}>
          <Routes>
            <Route
              path="/"
              element={
                <Box gap={4}>
                  <Paper
                    elevation={0}
                    sx={{
                      width: "100%",
                      height: "250px",
                      my: "15px",
                    }}
                  ></Paper>
                  <Paper
                    sx={{
                      width: "100%",
                      height: "250px",
                      my: "15px",
                      backgroundColor: "green",
                    }}
                  ></Paper>
                  <Paper
                    sx={{
                      width: "100%",
                      height: "250px",
                      my: "15px",
                    }}
                  ></Paper>
                  <Paper
                    sx={{
                      width: "100%",
                      height: "250px",
                      my: "15px",
                      backgroundColor: "purple",
                    }}
                  ></Paper>
                  <Paper
                    sx={{
                      width: "100%",
                      height: "250px",
                      my: "15px",
                    }}
                  ></Paper>
                </Box>
              }
            />
            <Route path="*" element={<Box>404 Page Not Found</Box>} />
          </Routes>
        </Box>
      </Box>
      ;
    </>
  );
};

export default Main;
