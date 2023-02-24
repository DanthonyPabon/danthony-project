import Fonts from "assets/fonts/fonts";
import { StyleSheet } from "react-native";

export const typography = StyleSheet.create({
  error: {
    fontSize: 14,
    fontWeight: "400",
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
  },
  txtOption: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    fontWeight: "400",
  },
  txtSubTitle: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    fontWeight: "400",
  },
  txtTitle: {
    fontFamily: Fonts.medium,
    fontSize: 20,
    fontWeight: "700",
  },
});
