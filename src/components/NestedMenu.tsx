import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Box, ListItem, Typography } from "@mui/material";
import { SvgIconProps } from "@mui/material";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "@emotion/styled";

type ListItem = {
  name: string;
  path: string;
};

type List = {
  title: string;
  icon: string | React.ReactElement<SvgIconProps>;
  path: string;
  listItems?: ListItem[];
};

type Button = {
  name: string;
  path: string;
  icon: string | React.ReactElement<SvgIconProps>;
};

type NestedMenuProps = {
  id: number;
  title: string;
  buttons?: Button[];
  list?: List[];
};

const NestedMenu: React.FC<NestedMenuProps> = ({ title, buttons, list }) => {
  const [open, setOpen] = React.useState(true);
  const [listOpen, setListOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleListOpen = (event: React.MouseEvent) => {
    event.preventDefault();
    setListOpen(!listOpen);
  };

  const HeadNavLink = styled(
    React.forwardRef((props: NavLinkProps, ref: any) => (
      <NavLink ref={ref} {...props} end={props.to === "user"} />
    ))
  )();

  return (
    <Box>
      <List
        sx={{
          width: "90%",
          mx: "auto",
          maxWidth: 360,
        }}
        component="nav"
        subheader={
          <ListSubheader
            sx={{
              "&:hover": { cursor: "pointer" },
              backgroundColor: "background.default",
              userSelect: "none",
            }}
            onClick={handleClick}
            component="div"
            id="nested-list-subheader"
          >
            <Typography color="text.primary" variant="overline">
              {title}
            </Typography>
          </ListSubheader>
        }
      >
        {/* Page Buttons */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          {buttons?.map((button) => {
            return (
              <ListItemButton
                sx={{
                  my: 1,
                  "&.active": {
                    color: "secondary.light",
                    backgroundColor: "primary.light",
                  },
                }}
                component={NavLink}
                to={button.path}
                key={button.name}
              >
                <Box
                  gap={2}
                  sx={{
                    fontSize: "24px",
                    display: "flex",
                  }}
                >
                  <Box>{button.icon}</Box>
                  <Box>
                    <Typography sx={{ mt: 0.2 }}>{button.name}</Typography>
                  </Box>
                </Box>
              </ListItemButton>
            );
          })}
          {/* Nested List */}
          {list?.map((item, index) => {
            return (
              <List key={index} component="div" disablePadding>
                <ListItemButton
                  component={HeadNavLink}
                  to={item.path}
                  sx={{
                    color: `${listOpen ? "text.secondary" : ""}`,
                    "&.active": {
                      color: "secondary.light",
                      backgroundColor: "primary.light",
                    },
                  }}
                  onClick={handleListOpen}
                >
                  <ListItemIcon sx={{ fontSize: "30px", color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} sx={{ ml: -2 }} />

                  <Box sx={{ fontSize: "24px" }}>
                    {listOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </Box>
                </ListItemButton>

                <Collapse in={listOpen} timeout="auto" unmountOnExit>
                  <List
                    disablePadding
                    sx={{
                      listStyleType: "disc",
                      pl: 4,
                      width: "90%",
                      mx: "auto",
                    }}
                  >
                    {/* Lists inner Items */}
                    {item.listItems?.map((item, index) => {
                      return (
                        <ListItemButton
                          sx={{
                            pl: 4,
                            my: 1,
                            "&.active": {
                              color: "secondary.light",
                            },
                          }}
                          component={NavLink}
                          to={item.path}
                          key={item.name}
                        >
                          <ListItem
                            disablePadding
                            sx={{ display: "list-item" }}
                          >
                            {item.name}
                          </ListItem>
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              </List>
            );
          })}
        </Collapse>
      </List>
    </Box>
  );
};

export default NestedMenu;
