import React from "react";
import { Text, StyleSheet } from "react-native";
import { typography } from "styles/fonts";
import { ITextProps } from "types/components";

const styles = StyleSheet.create({
  titleStyle: {
    ...typography.txtOption,
  },
});

const TextOption = ({ children, color = "black" }: ITextProps) => {
  return <Text style={[styles.titleStyle, { color }]}>{children}</Text>;
};

export default TextOption;
