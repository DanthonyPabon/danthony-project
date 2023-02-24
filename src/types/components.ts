import { Theme } from "@react-navigation/native";
import { IKeys } from "assets/languages/keys";
import { TFunction, i18n } from "i18next";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";
import { IColors } from "styles/theme";

import { IMovies } from "./api";

export type FTranslate = TFunction;
export type IFunction = () => void;
export type IFunctionWith<T> = (item: T) => void;

// General
interface ITextStyle {
  style?: StyleProp<TextStyle>;
  color?: string;
}
interface IViewStyles {
  styles?: StyleProp<ViewStyle>;
  colors: IColors["colors"] & Theme["colors"];
}

export interface IUseTranslate {
  t: FTranslate;
  keys: IKeys;
  setI18n: i18n;
}

// Components complex
export interface IContainer extends IViewStyles {
  children: React.ReactNode;
  withScroll?: boolean;
  withoutSafeAreaTop?: boolean;
}

export interface IPillProps extends IViewStyles {
  title: string;
  onPress?: IFunctionWith<string>;
  isFocused?: boolean;
}

export interface IMovieItem extends IViewStyles {
  urlImage: string;
  title: string;
}

export interface ICarouselProps extends IViewStyles {
  items: IMovies[];
  onPress: IFunctionWith<IMovies>;
}

export interface ICarouselPillProps extends IViewStyles {
  categories: string[];
  searchCategory?: string;
  onPress?: IFunctionWith<string>;
}

export interface IButtonWithIcon {
  icon?: JSX.Element;
  onPress: IFunction;
}

export interface IHeaderMovie {
  urlImage: string;
  gradientBackground: string[];
}

export interface ISearchInput extends IViewStyles, TextInputProps {}

// Simple Components

export interface ITextProps extends ITextStyle {
  children: string;
}

export interface IIconSearch extends SvgProps {
  color: string;
  colorClass: string;
}

export type IProps = IUseTranslate;

export interface INavigation {
  key: string;
  name: string;
  params: IMovies;
  path: string;
}
