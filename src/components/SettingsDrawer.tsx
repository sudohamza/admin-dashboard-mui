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
import { TbReload } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { FaCloudMoon } from "react-icons/fa";
import { IoContrastSharp, IoContrastOutline } from "react-icons/io5";
import { CombinedThemeContext } from "../context/theme";
import { UIContext } from "../context/ui";

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
    fontSize: "26px",
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
            <TbReload />
          </IconButton>
          <IconButton
            onClick={() => dispatch({ type: "CLOSE_SETTING_BAR" })}
            color="inherit"
          >
            <IoMdClose />
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
              <MdSunny />
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
              <FaCloudMoon />
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
              <IoContrastOutline />
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
              <IoContrastSharp />
            </Button>
          </Box>
        </Stack>
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
