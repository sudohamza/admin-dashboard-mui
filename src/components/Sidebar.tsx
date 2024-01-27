import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import NestedMenu from "./NestedMenu";
import { sidebarItems } from "../data/sidebarMenu";
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
};

const drawer = () => {
  return (
    <>
      <Box>
        <Toolbar>Toolbar</Toolbar>
      </Box>
      <Box>
        {sidebarItems.map((item) => {
          return <NestedMenu key={item.id} {...item} />;
        })}
      </Box>
    </>
  );
};

const Sidebar = () => {
  const { dispatch, state } = useContext(UIContext);
  return (
    <>
      <Drawer
        variant="temporary"
        open={state.isSideBar}
        onClose={() => dispatch({ type: "CLOSE_SIDE_BAR" })}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { sm: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={styles.drawerContainer}>{drawer()}</Box>
      </Drawer>

      <Drawer
        ModalProps={{
          keepMounted: false,
        }}
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={styles.drawerContainer}>{drawer()}</Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
