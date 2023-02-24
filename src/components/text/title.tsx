import React from "react";
import { Text, StyleSheet } from "react-native";
import { typography } from "styles/fonts";
import { ITextProps } from "types/components";

const styles = StyleSheet.create({
  titleStyle: {
    ...typography.txtTitle,
  },
});

const Title = ({ children, style, color = "black" }: ITextProps) => {
  return <Text style={[styles.titleStyle, style, { color }]}>{children}</Text>;
};

export default Title;
