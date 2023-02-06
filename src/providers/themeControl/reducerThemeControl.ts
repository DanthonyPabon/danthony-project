import { Type } from "./actions";
import { themeControlInitialState } from "./initialState";

const reducerThemeControl = (
  state = themeControlInitialState,
  action: { type: string; payload: boolean }
) => {
  const { type, payload } = action;
  switch (type) {
    case Type.SET_DARK_MODE:
      return { ...state, darkMode: payload };
    default:
      return state;
  }
};

export default reducerThemeControl;
