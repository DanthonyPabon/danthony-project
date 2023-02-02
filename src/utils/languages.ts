import en from "assets/languages/en.json";
import es from "assets/languages/es.json";
import { IKeys } from "assets/languages/keys";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { FTranslate } from "types/components";

export interface IUseTranslate {
  t: FTranslate;
  keys: IKeys;
}

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false,
  },
  lng: "en",
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

export default i18n;
