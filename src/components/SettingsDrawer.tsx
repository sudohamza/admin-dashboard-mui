import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import ListSubheader from "@mui/material/ListSubheader";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CombinedThemeContext } from "../context/theme";
import { UIContext } from "../context/ui";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import ContrastIcon from "@mui/icons-material/Contrast";
import CircleIcon from "@mui/icons-material/Circle";
import { green, blue, purple, orange, red, pink } from "@mui/material/colors";
import { Grid } from "@mui/material";

const drawerWidth = 260;

const styles = {
  drawerContainer: {
    backgroundColor: "background.default",
    width: drawerWidth,
    height: "100%",
    overflowX: "hidden",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      transition: "backgroundColor 2s",
      WebkitTransition: "background 2s",
    },
    "&:hover::-webkit-scrollbar": {},
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
    },
    "&:hover::-webkit-scrollbar-thumb": {
      transition: "backgroundColor 3s",
      backgroundColor: "text.primary",
    },
  },
  customButton: {
    fontSize: 32,
    borderRadius: "10px",
    p: 4,
    color: "inherit",
  },
  buttonActive: {
    color: "secondary.light",
    backgroundColor: "background.paper",
  },
  buttonNotActive: { color: "inherit", border: 0.5 },
};

const colors = [
  { name: "green", color: green },
  { name: "blue", color: blue },
  { name: "purple", color: purple },
  { name: "orange", color: orange },
  { name: "red", color: red },
  { name: "pink", color: pink },
];
type MuiColor = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
};
type PresetButtonProps = {
  name: string;
  color: MuiColor;
};

const PresetButton: React.FC<PresetButtonProps> = ({ name, color }) => {
  const themeControls = useContext(CombinedThemeContext);
  const defaultColor = themeControls.getThemeMode("themeColor");

  const handleChangeColor = () => {
    themeControls.changeColor(name, color);
  };
  return (
    <Box
      borderRadius="10px"
      sx={
        `${defaultColor}` === name
          ? {
              backgroundColor: color[50],
            }
          : { ...styles.buttonNotActive }
      }
    >
      <Button
        onClick={handleChangeColor}
        sx={{ fontSize: 24, borderRadius: "10px", p: 2, color: color[400] }}
      >
        <CircleIcon fontSize="inherit" />
      </Button>
    </Box>
  );
};

const Header = () => {
  const { dispatch, state } = useContext(UIContext);
  return (
    <Toolbar>
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography fontWeight="bold" variant="h6" color="text.secondary">
            Settings
          </Typography>
        </Box>
        <Box gap={2}>
          <IconButton color="inherit">
            <ReplayIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatch({ type: "CLOSE_SETTING_BAR" })}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Stack>
    </Toolbar>
  );
};

const drawerContent = () => {
  const themeControls = useContext(CombinedThemeContext);
  const themeMode = themeControls.getThemeMode("theme");
  const themeContrast = themeControls.getThemeMode("contrast");
  return (
    <>
      {/* Header */}
      <Box>
        <Header />
        <Divider />
      </Box>
      {/* Theme Mode */}
      <Box py={1} px={2}>
        <ListSubheader
          sx={{
            "&:hover": { cursor: "pointer" },
            backgroundColor: "background.default",
            userSelect: "none",
          }}
        >
          <Typography color="text.primary" variant="caption">
            Mode
          </Typography>
        </ListSubheader>
        <Stack justifyContent="space-around" direction="row">
          <Box
            borderRadius="10px"
            sx={
              `${themeMode}` === "light"
                ? {
                    ...styles.buttonActive,
                  }
                : { ...styles.buttonNotActive }
            }
          >
            <Button
              onClick={() => themeControls.setThemeMode("light")}
              sx={styles.customButton}
            >
              <LightModeIcon fontSize="inherit" />
            </Button>
          </Box>
          <Box
            borderRadius="10px"
            sx={
              `${themeMode}` === "dark"
                ? {
                    ...styles.buttonActive,
                  }
                : { ...styles.buttonNotActive }
            }
          >
            <Button
              onClick={() => themeControls.setThemeMode("dark")}
              sx={styles.customButton}
            >
              <NightlightRoundIcon fontSize="inherit" />
            </Button>
          </Box>
        </Stack>
      </Box>
      {/* Theme Contrast */}
      <Box py={1} px={2}>
        <ListSubheader
          sx={{
            "&:hover": { cursor: "pointer" },
            backgroundColor: "background.default",
            userSelect: "none",
          }}
        >
          <Typography color="text.primary" variant="caption">
            Contrast
          </Typography>
        </ListSubheader>
        <Stack justifyContent="space-around" direction="row">
          <Box
            borderRadius="10px"
            sx={
              `${themeContrast}` === "normal"
                ? {
                    ...styles.buttonActive,
                  }
                : { ...styles.buttonNotActive }
            }
          >
            <Button
              onClick={() => themeControls.toggleContrast("normal")}
              sx={styles.customButton}
            >
              <ContrastIcon fontSize="inherit" />
            </Button>
          </Box>
          <Box
            borderRadius="10px"
            sx={
              `${themeContrast}` === "high"
                ? {
                    ...styles.buttonActive,
                  }
                : { ...styles.buttonNotActive }
            }
          >
            <Button
              onClick={() => themeControls.toggleContrast("high")}
              sx={styles.customButton}
            >
              <ContrastIcon sx={{ rotate: "180deg" }} fontSize="inherit" />
            </Button>
          </Box>
        </Stack>
      </Box>
      {/* Color Presets */}
      <Box py={1} px={2}>
        <ListSubheader
          sx={{
            "&:hover": { cursor: "pointer" },
            backgroundColor: "background.default",
            userSelect: "none",
          }}
        >
          <Typography color="text.primary" variant="caption">
            Color Presets
          </Typography>
        </ListSubheader>

        <Grid ml={1} gap={1} container>
          {colors.map((item, index) => (
            <Grid item key={index}>
              <PresetButton {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

const SettingsDrawer = () => {
  const { dispatch, state } = useContext(UIContext);
  return (
    <>
      <Drawer
        elevation={24}
        anchor="right"
        variant="temporary"
        open={state.isSettingBar}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            style: {
              backgroundColor: "transparent",
            },
          },
        }}
        onClose={() => dispatch({ type: "CLOSE_SETTING_BAR" })}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
          opacity: 0.98,
        }}
      >
        <Box sx={styles.drawerContainer}>{drawerContent()}</Box>
      </Drawer>
    </>
  );
};

export default SettingsDrawer;
