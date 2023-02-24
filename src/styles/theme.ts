import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { Colors, Gradient } from "styles/colors";

export interface IColors {
  colors: {
    backgroundPill?: string;
    backgroundPillFocused?: string;
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
    textRating?: string;
    textTitle?: string;
    textGrey?: string;
    gradientBackground: string[];
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
      backgroundPillFocused: Colors.colorPrimary,
      border: Colors.colorPrimary, // theme B
      button: Colors.colorPrimary,
      buttonReverse: Colors.colorPrimary,
      card: Colors.black, // theme B
      error: Colors.lightRed,
      gradientBackground: Gradient.gradientBlack,
      iconSearch: Colors.white,
      inputIcon: Colors.colorPrimary,
      notification: Colors.grey20, // theme B
      placeholderTextColor: Colors.grey70,
      primary: Colors.colorPrimary, // theme B
      selectionColor: Colors.colorPrimary,
      text: Colors.white, // theme B
      textButton: Colors.black,
      textButtonReverse: Colors.black,
      textGrey: Colors.white,
      textInput: Colors.white,
      textOption: Colors.white,
      textRating: Colors.yellow,
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
      backgroundPillFocused: Colors.colorPrimary,
      border: Colors.colorPrimary, // theme B
      button: Colors.colorPrimary,
      buttonReverse: Colors.colorPrimary,
      card: Colors.black, // theme B
      error: Colors.lightRed,
      gradientBackground: Gradient.gradientWhite,
      iconSearch: Colors.black,
      inputIcon: Colors.colorPrimary,
      notification: Colors.blue, // theme B
      placeholderTextColor: Colors.black,
      primary: Colors.colorPrimary, // theme B
      selectionColor: Colors.colorPrimary,
      text: Colors.black, // theme B
      textButton: Colors.black,
      textButtonReverse: Colors.black,
      textGrey: Colors.grey40,
      textInput: Colors.black,
      textOption: Colors.black,
      textRating: Colors.yellow,
      textSubTitle: Colors.black,
      textTitle: Colors.black,
    },
  },
};
