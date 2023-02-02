import { IKeys } from "assets/languages/keys";
import { TFunction, i18n } from "i18next";

export type FTranslate = TFunction;

export interface IUseTranslate {
  t: FTranslate;
  keys: IKeys;
  setI18n: i18n;
}

export type IProps = IUseTranslate;
