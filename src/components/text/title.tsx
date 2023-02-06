import React from "react";
import { Text, StyleSheet } from "react-native";
import { typography } from "styles/fonts";
import { ITextProps } from "types/components";

const styles = StyleSheet.create({
  titleStyle: {
    ...typography.txtTitle,
  },
});

const Title = ({ txt, style, colors }: ITextProps) => {
  return (
    <Text style={[styles.titleStyle, style, { color: colors.textTitle }]}>
      {txt}
    </Text>
  );
};

export default Title;
