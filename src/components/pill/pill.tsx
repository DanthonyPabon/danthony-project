import Option from "components/text/option";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import dimensions from "styles/dimensions";
import { IPillProps } from "types/components";

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    borderRadius: 100,
    flexDirection: "row",
    paddingHorizontal: dimensions.marginTwelve,
    paddingVertical: dimensions.marginSix,
  },
});

const Pill = ({ title, colors, onPress, isFocused = false }: IPillProps) => {
  return (
    <Pressable
      onPress={() => onPress(!isFocused ? title : "")}
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
      <Option colors={colors} txt={title} />
    </Pressable>
  );
};

export default Pill;
