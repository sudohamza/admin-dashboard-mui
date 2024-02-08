import React, { useContext, useState } from "react";
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
import { useTheme } from "@mui/material";
import British from "../svg/flags/British";
import French from "../svg/flags/French";
import UAE from "../svg/flags/UAE";
import { currentNotifications } from "../data";

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
    fontSize: 0,
    lineHeight: 0,
    textAlign: "center",
    marginRight: "5px",
    right: 28,
    top: -12,
    opacity: 0.95,
  },
  menuContainerUser: {
    position: "relative",
    borderRadius: "10px",
    mr: { sm: "20px", lg: "45px" },
    mt: "-5px",
  },
  menuContainerContact: {
    position: "relative",
    borderRadius: "10px",
    mr: { xs: "125px", lg: "165px" },
  },
  menuContainerLang: {
    position: "relative",
    borderRadius: "10px",
    mr: { xs: "85px", lg: "85px" },
  },
};

const LanguageMenu = () => {
  const [lang, setLang] = useState(0);

  const languages = [
    { id: 1, name: "English", icon: <British /> },
    { id: 2, name: "French", icon: <French /> },
    { id: 3, name: "Arabic", icon: <UAE /> },
  ];

  const theme = useTheme();
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
      <Box display="flex" alignItems="center">
        <Box>
          <IconButton
            size="small"
            sx={
              Boolean(anchorElUser)
                ? {
                    backgroundColor: "background.paper",
                    display: "flex",
                    p: 1.5,
                  }
                : { p: 1.5, display: "flex" }
            }
            color="inherit"
            onClick={handleOpenUserMenu}
          >
            {languages[lang].icon}
          </IconButton>
        </Box>
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
            <Box sx={styles.menuContainerLang}>
              <Paper elevation={24}>
                {languages.map((item, index) => (
                  <ListItemButton
                    onClick={() => {
                      setLang(index);
                      handleCloseUserMenu();
                    }}
                    sx={{ px: 2 }}
                    disableGutters
                    key={item.id}
                  >
                    <Stack
                      gap={2}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box display="flex">{item.icon}</Box>
                      <Box>
                        <Typography>{item.name}</Typography>
                      </Box>
                    </Stack>
                  </ListItemButton>
                ))}
              </Paper>
            </Box>
          </Grow>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

const ContactMenu = () => {
  const { dispatch } = useContext(UIContext);
  const contacts = [
    {
      id: 1,
      name: "Alan Turing",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",
    },
    {
      id: 2,
      name: "Uncle Bob",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",
    },
    {
      id: 3,
      name: "Melanie Ramanujan",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
    },
    {
      id: 4,
      name: "Chase Day",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",
    },
  ];
  const theme = useTheme();
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
        <IconButton
          sx={
            Boolean(anchorElUser) ? { backgroundColor: "background.paper" } : {}
          }
          color="inherit"
          onClick={handleOpenUserMenu}
        >
          <PeopleAltIcon />
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
            <Box sx={styles.menuContainerContact}>
              <Paper sx={{ p: 2 }} elevation={24}>
                <Typography
                  color="text.secondary"
                  variant="h5"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  Contacts ({contacts.length})
                </Typography>

                {contacts.map((item) => (
                  <ListItemButton disableGutters key={item.id}>
                    <Stack gap={1} minWidth="240px" direction="row">
                      <Box>
                        <Avatar src={item.img} />
                      </Box>
                      <Box>
                        <Typography>{item.name}</Typography>
                      </Box>
                    </Stack>
                  </ListItemButton>
                ))}
              </Paper>
            </Box>
          </Grow>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

const UserProfileMenu = () => {
  const { dispatch } = useContext(UIContext);
  const settings = ["Home", "Profile", "Settings"];
  const theme = useTheme();
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
            <Box sx={styles.menuContainerUser}>
              <Paper sx={{ py: 1 }} elevation={24}>
                {/******************  Notch *************/}
                <Box
                  sx={
                    theme.palette.mode === "dark"
                      ? { ...styles.notch, borderBottomColor: "#424a54" }
                      : { ...styles.notch, borderBottomColor: "#fff" }
                  }
                />
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
                <ListItemButton
                  onClick={() => dispatch({ type: "LOGGED_OUT" })}
                  sx={{ mx: 1 }}
                >
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
                <Box display="flex" alignItems="center">
                  <LanguageMenu />
                  <IconButton
                    onClick={() =>
                      dispatch({ type: "OPEN_NOTIFICATION_DRAWER" })
                    }
                    color="inherit"
                  >
                    <Badge
                      badgeContent={currentNotifications.length}
                      color="error"
                    >
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <ContactMenu />
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
