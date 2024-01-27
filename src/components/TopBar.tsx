import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popper from "@mui/material/Popper";
import ListItemButton from "@mui/material/ListItemButton";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuIcon from "@mui/icons-material/Menu";
import { UIContext } from "../context/ui";

const styles = {
  overlay: {
    opacity: 0.95,
    position: "absolute",
    inset: 0,
    backgroundColor: "background.default",
  },
  notch: {
    position: "absolute ",
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "12px solid",
    borderBottomColor: "neutral.light",
    fontSize: 0,
    lineHeight: 0,
    textAlign: "center",
    marginRight: "5px",
    right: 28,
    top: -12,
    opacity: 0.95,
  },
  menuContainer: {
    position: "relative",
    borderRadius: "10px",
    mr: { sm: "20px", lg: "45px" },
    mt: "-5px",
  },
};

const UserProfileMenu = () => {
  const settings = ["Home", "Profile", "Settings"];
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ClickAwayListener onClickAway={handleCloseUserMenu}>
      <Box>
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"></Avatar>
        </IconButton>

        <Popper
          disablePortal
          sx={{
            opacity: 0.95,
            zIndex: 1105,
          }}
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
        >
          <Grow
            in={Boolean(anchorElUser)}
            style={{ transformOrigin: "0 0 0" }}
            {...(anchorElUser ? { timeout: 400 } : {})}
          >
            <Box sx={styles.menuContainer}>
              <Paper sx={{ py: 1 }} elevation={24}>
                {/******************  Notch *************/}
                <Box sx={styles.notch} />
                <Box px={1} py={0.5}>
                  <Stack sx={{ borderRadius: "10px" }}>
                    <Typography color="text.secondary" variant="subtitle2">
                      Hamza Ali
                    </Typography>
                    <Typography>askhamzaali@gmail.com</Typography>
                  </Stack>
                </Box>
                <Divider />
                {settings.map((setting) => (
                  <MenuItem
                    sx={{ mx: 1, my: 1, borderRadius: "10px" }}
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography color="text.secondary" textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
                <Divider />
                <ListItemButton sx={{ mx: 1 }}>
                  <Typography color="error">Log out</Typography>
                </ListItemButton>
              </Paper>
            </Box>
          </Grow>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

const TopBar = () => {
  const { dispatch, state } = useContext(UIContext);
  return (
    <AppBar elevation={0} sx={{ pl: { lg: "260px" } }} position="fixed">
      <Box>
        <Stack sx={styles.overlay}>
          <Toolbar />
        </Stack>
        {/* App Bar */}
        <Box>
          {/* Search Bar Container */}
          <Stack
            color="text.primary"
            px={{ sm: 1, lg: 4 }}
            direction="row"
            justifyContent="space-between"
          >
            <Toolbar>
              <Stack fontSize={28} gap={1} direction="row" alignItems="center">
                <IconButton
                  color="inherit"
                  onClick={() => dispatch({ type: "OPEN_SIDE_BAR" })}
                  sx={{ display: { sm: "", lg: "none" } }}
                >
                  <MenuIcon fontSize="inherit" />
                </IconButton>
                <IconButton color="inherit">
                  <SearchIcon fontSize="inherit" />
                </IconButton>
                <Paper
                  variant="outlined"
                  sx={{ display: "flex", px: 1, py: 0.5 }}
                >
                  <QrCodeIcon />
                </Paper>
              </Stack>
            </Toolbar>
            {/* Setting and user icons container */}
            <Toolbar>
              <Stack gap={2} direction="row" alignItems="center">
                <Box gap={2}>
                  <IconButton color="inherit">
                    <LanguageIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit">
                    <PeopleAltIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => dispatch({ type: "OPEN_SETTING_BAR" })}
                    color="inherit"
                  >
                    <SettingsIcon />
                  </IconButton>
                </Box>
                {/************  User menu and Avatar **************/}
                <UserProfileMenu />
              </Stack>
            </Toolbar>
          </Stack>
        </Box>
      </Box>
    </AppBar>
  );
};

export default TopBar;