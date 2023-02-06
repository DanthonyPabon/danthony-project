import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { Colors } from "styles/colors";

export interface IColors {
  colors: {
    backgroundPill?: string;
    button?: string;
    buttonReverse?: string;
    error?: string;
    iconSearch: string;
    inputIcon?: string;
    placeholderTextColor?: string;
    selectionColor?: string;
    textButton?: string;
    textButtonReverse?: string;
    textInput?: string;
    textOption?: string;
    textSubTitle?: string;
    textTitle?: string;
  };
}

export interface IColor {
  colors: IColors["colors"] & Theme["colors"];
}

export type ITheme = {
  dark: {
    dark: boolean;
    colors: IColors["colors"] & Theme["colors"];
  };
  light: {
    dark: boolean;
    colors: IColors["colors"] & Theme["colors"];
  };
};

export const theme: ITheme = {
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: Colors.black, // theme B
      backgroundPill: Colors.grey10,
      border: Colors.colorPrimary, // theme B
      button: Colors.colorPrimary,
      buttonReverse: Colors.colorPrimary,
      card: Colors.black, // theme B
      error: Colors.lightRed,
      iconSearch: Colors.white,
      inputIcon: Colors.colorPrimary,
      notification: Colors.grey20, // theme B
      placeholderTextColor: Colors.grey70,
      primary: Colors.colorPrimary, // theme B
      selectionColor: Colors.colorPrimary,
      text: Colors.white, // theme B
      textButton: Colors.black,
      textButtonReverse: Colors.black,
      textInput: Colors.white,
      textOption: Colors.white,
      textSubTitle: Colors.white,
      textTitle: Colors.white,
    },
  },
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.white, // theme B
      backgroundPill: Colors.grey80,
      border: Colors.colorPrimary, // theme B
      button: Colors.colorPrimary,
      buttonReverse: Colors.colorPrimary,
      card: Colors.black, // theme B
      error: Colors.lightRed,
      iconSearch: Colors.black,
      inputIcon: Colors.colorPrimary,
      notification: Colors.blue, // theme B
      placeholderTextColor: Colors.black,
      primary: Colors.colorPrimary, // theme B
      selectionColor: Colors.colorPrimary,
      text: Colors.black, // theme B
      textButton: Colors.black,
      textButtonReverse: Colors.black,
      textInput: Colors.black,
      textOption: Colors.black,
      textSubTitle: Colors.black,
      textTitle: Colors.black,
    },
  },
};
