import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { NestedMenuProps } from "../utils/types";
import Stack from "@mui/material/Stack";
import { NavLink, NavLinkProps, Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "@emotion/styled";

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
                    color: "primary.light",
                    backgroundColor: "secondary.light",
                  },
                }}
                component={NavLink}
                to={button.path}
                key={button.name}
              >
                <Stack
                  fontSize={28}
                  direction="row"
                  gap={1}
                  alignItems="center"
                >
                  {button.icon}

                  <Typography variant="subtitle1" fontWeight="bold" pt={0.5}>
                    {button.name}
                  </Typography>
                </Stack>
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
                      color: "primary.light",
                      backgroundColor: "secondary.light",
                    },
                  }}
                  onClick={handleListOpen}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={5}
                    justifyContent="space-between"
                  >
                    <Stack
                      width={100}
                      fontSize={28}
                      direction="row"
                      gap={1}
                      alignItems="center"
                    >
                      {item.icon}

                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        pt={0.5}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                    <Stack fontSize={32} pt={0.2}>
                      {listOpen ? (
                        <KeyboardArrowUpIcon fontSize="inherit" />
                      ) : (
                        <KeyboardArrowDownIcon fontSize="inherit" />
                      )}
                    </Stack>
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
                              color: "primary.main",
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
