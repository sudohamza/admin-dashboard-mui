import React, { useContext } from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { UIContext } from "../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, useTheme, AppBar } from "@mui/material";
import { CustomThemeContext } from "../theme/theme";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const drawerWidth = 350;

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

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box>
      <Box position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Unread" {...a11yProps(1)} />
          <Tab label="Archived" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box>One</Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </Box>
  );
}

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
            Notifications
          </Typography>
        </Box>
        <Box gap={2}>
          {/* <IconButton color="inherit">
            <ReplayIcon />
          </IconButton> */}
          <IconButton
            onClick={() => dispatch({ type: "CLOSE_NOTIFICATION_DRAWER" })}
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
      <Box>
        <FullWidthTabs />
      </Box>
    </>
  );
};
const NotificationDrawer = () => {
  const { dispatch, state } = useContext(UIContext);
  return (
    <>
      <Drawer
        elevation={24}
        anchor="right"
        variant="temporary"
        open={state.isNotificationDrawer}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            style: {
              backgroundColor: "transparent",
            },
          },
        }}
        onClose={() => dispatch({ type: "CLOSE_NOTIFICATION_DRAWER" })}
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

export default NotificationDrawer;
