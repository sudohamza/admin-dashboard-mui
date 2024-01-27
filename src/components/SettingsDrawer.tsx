import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import ListSubheader from "@mui/material/ListSubheader";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { UIContext } from "../context/ui";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import ContrastIcon from "@mui/icons-material/Contrast";
import CircleIcon from "@mui/icons-material/Circle";
import { Grid, useTheme } from "@mui/material";
import { PresetButtonProps } from "../utils/types";
import { CustomThemeContext } from "../theme/theme";
import {
  blue,
  deepOrange,
  green,
  purple,
  red,
  teal,
} from "@mui/material/colors";
import { MuiThemeColor, ThemeName } from "../utils/types";
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
    color: "primary.main",
    backgroundColor: "background.paper",
  },
  buttonNotActive: { color: "inherit", border: 0.5 },
};

type Colors = {
  name: ThemeName;
  color: MuiThemeColor;
};
const colors: Colors[] = [
  { name: "BLUE", color: blue },
  { name: "GREEN", color: green },
  { name: "PURPLE", color: purple },
  { name: "YELLOW", color: deepOrange },
  { name: "RED", color: red },
  { name: "TEAL", color: teal },
];

const PresetButton: React.FC<PresetButtonProps> = ({ name, color }) => {
  const themeControls = useContext(CustomThemeContext);
  const activeTheme = themeControls.getThemeName();
  const handleClick = () => {
    themeControls.setThemeColor(name);
  };
  return (
    <Box
      borderRadius="10px"
      sx={
        `${activeTheme}` === name
          ? {
              backgroundColor: "secondary.light",
              mt: 0.1,
            }
          : { ...styles.buttonNotActive }
      }
    >
      <Button
        onClick={handleClick}
        sx={{
          transition: "all 0.4s ease",
          fontSize: `${activeTheme}` === name ? 32 : 20,
          borderRadius: "10px",
          width: "60px",
          height: "60px",
          color: color[400],
        }}
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
  const themeControls = useContext(CustomThemeContext);
  const theme = useTheme();
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
            onClick={() => themeControls.setThemeMode("light")}
            borderRadius="10px"
            sx={
              `${theme.palette.mode}` === "light"
                ? {
                    ...styles.buttonActive,
                  }
                : { ...styles.buttonNotActive }
            }
          >
            <Button sx={styles.customButton}>
              <LightModeIcon fontSize="inherit" />
            </Button>
          </Box>
          <Box
            onClick={() => themeControls.setThemeMode("dark")}
            borderRadius="10px"
            sx={
              `${theme.palette.mode}` === "dark"
                ? {
                    ...styles.buttonActive,
                  }
                : { ...styles.buttonNotActive }
            }
          >
            <Button sx={styles.customButton}>
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
              `${themeControls.getThemeContrast()}` === "NORMAL"
                ? {
                    ...styles.buttonActive,
                  }
                : { ...styles.buttonNotActive }
            }
          >
            <Button
              onClick={() => themeControls.setThemeContrast("NORMAL")}
              sx={styles.customButton}
            >
              <ContrastIcon fontSize="inherit" />
            </Button>
          </Box>
          <Box
            borderRadius="10px"
            sx={
              `${themeControls.getThemeContrast()}` === "HIGH"
                ? {
                    ...styles.buttonActive,
                  }
                : { ...styles.buttonNotActive }
            }
          >
            <Button
              onClick={() => themeControls.setThemeContrast("HIGH")}
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
          {colors.map((item, index) => {
            return (
              <Grid item key={index}>
                <PresetButton {...item} />
              </Grid>
            );
          })}
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
