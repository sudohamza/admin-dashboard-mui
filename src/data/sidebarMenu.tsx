import { IoHome } from "react-icons/io5";
import { GiGymBag } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiPagekit } from "react-icons/si";

import React from "react";

export const sidebarItems = [
  {
    id: 1,
    title: "Overview",
    buttons: [
      {
        name: "Dashboard",
        path: "/",
        icon: <IoHome />,
      },
      {
        name: "E-Commerce",
        path: "/commerce",
        icon: <GiGymBag />,
      },
      { name: "Analytics", path: "analytics", icon: <SiGoogleanalytics /> },
    ],
  },
  {
    id: 2,
    title: "Management",
    list: [
      {
        title: "User",
        icon: <MdAccountCircle />,
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
    buttons: [{ name: "Blank", path: "/blank", icon: <SiPagekit /> }],
    list: [
      {
        title: "Product",
        icon: <MdOutlineProductionQuantityLimits />,
        path: "product",
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
