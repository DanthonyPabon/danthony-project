import en from "assets/languages/en.json";
import { IKeys } from "assets/languages/keys";
import { useTranslation } from "react-i18next";
import { IUseTranslate } from "types/components";

export const getAllKeys = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const keys: any = {};
  Object.keys(en).forEach((k) => {
    keys[k] = k;
  });
  return keys as IKeys;
};

const useTranslate = (): IUseTranslate => {
  const [t, setI18n] = useTranslation();
  return { keys: getAllKeys(), setI18n, t };
};

export default useTranslate;
