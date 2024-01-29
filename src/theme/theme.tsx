import React, { useState } from "react";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import {
  blue,
  deepOrange,
  green,
  purple,
  red,
  teal,
} from "@mui/material/colors";
import { generateTheme } from "./index";
import { ThemeName, ThemeContrast, Mode } from "../utils/types";
const colors = {
  BLUE: blue,
  GREEN: green,
  PURPLE: purple,
  YELLOW: deepOrange,
  RED: red,
  TEAL: teal,
};

export const CustomThemeContext = React.createContext({
  setThemeMode: (mode: Mode) => {},
  setThemeColor: (themeName: ThemeName) => {},
  setThemeContrast: (contrast: ThemeContrast) => {},
  getThemeName: () => {},
  getThemeContrast: () => {},
  getThemeMode: () => {},
});

type MyThemeProviderProps = {
  children?: React.ReactNode;
};

export default function MyThemeProvider(props: MyThemeProviderProps) {
  const [mode, setMode] = React.useState<Mode>("dark");
  const [theme, setTheme] = React.useState<ThemeName>("GREEN");
  const [contrast, setContrast] = useState<ThemeContrast>("NORMAL");

  const colorMode = React.useMemo(
    () => ({
      setThemeMode: (mode: Mode) => {
        setMode(mode);
      },
      setThemeColor: (themeName: ThemeName) => {
        setTheme(themeName);
      },
      getThemeName: () => {
        return `${theme}`;
      },
      setThemeContrast: (contrast: ThemeContrast) => {
        setContrast(contrast);
      },
      getThemeContrast: () => {
        return `${contrast}`;
      },
      getThemeMode: () => {
        return `${mode}`;
      },
    }),
    [mode, theme, contrast]
  );

  const CurrentTheme = React.useMemo(
    () =>
      createTheme(
        generateTheme(mode, theme, contrast, colors[theme]) as ThemeOptions
      ),
    [mode, contrast, theme]
  );

  return (
    <CustomThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={CurrentTheme}>{props.children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
