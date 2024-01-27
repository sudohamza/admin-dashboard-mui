import React from "react";
import HouseIcon from "@mui/icons-material/House";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CategoryIcon from "@mui/icons-material/Category";

export const sidebarItems = [
  {
    id: 1,
    title: "Overview",
    buttons: [
      {
        name: "Dashboard",
        path: "/",
        icon: <HouseIcon fontSize="inherit" />,
      },
      {
        name: "E-Commerce",
        path: "commerce",
        icon: <ShoppingBagIcon fontSize="inherit" />,
      },
      {
        name: "Analytics",
        path: "analytics",
        icon: <BarChartIcon fontSize="inherit" />,
      },
    ],
  },
  {
    id: 2,
    title: "Management",
    list: [
      {
        title: "User",
        icon: <AccountCircleIcon fontSize="inherit" />,
        path: "/user",
        listItems: [
          { name: "Profile", path: "user/profile" },
          { name: "Cards", path: "user/cards" },
          { name: "List", path: "user/list" },
          { name: "Create", path: "user/create" },
          { name: "Edit", path: "user/edit" },
          { name: "Account", path: "user/account" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Other Cases",
    buttons: [
      {
        name: "Blank",
        path: "blank",
        icon: <FileCopyIcon fontSize="inherit" />,
      },
    ],
    list: [
      {
        title: "Product",
        icon: <CategoryIcon fontSize="inherit" />,
        path: "/product",
        listItems: [
          { name: "List", path: "product/list" },
          { name: "Details", path: "product/details/:id" },
          { name: "Create", path: "product/create" },
          { name: "Edit", path: "product/edit/:id" },
        ],
      },
    ],
  },
];
