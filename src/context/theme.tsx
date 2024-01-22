import { PaletteMode, createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { blue } from "@mui/material/colors";

// Theme settings
export const themeSettings = (
  mode: PaletteMode,
  contrast: string,
  color: Color
) => {
  return {
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
      // MuiSvgIcon: {
      //   styleOverrides: {
      //     root: {
      //       color: "#919EAB",
      //     },
      //   },
      // },
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "transparent",
          },
        },
      },
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // Dark mode theme palette values
            primary: {
              light: color.darkActive,
              main: color.main,
              dark: color.dark,
              contrastText: "#fff",
            },
            secondary: {
              light: color.darkActiveText,
              main: "#fff",
            },
            neutral: {
              light: "#404952",
            },
            background: {
              default: "#161c24",
              paper: "#212b36",
            },
            text: {
              primary: "#919EAB",
              secondary: "#fff",
            },
          }
        : {
            // Light mode theme palette values
            primary: {
              light: color.lightActive,
              main: color.main,
              dark: color.dark,
              contrastText: "#fff",
            },
            secondary: {
              light: color.lightActiveText,
              main: "#38393b",
            },
            neutral: {
              light: "#fff",
            },
            background: {
              default: `${contrast === "normal" ? "#F4F6F8" : "#f1f0ec"}`,
              paper: `${contrast === "normal" ? "#ffff" : "#fff"}`,
            },
            text: {
              primary: "#8995A0",
              secondary: "#212b36",
            },
          }),
    },
  };
};

export const CombinedThemeContext = createContext({
  setThemeMode: (mode: PaletteMode) => {},
  toggleContrast: (mode: Contrast) => {},
  changeColor: (name: string, color: InputColor) => {},
  getThemeMode: (modeType: string) => {},
});

type Contrast = "normal" | "high";
type Color = {
  name: string;
  main: string;
  dark: string;
  darkActive: string;
  lightActive: string;
  darkActiveText: string;
  lightActiveText: string;
};

type InputColor = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
};

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [contrast, setContrast] = useState<Contrast>("normal");
  const [color, setColor] = useState<Color>({
    name: "blue",
    main: blue[700],
    dark: blue[800],
    darkActive: blue[900] + "20",
    lightActive: blue.A400 + "20",
    darkActiveText: blue[200],
    lightActiveText: blue[500],
  });

  const themeControls = useMemo(
    () => ({
      setThemeMode: (mode: PaletteMode) => {
        setMode(mode);
      },
      getThemeMode: (modeType: string) => {
        if (modeType === "theme") {
          return mode === "light" ? "light" : "dark";
        } else if (modeType === "contrast") {
          return contrast === "normal" ? "normal" : "high";
        } else if (modeType === "themeColor") {
          return color.name && `${color.name}`;
        }
      },
      toggleContrast: (mode: Contrast) => {
        setContrast(mode);
      },
      changeColor: (name: string, color: InputColor) => {
        setColor({
          name: name,
          main: color[700],
          dark: color[800],
          darkActive: color[900] + "20",
          lightActive: color.A400 + "20",
          darkActiveText: color[200],
          lightActiveText: color[700],
        });
      },
    }),
    [mode, contrast, color]
  );

  const theme = useMemo(
    () => createTheme(themeSettings(mode, contrast, color)),
    [mode, contrast, color]
  );

  return [theme, themeControls] as const;
};
