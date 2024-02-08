// import { theme as blue } from "./presets/blue";
// import { theme as green } from "./presets/green";
import { Mode, ThemeName, ThemeContrast } from "../utils/types";
import { createTheme } from "@mui/material/styles";
import { MuiThemeColor } from "../utils/types";
const { palette } = createTheme();

// import { Palette } from "@mui/material/styles";

// type DeepPartial<T> = {
//   [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
// };

// export interface AppTheme {
//   dark: {
//     palette: DeepPartial<Palette>;
//   };
//   light: {
//     palette: DeepPartial<Palette>;
//   };
// }

const global = {
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          boxShadow: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "#fff",
          },
        },
      ],
    },
  },
};

// export const color = {
//   BLUE: blue,
//   GREEN: green,
// };

export const generateTheme = (
  mode: Mode,
  name: ThemeName,
  contrast: ThemeContrast,
  ThemeColor: MuiThemeColor
) => {
  return {
    ...global,
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: palette.augmentColor({
              color: {
                main: ThemeColor[400],
                contrastText: "#212b36",
              },
            }),
            secondary: palette.augmentColor({
              color: {
                main: ThemeColor[500] + "20",
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
          }
        : {
            primary: palette.augmentColor({
              color: {
                main: ThemeColor[400],
                contrastText: "#212b36",
              },
            }),
            secondary: palette.augmentColor({
              color: {
                main: ThemeColor[300] + "50",
              },
            }),
            text: {
              primary: contrast === "NORMAL" ? "#919eab" : "#737373",
              secondary: "#4d4d4d",
            },
            background: {
              default: contrast === "NORMAL" ? "#f4f6f8" : "#f1f2f3",
              paper: "#ffffff",
            },
          }),
    },
  };
};
