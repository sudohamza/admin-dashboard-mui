import React, { createContext, useReducer, Dispatch } from "react";

// Define your state structure
interface State {
  isSettingBar: boolean;
  isSideBar: boolean;
  isLoggedIn: boolean;
  isNotificationDrawer: boolean;
}

const initialState: State = {
  isSettingBar: false,
  isSideBar: false,
  isLoggedIn: true,
  isNotificationDrawer: false,
};

type Action = {
  type:
    | "OPEN_SETTING_BAR"
    | "CLOSE_SETTING_BAR"
    | "OPEN_SIDE_BAR"
    | "CLOSE_SIDE_BAR"
    | "LOGGED_IN"
    | "LOGGED_OUT"
    | "OPEN_NOTIFICATION_DRAWER"
    | "CLOSE_NOTIFICATION_DRAWER";
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "OPEN_SETTING_BAR":
      return { ...state, isSettingBar: true };
    case "CLOSE_SETTING_BAR":
      return { ...state, isSettingBar: false };
    case "OPEN_SIDE_BAR":
      return { ...state, isSideBar: true };
    case "CLOSE_SIDE_BAR":
      return { ...state, isSideBar: false };
    case "LOGGED_IN":
      return { ...state, isLoggedIn: true };
    case "LOGGED_OUT":
      return { ...state, isLoggedIn: false };
    case "OPEN_NOTIFICATION_DRAWER":
      return { ...state, isNotificationDrawer: true };
    case "CLOSE_NOTIFICATION_DRAWER":
      return { ...state, isNotificationDrawer: false };
    default:
      return state;
  }
};

interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const UIContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
