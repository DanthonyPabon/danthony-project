import { Theme } from "@react-navigation/native";
import { IKeys } from "assets/languages/keys";
import { TFunction, i18n } from "i18next";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";
import { IColors } from "styles/theme";

import { IMovies } from "./api";

export type FTranslate = TFunction;
export type IFunctionWith<T> = (item: T) => void;

interface IThemColor {
  colors: IColors["colors"] & Theme["colors"];
}
interface ITextStyle extends IThemColor {
  style?: StyleProp<TextStyle>;
}
interface IViewStyles extends IThemColor {
  styles?: StyleProp<ViewStyle>;
}

export interface IUseTranslate {
  t: FTranslate;
  keys: IKeys;
  setI18n: i18n;
}

export interface IContainer extends IThemColor, IViewStyles {
  children: React.ReactNode;
  withScroll?: boolean;
}

export interface ISearchInput extends TextInputProps, IThemColor {}

export interface IMovieItem extends IThemColor, IViewStyles {
  urlImage: string;
  title: string;
}

export interface ICarouselProps extends IThemColor {
  movies: IMovies[];
  onPress: IFunctionWith<IMovies>;
}
export interface ITextProps extends ITextStyle {
  txt: string;
}

export interface IPillProps extends ITextStyle {
  title: string;
}

export interface IIconSearch extends SvgProps {
  color: string;
  colorClass: string;
}

export type IProps = IUseTranslate;
