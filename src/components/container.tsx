import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EdgeInsets } from "react-native-safe-area-context/src/SafeArea.types";
import dimensions from "styles/dimensions";
import { IContainer } from "types/components";

interface IDarkMode {
  backgroundColor: string;
}

const styles = (safeAreaInsets: EdgeInsets, darkMode: IDarkMode) =>
  StyleSheet.create({
    content: {
      backgroundColor: darkMode.backgroundColor,
      flex: 1,
      paddingBottom: safeAreaInsets.bottom,
      paddingHorizontal: dimensions.margin,
      paddingTop: safeAreaInsets.top,
    },
  });

const Container = ({
  children,
  withScroll = false,
  style = {},
  colors,
}: IContainer) => {
  const safeAreaInsets = useSafeAreaInsets();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  return withScroll ? (
    <ScrollView
      style={[styles(safeAreaInsets, backgroundStyle).content, style]}
      contentContainerStyle={{ paddingBottom: safeAreaInsets.bottom * 3 }}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles(safeAreaInsets, backgroundStyle).content, style]}>
      {children}
    </View>
  );
};

export default Container;
