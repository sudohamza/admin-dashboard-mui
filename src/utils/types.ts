import { SvgIconProps } from "@mui/material";

// Theme Contrast, Mode, Name
export type ThemeContrast = "NORMAL" | "HIGH";
export type Mode = "light" | "dark";
export type ThemeName = "BLUE" | "GREEN" | "PURPLE" | "YELLOW" | "RED" | "TEAL";

// Type for mui color input
export type MuiThemeColor = {
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

export type NestedMenuProps = {
  id: number;
  title: string;
  buttons?: Button[];
  list?: List[];
};

export type PresetButtonProps = {
  name: ThemeName;
  color: MuiThemeColor;
};
