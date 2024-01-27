import React, { createContext, useReducer, Dispatch } from "react";

// Define your state structure
interface State {
  isSettingBar: boolean;
  isSideBar: boolean;
}

const initialState: State = {
  isSettingBar: false,
  isSideBar: false,
};

type Action = {
  type:
    | "OPEN_SETTING_BAR"
    | "CLOSE_SETTING_BAR"
    | "OPEN_SIDE_BAR"
    | "CLOSE_SIDE_BAR";
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
    // Add other actions here
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
