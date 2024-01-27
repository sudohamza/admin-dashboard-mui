import { createTheme } from "@mui/material/styles";
// import { AppTheme } from "..";
import { blue } from "@mui/material/colors";
import { global } from "./global";

const { palette } = createTheme();

export const theme = {
  dark: {
    ...global,
    palette: {
      mode: "dark",
      primary: palette.augmentColor({
        color: {
          main: blue[500],
        },
      }),
      secondary: palette.augmentColor({
        color: {
          main: blue[500] + "20",
        },
      }),
      text: {
        primary: "#919eab",
        secondary: "#e5e5e5",
      },
      background: {
        default: "#161c24",
        paper: "#212b36",
      },
    },
  },
  light: {
    ...global,

    palette: {
      mode: "light",
      primary: palette.augmentColor({
        color: {
          main: blue[500],
          contrastText: "#ffffff",
        },
      }),
      secondary: palette.augmentColor({
        color: {
          main: blue[300] + "50",
          contrastText: "#ffffff",
        },
      }),
      text: {
        primary: "#919eab",
        secondary: "#4d4d4d",
      },
      background: {
        default: "#f4f6f8",
        paper: "#ffffff",
      },
    },
  },
};
