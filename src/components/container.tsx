import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EdgeInsets } from "react-native-safe-area-context/src/SafeArea.types";
import dimensions from "styles/dimensions";
import { IContainer } from "types/components";

interface IDarkMode {
  backgroundColor: string;
}

const style = (
  safeAreaInsets: EdgeInsets,
  darkMode: IDarkMode,
  topRemove: boolean
) =>
  StyleSheet.create({
    content: {
      backgroundColor: darkMode.backgroundColor,
      flex: 1,
      paddingBottom: safeAreaInsets.bottom,
      paddingHorizontal: dimensions.margin,
      paddingTop: topRemove ? 0 : safeAreaInsets.top,
    },
  });

const Container = ({
  children,
  withScroll = false,
  styles = {},
  colors,
  withoutSafeAreaTop = false,
}: IContainer) => {
  const safeAreaInsets = useSafeAreaInsets();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  return withScroll ? (
    <ScrollView
      style={[
        style(safeAreaInsets, backgroundStyle, withoutSafeAreaTop).content,
        styles,
      ]}
      contentContainerStyle={{ paddingBottom: safeAreaInsets.bottom * 3 }}
      testID="container-scroll"
    >
      {children}
    </ScrollView>
  ) : (
    <View
      style={[
        style(safeAreaInsets, backgroundStyle, withoutSafeAreaTop).content,
        styles,
      ]}
      testID="container"
    >
      {children}
    </View>
  );
};

export default Container;
