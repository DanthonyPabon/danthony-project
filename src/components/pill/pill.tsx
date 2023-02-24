import TextOption from "components/text/textOption";
import React, { FunctionComponent } from "react";
import { Pressable, StyleSheet } from "react-native";
import dimensions from "styles/dimensions";
import { IPillProps } from "types/components";

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    borderRadius: 100,
    flexDirection: "row",
    paddingHorizontal: dimensions.marginBo,
    paddingVertical: dimensions.generalTop,
  },
});

const Pill: FunctionComponent<IPillProps> = ({
  title,
  colors,
  onPress = () => undefined,
  isFocused = false,
}) => {
  return (
    <Pressable
      onPress={() => onPress && onPress(!isFocused ? title : "")}
      style={[
        styles.container,
        {
          backgroundColor: isFocused
            ? colors.backgroundPillFocused
            : colors.backgroundPill,
        },
      ]}
      testID="pill"
    >
      <TextOption color={colors.textOption}>{title}</TextOption>
    </Pressable>
  );
};

export default Pill;
