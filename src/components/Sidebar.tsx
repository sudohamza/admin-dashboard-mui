import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import NestedMenu from "./NestedMenu";
import { sidebarItems } from "../data/sidebarMenu";
import { UIContext } from "../context/ui";
import { Divider, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";

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
  const theme = useTheme();
  return (
    <>
      <Box>
        <Toolbar>
          <Stack direction="row" alignItems="center">
            <Box py={2} mt={0.6}>
              <svg width="55px" height="55px" viewBox="0 0 24 24" version="1.1">
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Shape"
                    transform="translate(-48.000000, -48.000000)"
                    fill-rule="nonzero"
                  >
                    <g
                      id="hexagon_fill"
                      transform="translate(48.000000, 48.000000)"
                    >
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fill-rule="nonzero"
                      ></path>
                      <path
                        d="M10.75,2.56687 C11.5235,2.12029 12.4765,2.12029 13.25,2.56687 L19.5443,6.20084 C20.3178,6.64743 20.7943,7.47274 20.7943,8.36591 L20.7943,15.6339 C20.7943,16.527 20.3178,17.3523 19.5443,17.7989 L13.25,21.4329 C12.4765,21.8795 11.5235,21.8795 10.75,21.4329 L4.45581,17.7989 C3.68231,17.3523 3.20581,16.527 3.20581,15.6339 L3.20581,8.36591 C3.20581,7.47274 3.68231,6.64743 4.45581,6.20084 L10.75,2.56687 Z"
                        fill={theme.palette.primary.light}
                      ></path>
                    </g>
                  </g>
                </g>
                <text
                  fontSize="13"
                  fontWeight="bold"
                  x="7"
                  y="16"
                  fill={theme.palette.background.default}
                >
                  H
                </text>
              </svg>
            </Box>
            <Box>
              <Typography
                variant="button"
                fontWeight="bold"
                color={theme.palette.primary.light}
                fontSize={20}
              >
                amza Ali
              </Typography>
            </Box>
          </Stack>
        </Toolbar>
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
