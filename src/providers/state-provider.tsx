import React, {
  createContext,
  useReducer,
  FunctionComponent,
  Dispatch,
} from "react";

import {
  IThemeControl,
  themeControlInitialState,
} from "./themeControl/initialState";
import sessionControlReducer from "./themeControl/reducerThemeControl";

export interface IStore {
  darkModeStateDispatch: Dispatch<{ type: string; payload: boolean }>;
  darkModeState: IThemeControl;
}
const darkModeProvider = createContext({} as IStore);
const { Provider } = darkModeProvider;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StateProvider: FunctionComponent<any> = ({ children }) => {
  const [darkModeState, darkModeStateDispatch] = useReducer(
    sessionControlReducer,
    themeControlInitialState
  );

  return (
    <Provider value={{ darkModeState, darkModeStateDispatch }}>
      {children}
    </Provider>
  );
};

export { darkModeProvider, StateProvider };
