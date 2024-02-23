import React from "react";
import HouseIcon from "@mui/icons-material/House";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CategoryIcon from "@mui/icons-material/Category";
import { AiFillBank } from "@react-icons/all-files/ai/AiFillBank";
import { TiBook } from "@react-icons/all-files/ti/TiBook";

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
      {
        name: "Banking",
        path: "banking",
        icon: <AiFillBank fontSize="inherit" />,
      },
      {
        name: "Booking",
        path: "booking",
        icon: <TiBook fontSize="inherit" />,
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

export const infoLetData = [
  {
    id: 1,
    subtitle: "Product Sold",
    currentWeekSales: 756,
    lastWeekSales: 650,
    color: "#7635dc",
    data: [22, 8, 35, 50, 82, 84, 77, 12, 86, 48],
  },
  {
    id: 2,
    subtitle: "Total Balance",
    currentWeekSales: 18756,
    lastWeekSales: 19000,
    color: "#18bbd3",
    data: [56, 47, 40, 50, 82, 84, 77, 12, 54, 68, 69, 70],
  },
  {
    id: 3,
    subtitle: "Sales Profit",
    currentWeekSales: 4876,
    lastWeekSales: 4450,
    color: "#ffd360",
    data: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
  },
];

export const currentNotifications = [
  {
    id: 1,
    type: "request",
    title: "sent you a friend request.",
    body: {},
    isRead: false,
    timeStamp: "about 2 hours ago",
    from: {
      name: "Deja Brady",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",
    },
  },
  {
    id: 2,
    type: "message",
    title: "mention you in Minimal Mui",
    body: {
      text: "feedback by asking questions or just leave a note of appreciation.",
    },
    isRead: true,
    timeStamp: "1 day ago",
    from: {
      name: "Lanny Davidson",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",
    },
  },
  {
    id: 3,
    type: "message",
    title: "sent you a friend request.",
    isRead: false,
    body: {
      text: "feedback by asking questions or just leave a note of appreciation.",
    },
    timeStamp: "2 days ago",
    from: {
      name: "Angelique Morse",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_5.jpg",
    },
  },
  {
    id: 4,
    type: "request",
    title: "sent you a friend request.",
    isRead: true,
    body: {},
    timeStamp: "2 days ago",
    from: {
      name: "Angelique Morse",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
    },
  },
];

export const products = [
  {
    id: 1,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg",
    title: "Nike Air Force 1 ",
    type: "Shoes",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_2.jpg",
    title: "Foundations Matte Flip Flop",
    type: "Accessories",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_3.jpg",
    title: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
    type: "Apparel",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_4.jpg",
    title: "Arizona Soft Footbed Sandal",
    type: "Accessories",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_5.jpg",
    title: "Boston Soft Footbed Sandal",
    type: "Apparel",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 6,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_6.jpg",
    title: "Zoom Freak 2",
    type: "Shoes",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 7,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_7.jpg",
    title: "Gazelle Vintage low-top sneakers",
    type: "Undefined",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 8,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_8.jpg",
    title: "Jordan Delta",
    type: "Check",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 9,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_9.jpg",
    title: "Air Jordan XXXV PF",
    type: "Lorem",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 10,
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_10.jpg",
    title: "Rod Laver low-top sneakers",
    type: "Ipsum",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
