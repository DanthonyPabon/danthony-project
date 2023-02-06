import Option from "components/text/option";
import React from "react";
import { StyleSheet, View } from "react-native";
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

const Pill = ({ title, colors }: IPillProps) => {
  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPill }]}
    >
      <Option colors={colors} txt={title} />
    </View>
  );
};

export default Pill;
