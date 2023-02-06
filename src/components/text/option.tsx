import React from "react";
import { Text, StyleSheet } from "react-native";
import { typography } from "styles/fonts";
import { ITextProps } from "types/components";

const styles = StyleSheet.create({
  titleStyle: {
    ...typography.txtOption,
  },
});

const Option = ({ txt, colors }: ITextProps) => {
  return (
    <Text style={[styles.titleStyle, { color: colors.textOption }]}>{txt}</Text>
  );
};

export default Option;
